import Image from 'next/image';

import { cn } from '@/lib/utils';

type CustomButtonProps = {
	src?: string;
	label: string;
	alt?: string;
	className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton = ({
	src,
	label,
	alt = '',
	className,
	...rest
}: CustomButtonProps) => {
	return (
		<button
			className={cn(
				`flex items-center justify-center gap-2 px-4 py-2 font-semibold text-white bg-primary-100 hover:bg-primary-100/90 transition-colors duration-300 rounded-lg focus:outline-none`,
				className
			)}
			{...rest}>
			{src && (
				<Image
					width={20}
					height={20}
					src={src}
					alt={alt}
				/>
			)}
			{label}
		</button>
	);
};

export default CustomButton;
