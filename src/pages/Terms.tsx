import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/lib/site";

const sections = [
  {
    title: "1. Services",
    body: `ShwariNet Technologies provides Wi-Fi speed testing, network optimization, security assessments, IT support, and website development. The exact scope, deliverables, and pricing for your engagement are confirmed in writing (quotation, WhatsApp, or email) before work begins.`,
  },
  {
    title: "2. Quotations and Payment",
    body: `Quotations are valid for 14 days unless stated otherwise. Unless agreed otherwise, payment is due on completion of the agreed work. For larger projects, milestone payments may apply as agreed in writing.`,
  },
  {
    title: "3. Access and Site Rules",
    body: `For on-site work we require access to the areas where your network equipment is installed. You confirm you own the equipment and premises, or are authorized to grant us access. We treat your space with care and leave it as we found it.`,
  },
  {
    title: "4. Network Changes",
    body: `Optimization work may involve changing router settings, channels, passwords, or device placement. We explain significant changes before making them, and document credentials handed over or changed during the engagement.`,
  },
  {
    title: "5. Security Assessments",
    body: `Security assessments are limited to systems and networks you own or are authorized to have tested. Findings are reported confidentially to you and are not shared publicly without your written permission.`,
  },
  {
    title: "6. Website Development",
    body: `Website projects include one round of major revisions during development. Content (text, images, logos) must be supplied by you or agreed as part of the scope. Hosting, domains, and third-party services are billed at cost unless included in the quotation.`,
  },
  {
    title: "7. Warranties and Liability",
    body: `We stand behind our work: if a reported issue recurs within 14 days of sign-off, we return to fix it at no extra cost. Our total liability for any claim is limited to the amount paid for the specific engagement. We are not liable for pre-existing hardware faults, ISP outages, or events beyond our reasonable control.`,
  },
  {
    title: "8. Cancellation",
    body: `You may reschedule or cancel a booked visit free of charge up to 24 hours before the appointment. Same-day cancellations may attract a call-out fee as advised at booking.`,
  },
  {
    title: "9. Governing Law",
    body: `These terms are governed by the laws of Kenya. Any disputes will be resolved in the courts of Kenya.`,
  },
];

export default function Terms() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Effective date: September 26, 2026
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-foreground">{s.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/70 bg-card p-6">
          <h2 className="font-display text-base font-bold">Need clarification?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Email{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-primary hover:underline">
              {site.phoneDisplay}
            </a>{" "}
            before booking.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
