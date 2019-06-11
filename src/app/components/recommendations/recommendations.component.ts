import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  genres: any = {};
  public model: any;
  movies: any = {};

  constructor(public MOVIEDB: MoviedbService, public router: ActivatedRoute) {
    this.router.params.subscribe(param => {
      if (param['search']) {
        this.model = param['search'];
        this.populateMovies();
      }
    });
  }
  populateGenres() {
    this.MOVIEDB.getGenres().subscribe(resp => {
      this.genres = resp['genres'];
    });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term =>
        term === ''
          ? []
          : this.genres
              .filter(
                v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  formatter = (x: { name: string }) => x.name;

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async populateMovies() {
    await this.delay(500);
    this.MOVIEDB.getMoviesByGenre(this.model['id']).subscribe(resp => {
      const results = 'results';
      this.movies = resp[results];
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.populateGenres();
  }
}
