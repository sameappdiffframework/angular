import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
