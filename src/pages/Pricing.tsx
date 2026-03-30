import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BlurFade } from "../components/ui/blur-fade";
import { BorderBeam } from "../components/ui/border-beam";
import { AuroraText } from "../components/ui/aurora-text";
import { cn } from "../lib/utils";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <BlurFade delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Simple, <AuroraText>Transparent</AuroraText> Pricing
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Pay by the minute for on-demand instances, or save up to 60% with long-term reservations. No hidden egress fees.
          </p>
        </BlurFade>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {/* On Demand */}
        <BlurFade delay={0.2}>
          <div className="glass border border-white/5 rounded-3xl p-10 h-full flex flex-col hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-bold mb-2">On-Demand</h3>
            <p className="text-muted mb-8">Perfect for experimentation and burst workloads.</p>
            <div className="mb-10">
              <span className="text-4xl font-black">Pay-as-you-go</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                "Billed per minute",
                "No commitment required",
                "Instant provisioning"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/inventory" className="w-full py-4 px-6 bg-white/5 border border-white/10 text-white text-center rounded-2xl font-bold hover:bg-white/10 transition-all">
              View Inventory
            </Link>
          </div>
        </BlurFade>

        {/* 1 Year Commit */}
        <BlurFade delay={0.3}>
          <div className="glass border-2 border-primary/50 rounded-3xl p-10 h-full flex flex-col relative shadow-[0_0_50px_rgba(0,229,255,0.15)] bg-primary/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 text-primary">1-Year Reserve</h3>
            <p className="text-muted mb-8">For predictable, continuous ML workloads.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-white">Save 40%</span>
              <p className="text-primary/70 text-sm font-bold mt-2 uppercase tracking-tighter">Compared to on-demand</p>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                "Guaranteed availability",
                "Monthly billing available",
                "Priority support",
                "Dedicated hardware"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/reserve" className="w-full py-4 px-6 bg-primary text-black text-center rounded-2xl font-black hover:bg-primary-hover transition-all transform hover:scale-[1.02]">
              Contact Sales
            </Link>
            <BorderBeam duration={4} size={300} />
          </div>
        </BlurFade>

        {/* 3 Year Commit */}
        <BlurFade delay={0.4}>
          <div className="glass border border-white/5 rounded-3xl p-10 h-full flex flex-col hover:bg-white/5 transition-colors">
            <h3 className="text-2xl font-bold mb-2">3-Year Reserve</h3>
            <p className="text-muted mb-8">Maximum savings for enterprise scale.</p>
            <div className="mb-10">
              <span className="text-5xl font-black text-white">Save 60%</span>
              <p className="text-muted text-sm font-bold mt-2 uppercase tracking-tighter">Enterprise grade</p>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                "Lowest possible rates",
                "Custom cluster topologies",
                "Dedicated account manager",
                "InfiniBand networking"
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/reserve" className="w-full py-4 px-6 bg-white/5 border border-white/10 text-white text-center rounded-2xl font-bold hover:bg-white/10 transition-all">
              Contact Enterprise
            </Link>
          </div>
        </BlurFade>
      </div>

      {/* Network & Storage Pricing */}
      <div className="border-t border-white/5 pt-32">
        <BlurFade delay={0.5}>
          <h2 className="text-4xl font-black mb-16 text-center italic tracking-tight">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-8 text-white/90">High-Performance Storage</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { name: "NVMe Block Storage", price: "$0.10 / GB / month" },
                  { name: "Shared File System (NFS)", price: "$0.20 / GB / month" },
                  { name: "Object Storage (S3)", price: "$0.015 / GB / month" }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-muted font-medium">{item.name}</span>
                    <span className="font-mono text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" size={150} />
            </div>
            
            <div className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-8 text-white/90">Premium Networking</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { name: "Inbound Data Transfer", price: "Free", color: "text-green-400" },
                  { name: "Outbound Data Transfer", price: "$0.05 / GB" },
                  { name: "Public IPv4 Address", price: "$3.00 / month" }
                ].map((item) => (
                  <div key={item.name} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-muted font-medium">{item.name}</span>
                    <span className={cn("font-mono font-bold", item.color || "text-primary")}>{item.price}</span>
                  </div>
                ))}
              </div>
              <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" size={150} />
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
