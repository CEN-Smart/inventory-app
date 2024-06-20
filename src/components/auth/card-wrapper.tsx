'use client';

import { StaticImageData } from 'next/image';

import { BackButton } from '@/components/auth/back-button';
import { Header } from '@/components/auth/header';
import { Social } from '@/components/auth/social';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel?: string;
	backButtonHref?: string;
	message?: string;
	logo?: StaticImageData | string;
	showSocial?: boolean;
	actionLabel?: string;
	className?: string;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	message,
	logo,
	showSocial,
	actionLabel,
	className,
}: CardWrapperProps) => {
	return (
		<Card
			className={cn(`max-w-[400px] w-full shadow-none border-none`, className)}>
			<CardHeader>
				<Header
					logo={typeof logo === 'string' ? logo : logo?.src}
					message={message}
					label={headerLabel}
				/>
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				{backButtonHref && (
					<BackButton
						label={backButtonLabel || ''}
						href={backButtonHref}
						actionLabel={actionLabel}
					/>
				)}
			</CardFooter>
		</Card>
	);
};
