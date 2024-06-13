'use client';
import Image from 'next/image';

import SubmitButton from '@/components/form/submit-button';
import { Google } from '@/assets';

export const Social = () => {
	return (
		<SubmitButton
			loadingLabel='Signing in...'
			className='w-full space-x-4 border bg-white text-black font-semibold border-gray-400 hover:bg-slate-50 transition-colors duration-300 ease-in-out'>
			<Image
				src={Google}
				alt='google'
			/>
			<span>Sign in with Google</span>
		</SubmitButton>
	);
};
