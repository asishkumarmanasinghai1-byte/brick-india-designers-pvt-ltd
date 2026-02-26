import { Section, SectionHeader } from '@/components/site/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Users, Target } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    'About Us - BRICK INDIA DESIGNERS',
    'Founded in 2022 by Syed Iqbal, we specialize in comprehensive business analyses, design, development, and consultancy services.'
  );

  return (
    <>
      <Section>
        <SectionHeader
          title="About Our Business"
          description="Building solutions that drive success since 2022"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Brick India Designers was founded in 2022 by <strong>Syed Iqbal</strong> (CEO and
              Founder). Our team brings a wealth of experience in Training Management, Education, and
              Consultancy. We specialize in comprehensive business analyses, identifying problems,
              opportunities, and providing effective solutions for diverse projects.
            </p>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Track Your Team's Progress</CardTitle>
              <CardDescription className="text-base">
                Enhance your team's productivity with our mobile app solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mobile app solutions help you monitor team performance, manage tasks, and stay
                connected with your operations in real-time.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Our Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Human Resources & Recruitment</li>
                  <li>• Talent Acquisition</li>
                  <li>• Website & App Design/Development</li>
                  <li>• Graphic & Logo Design</li>
                  <li>• eCommerce Solutions</li>
                  <li>• Corporate Branding</li>
                  <li>• Data Analytics & SEO</li>
                  <li>• Social Media Marketing</li>
                  <li>• Event Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  We provide expert guidance in areas such as Data Analytics, SEO, Social Media
                  Marketing, Article Writing, Web Research, Event Management, and many other
                  services.
                </p>
                <p>
                  Our team excels in various domains to help small and mid-size businesses overcome
                  challenges and focus on growth opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted/50 p-8">
            <h3 className="mb-4 text-2xl font-bold">Trillboards Partnership</h3>
            <p className="text-muted-foreground">
              We, Brick India Designers Pvt Ltd, as Master Distributor in collaboration with
              Trillboards Inc New York USA, are currently on-boarding commercial TV screen owners on
              our platform for generating a second source of income to Indian citizens. We are
              practically implementing and introducing this project to commercial screen owners and
              require Operations Executives in all major cities of India.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
