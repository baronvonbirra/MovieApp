import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const date = new Date();
const year = date.getFullYear();
const month = getMonth(date);
function getMonth(thisDate) {
  const myMonth = thisDate.getMonth() + 1;
  return myMonth < 10 ? '0' + myMonth : '' + myMonth;
}
const day = getDay(date);
function getDay(thisDate) {
  const myDay = thisDate.getDay() + 1;
  return myDay < 10 ? '0' + myDay : '' + myDay;
}
const currentDate = `${year}-${month}-${day}`;
const previousDate = newDate();
function newDate() {
  if (day > 28) {
    return `${year}-${month}-28`;
  } else if (month === 0) {
    return `${year - 1}-12-${day}`;
  } else {
    return `${year}-0${month - 1}-${day}`;
  }
}

@Injectable()
export class MoviedbService {
  private token = '44f63178760c028c7269aab4ef019b6f';
  private urlMoviedb = '//api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getCarousel() {
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=${year}`;

    return this.http.jsonp(url, 'callback');
  }

  gettheaterMovies() {
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=popularity.desc&page=1&primary_release_date.gte=${previousDate}&primary_release_date.lte=${currentDate}`;

    return this.http.jsonp(url, 'callback');
  }

  getInTheatersNow(page: number) {
    const url = `${this.urlMoviedb}movie/now_playing?api_key=${
      this.token
    }&language=en-US&page=${page}`;

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

  getGenres() {
    const url = `${this.urlMoviedb}genre/movie/list?api_key=${
      this.token
    }&language=en-US`;

    return this.http.jsonp(url, 'callback');
  }

  getMoviesByGenre(genre: any) {
    const url = `${this.urlMoviedb}discover/movie?api_key=${
      this.token
    }&language=en-US&sort_by=vote_average.desc&include_adult=true&include_video=false&page=1&with_genres=${genre}&with_release_type=1%7C2%7C3%7C4%7C5%7C6`;

    return this.http.jsonp(url, 'callback');
  }
}
