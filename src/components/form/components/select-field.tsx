'use client';

import { cn } from '@/lib/utils';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

export const UserRole = ['admin', 'user'];

export interface SelectFieldProps {
	name: string;
	id: string;
	label?: string;
	placeholder?: string;
	isStateOptions?: string[];
	isCountryOptions?: any[];
	isLocalGovtOptions?: string[];
	defaultValue?: string;
	userRole?: string;
	isPending?: boolean;
	// onChange receives a value of type that is generic
	onChange?(value: string): void;
}

const SelectField: React.FC<SelectFieldProps> = ({
	name,
	id,
	label,
	placeholder,
	isCountryOptions,
	isStateOptions,
	isLocalGovtOptions,
	userRole,
	defaultValue,
	isPending,
	onChange,
}) => {
	return (
		<Select
			onValueChange={onChange}
			defaultValue={defaultValue}>
			<SelectTrigger
				className={cn(``, {
					' animate-pulse cursor-not-allowed bg-slate-400': isPending,
				})}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{isCountryOptions &&
					isCountryOptions.map(country => (
						<SelectItem
							key={country.state_code}
							value={country.state_code}>
							{country.state_code}
						</SelectItem>
					))}

				{isStateOptions &&
					isStateOptions.map(state => (
						<SelectItem
							key={state}
							value={state}>
							{state}
						</SelectItem>
					))}

				{isLocalGovtOptions &&
					isLocalGovtOptions.map(localGovt => (
						<SelectItem
							key={localGovt}
							value={localGovt}>
							{localGovt}
						</SelectItem>
					))}
			</SelectContent>
		</Select>
		// 	<div className='space-y-1 relative'>
		// 		<label
		// 			htmlFor={id}
		// 			className={cn(`block text-sm font-medium text-gray-700`, {})}>
		// 			{label}
		// 		</label>
		// 		<select
		// 			onChange={onChange}
		// 			defaultValue={defaultValue}
		// 			id={id}
		// 			name={name}
		// 			className={cn(
		// 				`
		//       appearance-none
		//       bg-transparent
		//      text-gray-500
		//         w-full
		//         px-3
		//         py-1
		//         border
		//         border-gray-300
		//         rounded-lg
		//         focus:outline-none
		//         focus:border-blue-500
		//         focus:ring-1
		//         focus:ring-blue-500
		//         focus:ring-opacity-50
		//         disabled:opacity-50
		//         disabled:cursor-not-allowed
		//         disabled:bg-gray-100
		//         disabled:border-gray-300
		//         transition-colors
		//         duration-300
		//   `,
		// 				{
		// 					' animate-pulse bg-slate-100 cursor-not-allowed': isPending,
		// 				}
		// 			)}>
		// 			<option value=''>{placeholder}</option>
		// 			{isCountryOptions &&
		// 				isCountryOptions.map(country => (
		// 					<option
		// 						key={country.state_code}
		// 						value={country.state_code}>
		// 						{country.state_code}
		// 					</option>
		// 				))}

		// 			{isStateOptions &&
		// 				isStateOptions.map(state => (
		// 					<option
		// 						key={state}
		// 						value={state}>
		// 						{state}
		// 					</option>
		// 				))}

		// 			{isLocalGovtOptions &&
		// 				isLocalGovtOptions.map(localGovt => (
		// 					<option
		// 						key={localGovt}
		// 						value={localGovt}>
		// 						{localGovt}
		// 					</option>
		// 				))}
		// 		</select>
		// 	</div>
	);
};

export default SelectField;
