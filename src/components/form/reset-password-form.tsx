'use client';

import { useReducer } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  EyeClose,
  EyeOpen,
  Logo,
} from '@/assets';
import { CardWrapper } from '@/components/auth/card-wrapper';
import SubmitButton from '@/components/form/components/submit-button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { resetPasswordSchema } from '@/schemas/reset-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
const ResetPasswordForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useReducer(state => !state, false);
	const form = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		mode: 'all',
		defaultValues: {
			password: '',
		},
	});

	const onSubmit = async (data: ResetPasswordSchema) => {
		console.log(data);
	};

	const mutation = useMutation({
		mutationFn: onSubmit,
		onSuccess: () => {
			router.push('/auth/login');
		},
	});

	return (
		<CardWrapper
			logo={Logo}
			message='Reset Password'
			headerLabel='Reset your password to access the Inventory Management System.'
			backButtonHref='/auth/login'
			backButtonLabel='Back to Login'
			actionLabel='Login'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(data => mutation.mutate(data))}
					className='space-y-3'>
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
											{...field}
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
					<SubmitButton
						label='Reset Password'
						className='bg-primary-100 hover:bg-primary-100/90 transition-colors duration-300'
					/>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default ResetPasswordForm;
