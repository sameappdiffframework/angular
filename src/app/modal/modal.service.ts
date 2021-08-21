import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Injectable,
  Injector,
  StaticProvider,
  Type,
  ViewContainerRef
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { OverlayComponent } from './overlay.component';

@Injectable()
export class ModalService {
  private overlayCompRef: ComponentRef<OverlayComponent> | undefined = undefined;
  private currentCompRef: ComponentRef<any> | undefined = undefined;
  private modalClosed: ReplaySubject<any> = new ReplaySubject<any>();

  public constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }

  public open<T>(
    viewContainerRef: ViewContainerRef,
    contentComponent: Type<T>,
    closeEmitterNames: Array<keyof T> = [],
    contentProviders: StaticProvider[] = []
  ): void {
    if (this.overlayCompRef) {
      console.warn('This app only allows one modal at a time');
      return;
    }

    this.overlayCompRef = this.insertOverlay();
    this.currentCompRef = this.insertContent(contentComponent, contentProviders, closeEmitterNames);
  }

  private close(value?: any): void {
    // TODO destroy subscriptions
    if (this.currentCompRef) {
      this.currentCompRef.destroy();
      this.currentCompRef = undefined;
    }
    if (this.overlayCompRef) {
      this.overlayCompRef.destroy();
      this.overlayCompRef = undefined;
    }
    console.log('close', value);
    this.modalClosed.next(value);
    this.modalClosed.complete();
  }

  private insertOverlay(): ComponentRef<OverlayComponent> {
    const factory: ComponentFactory<OverlayComponent> = this.resolver.resolveComponentFactory(OverlayComponent);
    const compRef: ComponentRef<OverlayComponent> = factory.create(this.injector);
    this.appRef.attachView(compRef.hostView);
    document.body.appendChild(compRef.location.nativeElement);
    return compRef;
  }

  private insertContent<T>(contentComp: Type<T>, contentProviders: StaticProvider[], closeEmitterNames: Array<keyof T>): ComponentRef<T> {
    const injector: Injector = Injector.create({ providers: contentProviders, parent: this.injector });
    const factory: ComponentFactory<T> = this.resolver.resolveComponentFactory(contentComp);
    const compRef: ComponentRef<T> = factory.create(injector);
    this.appRef.attachView(compRef.hostView);
    document.body.appendChild(compRef.location.nativeElement);

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
