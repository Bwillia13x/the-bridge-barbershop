"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors, Sparkles, ShieldCheck, Clock, Star } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header>
        <nav
          data-state={menuState ? "active" : undefined}
          className="fixed z-20 w-full border-b border-dashed bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                >
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/B86BF272-2B98-43D6-A06E-9BB44BE72857-1760486809505.png"
                    alt="The Bridge Barbershop"
                    width={48}
                    height={48}
                    className="h-10 w-10 md:h-12 md:w-12 object-contain"
                  />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close menu" : "Open menu"}
                  aria-expanded={menuState}
                  aria-controls="primary-navigation"
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {menuState ? (
                    <X className="m-auto size-6 duration-200" />
                  ) : (
                    <Menu className="m-auto size-6 duration-200" />
                  )}
                </button>
              </div>

              <div
                id="primary-navigation"
                className={`bg-background mb-6 ${menuState ? "block" : "hidden"} w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent`}
              >
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-foreground block duration-150 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1 py-0.5"
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button asChild variant="outline" size="sm" className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B]/10 focus-visible:ring-[#B8860B]">
                    <Link href="#contact">
                      <span>Call Now</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-[#B8860B] hover:bg-[#9B7209] text-white focus-visible:ring-[#B8860B]">
                    <Link href="#book">
                      <span>Book Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Decorative background */}
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-28 lg:py-24">
            {/* Background logo behind the heading */}
            <div aria-hidden className="absolute inset-0 -z-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/B86BF272-2B98-43D6-A06E-9BB44BE72857-1760488819963.png"
                alt=""
                fill
                priority
                className="object-contain opacity-20 md:opacity-25 pointer-events-none select-none -rotate-12 md:-rotate-12 scale-[1.4] translate-x-6 md:translate-x-24 -translate-y-2 md:-translate-y-6"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/45 to-background/85" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="">Premium Barbershop Experience</h2>
              <p className="mx-auto my-6 md:my-8 max-w-2xl text-lg">
                Discover Calgary's finest barbershop. Expert cuts, classic shaves, and timeless style crafted with precision.
              </p>

              <Button asChild size="lg" className="bg-[#B8860B] hover:bg-[#9B7209] text-white transition-colors duration-200 focus-visible:ring-[#B8860B]">
                <Link href="#book">
                  <span className="btn-label">Book Your Cut</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="bg-background relative z-10 py-16 scroll-mt-28">
          <div className="m-auto max-w-5xl flex flex-col items-center mt-10 md:mt-16 px-6">
            <h2 className="text-center text-2xl font-medium">Crafted for modern gentlemen.</h2>
            <div className="mx-auto mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 text-center">
              <div className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105">
                <Scissors className="h-8 w-8 text-[#B8860B]" aria-hidden />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Precision Cuts</span>
              </div>
              <div className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105">
                <Sparkles className="h-8 w-8 text-[#B8860B]" aria-hidden />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Hot Towel Shaves</span>
              </div>
              <div className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105">
                <ShieldCheck className="h-8 w-8 text-[#B8860B]" aria-hidden />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Hygiene First</span>
              </div>
              <div className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105">
                <Clock className="h-8 w-8 text-[#B8860B]" aria-hidden />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">On-Time Booking</span>
              </div>
              <div className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105 md:col-auto col-span-2 sm:col-span-1">
                <Star className="h-8 w-8 text-[#B8860B]" aria-hidden />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">5-Star Care</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}