'use client';

import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import SubmitButton from '@/components/form/components/submit-button';
import ResendCodeOrChangeAccount from './components/resend-code-or-change-account';
import { verificationCodeSchema } from '@/schemas/verification-code';

type VerificationCodeSchema = z.infer<typeof verificationCodeSchema>;
const VerifyCodeForm = () => {
	const router = useRouter();
	const form = useForm<VerificationCodeSchema>({
		mode: 'all',
		resolver: zodResolver(verificationCodeSchema),
		defaultValues: {
			code: '',
		},
	});

	const onSubmit = async (data: VerificationCodeSchema) => {
		const { code } = data;
		const verificationCode = {
			code,
		};

		console.log(verificationCode);

		router.push('/auth/login');
	};

	return (
		<Form {...form}>
			<form
				className='space-y-3'
				onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='code'
					render={({ field, fieldState }) => (
						<FormItem>
							<FormLabel
								className={cn(`text-muted-200`, {
									'text-destructive': fieldState?.invalid,
								})}>
								Verification Code
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
									placeholder='Enter the verification code'
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<ResendCodeOrChangeAccount />
				<SubmitButton
					loadingLabel='Verifying...'
					className='bg-primary-100 hover:bg-primary-100/90 transition-colors duration-300'
					label='Verify'
				/>
			</form>
		</Form>
	);
};

export default VerifyCodeForm;
