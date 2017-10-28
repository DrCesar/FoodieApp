import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';

import { UserProvider } from '../../providers/user/users';
import { User } from '../../models/user.app.model';

import { RecuperarContraseAPage } from '../recuperar-contrase-a/recuperar-contrase-a';
import { InicioPage } from '../inicio/inicio';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';;
import { CrearNuevaCuentaPage } from '../crear-nueva-cuenta/crear-nueva-cuenta';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  bandSignup;

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
  }

  signup(user: User) {
    if (user){ 
      this.usrService.signup(user).subscribe(res => { alert(res.json().message) });
    } else {
      alert("Ingrese todos los campos requeridos.")
    }
  }


  goToUpload() {
    this.navCtrl.push(UploadPage);
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
