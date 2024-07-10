'use client';

import {
  productsColumns,
} from '@/components/table/data/products/products-columns';
import { DataTable } from '@/components/table/ui/data-table';
import { useProducts } from '@/hooks/use-products';

import { ProductListOverview } from './product-list-overview';

export function ProductList() {
	const { data: products, isPending, isPaused, isError, error } = useProducts();

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isPaused) {
		return <div>Paused...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}
	return (
		<div>
			<ProductListOverview />
			<DataTable
				searchTerm={`category`}
				columns={productsColumns}
				data={products}
			/>
		</div>
	);
}
