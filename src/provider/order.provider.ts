import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderProvider {

	constructor(public http: Http) {

	}

	postOrder(order) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post('http://localhost:8080/orders', JSON.stringify(order), {headers: headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}
}