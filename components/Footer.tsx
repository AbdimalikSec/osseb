'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-background/20">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-serif">Ossob Coffee</span>
            </Link>
            <p className="text-background/70 text-sm">
              Premium specialty coffee crafted for the perfect moment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-background/70 hover:text-background transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-background/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+252 61 3999050</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Hadiid Rd, Mogadishu</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@ossobcoffee.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-background/70 text-sm mb-3">
              Subscribe for exclusive offers and coffee tips.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg bg-background/10 text-background placeholder:text-background/50 text-sm border border-background/20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-sm" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-background/70 text-sm">
            © 2024 Ossob Coffee. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
