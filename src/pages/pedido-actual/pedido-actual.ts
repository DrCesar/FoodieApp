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

    userID: string = "59f254ae3ddb192a3c18e7da";
    cart: any;

  constructor(public navCtrl: NavController,
  public userService: UserProvider,
  public navParams: NavParams,
  public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    this.userService.getCartByUser(this.userID).then((data) => {
      this.cart = data;
    });
    const alert = this.alertCtrl.create({
        title: this.cart,
        buttons: ['Dismiss']
      });
      alert.present();
  }

  goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage)
  }

}
