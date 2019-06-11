import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies: any = {};
  carouselNumber = 4;

  constructor(public MOVIEDB: MoviedbService) {}

  ngOnInit() {
    this.MOVIEDB.getCarousel().subscribe(resp => {
      const results = 'results';
      this.movies = resp[results];
    });
  }
}
