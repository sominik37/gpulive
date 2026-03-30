import { Terminal, Book, Server, Shield, HardDrive } from "lucide-react";

export default function Docs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24">
          <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mb-4">Getting Started</h3>
          <ul className="space-y-2 mb-8">
            <li><a href="#" className="text-[var(--color-primary)] font-medium block py-1">Introduction</a></li>
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Quickstart Guide</a></li>
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">SSH Keys</a></li>
          </ul>

          <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mb-4">Compute</h3>
          <ul className="space-y-2 mb-8">
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Instance Types</a></li>
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Managing Instances</a></li>
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Custom Images</a></li>
          </ul>

          <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mb-4">Storage</h3>
          <ul className="space-y-2 mb-8">
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Volumes</a></li>
            <li><a href="#" className="text-[var(--color-muted)] hover:text-white transition-colors block py-1">Object Storage</a></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Introduction to CloudGPU</h1>
        <p className="text-lg text-[var(--color-muted)] mb-8">
          CloudGPU provides high-performance, bare-metal GPU instances designed specifically for deep learning, rendering, and high-performance computing (HPC) workloads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-[var(--color-border)] rounded-xl bg-[var(--color-card)] hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer">
            <Terminal className="w-8 h-8 text-[var(--color-primary)] mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quickstart</h3>
            <p className="text-sm text-[var(--color-muted)]">Launch your first GPU instance in under 60 seconds.</p>
          </div>
          <div className="p-6 border border-[var(--color-border)] rounded-xl bg-[var(--color-card)] hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer">
            <Book className="w-8 h-8 text-[var(--color-primary)] mb-4" />
            <h3 className="text-lg font-semibold mb-2">API Reference</h3>
            <p className="text-sm text-[var(--color-muted)]">Automate infrastructure with our REST API.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">Connecting to your instance</h2>
        <p className="text-[var(--color-muted)] mb-4">
          Once your instance is running, you can connect to it via SSH. We recommend using ED25519 keys for maximum security.
        </p>
        
        <div className="bg-[#0a0a0a] border border-[var(--color-border)] rounded-lg p-4 mb-8 font-mono text-sm overflow-x-auto">
          <div className="text-[var(--color-muted)] mb-2"># Connect using your private key</div>
          <div className="text-white">ssh -i ~/.ssh/id_ed25519 ubuntu@&lt;instance-ip-address&gt;</div>
        </div>

        <h2 className="text-2xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">Pre-installed Software</h2>
        <p className="text-[var(--color-muted)] mb-4">
          All our deep learning base images come pre-configured with the latest drivers and frameworks so you can start training immediately.
        </p>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
            </div>
            <span>NVIDIA Driver 535+ and CUDA 12.2+</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
            </div>
            <span>PyTorch 2.1+ and TensorFlow 2.14+</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
            </div>
            <span>Docker and NVIDIA Container Toolkit</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
            </div>
            <span>JupyterLab running on port 8888</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
