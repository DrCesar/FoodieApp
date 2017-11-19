import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/users';


/**
 * Generated class for the ViewordersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-vieworders',
  templateUrl: 'vieworders.html',
})
export class ViewordersPage {

	orders: any;

	constructor(private userService: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidEnter() {
		this.userService.getOrders().then(data => {
			this.orders = data;
		});
	}

}
