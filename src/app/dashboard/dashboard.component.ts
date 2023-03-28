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
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    url: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  bookmarks: Bookmark[] = [];
  categories = this.data.getCategories();
  bookmark: Bookmark;

  defaultData = [
    {  
        "id": 1,  
        "title": "Javascript Tutorial",  
        "url": "www.xyz.com",  
        "category": "Category A"  
    },
    {  
        "id": 2,  
        "title": "Angular basics",  
        "url": "www.xyz.com",  
        "category": "Category A"  
    },
    {  
        "id": 3,  
        "title": "React introduction",  
        "url": "www.xyz.com",  
        "category": "Category A"  
    },
    {  
        "id": 4,  
        "title": "Best food in Dhaka To eat with...",  
        "url": "www.xyz.com",  
        "category": "Category B"  
    },
    {  
        "id": 5,  
        "title": "Burger vs Pizza",  
        "url": "www.xyz.com",  
        "category": "Category B"  
    }
  ]


  constructor(private data: BookmarkService) {
    // this.data.getAllBookmarks().subscribe(res => {
    //   console.log(res);
    //   this.bookmarks = res; 
    // });

    // this.bookmarks = this.data.getAllBookmarks();
    let storage = this.data.getAllBookmarks();
    this.bookmarks = this.defaultData.concat(storage);
    this.bookmarks = [...this.defaultData, ...storage];
  }
  

  onSubmit() {
    console.log(this.reactiveForm.value);
    const val = this.reactiveForm.value;
    const bookmarkRef: Bookmark = {
      id: Math.floor(Math.random() * 100) + 1,
      title: val.title,
      url: val.url,
      category: val.category
     };
    // this.bookmarks.push(bookmarkRef);
    this.data.addBookmark(bookmarkRef);
    this.reactiveForm.reset();

    // this.data.addBookmark(val.title!,val.url!,val.category!).subscribe(()=>{});
    // this.data.addBookmark(bookmarkRef);
    // localStorage.setItem('bookmark_list', JSON.stringify(bookmarkRef));
    // this.reactiveForm.reset();
    // this.bookmark = JSON.parse(localStorage.getItem('bookmark_list'));
  }

  details(bookmark: Bookmark) {
    this.bookmark = bookmark;
  }
}
