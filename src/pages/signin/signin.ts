import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { UserProvider } from '../../provider/user.provider';
import { User } from '../../models/user.app.model';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

	user = {} as User;

	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public usrService: UserProvider) {
	}

	signin(user: User) {
		if (user) {
			this.usrService.signin(user).subscribe(data => { alert(data.json().message) });
		} else {
			alert("Faltan campos");
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
