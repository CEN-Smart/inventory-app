'use client';

import Image from 'next/image';

import {
  InStock,
  OutOfStock,
  RunningOut,
} from '@/assets';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import type { Stock } from '@/types/product';
import { ColumnDef } from '@tanstack/react-table';

import SvgEdit from '../../../svg/svg-edit';
import SvgTrash from '../../../svg/svg-trash';
import { DataTableColumnHeader } from '../../ui/data-table-column-header';
import { formatCurrency } from '../../utils/format-currency';

export const stocksColumns: ColumnDef<Stock>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				className={cn(` border border-muted-400`, {
					'data-[state=checked]:bg-transparent data-[state=checked]:text-muted-400':
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && 'indeterminate'),
				})}
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={(value: boolean) =>
					table.toggleAllPageRowsSelected(!!value)
				}
				aria-label='Select all'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				className={cn(` border border-muted-400`, {
					'data-[state=checked]:bg-transparent data-[state=checked]:text-muted-400':
						row.getIsSelected(),
				})}
				checked={row.getIsSelected()}
				onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
				aria-label='Select row'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'stock',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Stock'
			/>
		),
	},
	{
		accessorKey: 'category',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Category'
			/>
		),
	},
	{
		accessorKey: 'quantity',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Quantity'
			/>
		),
		cell: ({ row }) => {
			return (
				<div className=' font-medium'>
					{formatCurrency(row.getValue('quantity'))}
				</div>
			);
		},
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<DataTableColumnHeader
					column={column}
					title='Status'
				/>
			);
		},
		cell: ({ row }) => {
			const status = row.getValue('status');
			return (
				<div className='flex items-center gap-2'>
					{status === 'inStock' && (
						<Image
							src={InStock}
							alt='In stock'
							width={62}
							height={20}
						/>
					)}
					{status === 'outOfStock' && (
						<Image
							src={OutOfStock}
							alt='Out of stock'
							width={87}
							height={20}
						/>
					)}
					{status === 'runningOut' && (
						<Image
							src={RunningOut}
							alt='Running out'
							width={85}
							height={20}
						/>
					)}
				</div>
			);
		},
	},
	{
		accessorKey: 'branch',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Branch'
			/>
		),
	},
	{
		accessorKey: 'note',
		header: ({ column }) => (
			<DataTableColumnHeader
				column={column}
				title='Note'
			/>
		),
	},

	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => {
			const product = row.original;

			return (
				<div className='flex gap-4 items-center'>
					<SvgTrash
						className='size-4 stroke-muted-400 hover:stroke-destructive cursor-pointer'
						onClick={() => alert('Delete: ' + product.id)}
					/>
					<SvgEdit
						className=' stroke-muted-400 hover:stroke-destructive cursor-pointer size-4'
						onClick={() => alert('Edit: ' + product.id)}
					/>
				</div>
			);
		},
	},
];
