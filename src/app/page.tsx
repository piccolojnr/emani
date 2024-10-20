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
      <Moto />
      <Navbar />
      <Hero />
      <Services />
      <How />
      <WhyUs />
      <Footer />
    </>
  );
}
