import { ArrowRight, Target, Heart, Users, Globe, Mail, CheckCircle2, Zap, Shield, BarChart3, Clock, Code2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";
import { Particles } from "../components/ui/particles";

const VALUES = [
  {
    Icon: Target,
    title: "Engineers First",
    desc: "We are builders ourselves. Every product decision is made by asking: would we use this? Is it brutally honest about performance?",
  },
  {
    Icon: Globe,
    title: "Democratizing AI Infrastructure",
    desc: "Frontier compute shouldn't be the exclusive preserve of trillion-dollar companies. We exist to give research labs, startups, and neoclouds the same hardware the hyperscalers use.",
  },
  {
    Icon: Heart,
    title: "Radical Transparency",
    desc: "No marketing pricing. No surprise fees. No hidden throttling. We publish our wholesale rates and let the hardware speak for itself.",
  },
  {
    Icon: Users,
    title: "Long-Term Partnerships",
    desc: "We measure success in years, not quarters. Our infrastructure team stays with you from your first training run to your thousandth production deployment.",
  },
];

const WHY_CHOOSE = [
  {
    Icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    title: "100% Bare Metal — Zero Overhead",
    desc: "Every GPU cycle goes to your workload. No hypervisors, no kernel shims, no virtualization tax. You get the full TDP advertised on the data sheet.",
    points: ["Direct PCIe lane access", "Native NVLink bandwidth", "No noisy-neighbor effects"],
  },
  {
    Icon: BarChart3,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Transparent, Wholesale Pricing",
    desc: "We don't charge per-API-call, per-GB egress, or per-IP-address the way hyperscalers do. One rate. Billed per minute. No surprises.",
    points: ["Per-minute billing", "Flat $0.05/GB egress", "No minimum commitment"],
  },
  {
    Icon: Clock,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    title: "Provision in Under 30 Seconds",
    desc: "Our orchestration layer eliminates the multi-hour wait times common with bare-metal clouds. SSH access in under 30 seconds, guaranteed.",
    points: ["Instant SSH provisioning", "Pre-built CUDA environments", "No queue or approval flow"],
  },
  {
    Icon: Shield,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Enterprise Security by Default",
    desc: "Single-tenant isolation at the hardware level. Your model weights, your user data, and your workload never share physical silicon with another company.",
    points: ["Hardware-level isolation", "Full disk encryption", "SOC 2 Type II compliant"],
  },
  {
    Icon: Code2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    title: "Full Root Access, Always",
    desc: "Install custom drivers, modify kernel parameters, run privileged containers. It's your machine — we just keep it online.",
    points: ["root SSH access", "Custom kernel support", "No software restrictions"],
  },
  {
    Icon: Award,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "99.95% SLA — Backed by Real Engineers",
    desc: "Our on-call infrastructure team responds in minutes, not hours. We own our hardware end-to-end, so there is no vendor to escalate to — we just fix it.",
    points: ["99.95% uptime guarantee", "< 15min response SLA", "Redundant power & networking"],
  },
];

const STATS = [
  { val: "10,000+", label: "GPUs Under Management" },
  { val: "4", label: "Global Data Center Regions" },
  { val: "99.95%", label: "Platform Uptime SLA" },
  { val: "<30s", label: "Average Provision Time" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <Particles className="absolute inset-0 z-0" quantity={100} staticity={40} color="#00e5ff" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/6 blur-[130px] rounded-full pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">About CloudGPU</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 max-w-4xl leading-[1.0]">
              We Believe Compute Should Be <AuroraText className="italic">Honest.</AuroraText>
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-3xl leading-relaxed">
              CloudGPU was founded by engineers who got tired of watching the AI revolution bottleneck on virtualized, overpriced, and opaque cloud infrastructure. So we built the alternative.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-3">{s.val}</div>
                  <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">{s.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission */}
        <section className="py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <BlurFade delay={0.1} direction="right">
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Our Mission</p>
                <h2 className="text-5xl font-black tracking-tight mb-8 leading-[1.1]">
                  The AI Economy Deserves Real Infrastructure.
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  Every major AI breakthrough of the past decade was bottlenecked not by ideas, but by access to compute. The hyperscalers charge a premium for virtualization you don't need and performance you'll never fully unlock.
                </p>
                <p className="text-xl text-muted leading-relaxed">
                  We provide the same bare-metal hardware that fills the world's most advanced AI data centers — at transparent, wholesale rates — to anyone with a workload worth running.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} direction="left">
              <div className="glass border border-white/5 rounded-[2.5rem] p-12 relative overflow-hidden">
                <div className="space-y-8">
                  {[
                    { label: "Founded", val: "2023" },
                    { label: "Headquarters", val: "San Francisco, CA" },
                    { label: "Data Center Regions", val: "US East, US West, EU, APAC" },
                    { label: "Status", val: "Privately Held" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
                      <span className="text-[10px] font-black text-muted uppercase tracking-widest">{item.label}</span>
                      <span className="font-black text-white">{item.val}</span>
                    </div>
                  ))}
                </div>
                <BorderBeam duration={6} />
              </div>
            </BlurFade>
          </div>

          {/* Values */}
          <BlurFade delay={0.1}>
            <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Our Values</p>
            <h2 className="text-5xl font-black tracking-tight mb-16 leading-[1.1]">What Drives Us</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1}>
                <div className="group flex items-start gap-6 p-10 glass border border-white/5 rounded-3xl hover:bg-white/5 hover:border-primary/20 transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform">
                    <v.Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-3 tracking-tight">{v.title}</h3>
                    <p className="text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="pb-40">
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Why CloudGPU</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
                Six Reasons Teams Choose <AuroraText className="italic">Bare Metal</AuroraText>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {WHY_CHOOSE.map((item, i) => (
              <BlurFade key={i} delay={0.08 + i * 0.07}>
                <div className={`group relative glass border rounded-3xl p-10 h-full flex flex-col hover:bg-white/5 transition-all overflow-hidden ${item.border}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <item.Icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-muted leading-relaxed mb-8 flex-1">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-bold text-white/70">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.color}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Contact / CTA */}
          <BlurFade delay={0.1}>
            <div className="relative glass border border-white/5 rounded-[2.5rem] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
              <div>
                <h2 className="text-4xl font-black mb-4 tracking-tight italic">Want to work with us?</h2>
                <p className="text-xl text-muted max-w-xl leading-relaxed">We're always looking for exceptional infrastructure engineers, sales architects, and operations specialists.</p>
                <div className="flex items-center gap-2 mt-6 text-muted">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:careers@cloudgpu.io" className="font-bold hover:text-white transition-colors">careers@cloudgpu.io</a>
                </div>
              </div>
              <Link to="/contact" className="shrink-0 group flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:scale-105 transition-all">
                Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <BorderBeam duration={6} />
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
