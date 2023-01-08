import {Component, OnInit} from '@angular/core';
import {Image} from './Image';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  n = 0;
  images?: Image[] = [{id: 1, src: 'https://i.pinimg.com/originals/73/37/8c/73378c122cda0526c65766218c26a101.jpg', des: 'Genin'},
    {
      id: 2,
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/318b452e-3780-485b-8be0-b5792f08122b/de636rb-22b2da5f-8941-4b64-8f9b-0d3330c6426d.png/v1/fill/w_1280,h_1280,strp/naruto__chunin_timeskip__by_plusultramanofficial_de636rb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxOGI0NTJlLTM3ODAtNDg1Yi04YmUwLWI1NzkyZjA4MTIyYlwvZGU2MzZyYi0yMmIyZGE1Zi04OTQxLTRiNjQtOGY5Yi0wZDMzMzBjNjQyNmQucG5nIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMzE4YjQ1MmUtMzc4MC00ODViLThiZTAtYjU3OTJmMDgxMjJiXC9wbHVzdWx0cmFtYW5vZmZpY2lhbC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.w6Vr0T7J6Ia9dSXwdacB7l5xJMDaPWq9G0Pm_2SIvS0',
      des: 'Chunin'
    },
    {id: 3, src: 'https://i.pinimg.com/originals/ae/ed/72/aeed72360400c4255d5bb2b9ae27078c.png', des: 'Jonin'},
    {
      id: 4,
      src: 'https://m.media-amazon.com/images/M/MV5BYTgzNzI0YjctNDQ3My00MGQ4LThhMDEtYWFiZDU3YmExMTEwXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
      des: 'Hokage'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

  next(): void {
    if (this.n < 3) {
      this.n = this.n + 1;
    }
  }

  back(): void {
    if (this.n > 0) {
      this.n = this.n - 1;
    }
  }
}
