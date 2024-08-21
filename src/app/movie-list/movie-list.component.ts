import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
// import { MOVIES } from '../mock-movies';
import { NgFor } from '@angular/common';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: ApiClientService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => (this.movies = movies));
  }
  // movie: Movie = {
  //   poster_path: 'hi',
  //   original_title: 'hello',
  // };
}
