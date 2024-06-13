import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{
		name: 'Dashboard',
		href: '/dashboard',
		// icon: require('@/assets/icons/dashboard.svg').default,
	},
	{
		name: 'Inventory',
		href: '/dashboard/inventory',
		// icon: require('@/assets/icons/inventory.svg').default,
	},
	{
		name: 'Orders',
		href: '/dashboard/orders',
		// icon: require('@/assets/icons/orders.svg').default,
	},
	{
		name: 'Customers',
		href: '/dashboard/customers',
		// icon: require('@/assets/icons/customers.svg').default,
	},
	{
		name: 'Settings',
		href: '/dashboard/settings',
		// icon: require('@/assets/icons/settings.svg').default,
	},
];

export default function NavLinks() {
	return (
		<>
			{links.map(link => {
				// const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className='flex text-gray-700 h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
						{/* <LinkIcon className='size-6' /> */}
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
