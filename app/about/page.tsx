'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From passion for coffee to creating an exceptional experience for our community
            </p>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/coffee-shop.jpg"
                  alt="Ossob Coffee Shop"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority
                />
              </div>
            </div>
            <div className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ossob Coffee was founded with a simple mission: to bring the world's finest specialty coffee to Mogadishu. We believe that every cup should be an experience—a moment of joy, connection, and pure quality.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We source our beans from the most respected roasters and farmers, ensuring that every batch meets our uncompromising standards for freshness, flavor, and sustainability.
              </p>
              <ul className="space-y-4">
                {['Premium quality beans', 'Artisanal roasting', 'Perfect brewing', 'Community focused'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✓',
                title: 'Quality First',
                description: 'We never compromise on quality. Every bean is carefully selected and tested.'
              },
              {
                icon: '♻',
                title: 'Sustainability',
                description: 'We care for our environment and support ethical coffee farming practices.'
              },
              {
                icon: '❤',
                title: 'Community',
                description: 'We believe in building meaningful connections with our customers and suppliers.'
              }
            ].map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5K+', label: 'Happy Customers' },
              { number: '100%', label: 'Premium Beans' },
              { number: '24/7', label: 'Support' },
              { number: 'Fresh', label: 'Daily Roasts' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit us today or browse our collection online to experience Ossob Coffee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
