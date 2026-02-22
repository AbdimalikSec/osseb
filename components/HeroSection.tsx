'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      
      {/* Hero image - right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <Image
          src="/hero-coffee.jpg"
          alt="Ossob Coffee"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-6 sm:px-8 lg:px-12">
        <div className={`max-w-2xl transform transition-all duration-1000 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
        }`}>
          {/* Eyebrow text */}
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold text-accent tracking-widest uppercase">
              ✓ Premium Specialty Coffee
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Craft</span> Your Perfect Cup
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Experience the art of specialty coffee. Every bean, every brew, every sip crafted to perfection at Ossob Coffee.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              >
                Explore Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto"
              >
                Our Story
              </Button>
            </Link>
          </div>

          {/* Info badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
            <div className="pt-4">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Premium Beans</p>
            </div>
            <div className="pt-4">
              <p className="text-2xl font-bold text-primary">Artisan</p>
              <p className="text-sm text-muted-foreground">Roasted</p>
            </div>
            <div className="pt-4">
              <p className="text-2xl font-bold text-primary">Fresh</p>
              <p className="text-sm text-muted-foreground">Daily</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5 text-primary animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
