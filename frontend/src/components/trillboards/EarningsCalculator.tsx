import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const businessTypes = [
  'Coffee Shop',
  'Bar/Restaurant',
  'Gym/Fitness',
  'Barbershop/Salon',
  'Retail Store',
  'Gas Station/Convenience',
];

export function EarningsCalculator() {
  const [selectedType, setSelectedType] = useState<string>('Coffee Shop');

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl">Earnings Calculator</CardTitle>
        <CardDescription>See what your idle TV could be earning</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-4 text-sm font-semibold">What type of business?</h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                onClick={() => setSelectedType(type)}
                className="justify-start"
              >
                {selectedType === type && <Check className="mr-2 h-4 w-4" />}
                {type}
              </Button>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-primary/10 p-8 text-center">
          <div className="mb-2 text-sm font-medium text-muted-foreground">
            Your Estimated Earnings
          </div>
          <div className="mb-1 text-5xl font-bold text-primary">₹5,511</div>
          <div className="text-lg text-muted-foreground">/month</div>
          <div className="mt-4 text-sm text-muted-foreground">That's ₹66,132 per year</div>
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-medium">This is passive income from:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Equipment you already own (your TV)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Zero hardware costs or monthly fees</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>30 seconds of setup time (yes, really)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Fully automated - set it and forget it</span>
            </li>
          </ul>
        </div>

        <p className="text-xs text-muted-foreground">
          * Estimates based on average earnings from similar businesses in your area type. Actual
          earnings may vary based on foot traffic, screen placement, and operating hours.
        </p>
      </CardContent>
    </Card>
  );
}
