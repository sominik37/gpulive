import { ArrowRight, Layers, Zap, Factory, Globe, FlaskConical, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";

const SOLUTIONS = [
  {
    Icon: Layers,
    title: "AI Training Clusters",
    slug: "ai-clusters",
    desc: "Multi-node HGX™ superclusters with NVIDIA Quantum-2 InfiniBand for training frontier models at scale.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    tags: ["H100 SXM5", "GH200", "NDR InfiniBand", "LLM Training"],
  },
  {
    Icon: Zap,
    title: "Production Inference",
    slug: "inference",
    desc: "High-throughput, low-latency serving infrastructure purpose-built for real-world AI traffic.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    tags: ["TensorRT", "vLLM", "Triton", "Low Latency"],
  },
  {
    Icon: Factory,
    title: "Data Center Monetization",
    slug: "datacenter",
    desc: "Already own hardware? Plug into our AI Factory OS to provision, manage, and monetize idle GPU capacity.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    tags: ["Colocation", "GPU-as-a-Service", "AI Factory OS", "Revenue Share"],
  },
  {
    Icon: FlaskConical,
    title: "Research & Academia",
    slug: "research",
    desc: "On-demand GPU access for research labs, universities, and open-science initiatives at wholesale rates.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    tags: ["On-Demand", "Fine-Tuning", "R&D", "Academic Pricing"],
  },
];

export default function Solutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Solutions</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            Built for Every Stage of the <AuroraText className="italic">AI Lifecycle</AuroraText>
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            From training the world's largest models to serving real-time inference at the edge — our infrastructure meets you where your workload demands.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS.map((s, i) => (
          <BlurFade key={i} delay={0.1 + i * 0.1}>
            <Link
              to={`/solutions/${s.slug}`}
              className={`group relative glass border rounded-3xl p-10 h-full flex flex-col hover:bg-white/5 transition-all overflow-hidden ${s.border}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${s.bg} group-hover:scale-110 transition-transform duration-300`}>
                <s.Icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <h2 className="text-2xl font-black mb-4 tracking-tight">{s.title}</h2>
              <p className="text-muted leading-relaxed text-lg mb-8 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest glass border border-white/10 rounded-full text-white/50">{tag}</span>
                ))}
              </div>
              <div className={`flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] ${s.color}`}>
                Explore Solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} />
            </Link>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.5}>
        <div className="mt-16 glass border border-white/5 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
              <Globe className="w-7 h-7 text-white/60" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">Need a custom solution?</h3>
              <p className="text-muted leading-relaxed">Our solutions engineers will design an infrastructure stack tailored to your workload.</p>
            </div>
          </div>
          <Link to="/contact" className="shrink-0 group px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-primary hover:scale-105 transition-all flex items-center gap-3">
            Talk to an Engineer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <BorderBeam duration={5} />
        </div>
      </BlurFade>
    </div>
  );
}
