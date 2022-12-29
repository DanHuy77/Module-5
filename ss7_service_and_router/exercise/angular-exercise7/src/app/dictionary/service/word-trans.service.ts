import {Injectable} from '@angular/core';
import {Word} from '../word';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class WordTransService {
  words: Word[] = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Class'},
    {id: 4, name: 'Dictionary'},
    {id: 5, name: 'Element'}
  ];
  vieWords: Word[] = [
    {id: 1, name: 'Tao, do` an'},
    {id: 2, name: 'Chuoi, do` an'},
    {id: 3, name: 'Lop, doi tuong'},
    {id: 4, name: 'Tu` dien, do` vat'},
    {id: 5, name: 'Phan` tu, doi tuong'}
  ];

  constructor() {
  }

  getAll(): Word[] {
    return this.words;
  }

  getVieMean(): Word[] {
    return this.vieWords;
  }

  findById(id: number): Word | null {
    const temp: Word[] = this.words.filter(word => word.id === id);
    if (temp.length === 0) {
      return null;
    } else {
      return temp[0];
    }
  }

  findVieWordById(id: number): Word | null {
    const temp: Word[] = this.vieWords.filter(word => word.id === id);
    if (temp.length === 0) {
      return null;
    } else {
      return temp[0];
    }
  }
}
