"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";
import { Scissors, Sparkles, ShieldCheck, Clock, Star, Brush } from "lucide-react";

const IntegrationSection = () => {
  const services = [
    { icon: Scissors, name: "Classic Cut" },
    { icon: Brush, name: "Beard Trim" },
    { icon: Sparkles, name: "Hot Towel" },
    { icon: ShieldCheck, name: "Line Up" },
    { icon: Scissors, name: "Fade Cut" },
    { icon: Scissors, name: "Buzz Cut" },
    { icon: Star, name: "Wash & Style" },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B8860B]/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#B8860B]/10 blur-3xl rounded-full opacity-30"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center flex flex-col max-w-4xl mx-auto mb-20">
          <div className="inline-flex w-fit mx-auto items-center gap-2 px-4 py-2 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#B8860B] text-sm font-medium mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/50">
            <div className="w-2 h-2 bg-[#B8860B] rounded-full animate-pulse"></div>
            Master Barber Services
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            <span className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Experience the art
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B8860B]/80 to-[#B8860B]/60 bg-clip-text text-transparent">
              of grooming
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Discover The Bridge Barbershop&apos;s premium services today.
            <br className="hidden md:block" />
            Where tradition meets modern style in Calgary&apos;s finest.
          </p>
        </div>

        {/* Enhanced Marquee Section */}
        <div className="relative py-2">
          {/* Top gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background  z-10 pointer-events-none"></div>

          {/* First row */}
          <div className="mb-6">
            <Marquee pauseOnHover className="[--duration:25s]">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`row1-${index}`}
                    className="group mx-4 flex items-center justify-center gap-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 px-6 py-4 hover:bg-card/80 hover:border-[#B8860B]/50 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#B8860B]/50"
                  >
                    <div className="relative">
                      <Icon
                        aria-hidden="true"
                        className={cn(
                          "size-6 text-foreground/80 transition-all duration-300 group-hover:scale-110 group-hover:text-[#B8860B]"
                        )}
                      />
                      <div className="absolute inset-0 bg-[#B8860B]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    </div>
                    <p className="text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                      {service.name}
                    </p>
                  </div>
                );
              })}
            </Marquee>
          </div>

          {/* Second row (reverse) */}
          <div className="mb-6">
            <Marquee pauseOnHover reverse className="[--duration:30s]">
              {[...services].reverse().map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={`row2-${index}`}
                    className="group mx-4 flex items-center justify-center gap-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 px-6 py-4 hover:bg-card/80 hover:border-[#B8860B]/50 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#B8860B]/50"
                  >
                    <div className="relative">
                      <Icon
                        aria-hidden="true"
                        className={cn(
                          "size-6 text-foreground/80 transition-all duration-300 group-hover:scale-110 group-hover:text-[#B8860B]"
                        )}
                      />
                      <div className="absolute inset-0 bg-[#B8860B]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    </div>
                    <p className="text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                      {service.name}
                    </p>
                  </div>
                );
              })}
            </Marquee>
          </div>

          {/* Third row */}
          <div className="mb-6">
            <Marquee pauseOnHover className="[--duration:35s]">
              {services
                .slice(0, 4)
                .concat(services.slice(0, 3))
                .map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={`row3-${index}`}
                      className="group mx-4 flex items-center justify-center gap-3 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 px-6 py-4 hover:bg-card/80 hover:border-[#B8860B]/50 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-[#B8860B]/50"
                    >
                      <div className="relative">
                        <Icon
                          aria-hidden="true"
                          className={cn(
                            "size-6 text-foreground/80 transition-all duration-300 group-hover:scale-110 group-hover:text-[#B8860B]"
                          )}
                        />
                        <div className="absolute inset-0 bg-[#B8860B]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                      </div>
                      <p className="text-base font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                        {service.name}
                      </p>
                    </div>
                  );
                })}
            </Marquee>
          </div>

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none"></div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6 px-10 py-6 rounded-3xl bg-gradient-to-r from-[#B8860B]/20 via-secondary/20 to-[#B8860B]/20 backdrop-blur-2xl border border-[#B8860B]/30 shadow-2xl shadow-[#B8860B]/10 hover:shadow-[#B8860B]/20 transition-all duration-500 ">
            <span className="text-base font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Join 500+ satisfied clients trusting The Bridge
            </span>
            <div className="flex -space-x-3">
              {["Barry", "Domenic", "Sanjeev", "James"].map((seed, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-3 border-background shadow-xl shadow-[#B8860B]/30 hover:scale-110 transition-transform duration-300 overflow-hidden"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`}
                    alt={`Client ${seed}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted/80 to-muted border-3 border-background flex items-center justify-center shadow-xl shadow-muted/30 hover:scale-110 transition-transform duration-300">
                <span className="text-sm font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { IntegrationSection };