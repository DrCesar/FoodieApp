import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategorAsPage } from '../categor-as/categor-as';

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
    var image = 'https://www.pcmag.com/img/no-author-icon.svg';
    const location = new google.maps.LatLng(14.604610,-90.488846);
    const location1 = new google.maps.LatLng(14.603997, -90.488376);
    const location2 = new google.maps.LatLng(14.608441, -90.486660);
    const location3 = new google.maps.LatLng(14.595465, -90.495898);
    const options ={
      center: location,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: 16 
    }
    
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    var marker = new google.maps.Marker({
      map: this.map,
      position: location,
      title:"Esta es tu posición",
      icon: image,
      clickable: true
    });

    var marker1 = new google.maps.Marker({
      map: this.map,
      position: location1,
      title:"LinLin",
      clickable:true
    });
    var infowindow1 = new google.maps.InfoWindow({
      content: "LinLin"
    });
    var marker2 = new google.maps.Marker({
      map: this.map,
      position: location2,
      title:"L'albero",
      clickable:true
    });
    var infowindow2 = new google.maps.InfoWindow({
      content: "L'albero"
    });
    var marker3 = new google.maps.Marker({
      map: this.map,
      position: location3,
      title:"Tacostumbras",
      clickable:true
    });
    var infowindow3 = new google.maps.InfoWindow({
      content: "Tacostumbras"
    });
    marker1.addListener('click', ()=>{
      let data = {restaurant: 'LinLin'};
      this.navCtrl.push(CategorAsPage, data);
    });
    infowindow1.open(this.map,marker1)
    marker2.addListener('click', ()=>{
      let data = {restaurant: "L'albero"};
      this.navCtrl.push(CategorAsPage, data);
    });
    infowindow2.open(this.map,marker2)
    marker3.addListener('click', ()=>{
      let data = {restaurant: 'Tacostumbras'};
      this.navCtrl.push(CategorAsPage, data);
    });
    infowindow3.open(this.map,marker3)
  }
  
}
