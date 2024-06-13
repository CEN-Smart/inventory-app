'use client';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { Logo } from '@/assets';

export const ErrorCard = () => {
	return (
		<CardWrapper
			logo={Logo}
			message='An error occurred during the authentication process.'
			headerLabel='Oops! Something went wrong!'
			backButtonHref='/auth/login'
			backButtonLabel='Back to login'>
			<div className='w-full flex justify-center items-center'>
				<ExclamationTriangleIcon className='text-destructive' />
			</div>
		</CardWrapper>
	);
};
