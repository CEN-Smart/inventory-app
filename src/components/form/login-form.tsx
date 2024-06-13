'use client';

import { useReducer } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardWrapper } from '../auth/card-wrapper';
import { Logo, EyeClose, EyeOpen } from '@/assets';
import SubmitButton from './submit-button';
import OrDivider from './or-divider';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/schemas/login';
import { cn } from '@/lib/utils';

const LoginForm = () => {
	const [showPassword, setShowPassword] = useReducer(state => !state, false);
	const form = useForm({
		resolver: zodResolver(loginSchema),
		mode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		console.log(data);
	};
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
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-3'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='Email'
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
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											className={cn(` w-full
            px-4
            py-2
            border
            border-gray-300
            rounded-lg
            focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:border-gray-300`)}
											type={showPassword ? 'text' : 'password'}
											placeholder='Password'
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
								`
                    absolute
                    right-0
					top-8
                    px-4
					py-[0.33rem]
                    flex
                    items-center
                    justify-center
                    bg-white
                    border
                    border-gray-300
                    rounded-r-lg
                    focus:outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                    focus:ring-opacity-50
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    disabled:bg-gray-100
                    disabled:border-gray-300
                  `
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
