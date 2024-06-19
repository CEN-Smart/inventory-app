'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
	label?: string;
	onClick?: () => void;
	loadingLabel?: string;
	className?: string;
	children?: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
	label,
	loadingLabel,
	onClick,
	className,
	children,
}) => {
	const { pending } = useFormStatus();
	return (
		<Button
			type='submit'
			size='lg'
			onClick={onClick}
			className={cn(
				`
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-lg
        focus:outline-none
        focus:border-primary-100
        focus:ring-1
        focus:ring-primary-100
        focus:ring-opacity-50
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:bg-gray-100
        disabled:border-gray-300
      `,
				className,
				{
					'cursor-not-allowed': pending,
				}
			)}>
			{pending ? loadingLabel : children || label}
		</Button>
	);
};

export default SubmitButton;
