import http from '@/services/http-service';
import { type Product } from '@/types/product';

export async function getProducts(): Promise<Product[]> {
	// Fetch data from your API here.
	// For now, we'll just return some mock data.
	const { data } = await http.get('http://localhost:8000/products');
	return data as Product[];
}
