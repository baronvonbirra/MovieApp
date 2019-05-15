import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private ROUTER: Router) {}

  ngOnInit() {}

  searchMovie(search: string) {
    if (search.length === 0) {
      return;
    }

    this.ROUTER.navigate(['search', search]);
  }
}
