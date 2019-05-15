import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-homepopulator',
  templateUrl: './homepopulator.component.html',
  styleUrls: ['./homepopulator.component.css']
})
export class HomepopulatorComponent implements OnInit {
  theaterMovies: any = {};
  popularMovies: any = {};
  RMovies: any = {};
  itemNumber = 6;

  constructor(public MOVIEDB: MoviedbService) {}

  populateTheater() {
    this.MOVIEDB.getTheatherMovies().subscribe(resp => {
      const results = 'results';
      this.theaterMovies = resp[results];
    });
  }

  populatePopular() {
    this.MOVIEDB.getPopularMovies().subscribe(resp => {
      const results = 'results';
      this.popularMovies = resp[results];
    });
  }

  populateRMovies() {
    this.MOVIEDB.getRMovies().subscribe(resp => {
      const results = 'results';
      this.RMovies = resp[results];
    });
  }

  ngOnInit() {
    this.populateTheater();
    this.populatePopular();
    this.populateRMovies();
  }
}
