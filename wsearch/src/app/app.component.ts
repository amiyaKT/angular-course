import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result = [];
  constructor(private wikiService: WikipediaService) {}

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((result) => {
      this.result = result;
    });
  }
}
