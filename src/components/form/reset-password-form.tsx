'use client';
import { CardWrapper } from '@/components/auth/card-wrapper';
import InputField from '@/components/form/input-field';
import SubmitButton from '@/components/form/submit-button';
import { cn } from '@/lib/utils';
import { Logo } from '@/assets';

const ResetPasswordForm = () => {
	return (
		<CardWrapper
			logo={Logo}
			message='Reset Password'
			headerLabel='Reset your password to access the Inventory Management System.'
			backButtonHref='/auth/login'
			backButtonLabel='Back to Login'
			actionLabel='Login'>
			<form>
				<InputField
					placeholder='Enter your new password'
					isPasswordField
					id='password'
					type='password'
					name='password'
					label='Password'
				/>
				<SubmitButton
					className={cn(
						'bg-primary-100 hover:bg-secondary-color transition-colors duration-300 mt-6'
					)}
					loadingLabel='Resetting...'
					label='Reset Password'
				/>
			</form>
		</CardWrapper>
	);
};

export default ResetPasswordForm;
