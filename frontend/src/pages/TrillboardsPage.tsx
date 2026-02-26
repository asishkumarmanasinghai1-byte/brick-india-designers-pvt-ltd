import { Section, SectionHeader } from '@/components/site/Section';
import { HowItWorks } from '@/components/trillboards/HowItWorks';
import { ProofPoints } from '@/components/trillboards/ProofPoints';
import { EarningsCalculator } from '@/components/trillboards/EarningsCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useNavigate } from '@tanstack/react-router';
import { Tv, Shield, Clock, DollarSign, Check, Play, Quote } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn ₹5,700-₹10,750 per Month',
    description:
      'Real passive income from equipment you already own. Most screens start earning within their first week.',
  },
  {
    icon: Tv,
    title: 'No Equipment to Buy',
    description:
      'Works with any smart TV, tablet, or device with a web browser. No special hardware or installation needed.',
  },
  {
    icon: Clock,
    title: "You're in Full Control",
    description:
      "Set your own hours. Pause anytime. Show your own promotions when you want. It's your screen.",
  },
  {
    icon: Shield,
    title: 'Family-Friendly Ads Only',
    description:
      "Every ad is reviewed before it runs. Professional, appropriate content you'll be proud to display.",
  },
];

const faqs = [
  {
    question: 'How much can I really earn?',
    answer:
      'Earnings vary based on your business type, location, and operating hours. Most businesses earn between ₹2,338-₹4,676 per month. High-traffic locations in urban areas can earn significantly more.',
  },
  {
    question: 'Is there any cost to join?',
    answer:
      'No! Trillboards is completely free. There are no setup fees, no monthly charges, and no hardware to purchase. You simply use your existing TV or tablet.',
  },
  {
    question: 'What kind of ads will be shown?',
    answer:
      'All ads are family-friendly and professionally reviewed before they run. We show local business ads, community announcements, and brand advertisements that are appropriate for all audiences.',
  },
  {
    question: 'Can I control what appears on my screen?',
    answer:
      "Yes! You have full control. You can set operating hours, pause the service anytime, and even display your own promotional content when you want. It's your screen, your rules.",
  },
  {
    question: 'How do I get paid?',
    answer:
      'Payments are processed monthly directly to your bank account. You can track your earnings in real-time through the Earner Web Portal.',
  },
  {
    question: 'What equipment do I need?',
    answer:
      'Any smart TV, tablet, or device with a web browser works. No special hardware or installation is required. Just download the app and scan the QR code.',
  },
];

export default function TrillboardsPage() {
  const navigate = useNavigate();
  usePageMeta(
    'Trillboards - Turn Your TV Into Extra Income',
    'Free software-only screen network that turns any existing TV in a business into digital billboard inventory. Earn ₹2,338-₹4,676 per month displaying local ads.'
  );

  return (
    <>
      <Section className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Publisher-first network. Your screens, your revenue.
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Turn Your TV Into Extra Income
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Your restaurant, gym, or shop TV can earn ₹2,338-₹4,676 a month displaying local ads.
            You also get a free CMS with YouTube/Twitch.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Competitive revenue share</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Portal access</span>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">What is Trillboards?</h2>
          <p className="text-lg text-muted-foreground">
            Trillboards is a free, software-only screen network that turns any existing TV in a
            business into digital billboard inventory. No hardware, no installs, no cost to the
            venue. Simply scan a QR code on your TV and instantly start displaying content and
            earning from ads.
          </p>
        </div>

        <ProofPoints />
      </Section>

      <Section>
        <SectionHeader
          title="How It Works"
          description="Three simple steps to start earning from your TV"
        />
        <HowItWorks />
      </Section>

      <Section variant="muted">
        <SectionHeader
          title="How Much Could You Earn?"
          description="Select your business type to see realistic earning estimates based on real data from actual Trillboards users"
        />
        <div className="mx-auto max-w-3xl">
          <EarningsCalculator />
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="See It In Action"
          description="Watch how real business owners use Trillboards"
        />
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-border/50">
            <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play className="h-10 w-10 text-primary" fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Video demonstration coming soon
                </p>
              </div>
            </div>
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground">
                See how Trillboards transforms idle screens into revenue-generating assets for
                businesses across India.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-primary/20 bg-background">
            <CardHeader>
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="mb-2 text-2xl">
                    Hear from a Trillboards screen owner
                  </CardTitle>
                  <CardDescription className="text-base">
                    Real experiences from business owners earning with Trillboards
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                "Setting up Trillboards was incredibly simple. Within minutes, our TV was displaying
                ads and we started earning passive income. It's been a great addition to our
                business with zero effort required. The revenue share is competitive and payments
                are always on time."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10" />
                <div>
                  <p className="font-semibold">Business Owner</p>
                  <p className="text-sm text-muted-foreground">Coffee Shop, Mumbai</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Common Questions"
          description="Everything you need to know about Trillboards"
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          title="Why Business Owners Choose Us"
          description="Built for local businesses. Simple, free, and designed to help you earn more."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Competitive revenue share</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>5-minute setup</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
            Get Started Now
          </Button>
        </div>
      </Section>
    </>
  );
}
