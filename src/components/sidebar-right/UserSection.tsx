'use client';

import { useGeneralData } from '@/context/GeneralDataContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const UserSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {loggedInUser} = useGeneralData();

    useEffect(() => {
        setName(loggedInUser.name || 'Victor Okoye');
        setEmail(loggedInUser.email || 'victor.c.okoye@gmail.com');
    }, [loggedInUser.name, loggedInUser.email]);
    
  return (
    <div>
        <div className="relative mb-16">
            <div className="relative w-full h-[100px]">
                <Image
                    src="/images/profile_banner.jpg"
                    alt="User's profile banner"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="absolute -bottom-1/2 left-4 size-20 rounded-full border-2 border-white shadow-md">
                <Image
                    src="/images/3.jpeg"
                    alt="User's profile picture"
                    fill
                    priority
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>

        <div className='px-4 mb-6'>
            <h2 className='font-semibold'>{name}</h2>
            <p className='text-textGray text-sm'>{`${email}`}</p>
        </div>
    </div>
  )
}

export default UserSection;