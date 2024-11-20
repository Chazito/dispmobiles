import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisReseniasPage } from './mis-resenias.page';

describe('MisReseniasPage', () => {
  let component: MisReseniasPage;
  let fixture: ComponentFixture<MisReseniasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReseniasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
