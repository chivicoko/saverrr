import Dashboard from "@/components/dashboard/Dashboard";
import WalletBallanceCard from "@/components/dashboard/dataDisplay/WalletBallanceCard";
import Navbar from "@/components/Navbar";
import SidebarRight from "@/components/sidebar-right/SidebarRight";
import Sidebar from "@/components/sidebar/Sidebar";
import { walletBalanceInfo } from "@/data/base";

const HomePage: React.FC = () => {

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
        <Dashboard />
      </div>
      <SidebarRight />
    </div>
  );
};

export default HomePage;
