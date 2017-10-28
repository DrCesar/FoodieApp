import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UploadPage } from '../upload/upload';

import { UserProvider } from '../../providers/user/users';
import { User } from '../../models/user.app.model';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	user = {} as User;
	bandSignup;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController, public usrService: UserProvider) {
		this.bandSignup = false;
	}

	signin(user: User) {
		if (user) {
			this.usrService.signin(user).subscribe(data => { 
				
				if (!data.json().user)
					console.log("nigga");

			});
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

	preSignup() {
		this.bandSignup = !this.bandSignup;
	}

	signup(user: User) {
		if (user){ 
			this.usrService.signup(user).subscribe(res => { alert(res.json().message) });
		} else {
			alert("Ingrese todos los campos requeridos.")
		}
	}


	goToUpload() {
		this.navCtrl.push(UploadPage);
	}
	

}
