import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { MyEventsComponent } from './my-events/my-events.component';


const routes: Routes = [
  { path: '', redirectTo: 'all-events', pathMatch: 'full' },
  { path: 'all-events', component: AllEventsComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: '**', redirectTo: 'all-events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
