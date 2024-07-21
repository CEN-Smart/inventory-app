import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function formatNumber(number: number) {
	return new Intl.NumberFormat().format(number);
}

export { cn, formatNumber };
