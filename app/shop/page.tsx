'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Single Origin Ethiopia',
    category: 'Single Origin',
    price: 18.99,
    originalPrice: 22.99,
    image: '/coffee-beans.jpg',
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 124,
    description: 'Bright, fruity notes with smooth finish'
  },
  {
    id: 2,
    name: 'Espresso Blend',
    category: 'Blend',
    price: 19.99,
    originalPrice: null,
    image: '/espresso.jpg',
    badge: 'Premium',
    rating: 5.0,
    reviews: 89,
    description: 'Rich, bold, and perfectly balanced'
  },
  {
    id: 3,
    name: 'Cold Brew Concentrate',
    category: 'Ready-to-Drink',
    price: 16.99,
    originalPrice: null,
    image: '/cold-brew.jpg',
    badge: 'New',
    rating: 4.9,
    reviews: 45,
    description: 'Smooth, ready to enjoy'
  },
  {
    id: 4,
    name: 'Morning Light Blend',
    category: 'Blend',
    price: 17.99,
    originalPrice: 21.99,
    image: '/hero-coffee.jpg',
    badge: 'Popular',
    rating: 4.7,
    reviews: 156,
    description: 'Smooth and mellow with subtle sweetness'
  }
];

export default function ShopPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Single Origin', 'Blend', 'Ready-to-Drink'];
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (id: number) => {
    setCart([...cart, id]);
    // Show toast or feedback here
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium specialty coffees
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                  {/* Image container */}
                  <div className="relative h-72 overflow-hidden bg-muted group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredId === product.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-foreground">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Heart className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🚚', title: 'Free Shipping', description: 'On orders over $25' },
              { icon: '✓', title: 'Freshness Guaranteed', description: 'Roasted within 7 days' },
              { icon: '↩', title: 'Easy Returns', description: '30-day money-back guarantee' }
            ].map((benefit, index) => (
              <div key={index}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
