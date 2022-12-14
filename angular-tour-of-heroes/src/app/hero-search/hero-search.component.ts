import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroe$!: Hero | undefined;
  private searchTerms = new Subject<string>();



  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  searchName(term: string): void {
    this.heroService.searchHeroes(term)
    .subscribe(heroe$ => this.heroe$ = heroe$);
  }

  ngOnInit(): void {
  }
}