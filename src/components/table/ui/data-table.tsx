'use client';

import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { TableHeader } from './table-header';
import { TableHeading } from './table-heading';
import { DataTablePagination } from './table-pagination';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	searchTerm?: string;
	headers?: React.ReactNode;
	className?: string;
	table?: ReturnType<typeof useReactTable>;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	searchTerm,
	headers,
	className,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const [rowSelection, setRowSelection] = React.useState({});
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
			rowSelection,
		},
	});

	return (
		<div>
			<TableHeader
				table={table}
				searchTerm={searchTerm}
			/>

			<div className={cn(`rounded-md border`, className)}>
				<Table>
					<TableHeading
						className='bg-transparent'
						table={table}
					/>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									className='odd:bg-white even:bg-muted-600'
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map(cell => (
										<TableCell
											className='h-[72px]'
											key={cell.id}>
											{typeof cell.column.columnDef.cell === 'string' ? (
												<span>{cell.column.columnDef.cell}</span>
											) : (
												<>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</>
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination table={table} />
		</div>
	);
}
