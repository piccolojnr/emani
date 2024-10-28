"use client";
import Footer from "@/components/Footer";
import Moto from "@/components/moto";
import Navbar from "@/components/navbar";
import Hero from "@/components/views/hero";
import How from "@/components/views/how";
import Services from "@/components/views/services";
import WhyUs from "@/components/views/whyus";

export default function Page() {
  return (
    <>
      {/* Moto (Header) Section */}
      <Moto />

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 border-b">
        <Navbar />
      </div>

      {/* Main Content Sections */}
      <main className="">
        <Hero />
        <Services />
        <How />
        <WhyUs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
