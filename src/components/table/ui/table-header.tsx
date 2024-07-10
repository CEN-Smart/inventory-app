import { Import as Export } from '@/assets';
import { Table } from '@tanstack/react-table';

import CustomButton from '../../dashboard/custom-button';
import TableSearchInput from '../form/table-search';
import { DataTableViewOptions } from './data-table-view-options';

interface TableHeaderProps<TData> {
	table: Table<TData>;
	searchTerm?: string;
}
export function TableHeader<TData>({
	table,
	searchTerm,
}: TableHeaderProps<TData>) {
	return (
		<div className='flex items-center justify-between py-4'>
			<div className='flex items-center gap-2'>
				<DataTableViewOptions table={table} />
			</div>
			<div className='flex items-center gap-4'>
				<CustomButton
					src={Export}
					alt='Export'
					label='Export'
					className='border border-gray-300 h-10 bg-white hover:bg-gray-50/90 text-gray-700 hover:text-gray-800'
				/>
				<TableSearchInput
					placeholder='Search Filters...'
					value={
						(table.getColumn(searchTerm ?? '')?.getFilterValue() as string) ??
						''
					}
					onChange={event =>
						table
							.getColumn(searchTerm ?? '')
							?.setFilterValue(event.target.value)
					}
				/>
			</div>
		</div>
	);
}
