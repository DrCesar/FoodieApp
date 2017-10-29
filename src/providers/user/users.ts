import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	url: any;
	data: any;
	userID: any;

	constructor(public http: Http) {
		this.url
		this.url = "http://localhost:8080";
		this.data = null;
	}

	postOrder(order) {
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		order.owner = this.userID;

		return new Promise(resolve => {
			this.http.post(this.url + '/api/order', JSON.stringify(order), {headers: headers})
			.subscribe(data => {
				this.data = data
				resolve(this.data);
			});
		});
		
	}

	addToCart(item) {
		let cartData = {
			userID: this.userID,
			itemID: item
		}

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post(this.url + '/api/user/cart', JSON.stringify(cartData), {headers: headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}

	getCartByUser() {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/cart/'+this.userID)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	deleteFromCart(item) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/cart/delete/:'+this.userID+'/'+item)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	getUser(user) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/user/'+user.email+"/"+user.user)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}

	signup(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post(this.url + '/users/signup', JSON.stringify(user), {headers: headers})
			.map(res => {return res});

	}

	signin(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post(this.url + '/users/signin', JSON.stringify(user), {headers: headers})
			.map(res => {
				this.userID = res.json().userID;
				console.log(this.userID);
				return res;
			});
	}
}
