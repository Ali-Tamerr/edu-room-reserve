
import React from 'react';
import RoomCard, { RoomStatus } from './RoomCard';
import { cn } from '@/lib/utils';

export interface Room {
  id: string;
  roomNumber: string;
  teacherName: string;
  startTime: Date;
  endTime: Date;
  studentCount?: number;
  status: RoomStatus;
}

interface RoomsListProps {
  rooms: Room[];
  title?: string;
  showHeader?: boolean;
  maxItems?: number;
  className?: string;
}

const RoomsList = ({ rooms, title = 'Rooms', showHeader = true, maxItems, className }: RoomsListProps) => {
  const displayRooms = maxItems ? rooms.slice(0, maxItems) : rooms;
  
  return (
    <div className={cn("space-y-4 w-full", className)}>
      {showHeader && (
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          {maxItems && rooms.length > maxItems && (
            <a href="#" className="text-edu-blue hover:underline text-sm">
              View all ({rooms.length})
            </a>
          )}
        </div>
      )}
      
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayRooms.map(room => (
          <RoomCard
            key={room.id}
            id={room.id}
            roomNumber={room.roomNumber}
            teacherName={room.teacherName}
            startTime={room.startTime}
            endTime={room.endTime}
            studentCount={room.studentCount}
            status={room.status}
          />
        ))}
      </div>
      
      {displayRooms.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No rooms to display
        </div>
      )}
    </div>
  );
};

export default RoomsList;
