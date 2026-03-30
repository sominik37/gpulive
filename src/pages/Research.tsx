import { ArrowRight, FlaskConical, CheckCircle2, BookOpen, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";

const FEATURES = [
  { icon: BookOpen, title: "On-Demand Access, No Commitment", desc: "Spin up compute for a single experiment, a paper deadline, or a semester-long project — pay only for what you use." },
  { icon: GraduationCap, title: "Academic Pricing", desc: "Verified academic institutions qualify for discounted rates. Contact us with your institution credentials." },
  { icon: Users, title: "Multi-User Lab Accounts", desc: "Manage GPU budgets and access controls across entire research groups from a single account dashboard." },
  { icon: FlaskConical, title: "Pre-Built Research Environments", desc: "Start immediately with curated images including PyTorch, JAX, CUDA, Hugging Face, and Jupyter pre-installed." },
];

const SUITABLE_FOR = [
  "Foundation model experimentation",
  "NLP & computer vision research",
  "Protein structure prediction (AlphaFold, ESMFold)",
  "Reinforcement learning environments",
  "Graph neural networks",
  "Climate & physics simulations",
  "Medical imaging & diagnostics AI",
  "Open-source model fine-tuning",
];

export default function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <div className="mb-6">
          <Link to="/solutions" className="text-[10px] font-black text-muted uppercase tracking-[0.2em] hover:text-primary transition-colors">← Back to Solutions</Link>
        </div>
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-black text-pink-400 uppercase tracking-[0.2em] mb-8">
            <FlaskConical className="w-3 h-3" /> Research & Academia
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
            Compute for the World's <AuroraText className="italic">Next Breakthroughs</AuroraText>
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Research shouldn't be bottlenecked by a university HPC queue or a hyperscaler's pricing model. We provide wholesale-rate GPU access for labs, universities, and open-science projects.
          </p>
        </div>
      </BlurFade>

      {/* Features */}
      <BlurFade delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {FEATURES.map((f, i) => (
            <div key={i} className="group flex items-start gap-6 p-8 glass border border-white/5 rounded-2xl hover:bg-white/5 hover:border-pink-500/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-black text-lg mb-2 tracking-tight">{f.title}</h3>
                <p className="text-muted leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Suitable for */}
      <BlurFade delay={0.3}>
        <h2 className="text-4xl font-black tracking-tight mb-12 italic">Suitable For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {SUITABLE_FOR.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 glass border border-white/5 rounded-2xl hover:border-pink-500/20 transition-all">
              <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0" />
              <span className="font-bold text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* CTA */}
      <BlurFade delay={0.4}>
        <div className="relative glass border border-pink-500/20 rounded-[2.5rem] p-14 text-center overflow-hidden">
          <h2 className="text-4xl font-black mb-6 italic tracking-tight">Accelerate your research.</h2>
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto">Browse available GPU instances and start your experiment in under 60 seconds — no approval queues.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inventory" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-pink-400 hover:scale-105 transition-all">
              View GPU Inventory <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 glass border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
              Academic Inquiry
            </Link>
          </div>
          <BorderBeam duration={5} colorFrom="#ec4899" colorTo="#8b5cf6" />
        </div>
      </BlurFade>
    </div>
  );
}
