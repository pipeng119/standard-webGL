import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondDevFileComponent } from './second-dev-file/second-dev-file.component';
import { SandBoxComponent } from './sand-box/sand-box.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'secondDev',
    component: SecondDevFileComponent,
  },
  {
    path: 'secondDev/files',
    component: SecondDevFileComponent
  },
  {
    path: 'secondDev/sandBox',
    component: SandBoxComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
