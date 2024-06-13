'use client';

import { CardWrapper } from '@/components/auth/card-wrapper';
import { Logo } from '@/assets';
import InputField from './input-field';
import SelectField from './select-field';
import SubmitButton from '@/components/form/submit-button';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import FileUploadWrapper from './file-upload-wrapper';
import { PhoneField } from './phone-filed';
import { useQuery } from '@tanstack/react-query';
import { getAllLga, getAllStates } from '@/queries/get-all-state';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormResponse } from '../form-response';
const CompleteSignUpForm = () => {
	const [state, setState] = useState('');
	const router = useRouter();

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

	function onStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setState(e.target.value);
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
			<form
				className={cn(`
      grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8
      `)}>
				<div className='space-y-3 shrink-0'>
					<InputField
						value={''}
						name='fullName'
						id='fullName'
						label='Full Name'
						placeholder='Enter your full name'
						type='text'
					/>

					<SelectField
						name='country'
						id='country'
						label='Country'
						placeholder='Select your country'
						isCountryOptions={[
							{
								state_code: 'NIGERIA',
							},
						]}
					/>

					<SelectField
						name='state'
						id='state'
						label='State'
						placeholder='Select your state'
						isStateOptions={states}
						isPending={isPending}
						defaultValue={state}
						onChange={onStateChange}
					/>
					{/* city with local government area as options */}

					<SelectField
						name='city'
						isPending={isPendingLga}
						id='city'
						label='LGA/City/Zip code'
						placeholder='Select your lga/city/zip code'
						isLocalGovtOptions={lgas}
					/>
				</div>
				<div className='space-y-3 shrink-0'>
					{/* phoneNumber */}
					<PhoneField
						name='phoneNumber'
						id='phoneNumber'
						label='Phone Number'
						placeholder='080 3 000 0000'
						type='text'
					/>

					{/* companyName */}
					<InputField
						// formState={formState}
						name='companyName'
						id='companyName'
						label="Company's Name"
						placeholder='Enter your company name'
						type='text'
					/>

					{/* logoImage */}
					<Label htmlFor='logoImage'>
						<>
							<FileUploadWrapper />
							<InputField
								isFileField
								name='logoImage'
								id='logoImage'
								label='Company Logo'
								placeholder='Upload your company logo'
								type='file'
							/>
						</>
					</Label>
				</div>
				<SubmitButton
					loadingLabel='Completing sign up...'
					className='bg-primary-100 hover:bg-secondary-color transition-colors duration-300'
					label='Complete Sign Up'
				/>
				<FormResponse
					message={''}
					type='error'
				/>
			</form>
		</CardWrapper>
	);
};

export default CompleteSignUpForm;
