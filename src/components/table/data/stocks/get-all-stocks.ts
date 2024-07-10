import http from '@/services/http-service';
import type { Stock } from '@/types/product';

export async function getStocks(): Promise<Stock[]> {
	// Fetch data from your API here.
	// For now, we'll just return some mock data.
	const { data } = await http.get('http://localhost:8000/stocks');
	return data as Stock[];
}
