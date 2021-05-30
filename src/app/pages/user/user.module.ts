import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './containers';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { NmapAComponent } from './components/nmap-a/nmap-a.component';
import { NmapBComponent } from './components/nmap-b/nmap-b.component';
import { NmapCComponent } from './components/nmap-c/nmap-c.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: UserPageComponent
  }
];


@NgModule({
  declarations: [
    UserPageComponent,
    NmapAComponent,
    NmapBComponent,
    NmapCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class UserModule { }
