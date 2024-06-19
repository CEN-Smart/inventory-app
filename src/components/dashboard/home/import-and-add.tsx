import Image from 'next/image';

import CustomButton from '../custom-button';
import { Import, Add } from '@/assets';

const ImportAndAdd = () => {
	return (
		<div className='flex items-center gap-4'>
			<CustomButton
				src={Import}
				alt='import'
				label='Import'
				className='border border-gray-300 bg-white hover:bg-gray-50/90 text-gray-700 hover:text-gray-800'
			/>
			<CustomButton
				src={Add}
				alt='add'
				label='Add'
				className='bg-primary-100 hover:bg-primary-100/90'
			/>
		</div>
	);
};

export default ImportAndAdd;
