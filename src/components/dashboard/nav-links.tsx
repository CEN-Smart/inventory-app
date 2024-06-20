'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

import SvgHome from '../svg/svg-home';
import SvgProducts from '../svg/svg-products';
import SvgStocks from '../svg/svg-stocks';
import SvgUsers from '../svg/svg-users';

const links = [
	{
		name: 'Home',
		IconComponent: SvgHome,
		subLinks: [
			{
				name: 'Overview',
				href: '/dashboard/overview',
			},
			{
				name: 'Notifications',
				href: '/dashboard/notifications',
			},
		],
	},
	{
		name: 'Products',
		IconComponent: SvgProducts,
		subLinks: [
			{
				name: 'Add product',
				href: '/dashboard/products/add-product',
			},
			{
				name: 'List products',
				href: '/dashboard/products/list-products',
			},
			{
				name: 'Product history',
				href: '/dashboard/products/product-history',
			},
		],
	},
	{
		name: 'Stock',
		IconComponent: SvgStocks,
		subLinks: [
			{
				name: 'Add stock',
				href: '/dashboard/stocks/add-stock',
			},
			{
				name: 'List stock',
				href: '/dashboard/stocks/list-stock',
			},
			{
				name: 'Add stock transfer',
				href: '/dashboard/stocks/add-stock-transfer',
			},
			{
				name: 'Stock request',
				href: '/dashboard/stocks/stock-request',
			},
		],
	},
	{
		name: 'Users',
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
						<AccordionItem
							key={link.name}
							value={link.name}
							className='md:flex-grow flex-grow-0 border-none md:[&>svg]:block [&>svg]:hidden  '>
							<AccordionTrigger
								className={cn(
									`hover:no-underline flex  items-center group py-2 px-3 rounded-md text-sm font-medium grow  hover:bg-primary-100/80  md:flex-none md:justify-start data-[state=open]:bg-primary-100 hover:text-white [&[data-state=open]>*]:text-white [&>svg]:hover:text-white w-full [&>svg]:ml-auto [&[data-state=open]>div>svg]:stroke-white`
								)}>
								<div className='flex items-center gap-2 svg__sibling shrink-0'>
									<Icon
										className={cn(
											`size-5 
												 inline-block
												stroke-muted-200 group-hover:stroke-white transition-all duration-300 ease-in-out`
										)}
									/>
									<p className='hidden md:block'>{link.name}</p>
								</div>
							</AccordionTrigger>
							<AccordionContent className='flex-grow'>
								{link.subLinks && (
									<ul className='flex flex-col gap-1 md:ml-8'>
										{link.subLinks.map(subLink => (
											<li
												key={subLink.name}
												className={cn(
													`group hover:text-primary-100/80 px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out`
												)}>
												<Link
													href={subLink.href}
													className={cn(
														`flex items-center gap-2 w-full h-full`,
														{
															'font-semibold text-primary-100':
																pathname.includes(subLink.href),
														}
													)}>
													<p className='flex items-center justify-between gap-2 w-full'>
														<span className=' inline-block'>
															{subLink.name}
														</span>

														{subLink.name === 'Notifications' && (
															<span className='bg-secondary-200/20 text-secondary-200 rounded-full min-w-[36px] min-h-6 inline-flex items-center justify-center ml-auto'>
																10
															</span>
														)}
													</p>
												</Link>
											</li>
										))}
									</ul>
								)}
							</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
}
