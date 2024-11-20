import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarReseniaPage } from './modificar-resenia.page';

describe('ModificarReseniaPage', () => {
  let component: ModificarReseniaPage;
  let fixture: ComponentFixture<ModificarReseniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarReseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
