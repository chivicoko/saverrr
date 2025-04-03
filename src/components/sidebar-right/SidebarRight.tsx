'use client';

import UserSection from './UserSection';
import UserBudgets from './UserBudgets';
import QuickAction from '../dashboard/dataDisplay/QuickAction';
import { quickActions } from '@/data/base';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const SidebarRight: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    
    return (
        <nav className={`${show === 'block' ? 'fixed md:hidden' : 'hidden'} md:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 md:w-[33.5%] lg:w-[23%] h-full min-h-fit bg-white md:bg-transparent`}>
            <div className="divide-y divide-customGray">
                <UserSection />

                <div className="divide-y divide-customGray space-y-6">                    
                    <div className="space-y-2 md:space-y-5 py-3 px-4">
                        <div className="flex items-center justify-between">
                            <h2 className='font-semibold'>Quick Actions</h2>
                        </div>

                        <div className="w-full flex items-center flex-wrap">
                            {quickActions.map(item =>
                                <QuickAction key={item.id} item={item} />
                            )}
                        </div>
                    </div>

                    <UserBudgets />
                    
                    <button className='self-end mr-3 md:mr-8 mt-2 text-3xl md:hidden' onClick={closeSidebar}>&times;</button>
                </div>
            </div>
        </nav>
    );
};

export default SidebarRight;
