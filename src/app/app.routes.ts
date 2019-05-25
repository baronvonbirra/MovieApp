import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { IntheatersComponent } from './components/intheaters/intheaters.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:search', component: SearchComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'intheaters', component: IntheatersComponent },
    { path: 'intheaters/:page', component: IntheatersComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
