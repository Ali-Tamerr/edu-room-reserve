
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type RoomStatus = 'active' | 'upcoming' | 'completed';

interface RoomCardProps {
  id: string;
  roomNumber: string;
  teacherName: string;
  startTime: Date;
  endTime: Date;
  studentCount?: number;
  status: RoomStatus;
}

const RoomCard = ({
  roomNumber,
  teacherName,
  startTime,
  endTime,
  studentCount,
  status
}: RoomCardProps) => {
  // Calculate remaining time for active rooms
  const calculateRemainingTime = () => {
    if (status !== 'active') return null;
    
    const now = new Date();
    const diffMs = endTime.getTime() - now.getTime();
    
    if (diffMs <= 0) return 'Ending now';
    
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${diffHrs}h ${diffMins}m remaining`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const statusColors = {
    active: 'bg-edu-green',
    upcoming: 'bg-edu-yellow',
    completed: 'bg-edu-red'
  };

  const statusLabels = {
    active: 'Active',
    upcoming: 'Upcoming',
    completed: 'Completed'
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center">
        <div className={cn("w-2 h-full mr-2", statusColors[status])} />
        <div className="flex-1">
          <CardHeader className="flex flex-row items-center justify-between py-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-lg">Room {roomNumber}</h3>
              <Badge variant="outline" className="ml-2">
                {statusLabels[status]}
              </Badge>
            </div>
            {studentCount && (
              <Badge className="bg-edu-blue">
                {studentCount} Students
              </Badge>
            )}
          </CardHeader>
          <CardContent className="pb-4">
            <div className="grid gap-2">
              <div className="font-medium">{teacherName}</div>
              <div className="text-sm text-muted-foreground">
                {formatDate(startTime)} | {formatTime(startTime)} - {formatTime(endTime)}
              </div>
              {status === 'active' && (
                <div className="text-sm font-medium text-edu-green mt-1">
                  {calculateRemainingTime()}
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default RoomCard;
