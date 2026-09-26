import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { NetworkMap } from "@/components/sections/NetworkMap";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Stats />
      <NetworkMap />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
}
