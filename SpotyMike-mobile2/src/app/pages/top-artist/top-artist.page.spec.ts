import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopArtistPage } from './top-artist.page';

describe('TopArtistPage', () => {
  let component: TopArtistPage;
  let fixture: ComponentFixture<TopArtistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
