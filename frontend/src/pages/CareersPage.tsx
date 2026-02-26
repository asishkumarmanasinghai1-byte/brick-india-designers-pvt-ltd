import { Section, SectionHeader } from '@/components/site/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Briefcase, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function CareersPage() {
  usePageMeta(
    'Careers - Join Our Team',
    'We are hiring Operations Executives across major cities in India to onboard commercial TV screen owners onto the Trillboards platform.'
  );

  return (
    <>
      <Section>
        <SectionHeader
          title="Join Our Team"
          description="Help us bring passive income opportunities to businesses across India"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
            <CardHeader>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Operations Executives</CardTitle>
                  <CardDescription className="text-base">
                    Multiple positions across major cities in India
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold">About the Role</h3>
                <p className="text-muted-foreground">
                  We, Brick India Designers Pvt Ltd, as Master Distributor in collaboration with
                  Trillboards Inc New York USA, are currently on-boarding commercial TV screen owners
                  on our platform for generating a second source of income to Indian citizens.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We are practically implementing and introducing this project to commercial screen
                  owners and require Operations Executives in all major cities of India.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      All major cities across India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Trillboards Onboarding Team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Type</h4>
                    <p className="text-sm text-muted-foreground">Full-time / Field Operations</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Key Responsibilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      Connect with commercial TV screen owners (restaurants, gyms, shops, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Help business owners activate the Trillboards app on their screens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Provide support and guidance throughout the onboarding process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Build and maintain relationships with screen owners in your area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Report progress and coordinate with the central team</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Ideal Candidate</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Strong communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Self-driven and able to work independently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Basic understanding of digital technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>Eager to work in the growing digital advertising ecosystem</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">How to Apply</CardTitle>
              <CardDescription>
                Interested in joining our team? Get in touch with us today.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Call us</div>
                  <a
                    href="tel:+919000331508"
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    +91 90003 31508
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Email us</div>
                  <a
                    href="mailto:support@brickindiadesigners.com"
                    className="text-lg font-semibold text-foreground hover:text-primary"
                  >
                    support@brickindiadesigners.com
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() =>
                    (window.location.href =
                      'mailto:support@brickindiadesigners.com?subject=Application for Operations Executive Position')
                  }
                >
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
