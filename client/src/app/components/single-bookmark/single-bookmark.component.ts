import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-bookmark',
  templateUrl: './single-bookmark.component.html',
  styleUrls: ['./single-bookmark.component.css']
})
export class SingleBookmarkComponent {
  @Input() bookmark!: any;
  @Output() detailsE = new EventEmitter;

  bookmarkDetails() {
    return `/bookmarks/${this.bookmark.id}`;
  }
  details(){
    this.detailsE.emit(this.bookmark);
  }
}
