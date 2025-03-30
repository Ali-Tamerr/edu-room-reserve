
import { Room } from '@/components/rooms/RoomsList';

// Helper to create dates relative to now
const getDate = (daysOffset: number = 0, hoursOffset: number = 0, minutesOffset: number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  date.setHours(date.getHours() + hoursOffset);
  date.setMinutes(date.getMinutes() + minutesOffset);
  return date;
};

// Mock rooms data
export const mockRooms: Room[] = [
  {
    id: '1',
    roomNumber: '101',
    teacherName: 'Dr. Ahmed Mohamed',
    startTime: getDate(0, -1),
    endTime: getDate(0, 2),
    studentCount: 15,
    status: 'active',
  },
  {
    id: '2',
    roomNumber: '102',
    teacherName: 'Ms. Sarah Ibrahim',
    startTime: getDate(0, -2),
    endTime: getDate(0, 1),
    studentCount: 12,
    status: 'active',
  },
  {
    id: '3',
    roomNumber: '103',
    teacherName: 'Mr. Mahmoud Salah',
    startTime: getDate(0, 0, 30),
    endTime: getDate(0, 3, 30),
    studentCount: 8,
    status: 'active',
  },
  {
    id: '4',
    roomNumber: '104',
    teacherName: 'Dr. Laila Adel',
    startTime: getDate(0, 3),
    endTime: getDate(0, 5),
    studentCount: 20,
    status: 'upcoming',
  },
  {
    id: '5',
    roomNumber: '105',
    teacherName: 'Mr. Hassan Ali',
    startTime: getDate(0, 4),
    endTime: getDate(0, 7),
    studentCount: 10,
    status: 'upcoming',
  },
  {
    id: '6',
    roomNumber: '106',
    teacherName: 'Ms. Nada Karam',
    startTime: getDate(1, 1),
    endTime: getDate(1, 4),
    studentCount: 15,
    status: 'upcoming',
  },
  {
    id: '7',
    roomNumber: '107',
    teacherName: 'Dr. Omar Nabil',
    startTime: getDate(0, -5),
    endTime: getDate(0, -2),
    studentCount: 18,
    status: 'completed',
  },
  {
    id: '8',
    roomNumber: '108',
    teacherName: 'Ms. Heba Mostafa',
    startTime: getDate(0, -6),
    endTime: getDate(0, -3),
    studentCount: 14,
    status: 'completed',
  },
];

// Mock daily earnings data
export const mockDailyEarnings = [
  { date: 'Mon', amount: 1200 },
  { date: 'Tue', amount: 1500 },
  { date: 'Wed', amount: 2200 },
  { date: 'Thu', amount: 1800 },
  { date: 'Fri', amount: 2500 },
  { date: 'Sat', amount: 3000 },
  { date: 'Sun', amount: 2000 },
];

// Mock monthly earnings data
export const mockMonthlyEarnings = [
  { month: 'Jan', amount: 30000 },
  { month: 'Feb', amount: 32000 },
  { month: 'Mar', amount: 35000 },
  { month: 'Apr', amount: 40000 },
  { month: 'May', amount: 38000 },
  { month: 'Jun', amount: 42000 },
  { month: 'Jul', amount: 45000 },
  { month: 'Aug', amount: 50000 },
  { month: 'Sep', amount: 48000 },
  { month: 'Oct', amount: 52000 },
  { month: 'Nov', amount: 55000 },
  { month: 'Dec', amount: 60000 },
];
