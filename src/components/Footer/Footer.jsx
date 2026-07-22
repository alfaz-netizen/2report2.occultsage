import React from "react";
import "./Footer.css";
import { ShieldCheck, Lock, Award, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-14 px-6 md:px-12 pb-20 md:pb-14">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-sora">
                Vastu<span className="orange-gradient-text">Wheels</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              India's premier AI & Vedic Vastu platform providing zero-demolition energy analysis reports guided by Acharya Ji.
            </p>
            <div className="flex items-center gap-2 text-orange-400 font-semibold text-xs">
              <Award size={15} className="text-orange-400" />
              <span>ISO 9001:2015 Certified Organization</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Vastu Reports</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#vastu-diagnostic-form" className="hover:text-orange-400 transition-colors">Home Vastu Report (₹199)</a></li>
              <li><a href="#vastu-diagnostic-form" className="hover:text-orange-400 transition-colors">Office & Factory Vastu Report</a></li>
              <li><a href="#vastu-diagnostic-form" className="hover:text-orange-400 transition-colors">Astro-Vastu Gemstone Guide</a></li>
              <li><a href="#vastu-diagnostic-form" className="hover:text-orange-400 transition-colors">1-on-1 Acharya Consultation</a></li>
            </ul>
          </div>

          {/* Customer Trust & Security */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Security & Guarantee</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Lock size={15} className="text-emerald-400 shrink-0" />
                <span>256-Bit SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                <span>100% Non-Demolition Promise</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={15} className="text-orange-400 shrink-0" />
                <span>support@vastuwheels.com</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Accepted Payments</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Instant PDF report generation via secure UPI, Paytm, PhonePe, Google Pay, Net Banking & Credit Cards.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-[11px] font-bold text-white">UPI / GPay</span>
              <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-[11px] font-bold text-white">Paytm</span>
              <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-[11px] font-bold text-white">PhonePe</span>
              <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-[11px] font-bold text-white">Cards</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="border-t border-slate-800 pt-6 space-y-3 text-[11px] text-slate-500 text-center md:text-left">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> VastuWheels provides Vastu energy analysis and elemental balancing guidance based on ancient Vedic principles and algorithmic spatial calculations. Results may vary depending on individual application. No structural wall demolitions are required or advocated.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 border-t border-slate-800/60 pt-4 text-slate-500">
            <div>© {new Date().getFullYear()} VastuWheels. All Rights Reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
