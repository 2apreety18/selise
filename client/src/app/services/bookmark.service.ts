import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../interfaces/bookmark';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  jsonURL = 'assets/bookmark.json'
  bookmarks: Bookmark[] = [];
  bookmark!: any;
  categories: any[] = ["Category A","Category B"];

  constructor(private http: HttpClient) {}

  getAllBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.jsonURL);
  }

  getBookmarkDetails(id: number): Observable<Bookmark>{
    this.getAllBookmarks().subscribe(data => {
      console.log(data);
      this.bookmark = data.find(itemInArray => itemInArray.id === id);
    });
    return this.bookmark;
  }

  getCategories() {
    return this.categories;
  }

  addBookmark (title: string, url: string, category: string) : Observable<Bookmark> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post<Bookmark>(this.jsonURL,{ title, url, category}, httpOptions);
  }

  // setBookmark(id: number){
  //   this.bookmark = this.bookmarks.find(itemInArray => itemInArray.id === id);
  // }
  // getBookmark() {
  //   return this.bookmark;
  // }

}
