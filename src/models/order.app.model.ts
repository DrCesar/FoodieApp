import { Item } from './item.app.model';

export interface Order {

	user: string,
	items: Item[],
	price: number,
	discount: number
}