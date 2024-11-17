import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

class MockServicebdService {
  insertarUsuario = jasmine.createSpy('insertarUsuario').and.returnValue(Promise.resolve());
}

class MockAuthService {
  validarUsuarioPorEmail = jasmine.createSpy('validarUsuarioPorEmail').and.returnValue(Promise.resolve());
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

class MockAlertController {
  create = jasmine.createSpy('create').and.callFake(() => {
    return Promise.resolve({
      present: jasmine.createSpy('present'),
    });
  });
}

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let dbService: ServicebdService;
  let authService: AuthService;
  let router: Router;
  let alertController: AlertController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: ServicebdService, useClass: MockServicebdService },
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter },
        { provide: AlertController, useClass: MockAlertController },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    dbService = TestBed.inject(ServicebdService);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    alertController = TestBed.inject(AlertController);
    fixture.detectChanges();
  });

  it('Crear la pagina', () => {
    expect(component).toBeTruthy();
  });

  it('Retornar verdadero si el nombre es valido', () => {
    expect(component.isValidName("Franco")).toBeTrue();
  });
  it('Retornar falso si el nombre es invalido', () => {
    expect(component.isValidName("Franco 123")).toBeFalse();
  });
  it('Retornar verdadero si el email es valido', () => {
    expect(component.isValidEmail("fr.nuneza@duocuc.cl")).toBeTrue();
  });
  it('Retornar falso si el email es invalido', () => {
    expect(component.isValidEmail("fr.nuenza")).toBeFalse();
    expect(component.isValidEmail("fr@.cl")).toBeFalse();
  });
  it('Retornar verdadero si la contraseña es valida', () => {
    component.inputPass = "Contrasena@1234";
    expect(component.isValidPassword()).toBeTrue();
  });
  it('Retornar falso si la contraseña no tiene caracter especial', () => {
    component.inputPass = "Contrasena1234";
    expect(component.isValidPassword()).toBeFalse();
  });
  it('Retornar falso si la contraseña no tiene numeros', () => {
    component.inputPass = "Contrasena@";
    expect(component.isValidPassword()).toBeFalse();
  });
  it('Retornar falso si la contraseña no tiene al menos una mayuscula', () => {
    component.inputPass = "contrasena@1234";
    expect(component.isValidPassword()).toBeFalse();
  });
  it('Retornar verdadero si las contraseñas son iguales', () => {
    component.inputPass = "contrasena@1234";
    component.inputPass2 = "contrasena@1234";
    expect(component.passwordsMatch()).toBeTrue();
  });
  it('Retornar verdadero si la contraseña es valida', () => {
    component.inputPass = "contrasena@1234";
    component.inputPass2 = "contrasena@4321";
    expect(component.passwordsMatch()).toBeFalse();
  });

  it('Retornar falso si la contraseña es invalida', () => {
    component.inputPass = "contrasena123";
    expect(component.isValidPassword()).toBeFalse();
  });

  it('Deshabilitar el boton de registro si el formulario es invalido', () => {
    component.inputNombre = '';
    component.inputApellido = '';
    component.inputEmail = 'test@ejemplo.com';
    component.inputPass = 'Contrasena123!';
    component.inputPass2 = 'Contrasena123!';
  
    fixture.detectChanges();
  
    // Find the button by its ID
    const button = fixture.debugElement.query(By.css('#bRegistro'));
    expect(button.nativeElement.disabled).toBeTrue(); // Check if disabled
  });

  it('Registrar y redireccionar al usuario al login cuando todo es valido', async () => {
    component.inputNombre = 'Usuario';
    component.inputApellido = 'Ejemplo';
    component.inputEmail = 'test@ejemplo.com';
    component.inputPass = 'Contrasena123!';
    component.inputPass2 = 'Contrasena123!';
  
    spyOn(component, 'presentAlert').and.callThrough();
  
    // Trigger the registration process
    await component.onRegistroClick();
  
    // Assertions
    expect(dbService.insertarUsuario).toHaveBeenCalled();
    expect(authService.validarUsuarioPorEmail).toHaveBeenCalledWith('test@ejemplo.com', 'Contrasena123!');
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(component.presentAlert).toHaveBeenCalledWith(
      'Registro exitoso',
      jasmine.any(String),
      'OK'
    );
  });

});
