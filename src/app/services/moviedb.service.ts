import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviedbService {
  private token = '44f63178760c028c7269aab4ef019b6f';
  private urlMoviedb = '//api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getCarousel() {
    const date = new Date();
    const year = date.getFullYear();
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=${year}`;

    return this.http.jsonp(url, 'callback');
  }

  getTheatherMovies() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&page=1&primary_release_date.gte=${year}-${month}-${day}&primary_release_date.lte=${year}-${month +
      1}-${day}`;

    return this.http.jsonp(url, 'callback');
  }

  getPopularMovies() {
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&page=1`;

    return this.http.jsonp(url, 'callback');
  }

  getRMovies() {
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&certification_country=US&certification=R&include_adult=true&page=1`;

    return this.http.jsonp(url, 'callback');
  }

  getMovieDetails(id: string) {
    const url = `${this.urlMoviedb}movie/${id}?api_key=${
      this.token
    }&language=en-US`;

    return this.http.jsonp(url, 'callback');
  }

  searchMovie(query: string) {
    const url = `${
      this.urlMoviedb
    }search/movie?query=${query}&sort_by=popularity.desc&api_key=${
      this.token
    }&language=en-US&include_adult=true`;

    return this.http.jsonp(url, 'callback');
  }
}
