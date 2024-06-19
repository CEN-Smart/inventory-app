'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavLinks from '@/components/dashboard/nav-links';
import SearchBar from './home/search';
import SvgSupport from '../svg/svg-support';
import SvgSettings from '../svg/svg-settings';
import { cn } from '@/lib/utils';

const links = [
	{
		name: 'Support',
		href: '/dashboard/support',
		IconComponent: SvgSupport,
	},
	{
		name: 'Settings',
		href: '/dashboard/settings',
		IconComponent: SvgSettings,
	},
];
export default function SideNav() {
	const pathname = usePathname();
	return (
		<div className='flex h-full flex-col px-3 py-4 md:pt-24 pt-0 md:px-2'>
			<SearchBar />
			<div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<NavLinks />
				<div className='hidden h-auto w-full grow rounded-md  md:block'></div>

				<div className='flex flex-row gap-2 md:flex-col md:gap-2'>
					{links.map(link => (
						<Link
							className={cn(
								`flex grow items-center rounded-md text-sm font-medium h-fit hover:bg-primary-100/80 md:flex-none md:justify-start px-3 hover:text-white [&_svg]:hover:text-white group py-2`,
								{
									'bg-primary-100 text-white': pathname === link.href,
								}
							)}
							key={link.name}
							href={link.href}>
							<div className='flex items-center gap-2 '>
								<link.IconComponent
									className={cn(
										`size-5 inline-block stroke-muted-200 group-hover:stroke-white transition-all duration-300 ease-in-out`,
										{
											'stroke-white': pathname === link.href,
										}
									)}
								/>
								<span className='hidden md:block'>{link.name}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
