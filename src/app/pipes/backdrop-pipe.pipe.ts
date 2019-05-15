import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backdropPipe'
})
export class BackdropPipe implements PipeTransform {
  transform(movie: any): any {
    const url = 'http://image.tmdb.org/t/p/w1280/';

    if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else if (movie.poster_path) {
      return url + movie.poster_path;
    } else {
      return 'assets/img/imgnotfound.png';
    }
  }
}
