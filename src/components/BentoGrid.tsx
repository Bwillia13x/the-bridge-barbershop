"use client";
import { Clock, Scissors, Award, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BentoGrid = () => {
  return (
    <section className="py-32 scroll-mt-28" id="services">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/20 text-[#B8860B] dark:text-[#DAA520] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services & Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent">
            The Bridge Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience exceptional barbering with traditional craftsmanship and modern precision
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* Master Barber Excellence Card */}
          <div className="relative h-60 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full group transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8860B]/20">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a9441f47-d60e-418c-8ccf-e96abc287f6f/generated_images/close-up-of-skilled-barber-hands-working-68867f0f-20251015000830.jpg?"
              alt="Master barber precision cutting"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 z-10 text-white">
              <h3 className="text-xl font-bold mb-2 tracking-tight">Master Barber Excellence</h3>
              <p className="text-sm text-white/90">Expert precision in every cut</p>
            </div>
            <div className="absolute right-6 top-6 z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B8860B]/90 backdrop-blur-sm shadow-lg shadow-[#B8860B]/30">
                <Scissors className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div
            className="relative h-60 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 md:col-span-2 md:row-span-2 md:h-[400px] lg:col-span-4 lg:h-full group hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8860B]/20"
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector("video");
              video && video.play();
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector("video");
              video && video.pause();
              video && (video.currentTime = 1);
            }}
          >
            <video
              src="https://cdn.dribbble.com/userupload/15831695/file/original-addc0352a88b56324a47a3606783ea73.mp4"
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              preload="auto"
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 0.1;
                e.currentTarget.pause();
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                Precision cuts & styling
              </h3>
              <p className="text-sm text-white/80 mt-2">Traditional technique, modern style</p>
            </div>
          </div>

          {/* Rating Card */}
          <Card className="col-span-1 rounded-3xl border-neutral-200 dark:border-neutral-800 md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-2 group hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#B8860B]/10 hover:-translate-y-1">
            <CardContent className="flex h-full flex-col justify-center p-4 md:p-6">
              <div className="mb-3 flex items-baseline gap-2">
                <span className="text-5xl font-bold md:text-5xl lg:text-7xl">5.0</span>
                <span className="text-3xl md:text-2xl lg:text-4xl text-[#B8860B] group-hover:scale-125 transition-transform duration-300">
                  ★
                </span>
              </div>
              <p className="text-sm leading-tight md:text-sm text-muted-foreground">
                Perfect rating from<br />
                <span className="font-semibold text-foreground">satisfied customers</span>
              </p>
            </CardContent>
          </Card>

          {/* Premium Tools Image Card */}
          <div className="relative col-span-1 h-60 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 md:col-span-2 md:row-span-1 md:h-[192px] lg:col-span-2 group hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#B8860B]/10">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a9441f47-d60e-418c-8ccf-e96abc287f6f/generated_images/premium-barber-tools-arrangement-on-dark-2bcdfb33-20251015000838.jpg?"
              alt="Professional barber tools"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Pricing Card */}
          <Card className="from-neutral-900 bg-gradient-to-br to-black col-span-1 rounded-3xl border-neutral-800 md:col-span-4 md:row-span-1 md:h-[300px] lg:col-span-4 group hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all duration-500 hover:-translate-y-2">
            <CardContent className="h-full p-6 md:p-7">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center gap-2 text-[#B8860B] mb-4">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Premium Service</span>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    $35<span className="text-2xl text-white/70">+</span>
                  </div>
                  <div className="text-white/70 text-base">Starting price for cuts</div>
                  <Button 
                    className="bg-[#B8860B] hover:bg-[#9B7209] text-white shadow-lg shadow-[#B8860B]/30 hover:shadow-xl hover:shadow-[#B8860B]/50 transition-all duration-300 hover:scale-105 mt-4 w-full sm:w-auto"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Happy Clients Card */}
          <Card className="col-span-1 from-neutral-900 bg-gradient-to-br to-black rounded-3xl border-neutral-800 md:col-span-2 md:row-span-1 md:h-[300px] lg:col-span-3 group hover:shadow-2xl hover:shadow-[#B8860B]/30 transition-all duration-500 hover:-translate-y-2">
            <CardContent className="flex h-full flex-col justify-center p-6 md:p-7">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl md:text-4xl lg:text-7xl font-bold text-white">500</span>
                <span className="text-3xl md:text-2xl lg:text-4xl font-bold text-[#B8860B]">+</span>
              </div>
              <p className="mb-6 text-base md:text-sm text-white/70">
                Happy clients served with excellence
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar
                    key={i}
                    className="border-background h-10 w-10 border-3 md:h-10 md:w-10 lg:h-12 lg:w-12 ring-2 ring-[#B8860B]/50 transition-all duration-300 hover:scale-125 hover:z-10 hover:ring-[#B8860B]"
                  >
                    <AvatarImage src={`https://api.dicebear.com/9.x/notionists/svg?seed=Client${i}`} />
                    <AvatarFallback className="bg-gradient-to-br from-[#B8860B] to-[#9B7209] text-white">
                      C{i}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Barbershop Interior Card */}
          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl border-neutral-200 dark:border-neutral-800 md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-5 group hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8860B]/20">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a9441f47-d60e-418c-8ccf-e96abc287f6f/generated_images/elegant-barbershop-waiting-area%2c-vinta-3b87722f-20251015000857.jpg?"
              alt="The Bridge Barbershop interior"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 z-10 text-white">
              <h3 className="text-lg font-bold mb-1">Premium Atmosphere</h3>
              <p className="text-sm text-white/90">Relax in our refined space</p>
            </div>
          </Card>

          {/* Expert Grooming Card */}
          <Card className="relative col-span-1 h-60 overflow-hidden rounded-3xl border-neutral-200 dark:border-neutral-800 md:col-span-3 md:row-span-1 md:h-[300px] lg:col-span-4 group hover:border-[#B8860B]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#B8860B]/20">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a9441f47-d60e-418c-8ccf-e96abc287f6f/generated_images/professional-barber-giving-classic-hairc-9d997e0b-20251015000847.jpg?"
              alt="Professional barbering service"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 z-10 flex items-center justify-start p-6 md:p-8">
              <div className="text-white space-y-3">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8860B]/90 backdrop-blur-sm shadow-lg shadow-[#B8860B]/30 md:h-12 md:w-12 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-shadow-lg">
                    Expert Grooming
                  </span>
                </div>
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-xs">
                  Calgary's premier barbershop experience with<br />
                  <span className="font-semibold">traditional excellence & modern precision</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { BentoGrid };