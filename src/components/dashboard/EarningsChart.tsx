
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface EarningsChartProps {
  dailyData: Array<{
    date: string;
    amount: number;
  }>;
  monthlyData: Array<{
    month: string;
    amount: number;
  }>;
}

const EarningsChart = ({ dailyData, monthlyData }: EarningsChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earnings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData}>
                <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value} EGP`}
                />
                <Tooltip 
                  formatter={(value) => [`${value} EGP`, 'Earnings']}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Bar 
                  dataKey="amount" 
                  fill="#1E88E5" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="monthly">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value} EGP`}
                />
                <Tooltip 
                  formatter={(value) => [`${value} EGP`, 'Earnings']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar 
                  dataKey="amount" 
                  fill="#1565C0" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EarningsChart;
