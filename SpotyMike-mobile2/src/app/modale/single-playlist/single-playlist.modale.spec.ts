import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglePlaylistModale } from './single-playlist.modale';

describe('SinglePlaylistPage', () => {
  let component: SinglePlaylistModale;
  let fixture: ComponentFixture<SinglePlaylistModale>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlaylistModale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
