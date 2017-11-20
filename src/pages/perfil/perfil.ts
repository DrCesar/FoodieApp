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
	friends: any;

	constructor(private userService: UserProvider, public navCtrl: NavController) {
	}

	ionViewDidLoad() {
		console.log('queonda');
		this.userService.getUser().then(data => {
			this.user = data;
			console.log(data);
		})
	}

	addFriend() {
		this.navCtrl.push(BuscarUsuariosPage);
	}


	regresar(params){
		if (!params) params = {};
		this.navCtrl.push(TabsControllerPage); 
	}
}
