import { Injectable } from '@angular/core';
import { Movie, MovieDetails } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private moviesURL = 'https://cw-api-1.onrender.com/movied';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.moviesURL}/categories/28`);
  }

  getDiscoverMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.moviesURL}/discover`);
  }

  getCategoryMovies(categoryId: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.moviesURL}/categories/${categoryId}`);
  }

  getMovieDetails(movieID: number | undefined): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.moviesURL}/movie/${movieID}`);
  }
}
