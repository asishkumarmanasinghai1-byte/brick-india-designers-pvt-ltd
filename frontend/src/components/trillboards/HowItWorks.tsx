import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, QrCode, DollarSign } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Download,
    title: 'Download the Free App',
    description: 'Get Trillboards from the App Store or Google Play. Takes 30 seconds.',
  },
  {
    number: '2',
    icon: QrCode,
    title: 'Scan the QR Code',
    description: "Visit trill.ink on your TV browser, scan the QR code from within the Trillboards app, and you're connected.",
  },
  {
    number: '3',
    icon: DollarSign,
    title: 'Start Earning',
    description: "Ads play automatically. You get paid monthly. It's that simple.",
  },
];

export function HowItWorks() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <Card key={step.number} className="relative border-border/50">
            <CardHeader>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{step.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
