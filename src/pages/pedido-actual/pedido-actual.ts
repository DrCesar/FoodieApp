import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { UserProvider } from '../../providers/user/users';
import { Order } from '../../models/order.app.model';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pedido-actual',
  templateUrl: 'pedido-actual.html'
})
export class PedidoActualPage {

    cart: any;
    totalPrice: number = 0;
    order = {} as Order;

  constructor(public navCtrl: NavController,
  public userService: UserProvider,
  public navParams: NavParams,
  public alertCtrl: AlertController) {

  }

  ionViewDidEnter(){
    this.userService.getCartByUser().then((data) => {
        this.totalPrice = 0;
        this.cart = data;
        for (var i = 0; i < this.cart.length; i++) {
          this.totalPrice += this.cart[i].price;
        }
    });
  }

  goToPago(params){
     this.confirmAlert();
  }


  alert(info) {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: info,
      buttons: ['OK']
    });
    alert.present();
  }

  confirmAlert() {
    let alert = this.alertCtrl.create({
    title: 'Confirmar Orden',
    message: 'Desea Confirmar la Orden',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          return false;
        }
      },
      {
        text: 'Buy',
        handler: () => {
          this.postOrder();
        }
      }
    ]
  });
  alert.present();
  }

  postOrder() {
    this.order.items = this.cart;
    this.order.restaurant = "LinLin";
    this.userService.postOrder(this.order).then(data => {
      alert(data.json().message);
    });
    this.navCtrl.push(TabsControllerPage);
  }

}
