import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListaTitulosPage } from './admin-lista-titulos.page';

describe('AdminListaTitulosPage', () => {
  let component: AdminListaTitulosPage;
  let fixture: ComponentFixture<AdminListaTitulosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaTitulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
