import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from '../hero'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes!: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      })
  }


}
