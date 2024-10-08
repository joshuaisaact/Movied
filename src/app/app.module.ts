import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DashboardComponent,
    NavBarComponent,
    MovieListComponent,
    StarRatingComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
