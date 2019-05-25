import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-intheaters',
  templateUrl: './intheaters.component.html',
  styleUrls: ['./intheaters.component.css']
})
export class IntheatersComponent implements OnInit {
  page = 1;
  theaterMovies: any = {};
  totalPages: any;
  totalItems: any;
  pageSize = 20;

  constructor(public MOVIEDB: MoviedbService) {
    this.moviesInTheater(this.page);
  }

  moviesInTheater(page: number) {
    this.MOVIEDB.getInTheatersNow(page).subscribe(resp => {
      this.totalPages = resp['total_pages'];
      this.totalItems = resp['total_results'];
      this.theaterMovies = resp['results'];
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {}
}
