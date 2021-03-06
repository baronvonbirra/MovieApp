import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomepopulatorComponent } from './components/homepopulator/homepopulator.component';

import { MoviedbService } from './services/moviedb.service';
import { BackdropPipe } from './pipes/backdrop-pipe.pipe';
import { ImagePipe } from './pipes/image-pipe.pipe';
import { IntheatersComponent } from './components/intheaters/intheaters.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent,
    MovieComponent,
    ImagePipe,
    HomepopulatorComponent,
    BackdropPipe,
    IntheatersComponent,
    RecommendationsComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule {}
