'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Visit Ossob Coffee today and discover why we're the preferred choice for premium specialty coffee in Mogadishu.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Call Us</p>
                  <p className="text-lg font-semibold">+252 61 3999050</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Location</p>
                  <p className="text-lg font-semibold">Hadiid Rd, Mogadishu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-foreground/20 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm opacity-75">Plus Code</p>
                  <p className="text-lg font-semibold">28P3+V5 Mogadishu</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link
                href="https://maps.app.goo.gl/1X7HkYesz29i2zTDA"
                target="_blank"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                >
                  Find Us on Maps
                </Button>
              </Link>
            </div>
          </div>

          {/* Right content - Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">100%</div>
              <p className="font-semibold mb-1">Premium Quality</p>
              <p className="text-sm opacity-75">Only the finest beans</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="font-semibold mb-1">Support</p>
              <p className="text-sm opacity-75">Always here to help</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Free</div>
              <p className="font-semibold mb-1">Delivery</p>
              <p className="text-sm opacity-75">Order over $25</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">✓</div>
              <p className="font-semibold mb-1">Guaranteed Fresh</p>
              <p className="text-sm opacity-75">Roasted daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
