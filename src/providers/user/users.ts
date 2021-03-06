import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	url: any;
	data: any;
	userID: any;
	currentRestaurant: any;

	constructor(public http: Http) {
		this.url = "http://localhost:8080";
		this.data = null;
	}


	getUser() {

		return new Promise(resolve => {
			this.http.get(this.url + '/api/user/' + this.userID)
			 	.map(res => res.json())
			 	.subscribe(data => {
			 		this.data = data;
			 		resolve(this.data);
			 	})
		})
	}

	 searchUser(username) {
 
    return new Promise(resolve => {
 
      this.http.get(this.url + '/api/user/search/' + username)
 
        .map(res => res.json())
 
        .subscribe(data => {
 
          this.data = data;
 
          resolve(this.data);
 
        })
 
    });
 
  }
 

 
  searchUserID(userID) {
 
    
 
    return new Promise(resolve => {
 
      this.http.get(this.url + '/api/user/' + userID)
 
         .map(res => res.json())
 
         .subscribe(data => {
 
           this.data = data;
 
           resolve(this.data);
 
         })
 
    })
 
  }
 

 
  addFriend(friendID) {
 

 
    let headers = new Headers();
 
    headers.append('Content-Type', 'application/json');
 

 
    return new Promise(resolve => {
 
      this.http.post(this.url + '/api/user/addFriend/' + this.userID + '/' + friendID, {headers: headers})
 
        .map(res => res.json())
 
        .subscribe(data => {
 
          this.data = data;
 
          resolve(data);
 
        });
 
    });
 
  }
 

	postOrder(order) {
		order.restaurant = this.currentRestaurant;

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		order.owner = this.userID;

		return new Promise(resolve => {
			this.http.post(this.url + '/api/order', JSON.stringify(order), {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
				this.data = data;
				resolve(this.data);
			});
		});

	}

	getOrders() {

		return new Promise(resolve => {

			this.http.get(this.url + '/api/order/user/' + this.userID)
				.map(res => res.json())
				.subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });

		});
	}

	addToCart(item, restaurant) {
		if (this.currentRestaurant == "" || this.currentRestaurant == restaurant) {
			if (this.currentRestaurant == "")
				this.currentRestaurant = restaurant

			let cartData = {
				userID: this.userID,
				itemID: item,
				restaurant: restaurant
			}

			let headers = new Headers();
			headers.append('Content-Type', 'application/json');

			this.http.post(this.url + '/api/user/cart', JSON.stringify(cartData), {headers: headers})
				.subscribe(res => {
					console.log(res.json());
				});

			return true;
		} else {
			return false;
		}
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
            this.http.get(this.url + '/api/user/cart/delete/'+this.userID+'/'+item)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
					if (this.data.length == 0)
						this.currentRestaurant = "";
                    resolve(this.data);
                });
        });
	}

	getItemById(id) {
        return new Promise(resolve => {
            this.http.get(this.url + '/api/menu/item/' + id)
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
			.map(res => {
				this.userID = res.json().userID;
				this.currentRestaurant = "";
				return res;
			});

	}

	signin(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post(this.url + '/users/signin', JSON.stringify(user), {headers: headers})
			.map(res => {
				this.userID = res.json().userID;
				this.currentRestaurant = res.json().restaurant;
				return res;
			});
	}
}
