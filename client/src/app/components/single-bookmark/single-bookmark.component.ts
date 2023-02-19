import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-bookmark',
  templateUrl: './single-bookmark.component.html',
  styleUrls: ['./single-bookmark.component.css']
})
export class SingleBookmarkComponent {
  @Input() bookmark!: any;


  bookmarkDetails() {
    
    return `/bookmarks/${this.bookmark.id}`;
  }
}
