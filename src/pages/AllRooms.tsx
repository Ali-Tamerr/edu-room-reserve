
import React, { useState } from 'react';
import RoomsList from '@/components/rooms/RoomsList';
import { mockRooms } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AllRooms = () => {
  const [selectedDay, setSelectedDay] = useState<string>("today");
  const [isReserveDialogOpen, setIsReserveDialogOpen] = useState<boolean>(false);

  // Group rooms by status
  const activeRooms = mockRooms.filter(room => room.status === 'active');
  const upcomingRooms = mockRooms.filter(room => room.status === 'upcoming');
  const completedRooms = mockRooms.filter(room => room.status === 'completed');
  
  const days = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "day-after", label: "Day After Tomorrow" },
    { value: "this-week", label: "This Week" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">All Rooms</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Select value={selectedDay} onValueChange={setSelectedDay}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Day" />
            </SelectTrigger>
            <SelectContent>
              {days.map(day => (
                <SelectItem key={day.value} value={day.value}>
                  {day.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Dialog open={isReserveDialogOpen} onOpenChange={setIsReserveDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-edu-blue hover:bg-edu-darkblue">
                Reserve a Room
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Reserve a Room</DialogTitle>
                <DialogDescription>
                  Fill in the details to reserve a room for a lecture.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="teacher-name" className="text-right">
                    Teacher Name
                  </Label>
                  <Input
                    id="teacher-name"
                    className="col-span-3"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="room-number" className="text-right">
                    Room Number
                  </Label>
                  <Input
                    id="room-number"
                    className="col-span-3"
                    placeholder="101"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="start-time" className="text-right">
                    Start Time
                  </Label>
                  <Input
                    id="start-time"
                    type="datetime-local"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="end-time" className="text-right">
                    End Time
                  </Label>
                  <Input
                    id="end-time"
                    type="datetime-local"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="students" className="text-right">
                    Student Count
                  </Label>
                  <Input
                    id="students"
                    type="number"
                    className="col-span-3"
                    placeholder="15"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    className="col-span-3"
                    placeholder="+20 123 456 7890"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="whatsapp" className="text-right">
                    WhatsApp (Optional)
                  </Label>
                  <Input
                    id="whatsapp"
                    className="col-span-3"
                    placeholder="+20 123 456 7890"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsReserveDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-edu-blue hover:bg-edu-darkblue">
                  Reserve
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="space-y-8">
        {activeRooms.length > 0 && (
          <RoomsList 
            rooms={activeRooms} 
            title="Active Lectures" 
          />
        )}
        
        {upcomingRooms.length > 0 && (
          <RoomsList 
            rooms={upcomingRooms} 
            title="Upcoming Lectures" 
          />
        )}
        
        {completedRooms.length > 0 && (
          <RoomsList 
            rooms={completedRooms} 
            title="Completed Lectures" 
          />
        )}
      </div>
    </div>
  );
};

export default AllRooms;
