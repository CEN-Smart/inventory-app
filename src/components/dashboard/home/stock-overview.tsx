import { OverviewCard } from '@/components/table/ui/overview-card';
import { useStocks } from '@/hooks/use-stocks';

export function StockOverview() {
	const { data, error, isError, isPending, isPaused } = useStocks();

	const totalStocks = data?.length || 0;
	const inStock =
		data?.filter(product => product.status === 'inStock').length || 0;
	const runningOut =
		data?.filter(product => product.status === 'runningOut').length || 0;
	const outOfStock =
		data?.filter(product => product.status === 'outOfStock').length || 0;

	return (
		<OverviewCard
			inStock={inStock}
			outOfStock={outOfStock}
			runningOut={runningOut}
			title='Total Stocks'
			totalItems={totalStocks}
		/>
	);
}
