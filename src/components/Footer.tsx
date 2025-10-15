import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const navigation = [
  {
    title: "Services",
    links: [
      { name: "Buzz Cut", href: "#services" },
      { name: "Senior's Cut", href: "#services" },
      { name: "Kid's Cut", href: "#services" },
      { name: "Men's Cut", href: "#services" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "#about" },
      { name: "Barbers", href: "#about" },
      { name: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Book Online", href: "#book" },
      { name: "Location", href: "#contact" },
      { name: "Call Us", href: "tel:+14031234567" },
    ],
  },
  {
    title: "Policies",
    links: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "123 Bridge Street, Calgary, AB T2P 1K1",
    href: "https://maps.google.com",
  },
  { icon: Phone, text: "(403) 123-4567", href: "tel:+14031234567" },
  { icon: Mail, text: "info@thebridgebarber.com", href: "mailto:info@thebridgebarber.com" },
  { icon: Clock, text: "Mon-Sat: 9AM-7PM | Sun: Closed", href: null },
];

const FooterSection = () => {
  return (
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black rounded-t-[3rem] py-20 text-white md:py-28 lg:py-32 mt-16" id="contact">
      <div className="container mx-auto px-6">
        <footer>
          {/* CTA Banner */}
          <div id="book" className="mb-20 rounded-3xl bg-gradient-to-br from-[#B8860B]/20 to-[#9B7209]/10 border border-[#B8860B]/30 p-10 backdrop-blur-sm md:p-14 lg:p-20 shadow-2xl shadow-[#B8860B]/10">
            <div className="flex flex-col items-center text-center">
              <h2 className="max-w-[800px] text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-6xl mb-4">
                Book your appointment today.{" "}
                <span className="bg-gradient-to-r from-[#DAA520] via-[#B8860B] to-[#9B7209] bg-clip-text text-transparent">
                  Excellence never waits.
                </span>
              </h2>
              <p className="mt-6 max-w-[600px] text-lg text-white/80 leading-relaxed">
                Experience Calgary's finest barbering with our master barber Barry E. Traditional craftsmanship meets modern precision.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button 
                  asChild 
                  size="lg" 
                  className="group bg-[#B8860B] hover:bg-[#9B7209] text-white shadow-xl shadow-[#B8860B]/30 hover:shadow-2xl hover:shadow-[#B8860B]/50 transition-all duration-300 hover:scale-105 text-base px-8"
                >
                  <a href="#book" className="flex items-center gap-2">
                    Book Your Appointment Now
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-[#B8860B]/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-full bg-[#B8860B]/20 group-hover:bg-[#B8860B]/30 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div className="flex-1">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/80 hover:text-white transition-colors duration-200 block"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/80">{item.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="border-white/10 mb-16 border-b pb-16">
            <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto items-center">
              <div>
                <h3 className="mb-3 text-3xl font-bold">Stay connected</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  Get updates on special offers, grooming tips, and exclusive barbershop news.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative grow">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="h-14 border-white/20 bg-white/10 pl-12 text-white placeholder:text-white/50 focus:border-[#B8860B] focus:ring-[#B8860B] backdrop-blur-sm"
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                </div>
                <Button 
                  type="submit" 
                  className="h-14 px-8 bg-[#B8860B] hover:bg-[#9B7209] text-white shadow-lg shadow-[#B8860B]/20 hover:shadow-xl hover:shadow-[#B8860B]/40 transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-12 max-w-6xl mx-auto py-12 sm:grid-cols-4 lg:py-16">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="inline-block text-white/70 transition-all duration-200 hover:text-[#B8860B] hover:translate-x-1 relative group"
                      >
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="border-white/10 border-t mx-auto flex flex-col md:flex-row justify-between items-center text-white px-6 lg:px-16 w-full mt-8 pt-10 gap-8">
            <div className="flex items-center gap-4">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/B86BF272-2B98-43D6-A06E-9BB44BE72857-1760486809505.png"
                alt="The Bridge Barbershop"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <p className="text-white/90 font-semibold">The Bridge Barbershop</p>
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  aria-label={link.label}
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-all duration-200 hover:text-[#B8860B] hover:scale-110 p-2 rounded-full hover:bg-white/5"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { FooterSection };