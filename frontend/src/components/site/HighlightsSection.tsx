import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Palette, Search, Tv } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: 'Business Support',
    description:
      'Comprehensive admin, customer support, data management, and project management services.',
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description:
      'Website design, mobile apps, UI/UX, graphic design, and corporate branding solutions.',
  },
  {
    icon: Search,
    title: 'Research Support',
    description:
      'Market research, data analytics, SEO, social media marketing, and content writing.',
  },
  {
    icon: Tv,
    title: 'Trillboards Partnership',
    description:
      'Turn your TV into passive income. Earn ₹2,338-₹4,676/month displaying local ads.',
  },
];

export function HighlightsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {highlights.map((highlight, index) => {
        const Icon = highlight.icon;
        return (
          <Card key={index} className="border-border/50 transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{highlight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{highlight.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
