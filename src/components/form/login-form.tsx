'use client';

import { useRouter } from 'next/navigation';

import { useReducer } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { CardWrapper } from '../auth/card-wrapper';
import { Logo, EyeClose, EyeOpen } from '@/assets';
import SubmitButton from './components/submit-button';
import OrDivider from './components/or-divider';
import { loginSchema } from '@/schemas/login';
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

type LoginSchema = z.infer<typeof loginSchema>;
const LoginForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useReducer(state => !state, false);
	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
		defaultValues: {
			emailOrUsername: '',
			password: '',
		},
	});

	const onSubmit = async (data: LoginSchema) => {
		console.log(data);
	};
	const mutation = useMutation({
		mutationFn: onSubmit,
		onSuccess: () => {
			router.push('/dashboard/overview');
		},
	});
	return (
		<CardWrapper
			actionLabel='Sign up'
			logo={Logo}
			message='Log in to your account'
			showSocial
			headerLabel='Welcome back! please enter your details.'
			backButtonHref='/auth/sign-up'
			backButtonLabel="Don't have an account?">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(data => mutation.mutate(data))}
					className='space-y-3'>
					<FormField
						control={form.control}
						name='emailOrUsername'
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel
									className={cn(`text-muted-200`, {
										'text-destructive': fieldState?.invalid,
									})}>
									Email or Username
								</FormLabel>
								<FormControl>
									<Input
										className={cn(
											`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
											{
												'border-destructive focus-visible:ring-transparent':
													fieldState?.invalid,
											}
										)}
										placeholder='Enter your email or Username'
										{...field}
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
											className={cn(
												` w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-300`,
												{
													'border-destructive focus-visible:ring-transparent':
														fieldState?.invalid,
												}
											)}
											type={showPassword ? 'text' : 'password'}
											placeholder='*********'
											{...field}
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
					<Link
						className=' text-xs border-b border-black hover:border-none transition-colors duration-300 font-semibold my-1 inline-block'
						href='/auth/reset-password'>
						Forgot password?
					</Link>
					<SubmitButton
						loadingLabel='Signing in...'
						className='bg-primary-100 hover:bg-primary-100/90 transition-colors duration-300'
						label='Sign in'
					/>
					<OrDivider />
				</form>
			</Form>
		</CardWrapper>
	);
};

export default LoginForm;
