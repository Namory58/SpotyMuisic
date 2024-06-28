import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaysongPage } from './playsong.page';

describe('PlaysongPage', () => {
  let component: PlaysongPage;
  let fixture: ComponentFixture<PlaysongPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaysongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
