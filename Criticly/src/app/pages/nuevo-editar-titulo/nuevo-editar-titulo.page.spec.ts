import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoEditarTituloPage } from './nuevo-editar-titulo.page';

describe('NuevoEditarTituloPage', () => {
  let component: NuevoEditarTituloPage;
  let fixture: ComponentFixture<NuevoEditarTituloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEditarTituloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
