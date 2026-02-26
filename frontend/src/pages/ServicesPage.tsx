import { Section, SectionHeader } from '@/components/site/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Palette, Search, Users, Code, TrendingUp, CheckCircle2, Shield } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { Badge } from '@/components/ui/badge';

const serviceGroups = [
  {
    icon: Briefcase,
    title: 'Business Support',
    description: 'Comprehensive operational support for your business',
    services: [
      'Admin Support',
      'Customer Support',
      'Accounting and Bookkeeping Services',
      'Data Management',
      'Lead Generation',
      'Content Writing',
      'e-Commerce Services',
      'Project Management',
      'Social Media Support',
      'Survey Support',
    ],
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Creative and technical solutions for your brand',
    services: [
      'Website Design',
      'App Design/Development',
      'Graphic/Logo Design',
      'UI/UX Design',
      'HTML Design',
      'PHP Development',
      'Corporate Brands',
      'eCommerce Solutions',
    ],
  },
  {
    icon: Search,
    title: 'Research Support',
    description: 'Data-driven insights and content creation',
    services: [
      'Data Analytics',
      'SEO Services',
      'Social Media Marketing',
      'Article Writing',
      'Web Research',
      'Market Research',
      'Competitive Analysis',
    ],
  },
  {
    icon: Users,
    title: 'Human Resources',
    description: 'Talent acquisition and management solutions',
    services: [
      'Recruitment Services',
      'Talent Acquisition',
      'Training Management',
      'HR Consultancy',
      'Employee Onboarding',
    ],
  },
  {
    icon: Code,
    title: 'Technology Solutions',
    description: 'Modern tech stack for your business needs',
    services: [
      'Mobile App Development',
      'Web Applications',
      'API Integration',
      'Database Management',
      'Cloud Solutions',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Consultancy',
    description: 'Strategic guidance for business growth',
    services: [
      'Business Analysis',
      'Strategy Development',
      'Process Optimization',
      'Event Management',
      'Digital Transformation',
    ],
  },
];

const gettingStartedSteps = [
  {
    number: '1',
    title: 'Submit the website form',
    description: 'Add your Wishlist of services in the shopping cart and submit the website form.',
  },
  {
    number: '2',
    title: 'Requirement Analysis',
    description:
      "Contact us and within 4 hours, we'll understand your needs, finalize the scope, deliverables, engagement model, and performance indicators.",
  },
  {
    number: '3',
    title: 'Pricing & Contracting',
    description:
      "Once you approve our proposal, we'll provide necessary documents like Work Order, NDAs, and SLAs. After signing, you'll make the payment.",
  },
  {
    number: '4',
    title: 'Project Execution',
    description:
      'Our project team will keep you updated on project status, and an Account Manager will ensure smooth engagement.',
  },
  {
    number: '5',
    title: 'Project Closure',
    description:
      'Post project completion, we will close the project and send you a feedback survey.',
  },
];

const securityControls = [
  'Certifications',
  'Physical Security Controls',
  'IT Security Controls',
  'Access Controls',
  'Data Security Awareness',
  'Business Continuity Plan',
  'People Compliance',
  'Incident Monitoring Capabilities',
];

export default function ServicesPage() {
  usePageMeta(
    'Our Services - BRICK INDIA DESIGNERS',
    'Comprehensive business support, design & development, research, HR, and consultancy services for small and mid-size businesses.'
  );

  return (
    <>
      <Section>
        <SectionHeader
          title="Our Services"
          description="Services for Mid-size and Small Businesses"
        />

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg text-muted-foreground">
            Small and mid-size businesses are short-staffed and often over-burdened, which diverts
            their focus from business growth opportunities. We understand your function-wise specific
            needs and offer a diverse portfolio of reliable business support services so you can
            enjoy the thrill of finding solutions for your customers and maximize opportunities for
            your growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Flexible Engagement Models</h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Every business has its unique challenge, and we are here to make it easier for you.
            Whether you need support for a small one-time project or a dedicated support assistant
            for the longer term, we are flexible to accommodate your individual needs.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="mb-2 text-4xl font-bold text-primary">01</div>
                <CardTitle className="text-2xl">One-Time Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose this engagement model for one-time projects that have a well-defined scope,
                  start and end dates, and clearly articulated outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="mb-2 text-4xl font-bold text-primary">02</div>
                <CardTitle className="text-2xl">Long-Term Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose this engagement model if you need a dedicated business support assistant for
                  a certain number of hours per month. Based on your business need, you can select as
                  little as 10 hours per month or engage a full-time assistant. Billing is done on a
                  monthly basis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Getting Started"
          description="Steps to be followed"
        />

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gettingStartedSteps.map((step, index) => (
              <Card
                key={index}
                className="border-border/50 transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="data-privacy-security" variant="muted">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Data Privacy & Security</h2>
          </div>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                At Brick India Designers, data security is an ongoing practice and security practices
                are imbibed in our culture. We have implemented stringent data security measures to
                protect and secure the network, data and resources while delivering high-quality
                services to our customers. We treat "Customer data" with utmost care, keeping in mind
                the privacy, security, and confidentiality concerns.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security & Compliance Measures</h3>
                <div className="flex flex-wrap gap-2">
                  {securityControls.map((control, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                    >
                      <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                      {control}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
