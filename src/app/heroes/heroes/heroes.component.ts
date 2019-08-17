import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Hero } from '../../core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  // heroes: Hero[];
  heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;
  // loading: boolean;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = {} as any;
  }

  select(hero: Hero) {
    this.selected = hero;
  }
  add(hero: Hero) {
    this.heroService.add(hero);
  }

  delete(hero: Hero) {
    this.heroService.delete(hero);
    this.close();
  }

  getHeroes() {
    this.heroService.getAll();
    this.close();
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }
}
