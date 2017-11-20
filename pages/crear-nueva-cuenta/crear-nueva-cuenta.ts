import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { User } from '../../models/newUserData';
import { UserProvider } from '../../providers/user/users';

@Component({
  selector: 'page-crear-nueva-cuenta',
  templateUrl: 'crear-nueva-cuenta.html'
})
export class CrearNuevaCuentaPage {

    userInfo = {} as User;
    passCon: string = "";

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  public userService: UserProvider) {
  }

  validatePassword() {
    if (this.passCon != this.userInfo.pass){
        let alert = this.alertCtrl.create({
          title: "Las contraseñas no coinciden.",
          buttons: ['OK']
        });
        alert.present();
    } else {
        this.validateEmail();
    }
  }

  validateEmail() {
      if (this.userInfo.email.indexOf('@') < 1 || this.userInfo.email.indexOf('.com') < this.userInfo.email.length-4) {
          let alert = this.alertCtrl.create({
            title: "Email inválido.",
            buttons: ['OK']
          });
          alert.present();
      } else {
          this.validateUser();
      }
  }

  validateUser() {
      //Validacion que el usuario y el email sea unico
      //createUser(this.userInfo);
  }

  goToLogin(params){

    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

}
