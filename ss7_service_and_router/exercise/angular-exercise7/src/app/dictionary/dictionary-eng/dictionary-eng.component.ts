import {Component, OnInit} from '@angular/core';
import {Word} from '../word';
import {WordTransService} from '../service/word-trans.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dictionary-eng',
  templateUrl: './dictionary-eng.component.html',
  styleUrls: ['./dictionary-eng.component.css']
})
export class DictionaryEngComponent implements OnInit {
  words: Word[] = [];

  constructor(private wordTransService: WordTransService, private router: Router) {
    this.words = wordTransService.getAll();
  }

  ngOnInit(): void {
  }

  showVieMean(): void {
    this.router.navigateByUrl('translate/:id/:name');
  }
}
