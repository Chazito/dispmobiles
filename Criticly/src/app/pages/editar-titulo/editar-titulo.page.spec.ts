import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTituloPage } from './editar-titulo.page';

describe('EditarTituloPage', () => {
  let component: EditarTituloPage;
  let fixture: ComponentFixture<EditarTituloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTituloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
