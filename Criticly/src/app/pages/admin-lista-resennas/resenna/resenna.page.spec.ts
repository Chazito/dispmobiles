import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResennaPage } from './resenna.page';

describe('ResennaPage', () => {
  let component: ResennaPage;
  let fixture: ComponentFixture<ResennaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResennaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
