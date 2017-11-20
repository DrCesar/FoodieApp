import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import { AlertController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';

@Component({
  selector: 'page-categor-as',
  templateUrl: 'categor-as.html'
})
export class CategorAsPage {

  restaurant: any;
  options: any;


  constructor(private alertCtrl: AlertController,
  public informationService: InformationProvider,
  public navParams: NavParams,
  public navCtrl: NavController) {

  }

  ionViewDidLoad(){

    this.restaurant = this.navParams.get('restaurant');

    this.informationService.getOptionsByRestaurant(this.restaurant).then((data) => {
      this.options = data;
    });
  }

  goToMenu(params){
    let data = {restaurant: this.restaurant, option: params};
    this.navCtrl.push(PlatosPage, data);
  }
}
