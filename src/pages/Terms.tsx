import { BlurFade } from "../components/ui/blur-fade";

const LAST_UPDATED = "March 30, 2026";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <BlurFade delay={0.1}>
        <div className="mb-16">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-4">Legal</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">Terms of Service</h1>
          <p className="text-muted font-bold">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-10">

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-muted leading-relaxed">
              By accessing or using the CloudGPU platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you are using the platform on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">2. Service Description</h2>
            <p className="text-muted leading-relaxed">
              CloudGPU provides bare-metal GPU cloud infrastructure, including on-demand and reserved compute instances, networking, and associated storage services. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">3. Billing & Payment</h2>
            <ul className="space-y-3">
              {[
                "On-demand instances are billed per minute of active runtime. Billing begins at provisioning and ends when the instance is terminated.",
                "Reserved instances are committed contracts billed monthly or annually as selected at checkout.",
                "All prices are in USD. Applicable taxes may be added based on your billing address.",
                "You are responsible for all charges incurred under your account, including unauthorized use.",
                "We may suspend services if payment is overdue by more than 7 days.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">4. Acceptable Use</h2>
            <p className="text-muted leading-relaxed mb-6">You agree not to use the platform for:</p>
            <ul className="space-y-3">
              {[
                "Mining cryptocurrency or executing proof-of-work blockchain workloads",
                "Generating, distributing, or hosting illegal, abusive, or harmful content",
                "Unauthorized network scanning, probing, or exploitation of third-party systems",
                "Violating any applicable local, national, or international law or regulation",
                "Reselling compute capacity without prior written authorization from CloudGPU",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">5. Service Level Agreement</h2>
            <p className="text-muted leading-relaxed mb-6">
              CloudGPU commits to a 99.95% monthly uptime SLA for all physical host infrastructure. In the event of a breach of this SLA, customers are eligible for service credits:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-[10px] font-black text-muted uppercase tracking-widest py-3 pr-8">Monthly Uptime</th>
                    <th className="text-left text-[10px] font-black text-muted uppercase tracking-widest py-3">Service Credit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["99.00% – 99.94%", "10% of monthly bill"],
                    ["95.00% – 98.99%", "25% of monthly bill"],
                    ["< 95.00%", "50% of monthly bill"],
                  ].map(([range, credit]) => (
                    <tr key={range}>
                      <td className="py-4 pr-8 font-mono text-white/80 font-bold">{range}</td>
                      <td className="py-4 text-primary font-bold">{credit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">6. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              To the maximum extent permitted by applicable law, CloudGPU shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business, arising out of or related to your use of the platform, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">7. Governing Law</h2>
            <p className="text-muted leading-relaxed">
              These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-law provisions. Any disputes shall be resolved exclusively in the courts of San Francisco County, California.
            </p>
          </div>

          <div className="glass border border-white/5 rounded-3xl p-10">
            <h2 className="text-2xl font-black mb-4 tracking-tight">8. Contact</h2>
            <p className="text-muted leading-relaxed">
              For terms-related inquiries, please contact{" "}
              <a href="mailto:legal@cloudgpu.io" className="text-primary font-bold hover:underline">legal@cloudgpu.io</a>.
            </p>
          </div>

        </div>
      </BlurFade>
    </div>
  );
}
