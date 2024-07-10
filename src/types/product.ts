// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
	id: string;
	product: string;
	category: string;
	quantity: number;
	status: 'inStock' | 'outOfStock' | 'runningOut';
	branch: string;
	note: string;
};
export type Stock = {
	id: string;
	stock: string;
	category: string;
	quantity: number;
	status: 'inStock' | 'outOfStock' | 'runningOut';
	branch: string;
	note: string;
};

export type AllItem = {
	id: string;
	allItem: string;
	category: string;
	quantity: number;
	status: 'inStock' | 'outOfStock' | 'runningOut';
	branch: string;
	note: string;
};
