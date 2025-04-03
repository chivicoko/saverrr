"use client";

import { usePathname, useRouter } from 'next/navigation';
import { currentUserInfo, INITIAL_GENERAL_DATA } from '../data/base';
import { GeneralDataProps, UserDataProps } from '../types/base';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
// import {jwtDecode} from 'jwt-decode';

interface GeneralDataContextType {
  currentData: GeneralDataProps;
  setCurrentData: (data: GeneralDataProps) => void;
  currentUserData: UserDataProps;
  setCurrentUserData: (data: UserDataProps) => void;
  loggedInUser: {email: string, password: string, name: string};
  setLoggedInUser: (data: {email: string, password: string, name: string}) => void;
  currentTab: string;
  updateGeneralData: (data: GeneralDataProps) => void;
  dropLoggedInUserInfo: () => void;
}

const GeneralDataContext = createContext<GeneralDataContextType | undefined>(undefined);

export const GeneralDataProvider = ({ children }: { children: ReactNode }) => {
  const [currentData, setCurrentData] = useState<GeneralDataProps>(INITIAL_GENERAL_DATA);
  const [currentUserData, setCurrentUserData] = useState<UserDataProps>(currentUserInfo);
  const [loggedInUser, setLoggedInUser] = useState<{
    name: string,
    email: string,
    password: string,
  }>({
    name: '',
    email: '',
    password: '',
  });
  
  const router = useRouter();
  const pathName = usePathname();  

  useEffect(() => {    
    const storedData = localStorage.getItem('currentData');
    if (storedData) {
      setCurrentData(JSON.parse(storedData));
    }

    const currentUserData = localStorage.getItem('userData');
    if (currentUserData) {
      setCurrentUserData(JSON.parse(currentUserData));
    }

    const loggedInUserData = localStorage.getItem('loggedInUserInfo');
    if (loggedInUserData) {
      setLoggedInUser(JSON.parse(loggedInUserData));
    }
    
    // if ((pathName === '/' || pathName === '/api-docs' || pathName === '/contact-support' || pathName === '/whatsapp') && !loggedInUserData) {
    //   router.push('/login');
    // };
    
  }, [pathName, router]);
  // console.log(currentData);
  
  const updateGeneralData = (data: GeneralDataProps) => {
    setCurrentData(data);
    localStorage.setItem('currentData', JSON.stringify(data));
  };
  
  const dropLoggedInUserInfo = () => {
    setLoggedInUser({
      email: '',
      password: '',
      name: '',
    });

    localStorage.removeItem('loggedInUserInfo');
  };

  return (
    <GeneralDataContext.Provider
      value={{
        currentData,
        setCurrentData,
        currentUserData,
        setCurrentUserData,
        loggedInUser,
        setLoggedInUser,
        currentTab: currentData.currentTab,
        updateGeneralData,
        dropLoggedInUserInfo,
        // currentUser,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export const useGeneralData = () => {
  const context = useContext(GeneralDataContext);
  if (!context) {
    throw new Error('useGeneralData must be used within a GeneralDataProvider');
  }
  return context;
};
