import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/users';
import { User } from '../../models/user.app.model';

import { RecuperarContraseAPage } from '../recuperar-contrase-a/recuperar-contrase-a';
import { InicioPage } from '../inicio/inicio';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';
import { CrearNuevaCuentaPage } from '../crear-nueva-cuenta/crear-nueva-cuenta';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  bandSignup;
  passCon: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public usrService: UserProvider) {
    this.bandSignup = false;
  }

  signin(user: User) {
      if (user) {
        this.usrService.signin(user).subscribe(data => {

          if (data.json().message == "Inicio de Sesion.")
            this.navCtrl.push(TabsControllerPage);
          else
            alert(data.json().message);
        });
      } else {
        alert("Faltan campos");
      }
    }

  alert(info) {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: info,
      buttons: ['OK']
    });
    alert.present();
  }

  preSignup() {
    this.bandSignup = !this.bandSignup;
    this.user.username = "";
    this.user.password = "";
  }

  validatePassword() {
    if (this.passCon != this.user.password){
        let alert = this.alertCtrl.create({
          title: "Las contraseñas no coinciden.",
          buttons: ['OK']
        });
        alert.present();
    } else {
        this.signup(this.user);
    }
  }

  signup(user: User) {
    if (user){
      this.usrService.signup(user).subscribe(data => {

      if (data.json().message == "El usuario ha sido creado.")
            this.navCtrl.push(TabsControllerPage);
          else
            alert(data.json().message); });
    } else {
      alert("Ingrese todos los campos requeridos.")
    }
  }

  goToRecuperarContraseA(params){
    if (!params) params = {};
    this.navCtrl.push(RecuperarContraseAPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToTabsController(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }goToCategorAs(params){
    if (!params) params = {};
    this.navCtrl.push(CategorAsPage);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }goToCrearNuevaCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CrearNuevaCuentaPage);
  }
}
