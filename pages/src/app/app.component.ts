import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  windowStart: number = 0;
  windowEnd: number;
  pagesPerSet: number = 5;
  images = [
    {
      title: 'At the Beach!',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'At the mountains!',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the forest!',
      url:
        'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the snow!',
      url:
        'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach!',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'At the mountains!',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the forest!',
      url:
        'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the snow!',
      url:
        'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach!',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'At the mountains!',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the forest!',
      url:
        'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the snow!',
      url:
        'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the Beach!',
      url:
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'At the mountains!',
      url:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the forest!',
      url:
        'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the snow!',
      url:
        'https://images.unsplash.com/photo-1465220183275-1faa863377e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];

  constructor() {
    this.windowEnd = this.pagesPerSet - 1;
  }

  checkWindowIndex(index: number) {
    if (
      this.currentPage > this.windowEnd &&
      this.windowEnd !== this.images.length - 1
    ) {
      this.windowStart = this.windowEnd + 1;
      this.windowEnd =
        this.windowEnd + this.pagesPerSet > this.images.length - 1
          ? this.images.length - 1
          : this.windowEnd + this.pagesPerSet;
    } else if (this.currentPage < this.windowStart && this.windowStart !== 0) {
      this.windowEnd = this.windowStart - 1;
      this.windowStart =
        this.windowStart - this.pagesPerSet < 0
          ? 0
          : this.windowStart - this.pagesPerSet;
    }

    if (index <= this.windowEnd && index >= this.windowStart) return true;

    return false;
  }
}
