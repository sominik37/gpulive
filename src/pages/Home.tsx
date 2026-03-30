import React, { useState } from "react";
import { ArrowRight, Cpu, Server, Zap, ChevronDown, Shield, Network, CheckCircle2, Database, Lock, Globe, Code2, Factory, Layers, BarChart3, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { AuroraText } from "../components/ui/aurora-text";
import { Particles } from "../components/ui/particles";
import { BorderBeam } from "../components/ui/border-beam";
import { BlurFade } from "../components/ui/blur-fade";
import { Marquee } from "../components/ui/marquee";

const FAQS = [
  { q: "How am I billed for on-demand instances?", a: "We bill by the minute for on-demand instances. You only pay for the exact time your instance is running. There are no hidden fees or minimum commitments for on-demand usage." },
  { q: "Can I install custom drivers and software?", a: "Yes, you have full root SSH access to your instances. While we provide pre-configured images with CUDA, PyTorch, and Docker, you are free to install any compatible software or custom drivers." },
  { q: "What networking fabric do you use?", a: "We use NVIDIA Quantum-2 InfiniBand providing 3.2Tb/s NDR non-blocking fabric. This delivers the low-latency, high-bandwidth interconnect required for large-scale distributed training." },
  { q: "Do you offer custom cluster configurations?", a: "Absolutely. For enterprise customers committing to 1-year or 3-year terms, we can build custom InfiniBand clusters up to 4,096 GPUs tailored to your specific networking and storage requirements." },
  { q: "Are there any egress or data transfer fees?", a: "Inbound data transfer is completely free. Outbound data transfer is billed at a flat rate of $0.05 per GB, which is significantly lower than major cloud providers." },
];

const LOGOS = ["NVIDIA", "PyTorch", "TensorFlow", "Hugging Face", "Docker", "Kubernetes", "Jupyter", "Ubuntu", "CUDA", "Triton"];

const SERVICES = [
  {
    num: "01",
    Icon: Layers,
    name: "Model Training Superclusters",
    description: "Multi-node NVIDIA HGX™ systems interconnected with NVIDIA Quantum-2 InfiniBand. The throughput and high-speed storage your LLM runs demand.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    num: "02",
    Icon: Zap,
    name: "Production Inference",
    description: "High-throughput, low-latency serving infrastructure. Build for real-world traffic with dedicated bare-metal reliability.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    num: "03",
    Icon: Code2,
    name: "Developer Platforms",
    description: "On-demand GPU instances for R&D, fine-tuning, and prototyping. Scale your resources as your model matures.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    num: "04",
    Icon: Factory,
    name: "Data Center Monetization",
    description: "Already have hardware? Plug into our \"AI Factory OS\" to manage, provision, and monetize your idle GPU capacity.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

const TECH_SPECS = [
  { Icon: Cpu, title: "NVIDIA H100 & B200 Support", desc: "Access the latest Blackwell and Hopper architectures." },
  { Icon: Network, title: "Non-Blocking Interconnect", desc: "3.2Tb/s NDR InfiniBand fabric for seamless distributed training." },
  { Icon: Database, title: "High-Performance Storage", desc: "NVMe-based parallel file systems (Lustre/Weka) for massive dataset ingestion." },
  { Icon: Zap, title: "Liquid-Cooled Density", desc: "Designed for 100kW+ per rack so your GPUs never thermal throttle." },
  { Icon: Code2, title: "Unified API", desc: "Programmatic control—provision, monitor, and scale your entire fleet via a single endpoint." },
  { Icon: BarChart3, title: "Bare Metal Performance", desc: "100% hardware throughput. No noisy neighbors, no shared resources, no compromises." },
];

const SECURITY = [
  { Icon: Server, title: "Single-Tenant by Design", desc: "Physical isolation at the hardware level. Your workload is the only workload on your node." },
  { Icon: Globe, title: "Global Reach & Residency", desc: "Deploy in specific regions to meet data residency and compliance requirements (SOC2, HIPAA, GDPR)." },
  { Icon: Lock, title: "Encrypted at Rest", desc: "Full disk encryption and secure remote attestation for complete peace of mind." },
];

function FAQItem({ question, answer }: { key?: React.Key; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button className="w-full py-8 flex justify-between items-center text-left focus:outline-none group" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-xl font-bold group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-muted transition-transform duration-300 shrink-0", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-8 text-muted leading-relaxed text-lg max-w-3xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus("submitting");
    setTimeout(() => {
      setContactStatus("success");
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setContactStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">

      {/* ── 1. HERO ── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-40 overflow-hidden">
        <Particles className="absolute inset-0 z-0" quantity={200} staticity={25} color="#00e5ff" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-primary/8 blur-[160px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.15}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-sm font-bold text-primary mb-10 relative">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>H200 Clusters Now Available — 2 GPU × 5 Servers</span>
              <BorderBeam size={120} duration={4} borderWidth={1.5} />
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-[1.0] mb-10 max-w-5xl">
              The Bare Metal Foundation for the{" "}
              <AuroraText className="italic">AI Economy.</AuroraText>
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mb-14 leading-relaxed font-medium">
              High-performance GPU clusters and infrastructure designed specifically for large-scale training and low-latency inference.{" "}
              <span className="text-white font-bold">No hypervisors. No "noisy neighbors."</span> Just pure, unthrottled compute.
            </p>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link to="/contact" className="group relative px-10 py-5 bg-white text-black rounded-full font-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-sm uppercase tracking-widest overflow-hidden">
                <span className="relative z-10">Build Your Cluster</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/40 group-hover:h-full transition-all duration-300" />
              </Link>
              <Link to="/inventory" className="px-10 py-5 glass border border-white/10 rounded-full font-black hover:bg-white/5 transition-all text-sm uppercase tracking-widest text-center">
                View Inventory & Pricing
              </Link>
            </div>
          </BlurFade>

          {/* Featured H200 Card */}
          <BlurFade delay={0.6}>
            <div className="mt-20 max-w-2xl">
              <div className="relative group p-8 glass border border-primary/20 rounded-[2.5rem] overflow-hidden hover:border-primary/40 transition-colors">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/8 transition-colors pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-500 shrink-0">
                      <Server className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Hot Inventory</span>
                      </div>
                      <h4 className="font-black text-2xl tracking-tighter text-white italic">10x NVIDIA H200</h4>
                      <p className="text-muted font-bold text-sm">2 GPU × 5 Servers · Instant Bare Metal</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-3">
                    <div className="flex items-baseline gap-1.5 bg-black/40 px-5 py-2.5 rounded-2xl border border-white/5">
                      <span className="text-3xl font-black text-white tracking-tighter">$2.20</span>
                      <span className="text-[10px] font-black text-muted uppercase tracking-widest leading-tight text-right">
                        USD / GPU<br />per hr
                      </span>
                    </div>
                    <Link to="/reserve?id=h200-2x" className="group/btn inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-[0.2em] px-4 py-2 hover:text-primary transition-all">
                      Deploy Now <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                <BorderBeam size={300} duration={6} borderWidth={2} />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Trust Marquee ── */}
      <div className="py-10 border-y border-white/5 bg-black/50 backdrop-blur-sm relative z-20">
        <Marquee pauseOnHover className="[--duration:35s]">
          {LOGOS.map((logo) => (
            <div key={logo} className="mx-10 text-xl font-black text-muted/40 hover:text-muted transition-colors uppercase tracking-widest">{logo}</div>
          ))}
        </Marquee>
      </div>

      {/* ── 2. PROBLEM / SOLUTION ── */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="max-w-3xl mb-24">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">The Problem</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[1.05]">
                Traditional Cloud Wasn't Built for AI.{" "}
                <AuroraText className="italic">We Are.</AuroraText>
              </h2>
              <p className="text-xl text-muted leading-relaxed max-w-2xl">
                Legacy cloud providers offer virtualized instances that throttle performance and inflate costs. We provide purpose-built AI Factories that give you{" "}
                <span className="text-white font-bold">root access to the hardware.</span>
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Zap, title: "Zero Overhead", desc: "No hypervisors or virtualization layers. Every FLOP goes directly to your workload, not a cloud management plane.", color: "text-primary" },
              { Icon: BarChart3, title: "Predictable Costs", desc: "Simple, wholesale pricing without the \"hidden\" networking fees of big-box clouds. Know exactly what you'll pay.", color: "text-violet-400" },
              { Icon: Server, title: "Instant Scale", desc: "Go from a single H100 node to a multi-rack InfiniBand cluster in days, not months.", color: "text-pink-400" },
            ].map((item, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1}>
                <div className="group glass border border-white/5 rounded-3xl p-10 h-full hover:bg-white/5 transition-all hover:border-white/10 relative overflow-hidden">
                  <div className={cn("w-14 h-14 rounded-2xl mb-8 flex items-center justify-center", item.color === "text-primary" ? "bg-primary/10" : item.color === "text-violet-400" ? "bg-violet-500/10" : "bg-pink-500/10")}>
                    <item.Icon className={cn("w-7 h-7", item.color)} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight italic">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">{item.desc}</p>
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CORE SERVICES ── */}
      <section className="py-40 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-24">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Services</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                Infrastructure for Every Stage<br />of the{" "}
                <AuroraText className="italic">AI Lifecycle</AuroraText>
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1}>
                <div className={cn("group relative glass border rounded-3xl p-10 h-full flex flex-col hover:bg-white/5 transition-all overflow-hidden", service.border)}>
                  <div className="flex items-start justify-between mb-8">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", service.bg)}>
                      <service.Icon className={cn("w-7 h-7", service.color)} />
                    </div>
                    <span className={cn("text-5xl font-black opacity-20 italic tracking-tighter", service.color)}>{service.num}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{service.name}</h3>
                  <p className="text-muted leading-relaxed text-lg flex-1">{service.description}</p>
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TECHNICAL SPECS ── */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="sticky top-32">
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Technical Specs</p>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-10">
                  Engineering-First<br />
                  <AuroraText className="italic">Infrastructure</AuroraText>
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-12">
                  Every component of our stack is chosen for maximum AI throughput. From the GPU to the fabric to the storage tier.
                </p>
                <Link to="/docs" className="group inline-flex items-center gap-3 px-8 py-4 glass border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                  Read Architecture Docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {TECH_SPECS.map((spec, i) => (
                  <BlurFade key={i} delay={0.05 + i * 0.08}>
                    <div className="group flex items-start gap-6 p-8 glass border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <spec.Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg mb-2 tracking-tight">{spec.title}</h4>
                        <p className="text-muted leading-relaxed">{spec.desc}</p>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 5. SECURITY ── */}
      <section className="py-40 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade delay={0.1}>
            <div className="text-center mb-24">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Security & Compliance</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                Your Data. Your Hardware.{" "}
                <AuroraText className="italic">Your Jurisdiction.</AuroraText>
              </h2>
              <p className="text-xl text-muted mt-8 max-w-2xl mx-auto leading-relaxed">
                We take a <span className="text-white font-bold italic">"confidential metal"</span> approach—designed from the ground up for workloads that cannot be shared.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SECURITY.map((item, i) => (
              <BlurFade key={i} delay={0.1 + i * 0.1}>
                <div className="group glass border border-white/5 rounded-3xl p-10 h-full text-center hover:bg-white/5 hover:border-primary/20 transition-all relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform border border-primary/20">
                    <item.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight italic">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={8} />
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.4}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {["SOC 2 Type II", "HIPAA Eligible", "GDPR Ready", "ISO 27001"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-black uppercase tracking-widest text-white/70">{badge}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 6. SOCIAL PROOF ── */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="relative glass border border-white/5 rounded-[3rem] p-16 md:p-24 text-center overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Join the Network</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[1.05]">
                  Powering the{" "}
                  <AuroraText className="italic">Future.</AuroraText>
                </h2>
                <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed mb-16">
                  Whether you are a <span className="text-white font-bold">"Neocloud"</span> provider looking for a bare-metal foundation or a research lab training the next frontier model, our infrastructure scales with your ambition.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                  {[
                    { val: "10,000+", label: "GPUs Online" },
                    { val: "99.95%", label: "Uptime SLA" },
                    { val: "<30s", label: "Provision Time" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-black text-white tracking-tighter italic mb-2">{stat.val}</div>
                      <div className="text-xs font-black text-muted uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <BorderBeam duration={6} size={400} />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="py-40 relative overflow-hidden bg-black/30 border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/8 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <BlurFade delay={0.1} direction="right">
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8">Get Started</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-[1.05]">
                  Ready to{" "}
                  <AuroraText className="italic">Accelerate?</AuroraText>
                </h2>
                <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl">
                  Talk to our solutions architects to design a custom cluster tailored to your workload's specific memory and interconnect requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/reserve" className="group px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all flex items-center justify-center gap-3 overflow-hidden relative">
                    <span className="relative z-10">Schedule a Consultation</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/40 group-hover:h-full transition-all duration-300" />
                  </Link>
                  <Link to="/docs" className="px-10 py-5 glass border border-white/10 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all text-center">
                    Browse Documentation
                  </Link>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} direction="left">
              <div className="relative glass border border-white/5 rounded-[2.5rem] p-12 overflow-hidden">
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Name</label>
                      <input required type="text" placeholder="Jensen Huang" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/40 outline-none transition-all font-medium" value={contactForm.name} onChange={e => setContactForm({ ...contactForm, name: e.target.value })} />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Work Email</label>
                      <input required type="email" placeholder="jensen@nvidia.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/40 outline-none transition-all font-medium" value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Tell us about your workload</label>
                    <textarea required rows={4} placeholder="I need 512x H100s for LLM training..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/40 outline-none transition-all resize-none font-medium text-sm" value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })}></textarea>
                  </div>
                  <button type="submit" disabled={contactStatus !== "idle"} className="w-full py-5 bg-primary text-black rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary-hover transition-all disabled:opacity-50 flex justify-center items-center gap-3">
                    {contactStatus === "submitting" ? (
                      <span className="w-5 h-5 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : contactStatus === "success" ? (
                      <><CheckCircle2 className="w-5 h-5" /> Message Received!</>
                    ) : (
                      <>Send Inquiry <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
                <BorderBeam duration={4} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-40 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center mb-24">
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">FAQ</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-white/5">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
