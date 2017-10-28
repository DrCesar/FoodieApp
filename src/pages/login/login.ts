import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {
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
