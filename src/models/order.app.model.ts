import { Item } from './item.app.model';

export interface Order {

	owner: string,
	items: [string],
	price: number,
	restaurant: string
}