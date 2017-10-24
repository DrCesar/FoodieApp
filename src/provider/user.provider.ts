import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	constructor(public http: Http) {

	}

	createUser(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		this.http.post('http://localhost:8080/users', JSON.stringify(user), {headers: headers})
			.subscribe(res => {
				console.log(res.json());
			});
	}
}