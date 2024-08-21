import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieComponent } from '../movie/movie.component';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  movies: Movie[] = [];

  constructor(private movieService: ApiClientService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }
}
