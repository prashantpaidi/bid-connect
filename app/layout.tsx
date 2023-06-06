import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
// import Modal from './components/modals/Modal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import TenderModal from './components/modals/TenderModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Bid Connect',
  description:
    'A Node.js and Nextjs web application for connecting buyers and sellers of goods and services',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='en'>
      <body className={nunito.className}>
        {/* <Modal isOpen title='how' actionLabel='sumbit' /> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <TenderModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
