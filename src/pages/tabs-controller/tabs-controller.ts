import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CategorAsPage } from '../categor-as/categor-as';
import { PlatosPage } from '../platos/platos';
import { PedidoActualPage } from '../pedido-actual/pedido-actual';
import { RestaurantesCercanosPage } from '../restaurantes-cercanos/restaurantes-cercanos';
import { ViewordersPage } from '../vieworders/vieworders';
import { PagoPage } from '../pago/pago';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicioPage;
  tab2Root: any = PedidoActualPage;
  tab3Root: any = RestaurantesCercanosPage;
  tab4Root: any = ViewordersPage;
  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCategorAs(params){
    if (!params) params = {};
    this.navCtrl.push(CategorAsPage);
  }goToPlatos(params){
    if (!params) params = {};
    this.navCtrl.push(PlatosPage);
  }oToPedidoActual(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoActualPage);
  }goToRestaurantesCercanos(params){
    if (!params) params = {};
    this.navCtrl.push(RestaurantesCercanosPage);
  }goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage);
  }goToViewOrders(params) {
    if (!params) params = {};
    this.navCtrl.push(ViewordersPage);
  }
}
