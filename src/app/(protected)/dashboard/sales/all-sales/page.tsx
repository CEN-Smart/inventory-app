import { SalesAnalytics } from '@/components/dashboard/sales/all-sales/sales-analytics';
import { NewSalesChart } from '@/components/dashboard/sales/chart/new-sales-chart';
import { TotalSalesChart } from '@/components/dashboard/sales/chart/total-sales-chart';

const AllSalesPage = () => {
	return (
		<div className='flex gap-6 w-full max-lg:flex-col'>
			<SalesAnalytics
				chartElement={<TotalSalesChart />}
				title='Total Sales'
				total={2420}
				percentage={40}
				className='w-full'
			/>
			<SalesAnalytics
				chartElement={<NewSalesChart />}
				title='New Sales'
				total={1210}
				percentage={10}
				className='w-full'
			/>
		</div>
	);
};

export default AllSalesPage;
