'use client';

import Image from 'next/image';
import Link from 'next/link';
import ButtonNeutral from '../button/ButtonNeutral';
import { useRouter } from 'next/navigation';
import Tabs from './Tabs';
import { Logout } from '@mui/icons-material';
import { useGeneralData } from '@/context/GeneralDataContext';
import { useEffect, useState } from 'react';
import { destroyCookie } from 'nookies';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {loggedInUser, dropLoggedInUserInfo} = useGeneralData();
    
    const router = useRouter();

    useEffect(() => {
        setName(loggedInUser.name || 'Victor');
        setEmail(loggedInUser.email || 'victor.c.okoye@gmail.com');
    }, [loggedInUser.name, loggedInUser.email]);

    const logout = () => {
        dropLoggedInUserInfo();
        destroyCookie(null, 'accessToken');
        router.push('/login');
    }

    return (
        <nav className={`${show === 'block' ? 'fixed lg:hidden' : 'hidden'} px-3 lg:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[21%] xl:w-1/6 h-full min-h-screen bg-white lg:bg-transparent`}>
            <div className={`relative overflow-y-scroll custom-scrollbar2 w-full h-screen min-h-screen flex flex-col justify-between items-start px-1 pt-10 md:pt-0`}>
                <button className='absolute top-2 right-2 text-3xl lg:hidden hover:text-red-500' onClick={closeSidebar}>&times;</button>
                <div className="h-full min-h-full flex flex-col justify-start items-start gap-4 pb-5 md:py-6">
                    <Link href="/" className="flex items-center gap-1">
                        <div className="relative size-14 px-3 rounded-full">
                            <Image
                                src="/images/logo.png"
                                alt="BillMunk's Logo"
                                fill
                                priority
                                className="object-contai rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <p className="font-semibold text-3xl lg:text-4xl">Saverrr.</p>
                    </Link>
                    
                    <div className="flex-1 flex flex-col items-start justify-between gap-5 pt-6">
                        <ul className="flex flex-col items-start justify-start gap-3 w-full">
                            <Tabs />
                        </ul>

                        <div className="border-t">
                            <div className="pl-2 pt-2 pb-5 flex items-center gap-3 border-t">
                                <div className="relative size-9 rounded-full">
                                    <Image
                                        src="/images/3.jpeg"
                                        alt="User's profile image"
                                        fill
                                        className="object-contain rounded-full"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='capitalize text-[12px] text-textGray font-semibold'>{name}</p>
                                    <p className='text-[10px] text-textGray'>{`${email}`}</p>
                                </div>
                                <ButtonNeutral
                                    onClick={logout}
                                    classes={`focus:ring-primary bg-transparent border-transparent hover:bg-[#F6F6F6] border hover:border-customGray p-1 rounded-radius-4 transition-all duration-300 ease-in-out`}
                                    icon1={<Logout style={{fontSize: '20px'}} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
