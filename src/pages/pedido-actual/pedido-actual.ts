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
    cartID: any;
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
        this.cartID = data;
        this.cart = [];
        this.getItemsById(0, function(){});
    });
  }

  getItemsById(i, callback) {
    if (i < this.cartID.length) {
        this.userService.getItemById(this.cartID[i]).then((data) => {
            let temp: any;
            temp = data;
            this.cart.push({
               name: temp.name,
               price: temp.price
            });
            this.totalPrice += temp.price;
            this.getItemsById(i+1, callback);
        });
    } else {
        callback();
    }
  }

  reiniciarOrden() {
    let alert = this.alertCtrl.create({
      title: '¿Desea eliminar su orden?',
      message: 'Se eliminarán todos los platos que haya agregado.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.deleteAll();
          }
        }
      ]
    });
    alert.present();
}

  deleteAll(){
    if (this.cartID.length > 0) {
        this.userService.deleteFromCart(this.cartID[0]).then((data) => {
            this.cartID.splice(0, 1);
            this.deleteAll();
        });
    } else {
        this.cart = [];
        this.totalPrice = 0;
    }
  }

  deleteItem(item) {
      let index = 0;
      for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].name == item){
              index = i;
              break;
          }
      }
      this.userService.deleteFromCart(this.cartID[index]).then((data) => {
          this.totalPrice = 0;
          this.cartID = data;
          this.cart = [];
          this.getItemsById(0, function(){});
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
    title: '¿Desea Confirmar la orden?',
    message: 'La orden será enviada al restaurante si elige "Confirmar"',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Confirmar',
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
      this.navCtrl.push(TabsControllerPage);
    });

  }

}
