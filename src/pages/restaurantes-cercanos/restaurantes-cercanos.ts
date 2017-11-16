import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google: any;
@Component({
  selector: 'page-restaurantes-cercanos',
  templateUrl: 'restaurantes-cercanos.html'
})
export class RestaurantesCercanosPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    this.showMap();
  }
  showMap(){
    const location = new google.maps.LatLng(14.604610,-90.488846);
    const options ={
      center: location,
      zoom: 16 
    }
    
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  }
  
}
