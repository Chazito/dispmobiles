import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { AuthService } from 'src/app/services/auth.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

class MockAuthService {
  validarUsuarioPorEmail(email: string, password: string) {
    return of(true); // Simulate successful authentication
  }
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot()],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('Crear la pagina', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar la pagina con valores vacios', () => {
    const emailControl = component.form.get('email');
    const passwordControl = component.form.get('password');
    expect(emailControl?.value).toBe('');
    expect(passwordControl?.value).toBe('');
  });

  it('Deshabilitar el boton de ingreso cuando no faltan datos', () => {
    const loginButton = fixture.debugElement.query(By.css('#login-button')).nativeElement;
    component.form.controls['email'].setValue('');
    component.form.controls['password'].setValue('');
    fixture.detectChanges();
    expect(loginButton.disabled).toBeTrue();
  });

  it('Habilitar el boton si hay datos', () => {
    const loginButton = fixture.debugElement.query(By.css('#login-button')).nativeElement;
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('password123');
    fixture.detectChanges();
    expect(loginButton.disabled).toBeFalse();
  });

  it('Llamar al servicio de AuthService en login()', async () => {
    spyOn(authService, 'validarUsuarioPorEmail').and.callThrough();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('password123');
    await component.login();
    expect(authService.validarUsuarioPorEmail).toHaveBeenCalledWith('test@test.com', 'password123');
  });

  it('Deberia mostrar mensajes de error cuando un campo esta vacio o incorrecto', () => {
    component.form.controls['email'].markAsTouched();
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('#msg-error-email'));
    expect(emailError).toBeTruthy();
  });
});
