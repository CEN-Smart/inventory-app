'use client';
import { ProductOverview } from '@/components/dashboard/home/product-overview';
import { StockOverview } from '@/components/dashboard/home/stock-overview';
import { allItemsColumns } from '@/components/table/data/all-items-columns';
import { DataTable } from '@/components/table/ui/data-table';
import { useProducts } from '@/hooks/use-products';
import { useStocks } from '@/hooks/use-stocks';
import { cn } from '@/lib/utils';
import { AllItem } from '@/types/product';

export default function OverviewPage() {
	const {
		data: productsData,
		error,
		isError,
		isPending,
		isPaused,
	} = useProducts();
	const {
		data: stocksData,
		error: stocksError,
		isError: stocksIsError,
		isPending: stocksIsPending,
		isPaused: stocksIsPaused,
	} = useStocks();

	const allData: AllItem[] = [
		...(productsData ?? []).map(product => ({
			...product,
			allItem: product.product,
		})),
		...(stocksData ?? []).map(stock => ({ ...stock, allItem: stock.stock })),
	];

	const queryProducts = useProducts();
	const queryStocks = useStocks();

	if (isPending || stocksIsPending) {
		return <div>Loading...</div>;
	}

	if (isError || stocksIsError) {
		return <div>Error: {error?.message || stocksError?.message}</div>;
	}

	if (isPaused || stocksIsPaused) {
		return (
			<div>
				<p>Paused</p>
				<button
					onClick={async () =>
						(await queryProducts.refetch()) && queryStocks.refetch()
					}>
					Retry
				</button>
			</div>
		);
	}

	return (
		<div className='mx-auto py-10'>
			<div className='flex items-center max-md:flex-col gap-4'>
				<ProductOverview />
				<StockOverview />
			</div>
			<DataTable
				className={cn(` rounded-b-none`, {})}
				searchTerm={`category`}
				columns={allItemsColumns}
				data={allData}
			/>
		</div>
	);
}
