'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import { useReducer } from 'react';
import { useFormStatus } from 'react-dom';

interface InputFieldProps {
	label: string;
	type: string;
	id: string;
	name: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	formState?: {
		errors: Record<string, string[]>;
	};
	value?: string;
	className?: string;
	isPasswordField?: boolean;
	isFileField?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type,
	id,
	name,
	placeholder,
	formState,
	value,
	className,
	onChange,
	isPasswordField = false,
	isFileField = false,
}) => {
	const [showPassword, setShowPassword] = useReducer(state => !state, false);
	const { pending } = useFormStatus();

	return (
		<div className={cn(`flex flex-col gap-2`, className)}>
			<Label
				className={cn(``, {
					hidden: isFileField,
					'text-destructive':
						formState?.errors[name as keyof typeof formState.errors],
				})}
				htmlFor={id}>
				{label}
			</Label>
			<div className={cn(`relative`)}>
				<Input
					defaultValue={value}
					onChange={onChange}
					className={cn(
						`
            w-full
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
            disabled:border-gray-300
      `,
						{
							'cursor-not-allowed': pending,
							hidden: isFileField,
							'border-destructive focus-visible:ring-transparent':
								formState?.errors[name as keyof typeof formState.errors],
						}
					)}
					type={isPasswordField && showPassword ? 'text' : type}
					id={id}
					name={name}
					placeholder={placeholder}
				/>

				{isPasswordField && (
					<button
						type='button'
						className={cn(
							`
                    absolute
                  
                    inset-y-0
                    right-0
                    px-4
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
						{showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
					</button>
				)}
			</div>
			<span
				className={cn(`
                text-sm
                text-destructive
        `)}>
				{formState?.errors[name as keyof typeof formState.errors]?.join(', ') ||
					null}
			</span>
		</div>
	);
};

export default InputField;
