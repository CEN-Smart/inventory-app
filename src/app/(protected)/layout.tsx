import SideNav from '@/components/dashboard/side-nav';
import WelcomeAndActions from '@/components/dashboard/welcome-and-actions';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col md:flex-row  h-screen'>
			<div className='  shadow-md border border-muted-600'>
				<SideNav />
			</div>
			<div className='flex-1 p-6 overflow-y-auto h-screen md:p-12'>
				<WelcomeAndActions />
				<div className='flex-1'>{children}</div>
			</div>
		</div>
	);
}
