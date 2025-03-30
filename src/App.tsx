
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "./components/theme/ThemeProvider";

// Pages
import Dashboard from "./pages/Dashboard";
import ActiveRooms from "./pages/ActiveRooms";
import AllRooms from "./pages/AllRooms";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Layout
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => {
  // Mock user state - in a real app, this would come from an auth provider
  const [user, setUser] = useState<{
    name: string;
    email: string;
    imageUrl: string;
  } | null>(null);

  // Mock login functions
  const handleLogin = () => {
    setUser({
      name: "Test User",
      email: "user@example.com",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout user={user} />}>
                <Route index element={<Dashboard />} />
                <Route path="active-rooms" element={<ActiveRooms />} />
                <Route path="all-rooms" element={<AllRooms />} />
                <Route path="profile" element={<Profile user={user} onLogin={handleLogin} onLogout={handleLogout} />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
