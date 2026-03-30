import { ArrowRight, Layers, CheckCircle2, Network, Database, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";

const SPECS = [
  { icon: Cpu, label: "NVIDIA HGX™ H100 / GH200 / B200", desc: "Latest Hopper & Blackwell silicon, NVLink-connected within each node." },
  { icon: Network, label: "NVIDIA Quantum-2 NDR InfiniBand", desc: "3.2 Tb/s non-blocking fabric — zero bandwidth tax across thousands of GPUs." },
  { icon: Database, label: "Lustre / Weka Parallel FS", desc: "NVMe-backed shared storage delivering sustained 100+ GB/s across every node." },
  { icon: Zap, label: "Liquid-Cooled, 100kW+ per Rack", desc: "Thermal headroom engineered so your GPUs always boost to TDP." },
];

const USE_CASES = [
  { title: "Pre-Training Foundation Models", desc: "Run trillion-parameter LLM runs across thousands of H100s with full checkpoint support." },
  { title: "Distributed Fine-Tuning", desc: "FSDP, DDP, and DeepSpeed-ready environments with optimized NCCL collectives." },
  { title: "Reinforcement Learning from Human Feedback", desc: "RLHF pipelines with tight coupling between inference and training nodes." },
  { title: "Diffusion Model Training", desc: "Image, video, and audio generative model training at research and production scale." },
];

export default function AIClusters() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <div className="mb-6">
          <Link to="/solutions" className="text-[10px] font-black text-muted uppercase tracking-[0.2em] hover:text-primary transition-colors">← Back to Solutions</Link>
        </div>
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-black text-primary uppercase tracking-[0.2em] mb-8">
            <Layers className="w-3 h-3" /> AI Training Clusters
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
            Supercluster Infrastructure for <AuroraText className="italic">Frontier AI</AuroraText>
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Multi-node HGX™ systems interconnected with NVIDIA Quantum-2 InfiniBand. The only infrastructure capable of keeping up with your training run's appetite for bandwidth and compute.
          </p>
        </div>
      </BlurFade>

      {/* Specs */}
      <BlurFade delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {SPECS.map((spec, i) => (
            <div key={i} className="group flex items-start gap-6 p-8 glass border border-white/5 rounded-2xl hover:bg-white/5 hover:border-primary/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-lg mb-2 tracking-tight">{spec.label}</h3>
                <p className="text-muted leading-relaxed">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Use Cases */}
      <BlurFade delay={0.3}>
        <h2 className="text-4xl font-black tracking-tight mb-12 italic">Common Workloads</h2>
        <div className="divide-y divide-white/5 mb-24">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="group py-8 flex items-start gap-6 hover:pl-4 transition-all">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black mb-2">{uc.title}</h3>
                <p className="text-muted leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.4}>
        <div className="relative glass border border-primary/20 rounded-[2.5rem] p-14 text-center overflow-hidden">
          <h2 className="text-4xl font-black mb-6 italic tracking-tight">Ready to train at scale?</h2>
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto">Our infrastructure engineers will right-size a cluster topology for your model architecture and dataset.</p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:scale-105 transition-all">
            Design Your Cluster <ArrowRight className="w-4 h-4" />
          </Link>
          <BorderBeam duration={5} />
        </div>
      </BlurFade>
    </div>
  );
}
