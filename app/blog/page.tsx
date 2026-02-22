'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, User, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Coffee Brewing: A Complete Guide',
    excerpt: 'Master the perfect brew with our comprehensive guide to different brewing methods and techniques.',
    image: '/hero-coffee.jpg',
    author: 'Sarah Ahmed',
    date: 'Mar 15, 2024',
    category: 'Guide',
    readTime: '8 min'
  },
  {
    id: 2,
    title: 'Understanding Coffee Origins: From Farm to Cup',
    excerpt: 'Explore the journey of premium coffee beans and how origin affects flavor profiles and characteristics.',
    image: '/coffee-beans.jpg',
    author: 'Mohamed Hassan',
    date: 'Mar 12, 2024',
    category: 'Origin Story',
    readTime: '6 min'
  },
  {
    id: 3,
    title: 'Cold Brew: The Science Behind Smooth Coffee',
    excerpt: 'Discover why cold brew has become a favorite and learn the secrets to making the perfect batch at home.',
    image: '/cold-brew.jpg',
    author: 'Amina Ali',
    date: 'Mar 8, 2024',
    category: 'Recipe',
    readTime: '7 min'
  },
  {
    id: 4,
    title: 'Sustainability in Coffee: Our Commitment',
    excerpt: 'Learn about our efforts to support ethical farming practices and sustainable coffee production.',
    image: '/coffee-shop.jpg',
    author: 'Ossob Team',
    date: 'Feb 28, 2024',
    category: 'Sustainability',
    readTime: '5 min'
  },
  {
    id: 5,
    title: 'The Perfect Espresso Shot: Techniques & Tips',
    excerpt: 'Unlock the secrets to pulling the perfect espresso shot with our expert tips and techniques.',
    image: '/espresso.jpg',
    author: 'Ahmed Ibrahim',
    date: 'Feb 20, 2024',
    category: 'Technique',
    readTime: '6 min'
  },
  {
    id: 6,
    title: 'Coffee Pairings: Food & Flavor Combinations',
    excerpt: 'Explore the best food and coffee pairings that enhance both the coffee and the food experience.',
    image: '/hero-coffee.jpg',
    author: 'Fatima Hassan',
    date: 'Feb 10, 2024',
    category: 'Pairing',
    readTime: '5 min'
  }
];

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Guide', 'Origin Story', 'Recipe', 'Sustainability', 'Technique', 'Pairing'];
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Coffee Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about coffee, brewing techniques, and stories from our community
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </div>
                    <span>{blogPosts[0].readTime} read</span>
                  </div>
                  <Link href="#" className="w-fit">
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
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

      {/* Blog grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <div
                key={post.id}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="px-6 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href="#" className="w-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-primary hover:bg-primary/10"
                      >
                        Read More <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Don't Miss a Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest coffee insights and exclusive content
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
