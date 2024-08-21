import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails } from '../movie';
import { ApiClientService } from '../api-client.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent implements OnInit {
  @Input() movieID?: number;

  movie?: MovieDetails;

  constructor(
    private route: ActivatedRoute,
    private movieService: ApiClientService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService
      .getMovieDetails(id)
      .subscribe((movie) => (this.movie = movie));
  }
}
