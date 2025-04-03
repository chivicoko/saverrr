'use client';

import React, {Dispatch, memo, SetStateAction, useEffect, useState} from 'react'
import ButtonNeutral from './button/ButtonNeutral';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SearchProps {
  searchText: string;
  setSearchText: (Dispatch<SetStateAction<string>>);
}

const Search = ({searchText, setSearchText}: SearchProps) => {
  const [isClient, setIsClient] = useState(false);

  const pathName = usePathname();
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  return (
    <div className={`${pathName === '/' ? 'w-2/3' : 'w-1/3'} ml-1 my-2 px-1 bg-white border border-customGray flex items-center justify-between rounded-radius-8 focus-within:ring-1 focus-within:ring-primary hover:ring-primary`}>
      <ButtonNeutral classes='p-0 ml-1 rounded-full' icon1={<div className='relative size-[16px]'><Image src="/icons/search-md.svg" fill alt="search icon" className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
      <input
        type="text"
        placeholder="Search"
        name="searchText"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-transparent w-full py-[6px] px-1 border-0 text- focus:outline-0 focus:ring-0 text-[#666666]"
      />
    </div>
  )
}

export default memo(Search);