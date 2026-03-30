import { ArrowRight, Factory, CheckCircle2, BarChart3, DollarSign, Shield, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";

const HOW_IT_WORKS = [
  { num: "01", title: "Register Your Hardware", desc: "Submit your server inventory and rack specifications through our onboarding portal. Our engineers validate compatibility." },
  { num: "02", title: "Install AI Factory OS", desc: "We deploy our lightweight management layer on your bare-metal nodes — zero disruption, full visibility." },
  { num: "03", title: "Start Earning", desc: "Your hardware is instantly listed in our marketplace. Customers deploy, you earn wholesale rates minus a small platform fee." },
];

const BENEFITS = [
  { icon: DollarSign, title: "Guaranteed Monthly Revenue", desc: "Predictable payout schedule with real-time utilization dashboards." },
  { icon: Shield, title: "Zero Ops Overhead", desc: "We handle provisioning, customer support, and infrastructure monitoring." },
  { icon: BarChart3, title: "Full Utilization Visibility", desc: "GPU-level usage metrics, thermal telemetry, and financial reporting in one dashboard." },
  { icon: Plug, title: "Non-Invasive Integration", desc: "Our management plane integrates in hours — no firmware or hardware modifications required." },
];

export default function DataCenter() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <div className="mb-6">
          <Link to="/solutions" className="text-[10px] font-black text-muted uppercase tracking-[0.2em] hover:text-primary transition-colors">← Back to Solutions</Link>
        </div>
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-8">
            <Factory className="w-3 h-3" /> Data Center Monetization
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
            Turn Idle GPUs into <AuroraText className="italic">Guaranteed Revenue</AuroraText>
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Already own GPU hardware? Plug it into our AI Factory OS and immediately start serving enterprise customers — without the overhead of running a cloud business yourself.
          </p>
        </div>
      </BlurFade>

      {/* How it works */}
      <BlurFade delay={0.2}>
        <h2 className="text-4xl font-black tracking-tight mb-12 italic">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={i} className="group relative glass border border-white/5 rounded-3xl p-10 hover:bg-white/5 hover:border-amber-500/20 transition-all overflow-hidden">
              <span className="text-6xl font-black text-amber-400/20 italic tracking-tighter absolute top-6 right-8">{step.num}</span>
              <h3 className="text-xl font-black mb-4 tracking-tight relative z-10">{step.title}</h3>
              <p className="text-muted leading-relaxed relative z-10">{step.desc}</p>
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} colorFrom="#f59e0b" colorTo="#d97706" />
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Benefits */}
      <BlurFade delay={0.3}>
        <h2 className="text-4xl font-black tracking-tight mb-12 italic">Partner Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {BENEFITS.map((b, i) => (
            <div key={i} className="flex items-start gap-6 p-8 glass border border-white/5 rounded-2xl hover:border-amber-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-black text-lg mb-2">{b.title}</h3>
                <p className="text-muted leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Eligible hardware */}
        <div className="glass border border-white/5 rounded-3xl p-10 mb-24">
          <h3 className="text-2xl font-black mb-8 italic tracking-tight">Eligible Hardware</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["NVIDIA H100", "NVIDIA A100", "NVIDIA H200", "NVIDIA A100 PCIe", "RTX 4090", "RTX A6000", "RTX A5000", "A40"].map((hw) => (
              <div key={hw} className="flex items-center gap-2 p-4 bg-white/5 rounded-2xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm font-bold text-white/80">{hw}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.4}>
        <div className="relative glass border border-amber-500/20 rounded-[2.5rem] p-14 text-center overflow-hidden">
          <h2 className="text-4xl font-black mb-6 italic tracking-tight">Start monetizing your fleet.</h2>
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto">Talk to our partner team to get your hardware onboarded and earning revenue within days.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-amber-400 hover:scale-105 transition-all">
            Become a Partner <ArrowRight className="w-4 h-4" />
          </Link>
          <BorderBeam duration={5} colorFrom="#f59e0b" colorTo="#f97316" />
        </div>
      </BlurFade>
    </div>
  );
}
