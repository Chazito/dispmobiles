import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListaTiposPage } from './admin-lista-tipos.page';

describe('AdminListaTiposPage', () => {
  let component: AdminListaTiposPage;
  let fixture: ComponentFixture<AdminListaTiposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaTiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
