import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from 'src/app/interfaces/bookmark';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

 currentCategory: any[] = [];

 @Input() category!: any;
 @Input() bookmarks!: any;

 @Output() selectedBookmarkEvent = new EventEmitter();


 details(selectedBookmark : Bookmark){
  this.selectedBookmarkEvent.emit(selectedBookmark);
 }

}
