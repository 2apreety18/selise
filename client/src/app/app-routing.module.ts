import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch: 'full'},
  { path:'dashboard', component: DashboardComponent},
  { path: 'bookmarks/:bookmarkId', component: BookmarkDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
