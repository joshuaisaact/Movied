import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieComponent } from '../movie/movie.component';
import { ApiClientService } from '../api-client.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: ApiClientService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }
}
