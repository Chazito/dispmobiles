import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPreferenciasPage } from './perfil-preferencias.page';

describe('PerfilPreferenciasPage', () => {
  let component: PerfilPreferenciasPage;
  let fixture: ComponentFixture<PerfilPreferenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPreferenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
