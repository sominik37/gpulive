import React, { useState } from "react";
import { Clock, XCircle, Search, Filter, Cpu, HardDrive, MemoryStick, Microchip, ArrowRight, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { INVENTORY, Status, Instance } from "../data/inventory";
import { BlurFade } from "../components/ui/blur-fade";
import { AuroraText } from "../components/ui/aurora-text";
import { BorderBeam } from "../components/ui/border-beam";

const StatusBadge = ({ status }: { status: Status }) => {
  switch (status) {
    case "available":
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold uppercase tracking-wider">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available
        </div>
      );
    case "limited":
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs font-bold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          Limited
        </div>
      );
    case "unavailable":
      return (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider">
          <XCircle className="w-3.5 h-3.5" />
          Unavailable
        </div>
      );
  }
};

function SpecItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5 text-muted">
        <Icon className="w-3 h-3" />
        <span className="text-[10px] font-black tracking-tighter uppercase">{label}</span>
      </div>
      <p className="font-mono text-sm text-white/90 font-bold">{value}</p>
    </div>
  );
}

function InventoryCard({ instance, index }: { instance: Instance; index: number }) {
  return (
    <BlurFade delay={0.1 + index * 0.05}>
      <div className="group relative glass border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:bg-white/5 transition-all overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors italic tracking-tight">{instance.name}</h3>
            <div className="flex items-center gap-2 text-muted font-bold uppercase text-[10px] tracking-widest">
              <Cpu className="w-3 h-3 text-primary" />
              <span>{instance.gpus}x {instance.gpuType}</span>
            </div>
          </div>
          <StatusBadge status={instance.status} />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10 flex-1">
          <SpecItem icon={MemoryStick} label="VRAM TOTAL" value={instance.vram} />
          <SpecItem icon={Microchip} label="vCPU CORES" value={`${instance.vcpus} Cores`} />
          <SpecItem icon={MemoryStick} label="SYSTEM RAM" value={instance.ram} />
          <SpecItem icon={HardDrive} label="LOCAL STORAGE" value={instance.storage} />
        </div>

        <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-6">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] font-black text-muted uppercase tracking-widest">Rate</span>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-3xl text-white tracking-tighter">${instance.price.toFixed(2)}</span>
              <span className="text-sm font-bold text-muted">/hr</span>
            </div>
          </div>

          {instance.status === "unavailable" ? (
            <button disabled className="w-full py-4 rounded-2xl text-sm font-black bg-white/5 text-muted cursor-not-allowed uppercase tracking-widest border border-white/5">
              Out of Stock
            </button>
          ) : (
            <Link
              to={`/reserve?id=${instance.id}`}
              className="w-full py-4 rounded-2xl text-sm font-black bg-white text-black text-center hover:bg-primary transition-all uppercase tracking-widest flex items-center justify-center gap-2 group-hover:scale-[1.02] transform"
            >
              Reserve Now <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
        <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={6} />
      </div>
    </BlurFade>
  );
}

export default function Inventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGpu, setFilterGpu] = useState<string>("all");

  const uniqueGpus = Array.from(new Set(INVENTORY.map((i) => i.gpuType)));

  const h200 = INVENTORY.find((i) => i.gpuType === "H200");

  const filteredInventory = INVENTORY.filter((instance) => {
    if (instance.gpuType === "H200") return false; // rendered separately
    const matchesSearch =
      instance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instance.gpuType.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterGpu === "all" || instance.gpuType === filterGpu;
    return matchesSearch && matchesFilter;
  });

  // If search/filter matches H200, include it at the top of regular grid
  const h200MatchesFilter =
    h200 &&
    (searchQuery === "" || h200.name.toLowerCase().includes(searchQuery.toLowerCase()) || "h200".includes(searchQuery.toLowerCase())) &&
    (filterGpu === "all" || filterGpu === "H200");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <BlurFade delay={0.1}>
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            GPU <AuroraText>Inventory</AuroraText>
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Real-time availability of enterprise-grade GPU instances.
            Deploy in seconds on our high-performance bare metal cloud.
          </p>
        </div>
      </BlurFade>

      {/* ── Featured H200 Card ── */}
      {h200 && h200MatchesFilter && (
        <BlurFade delay={0.15}>
          <div className="mb-12 relative group overflow-hidden rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-primary/10 via-black to-violet-500/5 p-10 md:p-14">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-48 bg-primary/15 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 right-1/4 w-72 h-40 bg-violet-500/10 blur-[80px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between">
              {/* Left — title + specs */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-black text-primary uppercase tracking-[0.2em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Featured · Hot Inventory
                  </div>
                  <StatusBadge status={h200.status} />
                </div>

                <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-3">
                  {h200.name}
                </h2>
                <p className="text-muted font-bold text-lg mb-10">
                  {h200.gpus}x NVIDIA H200 SXM · {h200.vram} HBM3e · 2 GPU × 5 Servers Available
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: MemoryStick, label: "VRAM", value: h200.vram },
                    { icon: Microchip, label: "vCPUs", value: `${h200.vcpus} Cores` },
                    { icon: MemoryStick, label: "System RAM", value: h200.ram },
                    { icon: HardDrive, label: "NVMe Storage", value: h200.storage },
                  ].map((s) => (
                    <div key={s.label} className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-muted">
                        <s.icon className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{s.label}</span>
                      </div>
                      <p className="font-mono font-bold text-white text-base">{s.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["NVIDIA Quantum-2 InfiniBand", "3.2 Tb/s NDR Fabric", "HBM3e Memory", "Liquid Cooled", "Full Root Access"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest glass border border-white/10 rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — pricing + CTA */}
              <div className="flex flex-col items-start lg:items-end gap-6 shrink-0">
                <div className="text-right">
                  <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2">Price Per GPU</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-white tracking-tighter italic">${h200.price.toFixed(2)}</span>
                    <span className="text-lg font-bold text-muted">/hr</span>
                  </div>
                  <div className="text-[10px] font-black text-primary/70 uppercase tracking-widest mt-1">Bare metal · No overhead</div>
                </div>

                <div className="flex flex-col gap-3 w-full lg:w-auto">
                  <Link
                    to={`/reserve?id=${h200.id}`}
                    className="group/btn relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all hover:scale-105 active:scale-95 overflow-hidden min-w-[220px]"
                  >
                    <span className="relative z-10">Reserve Now</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-black text-muted uppercase tracking-widest">
                    <Zap className="w-3 h-3 text-primary" />
                    <span>Instant provisioning · SSH in &lt;30s</span>
                  </div>
                </div>
              </div>
            </div>

            <BorderBeam size={500} duration={5} borderWidth={2} />
          </div>
        </BlurFade>
      )}

      {/* Controls */}
      <BlurFade delay={0.25}>
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-px h-8 bg-white/10" />
            <span className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">All Instances</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                className="w-full md:w-80 pl-12 pr-4 py-4 glass border border-white/5 rounded-2xl text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-medium text-sm"
                placeholder="Search instances or GPU type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted pointer-events-none" />
              <select
                className="w-full md:w-64 pl-12 pr-4 py-4 glass border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none transition-all font-medium text-sm cursor-pointer"
                value={filterGpu}
                onChange={(e) => setFilterGpu(e.target.value)}
              >
                <option value="all">All Architectures</option>
                {uniqueGpus.map((gpu) => (
                  <option key={gpu} value={gpu}>{gpu}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Regular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInventory.map((instance, index) => (
          <InventoryCard key={instance.id} instance={instance} index={index} />
        ))}
      </div>

      {filteredInventory.length === 0 && !h200MatchesFilter && (
        <BlurFade delay={0.1}>
          <div className="py-32 text-center glass border border-white/5 rounded-3xl mt-12 group">
            <Cpu className="w-20 h-20 text-muted mx-auto mb-6 group-hover:text-primary transition-colors group-hover:scale-110 duration-500" />
            <h3 className="text-3xl font-black text-white mb-2 italic tracking-tight">No compute found</h3>
            <p className="text-muted text-lg max-w-sm mx-auto">We couldn't find any instances matching your criteria. Try broadening your search.</p>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
