import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListaResennasPage } from './admin-lista-resennas.page';

describe('AdminListaResennasPage', () => {
  let component: AdminListaResennasPage;
  let fixture: ComponentFixture<AdminListaResennasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListaResennasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
