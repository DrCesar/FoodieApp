import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderProvider {

	restaurant: any;
	url: any;
	data: any;

	constructor(public http: Http) {
		this.userID = 
		this.url = "http://localhost:8080";
		this.data = null;
	}



	getOrder(restaurant) {
		return new Promise(resolve => {
            this.http.get(this.url + '/api/order/'+restaurant)
                .map(res => res.json())
                .subscribe(data => {
                    this.data = data;
                    resolve(this.data);
                });
        });
	}
}
