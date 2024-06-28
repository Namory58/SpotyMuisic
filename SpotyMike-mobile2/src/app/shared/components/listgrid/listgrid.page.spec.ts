import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListgridPage } from './listgrid.page';

describe('ListgridPage', () => {
  let component: ListgridPage;
  let fixture: ComponentFixture<ListgridPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
