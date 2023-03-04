import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bookmark } from '../interfaces/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css']
})
export class BookmarkDetailsComponent {
  @Input() bookmark: Bookmark;

  // bookmark!: Bookmark;
  // bookmarkId!: number;
  // bookmarks: Bookmark[] = [];


  // constructor( private route: ActivatedRoute, private data: BookmarkService) { 
  //   // this.data.getAllBookmarks().subscribe(data => {
  //   //   console.log(data);
  //   //   this.bookmarks = data;
  //   // });
  //   this.getBookmark();
  // }


  // getBookmark() {
  //   this.route.params.subscribe((params: Params) => {
  //     const bookmarkId = +params['bookmarkId'];
  //     this.data.getBookmarkDetails(this.bookmarkId).subscribe((bookmark: Bookmark) => {
  //       if(this.bookmark !== undefined) {
  //         this.bookmark = bookmark;
  //       }
  //     })
  //   });
  // }
}
