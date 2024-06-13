import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Zequence Digital Inventory Management System',
    template: '%s | Zequence Digital Inventory Management System',
  },
  metadataBase: new URL('https://inventory-management-system.vercel.app'),
  description:
    'Inventory Management System is a web application that helps businesses manage their inventory.',
  keywords: [
    'Inventory Management System',
    'Inventory',
    'Management',
    'System',
    'Zequence',
    'Digital',
  ],
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
    ],
  },
};

export const dynamic = 'force-static';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
