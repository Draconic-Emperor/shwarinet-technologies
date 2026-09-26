export const site = {
  name: "ShwariNet Technologies",
  tagline: "Get Your Wi-Fi's Worth.",
  footerLine: "Reliable • Secure • Connected",
  description:
    "Professional Wi-Fi testing, network optimization, IT support, and security assessments. Get your Wi-Fi's worth with ShwariNet Technologies.",
  url: "https://shwarinet.tech",
  phoneDisplay: "+254 782 123 320",
  phoneHref: "tel:+254782123320",
  email: "shwarinet.tech@gmail.com",
  whatsapp: "https://wa.me/254782123320",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    id: "speed-testing",
    icon: "gauge",
    title: "Wi-Fi Speed Testing",
    tagline: "Know your real numbers",
    description:
      "Professional speed audits at every corner of your space — download, upload, latency and jitter, benchmarked against what your ISP actually promised you.",
    points: ["Room-by-room speed audit", "Latency & jitter profiling", "ISP plan benchmark report"],
    cta: "Test My Speed",
  },
  {
    id: "network-optimization",
    icon: "waves",
    title: "Network Optimization",
    tagline: "Every device, full strength",
    description:
      "We tune channels, placement, and QoS so streaming, calls, and gaming run without buffering — even when the whole household is online.",
    points: ["Channel & band planning", "Router placement & mesh design", "QoS for work and gaming"],
    cta: "Optimize My Network",
  },
  {
    id: "security-assessment",
    icon: "shield",
    title: "Security Assessment",
    tagline: "Lock every door",
    description:
      "A full sweep of your network's defenses: router hardening, firmware, encryption standards, guest isolation, and rogue-device detection.",
    points: ["WPA3 & encryption audit", "Router firmware hardening", "Guest network isolation"],
    cta: "Secure My Network",
  },
  {
    id: "it-support",
    icon: "headset",
    title: "IT Support",
    tagline: "Help that actually helps",
    description:
      "Responsive, human support for homes and offices — from printers and laptops to full office setups — on-site or remotely, when you need it.",
    points: ["Same-day remote response", "On-site visits", "Device & printer setup"],
    cta: "Get Support",
  },
  {
    id: "website-development",
    icon: "code",
    title: "Website Development",
    tagline: "Presence that converts",
    description:
      "Fast, secure, mobile-first websites for businesses that need to be found — built with the same performance standards we hold our networks to.",
    points: ["Business & portfolio sites", "SEO-ready builds", "Fast, secure hosting setup"],
    cta: "Build My Website",
  },
] as const;

export const whyUs = [
  {
    icon: "plug",
    title: "Reliable Connectivity",
    description:
      "We don't stop at 'it works'. We engineer connections that hold up under real load — movie night, deadlines, and tournament finals alike.",
  },
  {
    icon: "headset",
    title: "Professional Support",
    description:
      "Real engineers, not scripts. Clear answers, honest timelines, and follow-ups that make sure the fix actually stuck.",
  },
  {
    icon: "shield",
    title: "Security Focus",
    description:
      "Every visit includes a security lens. We harden routers, close backdoors, and keep your smart home from becoming a smart liability.",
  },
  {
    icon: "gauge",
    title: "Optimized Performance",
    description:
      "Measurements over guesswork. We benchmark before and after, so you can see exactly what your money is buying.",
  },
] as const;

export const stats = [
  { value: 1250, suffix: "+", label: "Networks Tested" },
  { value: 8400, suffix: "+", label: "Devices Supported" },
  { value: 320, suffix: "+", label: "Security Reviews" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
] as const;

export const testimonials = [
  {
    quote:
      "They mapped every dead zone in the house and fixed buffering we'd blamed on the ISP for two years. The speed tests before and after told the whole story.",
    name: "Wanjiru K.",
    role: "Homeowner, Nairobi",
  },
  {
    quote:
      "Our office calls kept dropping during client meetings. ShwariNet re-planned the channels and QoS in one afternoon — we haven't had a frozen call since.",
    name: "Daniel O.",
    role: "Operations Lead, FinTech Startup",
  },
  {
    quote:
      "As a gamer, ping is everything. They cut my latency by more than half and set up my setup properly. Ranked queues finally feel fair.",
    name: "Brian M.",
    role: "Esports Player",
  },
  {
    quote:
      "The security review alone was worth it — outdated firmware and a wide-open guest network, sorted in a single visit. Professional from start to finish.",
    name: "Amina H.",
    role: "Clinic Manager",
  },
] as const;

export const contactServices = [
  "Wi-Fi Speed Testing",
  "Network Optimization",
  "Security Assessment",
  "IT Support",
  "Website Development",
] as const;
