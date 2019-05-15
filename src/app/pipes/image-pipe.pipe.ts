import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {
  transform(movie: any): any {
    const url = 'http://image.tmdb.org/t/p/w500/';

    if (movie.poster_path) {
      return url + movie.poster_path;
    } else if (movie.backdrop_path) {
      return url + movie.backdrop_path;
    } else {
      return 'assets/img/imgnotfound.png';
    }
  }
}
