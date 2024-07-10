import { OverviewCard } from '@/components/table/ui/overview-card';
import { useProducts } from '@/hooks/use-products';

export function ProductOverview() {
	const { data, error, isError, isPending, isPaused } = useProducts();

	const totalProducts = data?.length || 0;
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
			title='Total Products'
			totalItems={totalProducts}
		/>
	);
}
