import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'; 
import { UserProvider } from '../../providers/user/users'; 

/**
 * Generated class for the BuscarUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar-usuarios',
  templateUrl: 'buscar-usuarios.html',
})
export class BuscarUsuariosPage {
	username: any; 
  results: any; 
 
  constructor(private userService: UserProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

    searchUsers() { 
    if (this.username != '') 
      this.userService.searchUser(this.username).then(data => { 
        this.results = data; 
      }); 
    else 
      this.alert(); 
  } 
 
  viewUser(user) { 
 
  } 
 
  addUser(user) { 
    if (user) 
      this.userService.addFriend(user._id).then(data => { 
        console.log(data); 
      }) 
  } 
 
  alert() { 
    let alert = this.alertCtrl.create({ 
      title: 'Error', 
      subTitle: 'Usuario ingresado es inválido.', 
      buttons: ['OK'] 
    }); 
    alert.present(); 
  } 

}
