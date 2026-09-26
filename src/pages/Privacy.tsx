import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/lib/site";

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you contact ShwariNet Technologies through our website form, WhatsApp, phone, or email, we collect the details you provide: your name, phone number, email address, the service you need, and the message describing your request. During on-site work we may also record technical readings about your network (speed, coverage, and device inventories) with your knowledge.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use your information to respond to your request, schedule visits, deliver and document the service you asked for, and follow up afterward. We do not sell, rent, or trade your personal information to anyone.`,
  },
  {
    title: "3. Communications",
    body: `By submitting the contact form you consent to be contacted by ShwariNet Technologies by phone, WhatsApp, or email regarding your request. You can ask us to stop contacting you at any time by replying to any message or calling ${site.phoneDisplay}.`,
  },
  {
    title: "4. Data Storage and Security",
    body: `Contact requests are stored securely and accessed only by ShwariNet staff who need them to serve you. We apply the same security standards to your data that we apply to the networks we audit — least-privilege access and careful handling of any credentials you share during support.`,
  },
  {
    title: "5. Cookies and Analytics",
    body: `This website is a lightweight single-page application. We do not use advertising cookies. If we add privacy-respecting analytics in the future, this policy will be updated first.`,
  },
  {
    title: "6. Your Rights",
    body: `You may request a copy of the information we hold about you, ask us to correct it, or ask us to delete it. To exercise these rights, email ${site.email} and we will respond within one business day.`,
  },
  {
    title: "7. Changes to This Policy",
    body: `We may update this policy as the business evolves. The latest version will always be published on this page with an updated effective date.`,
  },
];

export default function Privacy() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
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
          <h2 className="font-display text-base font-bold">Questions?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-primary hover:underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
