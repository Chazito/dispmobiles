import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListaUsuariosPage } from './admin-lista-usuarios.page';

describe('AdminListaUsuariosPage', () => {
  let component: AdminListaUsuariosPage;
  let fixture: ComponentFixture<AdminListaUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
