import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { UserProvider } from '../../providers/user/users';
import { BuscarUsuariosPage } from '../buscar-usuarios/buscar-usuarios';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

	user: any;
	friends: any[];

	constructor(private userService: UserProvider, public navCtrl: NavController) {
	}

	ionViewDidEnter() {
		this.userService.getUser().then(data => {
			this.user = data;
			this.friends = [];
			console.log(data['friends'].length);
			for(var i = 0;  i< data['friends'].length; i++) {
				console.log(data['friends'][i]);
				this.userService.searchUserID(data['friends'][i]).then(user => {
					this.friends.push(user);
				});
			}
		});
	}

	addFriend() {
		this.navCtrl.push(BuscarUsuariosPage);
	}

	viewUser(user) {

	}


	regresar(params){
		if (!params) params = {};
		this.navCtrl.push(TabsControllerPage); 
	}
}
