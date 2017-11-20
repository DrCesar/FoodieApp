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
    dates: any;
    months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    timePassed = [];

	constructor(private userService: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidEnter() {
		this.userService.getOrders().then(data => {
			this.orders = data;
            this.dates = [];
            this.getDates(0);
		});
	}

    getDates(i) {
        if (i < this.orders.length) {
            var tempDate = new Date(this.orders[i].date);
            this.orders[i].date = tempDate.getDate() + " " + this.months[tempDate.getMonth()] + ", " + tempDate.getFullYear();
            this.getDates(i+1);
            var now = new Date();
            var timePassed = now.getTime() - tempDate.getTime();
            var mins = Math.floor((timePassed % 3600000) / 60000);
            var hrs = Math.floor(timePassed / 3600000) % 24
            var days = Math.floor(timePassed / 3600000 / 24)
            this.orders[i].timePassed = days + "d " + hrs + "h " + mins + "mins";
        }
    }

}
