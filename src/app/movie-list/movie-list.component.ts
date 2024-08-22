import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { NgFor } from '@angular/common';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() category: number = 28;
  movies?: Movie[] = [];

  constructor(private movieService: ApiClientService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService
      .getCategoryMovies(this.category)
      .subscribe((movies) => (this.movies = movies));
  }
}
