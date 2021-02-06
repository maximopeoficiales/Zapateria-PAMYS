import { SharedModule } from './../../core/modules/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MiniCardInfoComponent } from './components/mini-card-info/mini-card-info.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, MiniCardInfoComponent, HomeTitleComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
