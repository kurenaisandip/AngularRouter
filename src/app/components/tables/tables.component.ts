import {Component, OnInit} from '@angular/core';
import {HeroServiceService} from '../../Service/hero-service.service';
import {Hero} from '../../Model/Hero';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-tables',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private service: HeroServiceService) {
  }

  ngOnInit(): void {
        this.heroes = this.service.getHeroes();
    }

  trackByFn(index: number, item: any): number {
    return item.id; // Use the unique id property to track items
  }

}
