import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/site/Section';
import { HighlightsSection } from '@/components/site/HighlightsSection';
import { ArrowRight, Tv } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  const navigate = useNavigate();
  usePageMeta(
    'BRICK INDIA DESIGNERS - Digital Signage & Business Solutions',
    'Crafting identities, digital experiences, and print materials to drive your success. Partner with Trillboards to turn your TV into passive income.'
  );

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-muted/30 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Digital Signage
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                BRICK INDIA DESIGNERS
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Unlocking Potential.
              </p>
              <p className="text-lg text-muted-foreground">
                Crafting identities, digital experiences, and print materials to drive your success.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/contact' })}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/trillboards' })}
              >
                <Tv className="mr-2 h-4 w-4" />
                Trillboards: Start Earning
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/generated/hero-digital-signage.dim_1920x900.png"
              alt="Digital Signage Solutions"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section variant="muted">
        <SectionHeader
          title="What We Do"
          description="Comprehensive business support, design, and digital solutions to help you grow."
        />
        <HighlightsSection />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Whether you need business support, design services, or want to turn your TV into passive
            income with Trillboards, we're here to help.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" onClick={() => navigate({ to: '/contact' })}>
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate({ to: '/services' })}>
              View Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
