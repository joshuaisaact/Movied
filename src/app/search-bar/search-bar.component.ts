import { Component, Input } from '@angular/core';
import { Movie } from '../movie';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchQuery: string = '';
  movies: Movie[] = [];

  constructor(private apiClientService: ApiClientService) {}

  onSearchChange(): void {
    if (this.searchQuery.trim()) {
      this.apiClientService
        .searchMovies(this.searchQuery)
        .subscribe((movies) => {
          this.movies = movies;
        });
    } else {
      this.movies = []; // Clear the list when the search query is empty
    }
  }
}
