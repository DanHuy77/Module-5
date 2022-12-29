import {Component, OnInit} from '@angular/core';
import {Word} from '../word';
import {ActivatedRoute} from '@angular/router';
import {WordTransService} from '../service/word-trans.service';

@Component({
  selector: 'app-dictionary-vie',
  templateUrl: './dictionary-vie.component.html',
  styleUrls: ['./dictionary-vie.component.css']
})
export class DictionaryVieComponent implements OnInit {
  word?: Word | null;
  vieWord?: Word | null;


  constructor(private activatedRoute: ActivatedRoute, private wordTransService: WordTransService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.word = wordTransService.findById(Number(id));
        this.vieWord = wordTransService.findVieWordById(Number(id));
      }
    });

  }

  ngOnInit(): void {
  }

}
