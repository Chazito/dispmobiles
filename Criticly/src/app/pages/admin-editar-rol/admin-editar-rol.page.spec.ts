import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEditarRolPage } from './admin-editar-rol.page';

describe('AdminEditarRolPage', () => {
  let component: AdminEditarRolPage;
  let fixture: ComponentFixture<AdminEditarRolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
