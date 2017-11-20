import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlatosPage } from '../platos/platos';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { InformationProvider } from '../../providers/information/information';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

    foodTypes: any;

  constructor(public navCtrl: NavController, public informationService: InformationProvider) {

  }

  ionViewDidLoad(){

    this.informationService.getTypeRestaurant().then((data) => {
      this.foodTypes = data;
    });

  }

  goToRestaurants(params){
    let data = {type: params};
    this.navCtrl.push(RestaurantesPage, data);
  }
}
