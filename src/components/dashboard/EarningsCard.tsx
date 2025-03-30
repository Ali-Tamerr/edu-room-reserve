
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface EarningsCardProps {
  amount: number;
  percentageChange: number;
}

const EarningsCard = ({ amount, percentageChange }: EarningsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Today's Earnings</CardTitle>
        <TrendingUp className="h-5 w-5 text-edu-green" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{amount.toLocaleString()} EGP</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span className={percentageChange >= 0 ? "text-edu-green" : "text-edu-red"}>
            {percentageChange >= 0 ? '+' : ''}{percentageChange}%
          </span>{' '}
          from yesterday
        </p>
      </CardContent>
    </Card>
  );
};

export default EarningsCard;
