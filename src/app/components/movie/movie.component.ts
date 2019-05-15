import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../services/moviedb.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public MOVIEDB: MoviedbService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(map(parameters => parameters.id))
      .subscribe(id => {
        this.MOVIEDB.getMovieDetails(id).subscribe(resp => {
          this.movie = resp;
        });
      });
  }
}
