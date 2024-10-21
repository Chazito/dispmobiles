import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoTituloPage } from './nuevo-titulo.page';

describe('NuevoTituloPage', () => {
  let component: NuevoTituloPage;
  let fixture: ComponentFixture<NuevoTituloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTituloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
