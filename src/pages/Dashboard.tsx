
import React from 'react';
import EarningsChart from '@/components/dashboard/EarningsChart';
import EarningsCard from '@/components/dashboard/EarningsCard';
import RoomsList from '@/components/rooms/RoomsList';
import { mockRooms, mockDailyEarnings, mockMonthlyEarnings } from '@/lib/mock-data';

const Dashboard = () => {
  // Filter for active rooms only
  const activeRooms = mockRooms.filter(room => room.status === 'active');
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <EarningsChart 
            dailyData={mockDailyEarnings}
            monthlyData={mockMonthlyEarnings}
          />
        </div>
        <div>
          <EarningsCard amount={3000} percentageChange={12.5} />
        </div>
      </div>
      
      <div className="mt-6">
        <RoomsList 
          rooms={activeRooms} 
          title="Active Rooms" 
          maxItems={6}
        />
      </div>
    </div>
  );
};

export default Dashboard;
