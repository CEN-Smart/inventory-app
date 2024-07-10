'use client';
import { SingleDetailCard } from '@/components/table/ui/single-detail-card';
import { useStocks } from '@/hooks/use-stocks';

export function StockListOverview() {
	const { data: stocks, isPending, isPaused, isError, error } = useStocks();

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (isPaused) {
		return <div>Paused...</div>;
	}

	if (isError) {
		return <div>Error: {error.message}</div>;
	}

	const inStock = stocks.filter(stock => stock.status === 'inStock');

	const runningOut = stocks.filter(stock => stock.status === 'runningOut');

	const outOfStock = stocks.filter(stock => stock.status === 'outOfStock');

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
