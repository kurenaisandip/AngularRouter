import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroServiceService} from '../Service/hero-service.service';
import {Hero} from '../Model/Hero';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-view-hero',
  imports: [
    NgIf
  ],
  templateUrl: './view-hero.component.html',
  styleUrl: './view-hero.component.css'
})
export class ViewHeroComponent implements OnInit{
  heroName: string | null = "";
   heroDetails : Hero  | undefined | null;

  constructor(private route: ActivatedRoute, private service: HeroServiceService) {

  }

  ngOnInit(): void {
    this.heroName = this.route.snapshot.paramMap.get('name');
    console.log(this.heroName);

    if (this.heroName) {
      const heroes = this.service.getHeroes();
      console.log('All Heroes:', heroes);

      const foundHero = heroes.find(hero => hero.name.toLowerCase() === this.heroName?.toLowerCase());

      // this.heroDetails = this.service.getHeroes().find(hero => hero.heroName === this.heroName);
      console.log(foundHero);

      this.heroDetails = foundHero;
    }
    }

}
