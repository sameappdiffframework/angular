import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable, InjectionToken,
  Injector,
  Type,
  ViewContainerRef
} from '@angular/core';
import { ModalComponent } from './modal.component';

export const MODAL_CONTENT_COMPONENT = new InjectionToken<Type<any>>('Modal content component');

@Injectable()
export class ModalService {
  private currentCompRef: ComponentRef<ModalComponent> | undefined = undefined;

  public constructor(private resolver: ComponentFactoryResolver) {
  }

  public open<T>(viewContainerRef: ViewContainerRef, component: Type<T>): void {
    if (this.currentCompRef) {
      console.warn('This app only allows one modal at a time');
      return;
    }
    const injector: Injector = Injector.create({
      providers: [
        { provide: MODAL_CONTENT_COMPONENT, useValue: component }
      ]
    });
    const factory: ComponentFactory<ModalComponent> = this.resolver.resolveComponentFactory(ModalComponent);
    const componentRef: ComponentRef<ModalComponent> = factory.create(injector);
    componentRef.instance.closeClicked.subscribe(() => this.close());
    viewContainerRef.insert(componentRef.hostView);
    this.currentCompRef = componentRef;
  }

  public close(): void {
    // TODO destory subscriptions
    if (this.currentCompRef) {
      this.currentCompRef.destroy();
      this.currentCompRef = undefined;
    }
  }

}
