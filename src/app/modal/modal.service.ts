import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Injectable,
  Injector,
  StaticProvider,
  Type
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalContainerComponent } from './modal-container.component';
import { OverlayComponent } from './overlay.component';

export interface ModalOptions<Content, Overlay = OverlayComponent, Container = ModalContainerComponent> {
  overlayComp?: Type<Overlay>,
  container?: Type<Container>,
  closeEmitterNames?: Array<keyof Content>;
  providers?: StaticProvider[];
  showCloseButton?: boolean;
}

const DEFAULT_MODAL_OPTIONS: Required<ModalOptions<any>> = {
  overlayComp: OverlayComponent,
  container: ModalContainerComponent,
  closeEmitterNames: [],
  providers: [],
  showCloseButton: false
}

@Injectable()
export class ModalService {
  private overlayCompRef: ComponentRef<any> | undefined = undefined;
  private dialogContainerCompRef: ComponentRef<any> | undefined = undefined;
  private currentCompRef: ComponentRef<any> | undefined = undefined;
  private static modalResult: Subject<any> | undefined;

  public constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }

  public open<Content, Overlay, Container>(
    contentComponent: Type<Content>,
    options?: ModalOptions<Content, Overlay, Container>
  ): Observable<any> {
    if (ModalService.modalResult) {
      console.warn('This app only allows one modal at a time because its designer is sane. Closing existing modal first.');
      this.close();
    }
    const resolvedOptions: Required<ModalOptions<Content, Overlay, Container>>
      = Object.assign(DEFAULT_MODAL_OPTIONS, options);
    this.overlayCompRef = this.insertOverlay(resolvedOptions.overlayComp);
    this.dialogContainerCompRef = this.insertModalContainer(resolvedOptions.container, resolvedOptions.showCloseButton);
    this.currentCompRef = this.insertContent(
      this.dialogContainerCompRef.location.nativeElement,
      contentComponent,
      resolvedOptions.providers,
      resolvedOptions.closeEmitterNames
    );
    ModalService.modalResult = new Subject();
    return ModalService.modalResult.asObservable();
  }

  public close(value?: any): void {
    if (ModalService.modalResult) {
      this.destroy();
      ModalService.modalResult.next(value);
      ModalService.modalResult.complete();
      ModalService.modalResult = undefined;
    }
  }

  private destroy() {
    // TODO destroy subscriptions
    if (this.currentCompRef) {
      this.currentCompRef.destroy();
      this.appRef.detachView(this.currentCompRef.hostView);
      this.currentCompRef = undefined;
    }
    if (this.dialogContainerCompRef) {
      this.dialogContainerCompRef.destroy();
      this.appRef.detachView(this.dialogContainerCompRef.hostView);
      this.dialogContainerCompRef = undefined;
    }
    if (this.overlayCompRef) {
      this.overlayCompRef.destroy();
      this.appRef.detachView(this.overlayCompRef.hostView);
      this.overlayCompRef = undefined;
    }
  }

  private insertOverlay<T>(overlayComp: Type<T>): ComponentRef<T> {
    const factory: ComponentFactory<T> = this.resolver.resolveComponentFactory(overlayComp);
    const compRef: ComponentRef<T> = factory.create(this.injector);
    this.appRef.attachView(compRef.hostView);
    document.body.appendChild(compRef.location.nativeElement);
    return compRef;
  }

  private insertModalContainer<T>(container: Type<T>, showCloseBtn: boolean): ComponentRef<T> {
    const factory: ComponentFactory<T> = this.resolver.resolveComponentFactory(container);
    const compRef: ComponentRef<T> = factory.create(this.injector);
    const instance = compRef.instance as any;
    if (instance.closeClicked instanceof EventEmitter) {
      (instance.closeClicked as EventEmitter<any>).subscribe(this.close.bind(this));
    }
    if (typeof instance.showCloseButton === 'boolean') {
      (instance.showCloseButton as boolean) = showCloseBtn;
    }
    (compRef.location.nativeElement as Element).setAttribute('role', 'dialog');
    this.appRef.attachView(compRef.hostView);
    document.body.appendChild(compRef.location.nativeElement);
    return compRef;
  }

  private insertContent<T>(
    containerElement: HTMLElement,
    contentComp: Type<T>,
    contentProviders: StaticProvider[],
    closeEmitterNames: Array<keyof T>
  ): ComponentRef<T> {
    const injector: Injector = Injector.create({ providers: contentProviders, parent: this.injector });
    const factory: ComponentFactory<T> = this.resolver.resolveComponentFactory(contentComp);
    const compRef: ComponentRef<T> = factory.create(injector);
    this.appRef.attachView(compRef.hostView);
    containerElement.appendChild(compRef.location.nativeElement);

    closeEmitterNames.forEach((name: keyof T) => {
      const property: any = compRef?.instance[name];
      if (property && property instanceof EventEmitter) {
        (property as EventEmitter<any>).subscribe(this.close.bind(this));
      } else {
        console.warn(`${name} is not an EventEmitter property of ${contentComp.name}`);
      }
    });
    return compRef;
  }
}
