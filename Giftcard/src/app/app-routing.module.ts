import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllComponent } from './component/Giftcard/view-all/view-all.component';

const routes: Routes = [
{path: 'viewall', component: ViewAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
