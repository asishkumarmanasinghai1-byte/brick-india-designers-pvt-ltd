import { Card, CardContent } from '@/components/ui/card';
import { Tv, DollarSign, Eye } from 'lucide-react';

const metrics = [
  {
    icon: Tv,
    value: '2500+',
    label: 'Screens',
  },
  {
    icon: DollarSign,
    value: '₹41.8M+',
    label: 'Paid to owners',
  },
  {
    icon: Eye,
    value: '10.0M+',
    label: 'Impressions served',
  },
];

export function ProofPoints() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="border-border/50 bg-accent/5">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Icon className="mb-4 h-10 w-10 text-primary" />
              <div className="text-4xl font-bold text-foreground">{metric.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{metric.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
