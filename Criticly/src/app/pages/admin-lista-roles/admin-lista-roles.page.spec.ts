import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListaRolesPage } from './admin-lista-roles.page';

describe('AdminListaRolesPage', () => {
  let component: AdminListaRolesPage;
  let fixture: ComponentFixture<AdminListaRolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
