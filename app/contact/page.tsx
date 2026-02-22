'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions, feedback, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact info and form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+252 61 3999050',
                subtext: 'Mon-Fri 8am-6pm'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: 'Hadiid Rd, Mogadishu',
                subtext: 'Find us on Google Maps'
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'info@ossobcoffee.com',
                subtext: 'We reply within 24 hours'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.subtext}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Form and map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">✓</div>
                    <p className="text-green-800 font-semibold mb-1">
                      Message sent successfully!
                    </p>
                    <p className="text-green-700 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="inquiry">Product Inquiry</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Map and hours */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Map */}
              <Card className="p-0 overflow-hidden mb-8 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9549829889633!2d46.19999!3d2.04857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f2f4a0f9f9f9f9f%3A0x0!2sHadiid%20Rd%2C%20Mogadishu!5e0!3m2!1sen!2sso!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card>

              {/* Hours */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
                    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                {/* Plus Code */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Google Plus Code</p>
                  <p className="text-lg font-semibold text-foreground">28P3+V5 Mogadishu</p>
                </div>

                {/* CTA */}
                <Link href="https://maps.app.goo.gl/1X7HkYesz29i2zTDA" target="_blank" className="block mt-6">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Directions
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What are your delivery options?',
                  a: 'We offer free delivery on orders over $25 within Mogadishu. Custom orders and bulk purchases may have different arrangements.'
                },
                {
                  q: 'How fresh is your coffee?',
                  a: 'All our coffee is roasted fresh daily. We recommend using our beans within 2 weeks of roasting for optimal flavor.'
                },
                {
                  q: 'Do you offer wholesale/bulk orders?',
                  a: 'Yes! We work with cafes, restaurants, and offices. Contact us for wholesale pricing and minimum order requirements.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major payment methods including credit cards, mobile money transfers, and bank deposits.'
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
