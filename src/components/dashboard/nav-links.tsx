'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import SvgHome from '../svg/svg-home';
import SvgProducts from '../svg/svg-products';
import SvgStocks from '../svg/svg-stocks';
import SvgUsers from '../svg/svg-users';

const links = [
	{
		name: 'Home',
		href: '/dashboard',
		IconComponent: SvgHome,
	},
	{
		name: 'Products',
		href: '/dashboard/products',
		IconComponent: SvgProducts,
	},
	{
		name: 'Stock',
		href: '/dashboard/stock',
		IconComponent: SvgStocks,
	},
	{
		name: 'Users',
		href: '/dashboard/users',
		IconComponent: SvgUsers,
	},
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			<Accordion
				type='single'
				collapsible
				className='flex md:flex-col md:gap-2 flex-row w-full'>
				{links.map(link => {
					const Icon = link.IconComponent;
					return (
						<Link
							className={cn(`px-3 `)}
							key={link.name}
							href={link.href}>
							<AccordionItem
								value={link.name}
								className='md:flex-grow flex-grow-0 border-none md:[&>svg]:block [&>svg]:hidden  '>
								<AccordionTrigger
									className={cn(
										`hover:no-underline flex items-center group py-2 px-3 rounded-md text-sm font-medium grow  hover:bg-primary-100/80  md:flex-none md:justify-start hover:text-white [&>svg]:hover:text-white w-full [&>svg]:ml-auto`,
										{
											'bg-primary-100 [&>svg]:text-white text-white':
												pathname === link.href,
										}
									)}>
									<div className='flex items-center gap-2 svg__sibling shrink-0'>
										<Icon
											className={cn(
												`size-5 
												 inline-block
												stroke-muted-200 group-hover:stroke-white transition-all duration-300 ease-in-out`,
												{
													'stroke-white': pathname === link.href,
												}
											)}
										/>
										<p className='hidden md:block'>{link.name}</p>
									</div>
								</AccordionTrigger>
								<AccordionContent className='flex-grow'>
									<p className=''>{link.name}</p>
								</AccordionContent>
							</AccordionItem>
						</Link>
					);
				})}
			</Accordion>
		</>
	);
}
