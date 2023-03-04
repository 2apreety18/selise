import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bookmark } from '../interfaces/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  reactiveForm = new FormGroup({
    title: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  bookmarks: Bookmark[] = [];
  categories = this.data.getCategories();
  bookmark: Bookmark;

  constructor(private data: BookmarkService) {
    this.data.getAllBookmarks().subscribe(data => {
      console.log(data);
      this.bookmarks = data;
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
    const val = this.reactiveForm.value;
    const bookmarkRef: Bookmark = {
      id: Math.floor(Math.random() * 10) + 1,
      title: val.title,
      url: val.url,
      category: val.category
     };
    this.bookmarks.push(bookmarkRef);
    // this.data.addBookmark(val.title!,val.url!,val.category!).subscribe(()=>{});
    this.reactiveForm.reset();
  }

  details(bookmark: Bookmark) {
    this.bookmark = bookmark;
  }
}
