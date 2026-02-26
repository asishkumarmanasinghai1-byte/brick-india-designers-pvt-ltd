import { Link, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SiCaffeine } from 'react-icons/si';

export function SiteLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Trillboards', path: '/trillboards' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/generated/brick-india-logo.dim_512x512.png"
              alt="Brick India Designers"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">
                BRICK INDIA DESIGNERS
              </span>
              <span className="text-xs text-muted-foreground">Digital Signage</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              onClick={() => navigate({ to: '/contact' })}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate({ to: '/contact' });
                  }}
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/brick-india-logo.dim_512x512.png"
                  alt="Brick India Designers"
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-bold leading-tight">BRICK INDIA DESIGNERS</span>
                  <span className="text-xs text-muted-foreground">Digital Signage</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Crafting identities, digital experiences, and print materials to drive your success.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/services"
                    hash="data-privacy-security"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Data Privacy & Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Business Support</li>
                <li>Design & Development</li>
                <li>Research Support</li>
                <li>Digital Signage</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 90003 31508</li>
                <li>support@brickindiadesigners.com</li>
                <li className="pt-2">
                  40-8/10/2/1 Vashant Vihar, APHB Colony, Near AMR Complex, Hyderabad, Telangana,
                  500040
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2026. Built with love using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
              >
                caffeine.ai
                <SiCaffeine className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
