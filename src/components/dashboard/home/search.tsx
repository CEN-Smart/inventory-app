'use client';
import Image from 'next/image';

import { Search } from '@/assets';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const SearchBar = () => {
	return (
		<div className='flex items-center w-full p-3 rounded-md relative'>
			<Image
				className={cn(
					`absolute top-[1.3rem] left-[1.3rem]  text-gray-400 focus:outline-none`
				)}
				src={Search}
				alt='search'
				width={20}
				height={20}
			/>
			<Input
				type='search'
				placeholder='Search...'
				className='w-full pl-8 bg-white rounded-lg shadow border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300'
			/>
		</div>
	);
};

export default SearchBar;
