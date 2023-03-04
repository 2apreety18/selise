import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SingleCategoryComponent,
    BookmarkDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
