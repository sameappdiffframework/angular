import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Inject,
  Injector,
  Output,
  Renderer2,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MODAL_CONTENT_COMPONENT } from './modal.service';

// TODO: add animations
@Component({
  selector: 'sadf-modal',
  template: `
    <div role="dialog">
      <div #container></div>
      <button (click)="close()">Close</button>
    </div>
  `,
  styleUrls: ['modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  private container!: ViewContainerRef;
  @Output()
  public closeClicked: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(MODAL_CONTENT_COMPONENT) private component: Type<any>,
    private renderer: Renderer2
  ) {
  }

  public ngAfterViewInit(): void {
    const injector: Injector = Injector.create({ providers: [] });
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.component);
    const componentRef: ComponentRef<any> = factory.create(injector);
    this.renderer.appendChild(
      this.container.element.nativeElement,
      componentRef.location.nativeElement
    );
  }

  public close(): void {
    this.closeClicked.emit();
  }
}
