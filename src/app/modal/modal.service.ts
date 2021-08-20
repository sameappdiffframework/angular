import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  StaticProvider,
  Type,
  ViewContainerRef
} from '@angular/core';
import { ModalContainerComponent } from './modal-container.component';

@Injectable()
export class ModalService {
  private currentCompRef: ComponentRef<ModalContainerComponent> | undefined = undefined;

  public constructor(private resolver: ComponentFactoryResolver) {
  }

  public open<T>(viewContainerRef: ViewContainerRef, contentComponent: Type<T>, contentProviders?: StaticProvider[]): void {
    if (this.currentCompRef) {
      console.warn('This app only allows one modal at a time');
      return;
    }
    const injector: Injector = Injector.create({ providers: contentProviders || [] });
    const factory: ComponentFactory<ModalContainerComponent> = this.resolver.resolveComponentFactory(ModalContainerComponent);
    const componentRef: ComponentRef<ModalContainerComponent> = factory.create(injector);
    componentRef.instance.closeClicked.subscribe(() => this.close());
    componentRef.instance.comp = contentComponent;
    viewContainerRef.insert(componentRef.hostView);
    this.currentCompRef = componentRef;
  }

  public close(): void {
    // TODO destroy subscriptions
    if (this.currentCompRef) {
      this.currentCompRef.destroy();
      this.currentCompRef = undefined;
    }
  }

}
