import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-cards',
  templateUrl: 'skeleton-cards.html'
})

export class SkeletonCardsComponent implements OnInit {

  public skeletonCards = [];

  // flag which adds the fade-out CSS class if set to true
  @Input() hasDataLoaded:boolean = false;


  public ngOnInit() {

    // fill the skeletonCards placeholder
    for (let i = 0, j = 1; i < j; i++) {

      this.skeletonCards.push({
      });

    }

  }

}
