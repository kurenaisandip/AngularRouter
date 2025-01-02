import { Injectable } from '@angular/core';
import {Hero} from '../Model/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  private heroes : Hero[] = [
    {
      "name": "Naruto Uzumaki",
      "heroName": "Naruto",
      "heroAge": 17,
      "heroPower": "Nine-Tails Chakra, Rasengan, Shadow Clone Jutsu"
    },
    {
      "name": "Monkey D. Luffy",
      "heroName": "Luffy",
      "heroAge": 19,
      "heroPower": "Gum-Gum Fruit Powers, Haki"
    },
    {
      "name": "Goku",
      "heroName": "Son Goku",
      "heroAge": 43,
      "heroPower": "Super Saiyan, Kamehameha, Ultra Instinct"
    },
    {
      "name": "Eren Yeager",
      "heroName": "Eren",
      "heroAge": 19,
      "heroPower": "Titan Shifter, Founding Titan"
    },
    {
      "name": "Saitama",
      "heroName": "One Punch Man",
      "heroAge": 25,
      "heroPower": "Limitless Strength, One Punch Knockout"
    }
  ]

  getHeroes() : Hero[]{
    return this.heroes;
  }


  constructor() { }
}
