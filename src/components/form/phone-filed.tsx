import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface PhoneFieldProps {
	label: string;
	type: string;
	id: string;
	name: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	value?: string;
	className?: string;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
	label,
	type,
	id,
	name,
	placeholder,
	value,
	className,
	onChange,
}) => {
	return (
		<div className={cn(`flex flex-col gap-2`, className)}>
			<Label
				htmlFor={id}
				className={cn(``, {})}>
				{label}
			</Label>
			<div className={cn(`relative`)}>
				<div
					className={cn(
						`absolute left-0 top-0 flex items-center justify-center h-full px-2 text-gray-500`
					)}>
					<select
						className={cn(
							`appearance-none px-2 bg-transparent border-none  focus:outline-none
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            focus:ring-opacity-50
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:bg-gray-100
            disabled:border-gray-300
            transition-colors
            duration-300
                text-gray-500`
						)}
						name='country_code'
						id='country_code'
						defaultValue='NG'>
						<option value='NG'>NG</option>
					</select>
					<div
						className={cn(
							`absolute left-8 top-0 flex items-center justify-center h-full px-2 text-gray-500`
						)}></div>
				</div>

				<Input
					defaultValue={value}
					onChange={onChange}
					className={cn(
						`
            w-full
            pl-[3.8rem]
            pr-4
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
            disabled:border-gray-300
            transition-colors
            duration-300
            `,
						{}
					)}
					type={type}
					id={id}
					name={name}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export { PhoneField };
