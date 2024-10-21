import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEditarResennaPage } from './admin-editar-resenna.page';

describe('AdminEditarResennaPage', () => {
  let component: AdminEditarResennaPage;
  let fixture: ComponentFixture<AdminEditarResennaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditarResennaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
