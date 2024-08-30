import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsDashboardPage } from './news-dashboard.page';

describe('NewsDashboardPage', () => {
  let component: NewsDashboardPage;
  let fixture: ComponentFixture<NewsDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
