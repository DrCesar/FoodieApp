import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { UserProvider } from '../../provider/user.provider';
import { User } from '../../models/user.app.model';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	user = {} as User;
	bandSignup;

  	constructor(public navCtrl: NavController, public usrService: UserProvider, public navParams: NavParams, public alertCtrl: AlertController) {
  	}

  	ionViewDidLoad() {
		console.log('ionViewDidLoad SignupPage');
	}	

  	userCreationHandler(user: User) {
		if (user){ 
			this.usrService.signup(user).subscribe(res => { alert(res.json().message) });
		} else {
			alert("Ingrese todos los campos requeridos.")
		}
	}

	alert(info) {
		let alert = this.alertCtrl.create({
			title: "Error",
			subTitle: info,
			buttons: ['OK']
		});
		alert.present();
	}

}
