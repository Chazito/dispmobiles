import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeliculaDetallePage } from './pelicula-detalle.page';

describe('PeliculaDetallePage', () => {
  let component: PeliculaDetallePage;
  let fixture: ComponentFixture<PeliculaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
