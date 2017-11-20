import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategorAsPage } from '../categor-as/categor-as';
import { AlertController } from 'ionic-angular';
import { InformationProvider } from '../../providers/information/information';

@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {

  type: any;
  restaurants: any;

  constructor(private alertCtrl: AlertController,
  public navParams: NavParams,
  public navCtrl: NavController,
  public informationService: InformationProvider) {

  }

  ionViewDidLoad(){

    this.type = this.navParams.get('type');

    this.informationService.getRestaurantByType(this.type).then((data) => {
      this.restaurants = data;
    });
  }

  goToCategorias(params){
    let data = {restaurant: params};
    this.navCtrl.push(CategorAsPage, data);
  }
}
