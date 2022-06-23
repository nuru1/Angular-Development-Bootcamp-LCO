import { Component } from '@angular/core';
import arr from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  handleSlideChange = (limit:number ) => {
    this.limit = limit;
  }

  generateWords = () =>{
    this.limit = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
    this.words = arr.slice(0, this.limit).join(' ');
  }
}
