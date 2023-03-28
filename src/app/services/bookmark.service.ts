import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../interfaces/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  jsonURL = 'assets/bookmark.json';
  storageName = 'bookmark_list';
  bookmarks: Bookmark[] = [
  //   {  
  //     "id": 1,  
  //     "title": "Javascript Tutorial",  
  //     "url": "www.xyz.com",  
  //     "category": "Category A"  
  // },
  // {  
  //     "id": 2,  
  //     "title": "Angular basics",  
  //     "url": "www.xyz.com",  
  //     "category": "Category A"  
  // },
  // {  
  //     "id": 3,  
  //     "title": "React introduction",  
  //     "url": "www.xyz.com",  
  //     "category": "Category A"  
  // },
  // {  
  //     "id": 4,  
  //     "title": "Best food in Dhaka To eat with...",  
  //     "url": "www.xyz.com",  
  //     "category": "Category B"  
  // },
  // {  
  //     "id": 5,  
  //     "title": "Burger vs Pizza",  
  //     "url": "www.xyz.com",  
  //     "category": "Category B"  
  // }
  ];
  bookmark!: any;
  categories: any[] = ["Category A","Category B"];

  constructor(private http: HttpClient) {
    this.loadStorageBookmark();
  }

  // getAllBookmarks(): Observable<Bookmark[]> {
  //   return this.http.get<Bookmark[]>(this.jsonURL);
  // }
  getAllBookmarks() {
    return this.bookmarks;
  }

  saveStorageBookmarks() {
    localStorage.setItem(this.storageName, JSON.stringify(this.bookmarks));
  }

  loadStorageBookmark(){
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  // getBookmarkDetails(id: number): Observable<Bookmark>{
  //   this.getAllBookmarks().subscribe(data => {
  //     console.log(data);
  //     this.bookmark = data.find(itemInArray => itemInArray.id === id);
  //   });
  //   return this.bookmark;
  // }

  getCategories() {
    return this.categories;
  }

  addBookmark (bookmark: Bookmark) {
    // const httpOptions = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };
    // return this.http.post<Bookmark>(this.jsonURL,{ title, url, category}, httpOptions);
    this.bookmarks.push(bookmark);
    console.log(this.bookmarks);
    this.saveStorageBookmarks();
  }

  // setBookmark(id: number){
  //   this.bookmark = this.bookmarks.find(itemInArray => itemInArray.id === id);
  // }
  // getBookmark() {
  //   return this.bookmark;
  // }

}
