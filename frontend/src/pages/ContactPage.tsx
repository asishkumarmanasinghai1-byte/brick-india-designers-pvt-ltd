import { Section, SectionHeader } from '@/components/site/Section';
import { ContactForm } from '@/components/site/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta(
    'Contact Us - BRICK INDIA DESIGNERS',
    'Get in touch with us for business support, design services, or Trillboards onboarding. Located in Hyderabad, Telangana.'
  );

  return (
    <>
      <Section>
        <SectionHeader
          title="Contact Us"
          description="Get in touch with us for any inquiries or support"
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Contact Address</CardTitle>
                <CardDescription>Visit us or send mail to our office</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-muted-foreground">Address</div>
                    <p className="text-foreground">
                      40-8/10/2/1 Vashant Vihar, APHB colony,
                      <br />
                      Near AMR Complex,
                      <br />
                      Hyderabad, Telangana 500040
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-muted-foreground">
                      Phone Number
                    </div>
                    <a
                      href="tel:+919000331508"
                      className="text-lg font-semibold text-foreground hover:text-primary"
                    >
                      +91 90003 31508
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm font-medium text-muted-foreground">
                      Email Address
                    </div>
                    <a
                      href="mailto:support@brickindiadesigners.com"
                      className="text-lg font-semibold text-foreground hover:text-primary"
                    >
                      support@brickindiadesigners.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
