"use client"

import Loading from '@/app/loading';
import AuthPagesHeader from '@/components/AuthPagesHeader';
import AuthPagesRightSide from '@/components/AuthPagesRightSide';
import ButtonOne from '@/components/button/ButtonOne';
import { showToast } from '@/components/HotToast';
import InputField from '@/components/inputs/InputField';
import { registerUser } from '@/features/auth/actions';
import { registerSchema, RegisterType } from '@/features/auth/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';


interface RegisterProps {
    data?: RegisterType;
}

const RegisterPage: React.FC<RegisterProps> = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    
    const router = useRouter();
    const handlePasswordToggle = () => setIsPasswordOpen(prev => !prev);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
        defaultValues: data,
      });
    
      const onFormSubmit = handleSubmit(async (data) => {        
        setIsLoading(true);
        console.log(data);
        const UserData = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone_number: data.phone_number,
            address: data.address,
        }

        try {
            const res = await registerUser(UserData);
            if (res.message === 'Registration successful') {
                setIsLoading(false);
                router.push('/login');
                setTimeout(() => {
                    showToast(`${res.message}`);
                }, 500);
                // localStorage.setItem('userData', JSON.stringify(res.data));
            }
        } catch (error) {
            setIsLoading(false);
            setTimeout(() => {
                showToast(`Error: ${(error as Error).message || 'An unexpected error occurred'}`, 'error');
            }, 500);
        }
    });

      
    if (isLoading) {
        return <Loading />;
    };

  return (
    <div className='h-full min-h-screen w-full flex flex-col md:flex-row '>
        <Toaster position="top-center" reverseOrder={false} />
        <div className='order-2 md:order-1 w-full md:w-1/2 h-fit py-8 md:h-screen min-h-full flex items-center justify-center'>
            <div className="flex flex-col gap-6 w-[65%] md:w-[70%]">
                <AuthPagesHeader />

                <div className="self-start">
                    <h1 className='text-2xl font-semibold'>Sign up</h1>
                    <p className='text-base'>Welcome back! Please enter your details.</p>
                </div>

                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="w-full space-y-2 md:space-y-3">
                        <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                            <div className='w-full md:w-1/2'>
                                <InputField
                                    {...register("name")}
                                    label="First Name"
                                    error={errors.name}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. Mikel'
                                />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <InputField
                                    {...register("email")}
                                    label="Email Address"
                                    error={errors.email}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. mikel.adeyemi@gmail.com'
                                />
                            </div>
                        </div>
                            
                        <div className="w-full flex flex-col md:flex-row items-center gap-2 md:gap-3">
                            <div className='w-full md:w-1/2'>
                                <InputField
                                    {...register("phone_number")}
                                    label="Phone Number"
                                    error={errors.phone_number}
                                    required
                                    classes='w-full'
                                    placeholderText='eg. +2348037746378'
                                />
                            </div>

                            <div className='w-full md:w-1/2'>
                                <InputField
                                    label='Password'
                                    icon2={!isPasswordOpen ? <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> : <Key style={{fontSize: '19px', }} />}
                                    onClick={handlePasswordToggle}
                                    type={!isPasswordOpen ? 'password' : 'text'}
                                    {...register("password")}
                                    error={errors.password}
                                    required
                                    classes='w-full'
                                />
                            </div>
                        </div>
                                
                        <div className="w-full">
                            <InputField
                                {...register("address")}
                                label="Address"
                                error={errors.address}
                                required
                                classes='w-full'
                                placeholderText='eg. No.7 Azikiwe Close, Maitama Abuja Nigeria'
                            />
                        </div>
                        
                        <ButtonOne type='submit' classes='py-2 px-16 w-full' btnText1='Sign up' />
                        
                        <p className='text-center text-sm'>Already have an account? <Link href='/login' className='text-blue-600'>Login</Link></p>
                    </form>
                </div>
            </div>

        </div>

        <AuthPagesRightSide />
    </div>
  )
}

export default RegisterPage;