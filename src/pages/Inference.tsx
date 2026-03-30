import { ArrowRight, Zap, CheckCircle2, BarChart3, Clock, Shield, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";

const BENEFITS = [
  { icon: Zap, title: "Sub-10ms P99 Latency", desc: "Bare-metal access eliminates hypervisor overhead — your tokens reach users faster." },
  { icon: BarChart3, title: "Linear Throughput Scaling", desc: "Scale horizontally across dedicated nodes with no shared-tenancy congestion." },
  { icon: Clock, title: "Always-On SLA", desc: "99.95% uptime guarantee with redundant power and network paths to every server." },
  { icon: Shield, title: "Single-Tenant Isolation", desc: "Your model weights and user data never coexist with another company's workload." },
];

const STACKS = [
  { name: "vLLM", desc: "Optimized PagedAttention serving for transformer models." },
  { name: "NVIDIA Triton", desc: "High-performance inference server with dynamic batching." },
  { name: "TensorRT-LLM", desc: "Quantized, fused-kernel inference for maximum GPU utilization." },
  { name: "Ray Serve", desc: "Distributed serving with autoscaling and A/B routing." },
];

export default function Inference() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <div className="mb-6">
          <Link to="/solutions" className="text-[10px] font-black text-muted uppercase tracking-[0.2em] hover:text-primary transition-colors">← Back to Solutions</Link>
        </div>
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-black text-violet-400 uppercase tracking-[0.2em] mb-8">
            <Zap className="w-3 h-3" /> Production Inference
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
            Inference Infrastructure That <AuroraText className="italic">Scales Without Limits</AuroraText>
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            High-throughput, low-latency serving for production AI. Dedicated bare metal means your model performance is never compromised by a neighbor's training run.
          </p>
        </div>
      </BlurFade>

      {/* Benefits */}
      <BlurFade delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {BENEFITS.map((b, i) => (
            <div key={i} className="group flex items-start gap-6 p-8 glass border border-white/5 rounded-2xl hover:bg-white/5 hover:border-violet-500/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="font-black text-lg mb-2 tracking-tight">{b.title}</h3>
                <p className="text-muted leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Compatible Stacks */}
      <BlurFade delay={0.3}>
        <h2 className="text-4xl font-black tracking-tight mb-12 italic">Compatible Inference Stacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {STACKS.map((s, i) => (
            <div key={i} className="flex items-start gap-4 p-8 glass border border-white/5 rounded-2xl hover:border-violet-500/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-lg mb-1">{s.name}</h3>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture hint */}
        <div className="glass border border-white/5 rounded-3xl p-10 mb-24">
          <h3 className="text-2xl font-black mb-6 italic tracking-tight flex items-center gap-3">
            <Cpu className="w-6 h-6 text-violet-400" /> Recommended Configuration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {[
              { label: "Small Models (≤13B)", val: "1–2× RTX 4090 or A100 PCIe" },
              { label: "Medium Models (30–70B)", val: "4× A100 SXM4 or 2× H100" },
              { label: "Large Models (180B+)", val: "8× H100 SXM5 cluster" },
            ].map((r) => (
              <div key={r.label} className="p-6 bg-white/5 rounded-2xl">
                <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-2">{r.label}</p>
                <p className="font-mono font-bold text-white">{r.val}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.4}>
        <div className="relative glass border border-violet-500/20 rounded-[2.5rem] p-14 text-center overflow-hidden">
          <h2 className="text-4xl font-black mb-6 italic tracking-tight">Launch your inference fleet today.</h2>
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto">From a single A100 to a multi-node serving cluster — deploy in under 30 seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inventory" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-violet-400 hover:scale-105 transition-all">
              Browse Inventory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 glass border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-white">
              Talk to Sales
            </Link>
          </div>
          <BorderBeam duration={5} colorFrom="#a855f7" colorTo="#6366f1" />
        </div>
      </BlurFade>
    </div>
  );
}
