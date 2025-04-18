
import React from 'react';
import { Menu, Bell, Moon, Sun } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/ThemeProvider';

interface TopBarProps {
  toggleSidebar: () => void;
  user: {
    name: string;
    email: string;
    imageUrl: string;
  } | null;
}

const TopBar = ({ toggleSidebar, user }: TopBarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center">
        {user && (
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={user.imageUrl} alt={user.name} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-slate-500 dark:text-slate-400" aria-label="Toggle theme">
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="text-slate-500 dark:text-slate-400">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-slate-500 dark:text-slate-400">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TopBar;
