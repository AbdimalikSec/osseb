'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Single Origin Ethiopia',
    price: '$18.99',
    description: 'Bright, fruity notes with smooth finish',
    image: '/coffee-beans.jpg',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Espresso Blend',
    price: '$19.99',
    description: 'Rich, bold, and perfectly balanced',
    image: '/espresso.jpg',
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Cold Brew Concentrate',
    price: '$16.99',
    description: 'Smooth, ready to enjoy',
    image: '/cold-brew.jpg',
    badge: 'New'
  }
];

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            Featured Collection
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-4 mb-4">
            Handpicked Selections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our finest coffee blends, carefully sourced and roasted to perfection
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredId === product.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Link href="/shop">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:bg-primary/10"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
