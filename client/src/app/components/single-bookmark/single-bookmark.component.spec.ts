import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookmarkComponent } from './single-bookmark.component';

describe('SingleBookmarkComponent', () => {
  let component: SingleBookmarkComponent;
  let fixture: ComponentFixture<SingleBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBookmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
