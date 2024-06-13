'use client';
import { CardWrapper } from '@/components/auth/card-wrapper';
import InputField from '@/components/form/input-field';
import SubmitButton from '@/components/form/submit-button';
import OrDivider from '@/components/form/or-divider';
import PasswordPolicyMessage from '@/components/form/password-policy-message';

import { Logo } from '@/assets';

import { useState } from 'react';

import usePasswordPolicy from '@/hooks/password-policy';
import { PasswordPolicyRule } from '@/types/password-policy';
const SignUpForm = () => {
	const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(true);

	const {
		password,
		confirmPassword,
		onPasswordChange,
		onPasswordMustMatch,
		passwordPolicy,
	} = usePasswordPolicy();

	return (
		<CardWrapper
			actionLabel='Sign in'
			logo={Logo}
			message='Create an account'
			showSocial
			headerLabel='Set up your account easily'
			backButtonHref='/auth/login'
			backButtonLabel='Already have an account?'>
			<form className='space-y-3'>
				<InputField
					// formState={formState}
					label='Email'
					type='email'
					id='email'
					name='email'
					placeholder='hello@zequencedigitallimited.com'
				/>
				<InputField
					// formState={formState}
					label='Verification Code'
					type='text'
					id='verificationCode'
					name='verificationCode'
					placeholder='Email verification code here'
				/>
				<InputField
					value={password}
					isPasswordField
					onChange={onPasswordChange}
					// formState={formState}
					label='Password'
					type='password'
					id='password'
					name='password'
					placeholder='********'
				/>
				<InputField
					value={confirmPassword}
					onChange={onPasswordMustMatch}
					isPasswordField
					// formState={formState}
					label='Confirm Password'
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					placeholder='********'
				/>

				<PasswordPolicyMessage
					passwordPolicy={passwordPolicy as PasswordPolicyRule[]}
				/>

				<SubmitButton
					loadingLabel={
						isVerificationCodeSent
							? 'Creating account...'
							: 'Sending verification code...'
					}
					className='bg-primary-100 hover:bg-secondary-color transition-colors duration-300'
					label={isVerificationCodeSent ? 'Continue' : 'Continue with email'}
				/>
				<OrDivider />
			</form>
		</CardWrapper>
	);
};

export default SignUpForm;
