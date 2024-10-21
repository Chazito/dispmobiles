import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscribirReseniaPage } from './escribir-resenia.page';

describe('EscribirReseniaPage', () => {
  let component: EscribirReseniaPage;
  let fixture: ComponentFixture<EscribirReseniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EscribirReseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
