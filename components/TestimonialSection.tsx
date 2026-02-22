'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ossob Coffee has completely changed my morning routine. The quality is unmatched!",
    author: "Amina Hassan",
    role: "Coffee Enthusiast",
    rating: 5
  },
  {
    id: 2,
    text: "The freshest coffee in Mogadishu. Every cup tastes like a work of art.",
    author: "Mohamed Ali",
    role: "Regular Customer",
    rating: 5
  },
  {
    id: 3,
    text: "I've tried many coffee shops, but Ossob is the best. Their customer service is amazing!",
    author: "Fatima Ibrahim",
    role: "Cafe Regular",
    rating: 5
  }
];

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">
            Customer Love
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative">
            {/* Testimonial card */}
            <Card className="p-8 sm:p-12 text-center border-primary/20">
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-xl sm:text-2xl font-serif text-foreground mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-lg font-semibold text-foreground mb-1">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].role}
              </p>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
