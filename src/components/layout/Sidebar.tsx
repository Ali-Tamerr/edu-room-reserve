
import React from 'react';
import { 
  Home, 
  Activity, 
  Grid, 
  User,
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Active Rooms", icon: Activity, path: "/active-rooms" },
    { name: "All Rooms", icon: Grid, path: "/all-rooms" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div 
      className={cn(
        "fixed inset-y-0 right-0 w-64 bg-white border-l border-slate-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex justify-between items-center h-16 px-4 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-edu-blue">Menu</h2>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-slate-500">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "default" : "ghost"} 
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.path 
                      ? "bg-edu-blue text-white hover:bg-edu-darkblue" 
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
