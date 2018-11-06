import { EligibilityComponent } from './eligibility/eligibility.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EligibilityreactiveComponent } from './eligibilityreactive/eligibilityreactive.component';
import { GetlistComponent } from './getlist/getlist.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/eligibilityreactive', pathMatch: 'full'},
  { path: 'eligibilityreactive', component: EligibilityreactiveComponent },
  { path: 'eligibility', component: EligibilityComponent },
  { path: 'getlist', component: GetlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
