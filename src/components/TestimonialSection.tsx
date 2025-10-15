"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";
import { useRef } from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials1 = [
  {
    name: "Marcus Chen",
    role: "Regular Client",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Marcus%20Chen",
    content:
      "Barry's attention to detail is unmatched. Every cut is precise and perfectly styled.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    role: "Business Executive",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=David%20Rodriguez",
    content:
      "The Bridge delivers consistent excellence. Professional service every single time.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Loyal Customer",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=James%20Wilson",
    content:
      "Five stars across the board. Quality cuts with traditional craftsmanship values.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Weekly Regular",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Michael%20Thompson",
    content:
      "Exceptional grooming experience. Barry understands exactly what I need every time.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Happy Client",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Robert%20Martinez",
    content:
      "Premium barbering at its finest. The atmosphere and service are absolutely perfect.",
    rating: 5,
  },
  {
    name: "Christopher Lee",
    role: "Satisfied Customer",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Christopher%20Lee",
    content:
      "Reliable quality every visit. This is what traditional barbering should be.",
    rating: 5,
  },
];
const testimonials2 = [
  {
    name: "Anthony Garcia",
    role: "Regular Client",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Anthony%20Garcia",
    content:
      "Outstanding service and skill. Every appointment exceeds my expectations completely.",
    rating: 5,
  },
  {
    name: "Steven Anderson",
    role: "Business Professional",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Steven%20Anderson",
    content:
      "Punctual, professional, and perfectly executed cuts. Exactly what I expect.",
    rating: 5,
  },
  {
    name: "Daniel Moore",
    role: "Loyal Customer",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Daniel%20Moore",
    content:
      "Flawless experience every time. The quality and consistency are remarkable here.",
    rating: 5,
  },
  {
    name: "Paul Jackson",
    role: "Weekly Client",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Paul%20Jackson",
    content:
      "Top-tier barbering with genuine care. Barry's professionalism shines through always.",
    rating: 5,
  },
  {
    name: "Kenneth White",
    role: "Happy Customer",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Kenneth%20White",
    content:
      "Premium grooming experience. The attention to detail makes all the difference.",
    rating: 5,
  },
  {
    name: "Thomas Harris",
    role: "Satisfied Client",
    avatar:
      "https://api.dicebear.com/9.x/notionists/svg?seed=Thomas%20Harris",
    content:
      "Consistently excellent service. This is barbering done the right way entirely.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const plugin1 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    })
  );

  const plugin2 = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
      direction: "backward",
    })
  );
  
  return (
    <section className="relative py-32 max-w-7xl mx-auto overflow-hidden scroll-mt-28" id="reviews">
      <div className="container flex flex-col items-center gap-6 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/20 text-[#B8860B] dark:text-[#DAA520] text-sm font-medium mb-4">
          <Star className="w-4 h-4 fill-current" />
          Client Testimonials
        </div>
        <h2 className="mb-3 text-4xl md:text-5xl lg:text-6xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
          Trusted by Gentlemen
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-2xl">
          Premium barbering excellence, crafted with tradition and precision. Hear from our satisfied clients.
        </p>
      </div>
      <div className="lg:container">
        <div className="mt-20 space-y-5 relative">
          {/* Enhanced gradient blur edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-background via-white/90 dark:via-background/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-background via-white/90 dark:via-background/90 to-transparent z-10 pointer-events-none" />
          
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin1.current]}
            onMouseLeave={() => plugin1.current.play()}
          >
            <CarouselContent>
              {testimonials1.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-7 select-none bg-white/95 dark:bg-black/70 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl hover:shadow-[#B8860B]/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B8860B]/30 group">
                    <div className="mb-5 flex gap-4 items-center">
                      <Avatar className="size-12 rounded-full ring-2 ring-[#B8860B] shadow-md group-hover:ring-[#DAA520] transition-all duration-300 group-hover:scale-110">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div>
                        <p className="font-bold text-base text-neutral-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#B8860B] text-[#B8860B] group-hover:scale-110 transition-transform duration-200"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <q className="text-base text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin2.current]}
            onMouseLeave={() => plugin2.current.play()}
          >
            <CarouselContent>
              {testimonials2.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 p-7 select-none bg-white/95 dark:bg-black/70 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl hover:shadow-[#B8860B]/10 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#B8860B]/30 group">
                    <div className="mb-5 flex gap-4 items-center">
                      <Avatar className="size-12 rounded-full ring-2 ring-[#B8860B] shadow-md group-hover:ring-[#DAA520] transition-all duration-300 group-hover:scale-110">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div>
                        <p className="font-bold text-base text-neutral-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#B8860B] text-[#B8860B] group-hover:scale-110 transition-transform duration-200"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <q className="text-base text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { TestimonialSection };