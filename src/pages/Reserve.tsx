import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Send, Server, Cpu, Database, Zap, CheckCircle2, Command, ChevronDown } from "lucide-react";
import { INVENTORY } from "../data/inventory";
import { BlurFade } from "../components/ui/blur-fade";
import { AuroraText } from "../components/ui/aurora-text";
import { BorderBeam } from "../components/ui/border-beam";

export default function Reserve() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const instanceId = searchParams.get("id");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    instanceType: instanceId || INVENTORY[0].id,
    quantity: "1",
    duration: "1_month",
    useCase: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (instanceId) {
      setFormData(prev => ({ ...prev, instanceType: instanceId }));
    }
  }, [instanceId]);

  const selectedInstance = INVENTORY.find(i => i.id === formData.instanceType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <BlurFade>
          <div className="glass border border-white/10 rounded-[3rem] p-16 relative overflow-hidden">
            <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl font-black mb-6 italic tracking-tight">Request Received</h2>
            <p className="text-xl text-muted mb-12 max-w-md mx-auto leading-relaxed">
              We've received your inquiry for <span className="text-white font-bold">{selectedInstance?.name}</span>. 
              An infrastructure engineer will contact you shortly to finalize provisioning.
            </p>
            <button
              onClick={() => navigate("/inventory")}
              className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all text-sm"
            >
              Back to Fleet
            </button>
            <BorderBeam duration={4} />
          </div>
        </BlurFade>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <BlurFade delay={0.1}>
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted hover:text-white transition-all mb-12 group font-bold uppercase text-[10px] tracking-[0.2em]"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </button>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7x font-black mb-6 tracking-tight">
            Reserve <AuroraText>Compute</AuroraText>
          </h1>
          <p className="text-xl text-muted max-w-2xl">
            You are requesting a quote for <span className="text-white font-bold italic underline decoration-primary/50 underline-offset-4">{selectedInstance?.name}</span> cluster resources.
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <BlurFade delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-10 glass border border-white/5 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">First Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Last Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Business Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Company / Lab</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-medium"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-xl font-black mb-8 italic tracking-tight">Configuration Details</h3>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Select Instance</label>
                    <div className="relative">
                      <select
                        className="w-full px-5 py-4 pr-12 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all appearance-none font-bold cursor-pointer"
                        value={formData.instanceType}
                        onChange={e => setFormData({...formData, instanceType: e.target.value})}
                      >
                        {INVENTORY.map(instance => (
                          <option key={instance.id} value={instance.id} disabled={instance.status === 'unavailable'} className="bg-black">
                            {instance.name} {instance.status === 'unavailable' ? '(Waitlist Only)' : ''}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Node Count</label>
                      <input
                        required
                        type="number"
                        min="1"
                        className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all font-mono font-bold"
                        value={formData.quantity}
                        onChange={e => setFormData({...formData, quantity: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Usage Duration</label>
                      <div className="relative">
                        <select
                          className="w-full px-5 py-4 pr-12 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all appearance-none font-bold cursor-pointer"
                          value={formData.duration}
                          onChange={e => setFormData({...formData, duration: e.target.value})}
                        >
                          <option value="on_demand" className="bg-black">Spot / On-Demand</option>
                          <option value="1_month" className="bg-black">1 Month Reserved</option>
                          <option value="6_months" className="bg-black">6 Months (15% Disc.)</option>
                          <option value="1_year" className="bg-black">1 Year (30% Disc.)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 space-y-3">
                <label className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">Workload Description</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white focus:outline-none focus:border-primary/50 transition-all resize-none font-medium text-sm"
                  placeholder="Tell us about your project (training, inference, etc.)..."
                  value={formData.useCase}
                  onChange={e => setFormData({...formData, useCase: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-primary transition-all disabled:opacity-50 flex justify-center items-center gap-3 text-sm"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></span>
                ) : (
                  <>Submit Request <Send className="w-4 h-4" /></>
                )}
              </button>
              <BorderBeam className="opacity-20" />
            </form>
          </BlurFade>
        </div>

        <div className="lg:col-span-5">
          <BlurFade delay={0.3}>
            <div className="sticky top-32 glass border border-primary/20 rounded-[2.5rem] p-10 overflow-hidden">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Command className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-black italic tracking-tight">Configuration Summary</h3>
                  <p className="text-[10px] font-black text-muted uppercase tracking-widest">Bare Metal Cluster</p>
                </div>
              </div>
              
              {selectedInstance ? (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-black text-white italic tracking-tighter">{selectedInstance.name}</div>
                    <div className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{selectedInstance.gpuType} Global Fleet</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                    {[
                      { icon: Cpu, label: "PRECISION CORES", val: selectedInstance.vcpus },
                      { icon: Database, label: "TOTAL VRAM", val: selectedInstance.vram },
                      { icon: Zap, label: "NET FABRIC", val: "400Gbps" },
                      { icon: Server, label: "LOCAL STORAGE", val: selectedInstance.storage },
                    ].map((s, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex items-center gap-2 text-muted uppercase text-[9px] font-black">
                          <s.icon className="w-3 h-3 text-primary" /> {s.label}
                        </div>
                        <div className="text-sm font-mono font-bold text-white">{s.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-muted uppercase tracking-widest">Pricing Basis</span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-white italic tracking-tighter">${selectedInstance.price.toFixed(2)}</span>
                        <span className="text-sm font-bold text-muted ml-1">/{selectedInstance.price > 0 ? 'hr' : 'hr'}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                      <p className="text-[10px] font-bold text-primary-hover leading-relaxed uppercase tracking-widest">
                        Prices are estimates. Volume discounts are applied during provisioning.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-20 text-center opacity-30">
                  <Server className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-bold">Selecting Instance...</p>
                </div>
              )}
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
