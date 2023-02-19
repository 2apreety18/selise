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
    // email: new FormControl('', [Validators.required, Validators.email]),
    category: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.reactiveForm);
  }

  bookmarks: Bookmark[] = [];
  categories = this.data.getCategories();

  constructor(private data: BookmarkService) {
    this.data.getAllBookmarks().subscribe(data => {
      console.log(data);
      this.bookmarks = data;
    });
  }
}
