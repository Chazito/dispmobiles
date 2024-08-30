import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilInicioPage } from './perfil-inicio.page';

describe('PerfilInicioPage', () => {
  let component: PerfilInicioPage;
  let fixture: ComponentFixture<PerfilInicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
