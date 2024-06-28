import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopAlbumPage } from './top-album.page';

describe('TopAlbumPage', () => {
  let component: TopAlbumPage;
  let fixture: ComponentFixture<TopAlbumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
