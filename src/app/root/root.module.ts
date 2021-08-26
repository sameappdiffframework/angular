import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [HeaderModule, FooterModule, AppRoutingModule],
  exports: [RootComponent]
})
export class RootModule {
}
