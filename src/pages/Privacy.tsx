import { BlurFade } from "../components/ui/blur-fade";

const LAST_UPDATED = "March 30, 2026";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <BlurFade delay={0.1}>
        <div className="mb-16">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-muted font-bold">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-12">

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">1. Introduction</h2>
            <p className="text-muted leading-relaxed">
              CloudGPU ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our bare-metal GPU cloud services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our platform.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">2. Information We Collect</h2>
            <p className="text-muted leading-relaxed mb-6">We collect information you provide directly to us, including:</p>
            <ul className="space-y-3">
              {[
                "Account registration information (name, email address, company name)",
                "Billing and payment information (credit card details processed via PCI-compliant processors)",
                "Technical configuration data (SSH public keys, IP allowlists, resource preferences)",
                "Communication records (support tickets, sales inquiries, and correspondence)",
                "Usage telemetry (GPU utilization metrics, uptime logs, provisioning events)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">3. How We Use Your Information</h2>
            <ul className="space-y-3">
              {[
                "To provision and manage your GPU instances and cloud resources",
                "To process payments and send billing invoices",
                "To provide customer support and respond to inquiries",
                "To send operational notifications (maintenance windows, SLA alerts)",
                "To improve our platform, identify abuse, and enhance security",
                "To comply with legal obligations and enforce our Terms of Service",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">4. Data Sharing & Third Parties</h2>
            <p className="text-muted leading-relaxed mb-6">
              We do not sell, rent, or trade your personal information. We may share your data with trusted third-party service providers strictly for the purpose of operating our platform, including:
            </p>
            <ul className="space-y-3">
              {[
                "Payment processors (Stripe) for billing",
                "Infrastructure monitoring providers (Datadog, PagerDuty)",
                "Customer support platforms (Intercom)",
                "Legal authorities when required by law",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">5. Data Retention & Your Rights</h2>
            <p className="text-muted leading-relaxed mb-6">
              We retain your personal data for as long as your account is active or as needed to provide our services. You have the right to:
            </p>
            <ul className="space-y-3">
              {[
                "Access, correct, or delete your personal data",
                "Object to or restrict certain processing activities",
                "Request data portability in a machine-readable format",
                "Lodge a complaint with a supervisory authority (for EU residents under GDPR)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">6. Security</h2>
            <p className="text-muted leading-relaxed">
              We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II controls, and regular third-party penetration testing. Notwithstanding, no method of electronic transmission or storage is 100% secure.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">7. Contact</h2>
            <p className="text-muted leading-relaxed">
              For privacy-related inquiries, please email us at{" "}
              <a href="mailto:privacy@cloudgpu.io" className="text-primary font-bold hover:underline">privacy@cloudgpu.io</a>.
            </p>
          </div>

        </div>
      </BlurFade>
    </div>
  );
}
