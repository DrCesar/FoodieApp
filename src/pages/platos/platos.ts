import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';
import { UserProvider } from '../../providers/user/users';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-platos',
  templateUrl: 'platos.html'
})
export class PlatosPage {

  menu: any;
  restaurant: any;
  option: any;


  constructor(public informationService: InformationProvider,
  public userService: UserProvider,
  public navParams: NavParams,
  public navCtrl: NavController,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad(){

    this.restaurant = this.navParams.get('restaurant');
    this.option = this.navParams.get('option');

    this.informationService.getMenuByOptions(this.restaurant, this.option).then((data) => {
      this.menu = data;
    });
  }

  addToCart(itemID) {
      if (!this.userService.addToCart(itemID, this.restaurant))
        this.alertError("No puede reservar en dos restaurantes al mismo tiempo.")
  }

  alertError(msg) {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
