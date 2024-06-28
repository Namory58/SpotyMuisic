import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileArtistsPage } from './profile-artists.page';

describe('ProfileArtistsPage', () => {
  let component: ProfileArtistsPage;
  let fixture: ComponentFixture<ProfileArtistsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
