import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NuevoTituloPage } from './nuevo-titulo.page';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Camera } from '@capacitor/camera';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

class MockServicebdService {
  insertarTitulo(titulo: any) {
    return of(true); // Simulate successful insertion
  }
}

describe('NuevoTituloPage', () => {
  let component: NuevoTituloPage;
  let fixture: ComponentFixture<NuevoTituloPage>;
  let servicebdService: ServicebdService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoTituloPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot()],
      providers: [{ provide: ServicebdService, useClass: MockServicebdService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoTituloPage);
    component = fixture.componentInstance;
    servicebdService = TestBed.inject(ServicebdService);
    fixture.detectChanges();
  });

  it('Crear la pagina', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar con valores vacios', () => {
    const form = component.agregarTituloForm;
    expect(form.get('titulo')?.value).toBe('');
    expect(form.get('sinopsis')?.value).toBe('');
    expect(form.get('fechaEstreno')?.value).toBe('');
    expect(form.get('duracion')?.value).toBe('');
    expect(form.get('urlImagen')?.value).toBe('');
    expect(form.get('urlTrailer')?.value).toBe('');
  });

  it('Marcar como "untouched" despues de llamar agregarTitulo()', () => {
    spyOn(servicebdService, 'insertarTitulo').and.callThrough();
    component.agregarTituloForm.setValue({
      titulo: 'Pelicula nueva',
      sinopsis: 'Resumen de la peli',
      fechaEstreno: '2024-11-19',
      duracion: '120',
      urlImagen: 'url-ejemplo',
      urlTrailer: 'url-trailer',
    });
    component.agregarTituloForm.markAsTouched();

    component.agregarTitulo();
    expect(servicebdService.insertarTitulo).toHaveBeenCalledWith(component.titulo);
    expect(component.agregarTituloForm.untouched).toBeTrue();
  });

  it('Deshabilitar el boton de guardar si los campos estan vacios', () => {
    const saveButton = fixture.debugElement.query(By.css('#guardar')).nativeElement;
    expect(saveButton.disabled).toBeTrue();

    component.agregarTituloForm.setValue({
      titulo: 'Ejemplo vacio',
      sinopsis: '',
      fechaEstreno: '',
      duracion: '',
      urlImagen: '',
      urlTrailer: '',
    });
    fixture.detectChanges();

    expect(saveButton.disabled).toBeTrue();
  });

  it('Habilitar el boton de guardado si los campos son validos', () => {
    const saveButton = fixture.debugElement.query(By.css('#guardar')).nativeElement;

    component.agregarTituloForm.setValue({
      titulo: 'Pelicula nueva',
      sinopsis: 'Resumen de la peli',
      fechaEstreno: '2024-11-19',
      duracion: '120',
      urlImagen: 'url-ejemplo',
      urlTrailer: 'url-trailer',
    });
    fixture.detectChanges();
    console.log(component.agregarTituloForm.valid + " ::: " 
      + component.agregarTituloForm.controls["titulo"].valid + " + " 
      + component.agregarTituloForm.controls["sinopsis"].valid + " + "
      + component.agregarTituloForm.controls["fechaEstreno"].valid + " + "
      + component.agregarTituloForm.controls["duracion"].valid + " + "
      + component.agregarTituloForm.controls["urlImagen"].valid + " + "
      + component.agregarTituloForm.controls["urlTrailer"].valid)
    expect(saveButton.disabled).toBeFalse();
  });

  it('Mostrar mensajes de error cuando un campo esta vacio', () => {
    const titleInput = component.agregarTituloForm.get('titulo');
    titleInput?.markAsTouched();
    titleInput?.setValue('');
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
    expect(errorMessage.textContent).toContain('El título es requerido.');
  });
});
