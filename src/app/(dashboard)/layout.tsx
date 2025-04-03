
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import SidebarRight from '@/components/sidebar-right/SidebarRight';
import { ReactNode } from 'react';
import WalletBallanceCard from '@/components/dashboard/dataDisplay/WalletBallanceCard';
import { walletBalanceInfo } from '@/data/base';

export const metadata = {
  title: "Payflex | Payflex Banking App",
  description: "Payflex is a modern Banking platform for everyone.",
};

export default function Layout({ children }: { children: ReactNode }) {
  
  return (
    <div className='bg-[#f8fbff] h-full min-h-screen flex'>
      <Sidebar />
      <div className="px-2 md:px-5 w-full md:w-4/6 lg:w-[61%] h-full min-h-screen col-span-2 border-x border-customGray">
        <Navbar />
        <div className="flex items-center justify-centergap-2 gap-3 md:gap-4 lg:gap-2 xl:gap-6 flex-wrap mt-5">
          {walletBalanceInfo.map(item =>
            <WalletBallanceCard key={item.id} item={item} />
          )}
        </div>
        {children}
      </div>
      <SidebarRight />
    </div>
  );
}
