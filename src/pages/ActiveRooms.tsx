
import React from 'react';
import RoomsList from '@/components/rooms/RoomsList';
import { mockRooms } from '@/lib/mock-data';

const ActiveRooms = () => {
  // Filter for active rooms only
  const activeRooms = mockRooms.filter(room => room.status === 'active');
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold dark:text-white">Active Rooms</h1>
      
      <RoomsList 
        rooms={activeRooms} 
        title="Current Active Lectures" 
        className="border border-border rounded-lg"
      />
    </div>
  );
};

export default ActiveRooms;
