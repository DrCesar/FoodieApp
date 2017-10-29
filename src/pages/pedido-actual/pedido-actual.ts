import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { UserProvider } from '../../providers/user/users';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pedido-actual',
  templateUrl: 'pedido-actual.html'
})
export class PedidoActualPage {

    userID: string = "59f509b3fa11c731b0e6f1de";
    cart: any;
    totalPrice: number = 0;

  constructor(public navCtrl: NavController,
  public userService: UserProvider,
  public navParams: NavParams,
  public alertCtrl: AlertController) {

  }

  ionViewDidEnter(){
    this.userService.getCartByUser(this.userID).then((data) => {
        this.totalPrice = 0;
        this.cart = data;
        for (var i = 0; i < this.cart.length; i++) {
          this.totalPrice += this.cart[i].price;
        }
    });
  }

  goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage)
  }

}
