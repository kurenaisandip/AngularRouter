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
   heroDetails : Hero | null | undefined;

  constructor(private route: ActivatedRoute, private service: HeroServiceService) {
    // this.heroName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.heroName = this.route.snapshot.paramMap.get('name');
    if (this.heroName) {
      this.heroDetails = this.service.getHeroes().find(hero => hero.heroName === this.heroName) || null;
    }
    }

}
