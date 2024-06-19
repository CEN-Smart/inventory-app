'use client';
import { useEffect, useReducer, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

import { EyeClose, EyeOpen, Logo } from '@/assets';
import { CardWrapper } from '@/components/auth/card-wrapper';
import SubmitButton from '@/components/form/components/submit-button';
import OrDivider from '@/components/form/components/or-divider';
import PasswordPolicyMessage from '@/components/form/components/password-policy-message';
import { signUpSchema } from '@/schemas/sign-up';
import usePasswordPolicy from '@/hooks/password-policy';
import { PasswordPolicyRule } from '@/types/password-policy';
import { cn } from '@/lib/utils';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type SignUpSchema = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
	const [showPassword, setShowPassword] = useReducer(state => !state, false);
	const [showConfirmPassword, setShowConfirmPassword] = useReducer(
		state => !state,
		false
	);

	const router = useRouter();

	const form = useForm<SignUpSchema>({
		mode: 'all',
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const {
		password,
		confirmPassword,
		onPasswordChange,
		onPasswordMustMatch,
		passwordPolicy,
	} = usePasswordPolicy();

	const onSubmit = async (data: SignUpSchema) => {
		const { username, email, password } = data;
		const newUser = {
			username,
			email,
			password,
		};

		try {
			const response = await axios.post('http://localhost:8000/users', newUser);
			if (response.status === 201) {
				// Redirect to verify code page
				router.push('/auth/verify-code');
				// Send verification code
				// const verificationCode = await axios.post('http://localhost:8000/verification-code', {
				// 	email,
				// });
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<CardWrapper
			actionLabel='Sign in'
			logo={Logo}
			message='Create an account'
			showSocial
			headerLabel='Set up your account easily'
			backButtonHref='/auth/login'
			backButtonLabel='Already have an account?'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-3'>
					<FormField
						control={form.control}
						name='username'
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel
									className={cn(`text-muted-200`, {
										'text-destructive': fieldState?.invalid,
									})}>
									Username
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className={cn(
											` w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
											{
												'border-destructive focus-visible:ring-transparent':
													fieldState?.invalid,
											}
										)}
										placeholder='Enter your username'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel
									className={cn(`text-muted-200`, {
										'text-destructive': fieldState?.invalid,
									})}>
									Email
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className={cn(
											`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
											{
												'border-destructive focus-visible:ring-transparent':
													fieldState?.invalid,
											}
										)}
										placeholder='Enter your email'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='relative'>
						<FormField
							control={form.control}
							name='password'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel
										className={cn(`text-muted-200`, {
											'text-destructive': fieldState?.invalid,
										})}>
										Password
									</FormLabel>
									<FormControl>
										<Input
											defaultValue={password}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												field.onChange(e.target.value);
												onPasswordChange(e);
											}}
											className={cn(
												` w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
												{
													'border-destructive focus-visible:ring-transparent':
														fieldState?.invalid,
												}
											)}
											type={showPassword ? 'text' : 'password'}
											placeholder='*********'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<button
							type='button'
							className={cn(
								`absolute top-[2.36rem] right-3 transform  text-gray-400 focus:outline-none`
							)}
							onClick={setShowPassword}>
							{showPassword ? (
								<Image
									src={EyeClose}
									alt='eye-close'
								/>
							) : (
								<Image
									src={EyeOpen}
									alt='eye-open'
								/>
							)}
						</button>
					</div>
					<div className='relative'>
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field, fieldState }) => (
								<FormItem>
									<FormLabel
										className={cn(`text-muted-200`, {
											'text-destructive': fieldState?.invalid,
										})}>
										Confirm Password
									</FormLabel>
									<FormControl>
										<Input
											defaultValue={confirmPassword}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
												field.onChange(e.target.value);
												onPasswordMustMatch(e);
											}}
											className={cn(
												` w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
												{
													'border-destructive focus-visible:ring-transparent':
														fieldState?.invalid,
												}
											)}
											type={showConfirmPassword ? 'text' : 'password'}
											placeholder='*********'
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<button
							type='button'
							className={cn(
								`absolute top-[2.36rem] right-3 transform  text-gray-400 focus:outline-none`
							)}
							onClick={setShowConfirmPassword}>
							{showConfirmPassword ? (
								<Image
									src={EyeClose}
									alt='eye-close'
								/>
							) : (
								<Image
									src={EyeOpen}
									alt='eye-open'
								/>
							)}
						</button>
					</div>
					<PasswordPolicyMessage
						passwordPolicy={passwordPolicy as PasswordPolicyRule[]}
					/>

					<SubmitButton
						loadingLabel='Signing Up...'
						className='bg-primary-100 hover:bg-primary-100/90 transition-colors duration-300'
						label='Sign Up'
					/>
				</form>
			</Form>
			<OrDivider />
		</CardWrapper>
	);
};

export default SignUpForm;
