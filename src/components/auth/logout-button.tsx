'use client';
import { useRouter } from 'next/navigation';

export const LogoutButton = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const handleLogout = async () => {
		router.push('/auth/login');
	};
	return <form action={handleLogout}>{children}</form>;
};
