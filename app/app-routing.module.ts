import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingComponent } from './adding/adding.component';
import { EditingComponent } from './editing/editing.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  
  {path:'adding',component: AddingComponent},
  {path: 'editing',component:EditingComponent},
  {path:'listing', component: ListingComponent},
  {path:'**',component: ListingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
