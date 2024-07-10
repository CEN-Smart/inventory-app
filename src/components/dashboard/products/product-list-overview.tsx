'use client';
import { SingleDetailCard } from '@/components/table/ui/single-detail-card';
import { useProducts } from '@/hooks/use-products';

export function ProductListOverview() {
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

	const inStock = products.filter(product => product.status === 'inStock');

	const runningOut = products.filter(
		product => product.status === 'runningOut'
	);

	const outOfStock = products.filter(
		product => product.status === 'outOfStock'
	);

	return (
		<div className='py-2'>
			<div className='flex max-md:flex-col gap-6'>
				<SingleDetailCard
					title='In Stock'
					value={inStock.length}
					status='inStock'
				/>
				<SingleDetailCard
					title='Running Out'
					value={runningOut.length}
					status='runningOut'
				/>
				<SingleDetailCard
					title='Out of Stock'
					value={outOfStock.length}
					status='outOfStock'
				/>
			</div>
		</div>
	);
}
