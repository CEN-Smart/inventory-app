'use client';
import Image from 'next/image';

import { Google } from '@/assets';
import SubmitButton from '@/components/form/components/submit-button';

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
