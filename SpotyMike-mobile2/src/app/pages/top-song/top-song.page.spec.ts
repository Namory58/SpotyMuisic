import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopSongPage } from './top-song.page';

describe('TopSongPage', () => {
  let component: TopSongPage;
  let fixture: ComponentFixture<TopSongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
