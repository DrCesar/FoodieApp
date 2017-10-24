import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user.app.model';
import { UserProvider } from '../../provider/user.provider';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	user = {} as User;

	constructor(public navCtrl: NavController, public usrService: UserProvider) {

	}

	userCreationHandler(user: User) {
		if (user){
			this.usrService.createUser(user);
			console.log("perro");
		} else {
			console.log("error en la creacion del usuario");
		}
	}

}
