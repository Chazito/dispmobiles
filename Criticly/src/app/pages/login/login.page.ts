import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form:FormGroup;

  adminEmail : string = "admin@email.com";
  adminPass : string = "admin@1234";

  userEmail : string = "user@email.com";
  userPass : string = "user@1234";

  inputEmail : string = "";
  inputPass : string = "";

  constructor(private router : Router, private toastController:ToastController, private fb : FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  getValidUser(){
    if((this.inputEmail != this.adminEmail && this.inputEmail != this.userEmail) ||  (this.inputPass != this.adminPass && this.inputPass != this.userPass)){
      return false;
    }

    return true;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string, duracion:number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: position,
    });

    await toast.present();
  }

  onLoginClick(){
    if(this.getValidUser()){
      let context : NavigationExtras = {
        state:{
          userEmail : this.inputEmail,
          userPass : this.inputPass,
          isAdmin : this.inputEmail == this.adminEmail
        }
      }
      this.presentToast("bottom","Sesión iniciada correctamente",2500);
      this.router.navigate([''],context);
    }
    else{
      this.presentToast("bottom","Credenciales invalidas",4000);
    }
  }
}
