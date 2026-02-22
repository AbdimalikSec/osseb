'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <TestimonialSection />
      <CTASection />
    </main>
  );
}
