'use client';

import { stocksColumns } from '@/components/table/data/stocks/stocks-columns';
import { DataTable } from '@/components/table/ui/data-table';
import { useStocks } from '@/hooks/use-stocks';

import { StockListOverview } from './stock-list-overview';

export function StockList() {
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
	return (
		<div>
			<StockListOverview />
			<DataTable
				searchTerm={`category`}
				columns={stocksColumns}
				data={stocks}
			/>
		</div>
	);
}
