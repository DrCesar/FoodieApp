import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

	}

	signin() {
		this.navCtrl.push(SigninPage);
	}

	signup() {
		this.navCtrl.push(SignupPage);
	}

	

}
