import React, { useState } from "react";
import { ArrowLeft, Send, CheckCircle2, MessageSquare, Mail, Globe, Clock, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { AuroraText } from "../components/ui/aurora-text";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";
import { Particles } from "../components/ui/particles";
import { cn } from "../lib/utils";

const INTERESTS = [
  "AI Training Clusters",
  "Inference Infrastructure",
  "Data Center Monetization",
  "Research Cluster",
  "Hybrid Cloud Solutions",
  "Enterprise Sales",
  "Technical Support"
];

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "AI Training Clusters",
    workload: "",
    timeline: "immediate",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => navigate("/"), 4000);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative py-32 overflow-hidden">
      <Particles className="absolute inset-0 z-0" quantity={100} staticity={40} color="#00e5ff" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade delay={0.1}>
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-muted hover:text-white transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side: Info */}
          <BlurFade delay={0.2} direction="right">
            <div className="sticky top-32">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
                Let's Build Your <AuroraText className="italic">AI Factory.</AuroraText>
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-12 max-w-xl">
                Schedule a consultation with our solutions architects to design a cluster infrastructure that matches your specific performance, memory, and scaling requirements.
              </p>

              <div className="space-y-10">
                {[
                  { Icon: Globe, label: "Global Deployment", val: "Provision multi-region clusters with zero bandwidth tax." },
                  { Icon: Clock, label: "SLA Guaranteed", val: "99.95% uptime backing for mission-critical training runs." },
                  { Icon: MessageSquare, label: "Dedicated Support", val: "24/7 access to infrastructure engineers who understand AI workloads." },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1 tracking-tight">{item.label}</h4>
                      <p className="text-muted leading-relaxed">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Right Side: Form */}
          <BlurFade delay={0.3} direction="left">
            <div className="relative glass border border-white/5 rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-black italic tracking-tight mb-4">Request Sent</h2>
                    <p className="text-muted text-lg max-w-sm mx-auto mb-8">
                      A solutions architect will reach out to you within the next 24 hours to schedule your consultation.
                    </p>
                    <Link to="/" className="text-primary font-black uppercase tracking-widest text-sm hover:underline">
                      Return Home
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Contact Name</label>
                        <input required type="text" placeholder="Jensen Huang" className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Work Email</label>
                        <input required type="email" placeholder="jensen@nvidia.com" className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Organization</label>
                        <input required type="text" placeholder="NVIDIA Corp" className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Primary Interest</label>
                        <div className="relative">
                          <select className="w-full px-5 py-4 pr-12 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none font-bold cursor-pointer" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}>
                            {INTERESTS.map(choice => (
                              <option key={choice} value={choice} className="bg-black">{choice}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Tell us about your workload</label>
                      <textarea required rows={4} placeholder="I need to train a 70B parameter model with GH200s..." className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all resize-none font-medium text-sm" value={formData.workload} onChange={e => setFormData({...formData, workload: e.target.value})}></textarea>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Timeline</label>
                      <div className="flex gap-4">
                        {[
                          { id: "immediate", label: "ASAP" },
                          { id: "1_month", label: "Next 30 Days" },
                          { id: "research", label: "Exploratory" },
                        ].map((choice) => (
                          <button
                            key={choice.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: choice.id })}
                            className={cn(
                              "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
                              formData.timeline === choice.id
                                ? "bg-primary text-black border-primary"
                                : "bg-white/5 text-muted border-white/10 hover:border-white/20"
                            )}
                          >
                            {choice.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 overflow-hidden relative group/btn"
                    >
                      <span className="relative z-10">{isSubmitting ? "Sending..." : "Request Consultation"}</span>
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/40 group-hover:h-full transition-all duration-300" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              <BorderBeam duration={4} />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
