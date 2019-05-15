import { Component } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search = '';
  movies: any = {};
  constructor(public MOVIEDB: MoviedbService, public router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      if (param['search']) {
        this.search = param['search'];
        this.searchMovie();
      }
    });
  }

  searchMovie() {
    if (this.search.length === 0) {
      return;
    }

    this.MOVIEDB.searchMovie(this.search).subscribe(resp => {
      const results = 'results';
      this.movies = resp[results];
    });
  }
}
