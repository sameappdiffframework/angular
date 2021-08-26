import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  exports: [HeaderComponent],
  imports: [RouterModule],
  declarations: [HeaderComponent]
})
export class HeaderModule {
}
