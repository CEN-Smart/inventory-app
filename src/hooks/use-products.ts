import { getProducts } from '@/components/table/data/products/get-all-products';
import { productKeys } from '@/components/table/data/products/product-key';
import { Product } from '@/types/product';
import {
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';

export function useProducts(
	options?: Omit<
		UndefinedInitialDataOptions<Product[], Error, Product[], string[]>,
		'queryKey' | 'queryFn'
	>
) {
	const queryProducts = useQuery({
		queryKey: [...productKeys.get()],
		queryFn: getProducts,
		...options,
	});

	return queryProducts;
}
