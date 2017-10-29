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
  userID: string = "59f509b3fa11c731b0e6f1de";


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
      this.userService.addToCart(this.userID, itemID);
  }

}
