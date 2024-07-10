import { getStocks } from '@/components/table/data/stocks/get-all-stocks';
import { stockKeys } from '@/components/table/data/stocks/stock-key';
import { Stock } from '@/types/product';
import {
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';

export function useStocks(
	options?: Omit<
		UndefinedInitialDataOptions<Stock[], Error, Stock[], string[]>,
		'queryKey' | 'queryFn'
	>
) {
	const queryStocks = useQuery({
		queryKey: [...stockKeys.get()],
		queryFn: getStocks,
		...options,
	});

	return queryStocks;
}
