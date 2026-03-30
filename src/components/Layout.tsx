import { Link, Outlet, useLocation } from "react-router-dom";
import { Cpu, Menu, X, Terminal, Command } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Pricing", path: "/pricing" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled 
            ? "py-3 bg-black/60 backdrop-blur-xl border-white/10" 
            : "py-6 bg-transparent border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all group-hover:rotate-6">
                <Command className="w-6 h-6 text-primary" />
              </div>
              <span className="font-black text-2xl tracking-tighter italic">CloudGPU</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 text-sm font-bold transition-all rounded-full hover:bg-white/5",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/contact"
                className="group relative px-6 py-2.5 bg-white text-black rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/30 group-hover:h-full transition-all duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted hover:text-white glass rounded-xl border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "block px-4 py-4 rounded-2xl text-lg font-black italic tracking-tight transition-all",
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted hover:bg-white/5 hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  to="/contact"
                  className="w-full block text-center px-6 py-4 bg-primary text-black rounded-2xl text-sm font-black uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
            <div className="col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-8 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <Command className="w-6 h-6 text-primary" />
                </div>
                <span className="font-black text-2xl italic tracking-tighter">CloudGPU</span>
              </Link>
              <p className="text-muted leading-relaxed max-w-xs font-medium">
                The high-performance substrate for the world's most ambitious AI teams. 
                Bare metal compute, globally distributed.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase mb-8">
                Solutions
              </h3>
              <ul className="space-y-4">
                <li><Link to="/solutions/ai-clusters" className="text-sm text-muted font-bold hover:text-primary transition-colors">AI Training Clusters</Link></li>
                <li><Link to="/solutions/inference" className="text-sm text-muted font-bold hover:text-primary transition-colors">Production Inference</Link></li>
                <li><Link to="/solutions/datacenter" className="text-sm text-muted font-bold hover:text-primary transition-colors">Data Center Monetization</Link></li>
                <li><Link to="/solutions/research" className="text-sm text-muted font-bold hover:text-primary transition-colors">Research & Academia</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase mb-8">
                Company
              </h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-sm text-muted font-bold hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">Status Page</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">Engineering Blog</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">Security Overview</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black text-white tracking-[0.2em] uppercase mb-8">
                Connect
              </h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">Twitter / X</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">GitHub</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">Discord</Link></li>
                <li><Link to="#" className="text-sm text-muted font-bold hover:text-primary transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <p className="text-sm text-muted font-bold">
                &copy; {new Date().getFullYear()} CloudGPU Inc. 
              </p>
              <div className="flex gap-6">
                <Link to="/privacy" className="text-xs text-muted font-bold hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
                <Link to="/terms" className="text-xs text-muted font-bold hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
                <Link to="/cookies" className="text-xs text-muted font-bold hover:text-white transition-colors uppercase tracking-widest">Cookies</Link>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass border border-white/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
