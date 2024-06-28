import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopArtistsPage } from './top-artists.page';

describe('TopArtistsPage', () => {
  let component: TopArtistsPage;
  let fixture: ComponentFixture<TopArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
