'use client;'

import { menuItems } from '../../data/base';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';
import { usePathname } from 'next/navigation';

const Tabs = () => {

    const pathName = usePathname();
    // console.log(pathName);

    const isActivePath = (route: string | null) => {
        if (!route) return false;
    
        if (route === '/') {
            return pathName === route;
        } else {
            return pathName.startsWith(route);
        }
    };


  return (
    <>
    {menuItems.map(item =>
        <li key={item.id} className='w-full md:w-[80%]'>
            <ButtonLinkNeutral
                href={item.url}
                btnText1={item.title}
                classes={`${isActivePath(item.url) ? "text-white bg-primary" : "text-textGray bg-transparent border-transparent"} w-full flex items-center gap-2 hover:text-white hover:bg-primary py-2 px-3 rounded-radius-8 text-sm transition-bg duration-300 ease-in-out`}
                icon1={<item.icon style={{fontSize: '16px'}} />}
            />
        </li>
    )}
    </>
  )
}

export default Tabs;