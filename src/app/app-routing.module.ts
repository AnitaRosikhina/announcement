import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminComponent} from "./page-admin/page-admin.component";

const routes: Routes = [
  {path: 'editor-announcement', component: PageAdminComponent},
  {path: '**', redirectTo: 'editor-announcement', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
