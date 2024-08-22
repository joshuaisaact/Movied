import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  templateUrl: './start-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;

  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star',
  };

  stars: Array<0 | 0.5 | 1> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor() {}

  ngOnChanges() {
    this.fillStars();
  }

  ngOnInit() {}

  fillStars() {
    this.stars = []; // Reset stars to all empty

    // Scale the rating from 10 to 5 by dividing by 2
    let scaledRating = this.rating / 2;
    let starsToFill = Math.round(scaledRating * 2) / 2; // Round to nearest 0.5

    for (let i = 0; i < 5; i++) {
      // Loop only 5 times for 5 stars
      if (starsToFill >= 1) {
        this.stars.push(1); // Full star
        starsToFill--;
      } else if (starsToFill === 0.5) {
        this.stars.push(0.5); // Half star
        starsToFill -= 0.5;
      } else {
        this.stars.push(0); // Empty star
      }
    }
  }
}
