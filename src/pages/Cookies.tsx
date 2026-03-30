import { BlurFade } from "../components/ui/blur-fade";
import { Link } from "react-router-dom";

const LAST_UPDATED = "March 30, 2026";

const COOKIE_TYPES = [
  {
    name: "Strictly Necessary",
    required: true,
    desc: "These cookies are essential for the platform to function properly. They enable core features like authentication sessions, load balancing, and security (CSRF tokens). You cannot opt out of these.",
    examples: ["session_id", "csrf_token", "lb_route"],
  },
  {
    name: "Performance & Analytics",
    required: false,
    desc: "We use aggregated, anonymized analytics to understand how users navigate the platform so we can improve the experience. No personally identifiable data is stored.",
    examples: ["_ga", "_gid", "plausible_ignore"],
  },
  {
    name: "Functional",
    required: false,
    desc: "These cookies remember your preferences — such as your selected region, dark mode preference, and dismissed banners — to provide a more personalized experience.",
    examples: ["region_pref", "ui_theme", "banner_dismissed"],
  },
  {
    name: "Marketing",
    required: false,
    desc: "We do not serve advertising or use advertising-based tracking cookies. We have no interest in selling your attention.",
    examples: ["None — we don't use these."],
  },
];

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <BlurFade delay={0.1}>
        <div className="mb-16">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">Cookie Policy</h1>
          <p className="text-muted font-bold">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10">

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">What Are Cookies?</h2>
            <p className="text-muted leading-relaxed">
              Cookies are small text files placed on your device by a website you visit. They serve a variety of purposes — from keeping you logged in to helping us understand how our platform is used. This policy explains exactly which cookies we use and why.
            </p>
          </div>

          {COOKIE_TYPES.map((type) => (
            <div key={type.name} className="glass border border-white/5 rounded-3xl p-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-2xl font-black tracking-tight">{type.name}</h2>
                <span className={`shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                  type.required
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-white/5 border-white/10 text-muted"
                }`}>
                  {type.required ? "Always Active" : "Optional"}
                </span>
              </div>
              <p className="text-muted leading-relaxed mb-6">{type.desc}</p>
              <div>
                <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-3">Example Cookie Names</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex) => (
                    <code key={ex} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-sm font-mono text-white/70">{ex}</code>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">Managing Your Preferences</h2>
            <p className="text-muted leading-relaxed mb-6">
              You can control optional cookies through your browser settings or by clearing your cookies at any time. Note that disabling strictly necessary cookies will prevent the platform from functioning. Most browsers allow you to:
            </p>
            <ul className="space-y-3">
              {[
                "View and delete individual cookies stored by our domain",
                "Block all cookies from specific websites",
                "Be notified before a cookie is stored",
                "Automatically delete cookies when you close your browser",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">Third-Party Cookies</h2>
            <p className="text-muted leading-relaxed">
              We use a minimal set of third-party services which may set their own cookies. These are limited to our payment processor (Stripe) and analytics provider (Plausible Analytics — a privacy-first, cookieless analytics tool). We do not allow any advertising networks to place cookies on our platform.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">Updates to This Policy</h2>
            <p className="text-muted leading-relaxed mb-4">
              We may update this Cookie Policy as our platform evolves. Changes will be noted with an updated "Last updated" date at the top of this page. Continued use of our platform after such changes constitutes acceptance of the updated policy.
            </p>
            <p className="text-muted leading-relaxed">
              For questions, reach us at{" "}
              <a href="mailto:privacy@cloudgpu.io" className="text-primary font-bold hover:underline">privacy@cloudgpu.io</a>.
              You may also review our{" "}
              <Link to="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link>
              {" "}and{" "}
              <Link to="/terms" className="text-primary font-bold hover:underline">Terms of Service</Link>.
            </p>
          </div>

        </div>
      </BlurFade>
    </div>
  );
}
