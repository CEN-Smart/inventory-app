'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PhoneInput from 'react-phone-input-2';
import { useQuery } from '@tanstack/react-query';

import { getAllLga, getAllStates } from '@/queries/get-all-state';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { Logo } from '@/assets';
import SelectField, { UserRole } from './components/select-field';
import SubmitButton from '@/components/form/components/submit-button';
import { cn } from '@/lib/utils';
import 'react-phone-input-2/lib/style.css';

import FileUploadWrapper from './components/file-upload-wrapper';
import { FormResponse } from '../form-response';
import { completeSignUpSchema } from '@/schemas/complete-registration';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

type CompleteRegistration = z.infer<typeof completeSignUpSchema>;
const CompleteSignUpForm = () => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [state, setState] = useState('');
	const router = useRouter();

	const form = useForm<CompleteRegistration>({
		resolver: zodResolver(completeSignUpSchema),
		mode: 'onBlur',
		defaultValues: {
			fullName: '',
			companyName: '',
			country: '',
			state: '',
			lga: '',
			phoneNumber: '',
			userRole: '',
			logoImage: undefined,
		},
	});

	const onSubmit = async (data: CompleteRegistration) => {
		console.log(data);
	};

	const {
		data: states,
		isPending,
		isError,
		error,
		isPaused,
	} = useQuery({
		queryKey: ['states'],
		queryFn: getAllStates,
		staleTime: 1000 * 60 * 60 * 24 * 7,
	});

	function onStateChange(value: string) {
		setState(value);
	}

	const {
		data: lgas,
		isPending: isPendingLga,
		isError: isErrorLga,
		error: errorLga,
		isPaused: isPausedLga,
	} = useQuery({
		queryKey: [{ queryIdentifier: 'lgas', state }],
		queryFn: getAllLga,
		enabled: !!state,
	});

	if (isError) {
		return <p>{error.message}</p>;
	}

	if (isPaused) {
		return (
			<p>An error occurred while fetching states. Please try again later.</p>
		);
	}

	if (isErrorLga) {
		return <p>{errorLga.message}</p>;
	}

	if (isPausedLga) {
		return (
			<p>An error occurred while fetching lgas. Please try again later.</p>
		);
	}

	return (
		<CardWrapper
			className='max-w-[802px] w-full'
			logo={Logo}
			message='Account created successfully!'
			headerLabel='Let’s proceed to set up your profile'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className={cn(`
      flex flex-col space-y-6 w-full items-center
      `)}>
					<div className=' grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
						<div className='space-y-3'>
							<FormField
								control={form.control}
								name='fullName'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											className={cn(`text-muted-200`, {
												'text-destructive': fieldState?.invalid,
											})}>
											Full Name
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
												placeholder='Enter your full name'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Country */}

							<FormField
								control={form.control}
								name='country'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											htmlFor='country'
											className={cn(`text-muted-200 -mb-2`, {
												'text-destructive': fieldState?.invalid,
											})}>
											Country
										</FormLabel>
										<FormControl>
											<SelectField
												onChange={(value: string) => {
													field.onChange(value);
												}}
												name='country'
												id='country'
												placeholder='Select your country'
												isCountryOptions={[
													{
														state_code: 'NIGERIA',
													},
												]}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* state */}

							<FormField
								control={form.control}
								name='state'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											className={cn(`text-muted-200 -mb-2`, {
												'text-destructive': fieldState?.invalid,
											})}>
											State
										</FormLabel>
										<Select
											onValueChange={state => {
												field.onChange(state);
												onStateChange(state);
											}}
											defaultValue={state}>
											<FormControl>
												<SelectTrigger
													className={cn(``, {
														' animate-pulse cursor-not-allowed bg-slate-400':
															isPending,
													})}>
													<SelectValue placeholder='Enter a State' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{states?.map((state: string) => (
													<SelectItem
														key={state}
														value={state}>
														{state}
													</SelectItem>
												))}
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>
							{/* city with local government area as options */}

							<FormField
								control={form.control}
								name='lga'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											htmlFor='lga'
											className={cn(`text-muted-200 -mb-2`, {
												'text-destructive': fieldState?.invalid,
											})}>
											LGA
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger
													className={cn(``, {
														' animate-pulse cursor-not-allowed bg-slate-400':
															isPendingLga,
													})}>
													<SelectValue placeholder='Enter a LGA' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{lgas?.map((lga: string) => (
													<SelectItem
														key={lga}
														value={lga}>
														{lga}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='space-y-3'>
							{/* phoneNumber */}

							<FormField
								control={form.control}
								name='phoneNumber'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											className={cn(`text-muted-200`, {
												'text-destructive': fieldState?.invalid,
											})}>
											Phone Number
										</FormLabel>
										<FormControl>
											<PhoneInput
												inputStyle={{
													width: '100%',
													border: '1px solid #d3d3d3',
													borderRadius: '5px',
												}}
												inputProps={{
													name: 'phoneNumber',
													autoComplete: 'phone number',
													placeholder: '+234 (123) 456-7890',
												}}
												country={'NG'}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* companyName */}
							<FormField
								control={form.control}
								name='companyName'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											className={cn(`text-muted-200`, {
												'text-destructive': fieldState?.invalid,
											})}>
											Company Name
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
												placeholder='Enter your company name'
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* User's Role */}
							<FormField
								control={form.control}
								name='userRole'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											htmlFor='userRole'
											className={cn(`text-muted-200`, {
												'text-destructive': fieldState?.invalid,
											})}>
											User&apos;s role
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select User Role' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{UserRole.map(role => (
													<SelectItem
														key={role}
														value={role}>
														{role}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* logoImage */}
							<FormField
								control={form.control}
								name='logoImage'
								render={({ field, fieldState }) => (
									<FormItem>
										<FormLabel
											className={cn(`text-muted-200`, {
												'text-destructive': fieldState?.invalid,
											})}>
											Company&apos;s Logo
										</FormLabel>
										<FormControl>
											<FileUploadWrapper
												selectedImage={selectedImage}
												onChange={e => {
													field.onChange(e.target.files);
													setSelectedImage(e.target.files?.[0] || null);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='space-y-3 shrink-0'>
							<FormResponse
								message={''}
								type='error'
							/>
						</div>
					</div>

					<SubmitButton
						loadingLabel='Completing sign up...'
						className='bg-primary-100 hover:bg-primary-100/90 w-fit transition-colors duration-300'
						label='Proceed to Dashboard'
					/>
				</form>
			</Form>
		</CardWrapper>
	);
};

export default CompleteSignUpForm;
