import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEditarTituloPage } from './admin-editar-titulo.page';

describe('AdminEditarTituloPage', () => {
  let component: AdminEditarTituloPage;
  let fixture: ComponentFixture<AdminEditarTituloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarTituloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
