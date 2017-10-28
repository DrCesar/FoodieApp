import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	ans: Response;
	constructor(public http: Http) {

	}

	signup(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:8080/users/signup', JSON.stringify(user), {headers: headers})
			.map(res => {return res});

	}

	signin(user) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://localhost:8080/users/signin', JSON.stringify(user), {headers: headers})
			.map(res => {return res});
	}
}