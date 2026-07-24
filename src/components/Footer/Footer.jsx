import React from "react";
import "./Footer.css";
import { Phone, Mail, MapPin } from "lucide-react";
import vwLogo from "../../assets/VW-HR.png";

export default function Footer({ onNavigateLegal, onBackToHome }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 px-4 md:px-8 pb-24 md:pb-12 font-sora">
      <div className="max-w-[1400px] mx-auto space-y-10">
        
        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          
          {/* COLUMN 1: Brand Logo & Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img 
                src={vwLogo} 
                alt="Vastu Wheels Logo" 
                onClick={onBackToHome}
                className="h-10 md:h-12 w-auto object-contain brightness-110 cursor-pointer transition-transform hover:scale-105"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto md:mx-0">
              India's premier AI & Vedic Vastu platform providing zero-demolition energy analysis reports guided by Acharya Ji.
            </p>
            <div className="space-y-2 pt-1 text-slate-300 font-semibold text-xs">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={14} className="text-orange-400 shrink-0" />
                <span>Helpline Number: +91 9217664304</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={14} className="text-orange-400 shrink-0" />
                <span>Email: globalinchpvt@gmail.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-2 text-slate-400 font-normal leading-tight">
                <MapPin size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <span>Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Legal Pages */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider text-orange-400">
              Company & Legal Pages
            </h4>
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li>
                <button 
                  onClick={() => onNavigateLegal("privacy")} 
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateLegal("about")} 
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateLegal("tnc")} 
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Terms and Conditions (TnC)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateLegal("refund")} 
                  className="hover:text-orange-400 transition-colors cursor-pointer text-amber-300 font-bold"
                >
                  Refund & Cancellation (Non-Refundable Policy)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateLegal("disclaimer")} 
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Social Media Icons ONLY */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-extrabold text-white uppercase text-xs tracking-wider text-orange-400">
              Follow Us
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-1">
              {/* Facebook Icon Only */}
              <a 
                href="https://www.facebook.com/vastushikhar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* YouTube Icon Only */}
              <a 
                href="https://www.youtube.com/@VastuShikhar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram Icon Only */}
              <a 
                href="https://www.instagram.com/vastushikhar" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-orange-500 text-slate-300 hover:text-orange-400 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Corporate Details & Disclaimers */}
        <div className="border-t border-slate-800/80 pt-8 space-y-4 text-center text-[11px] text-slate-500">
          
          {/* Corporate Details */}
          <div className="text-slate-300 font-semibold space-y-1">
            <p>VastuWheels (Powered & Managed by GlobalInch) | globalinchpvt@gmail.com</p>
            <p className="text-slate-400 font-normal">Address: Unit No-1166 Vegas Mall, Sector-14 Dwarka, South West Delhi, New Delhi, Delhi 110075 | Phone: +91 9217664304</p>
          </div>

          {/* Meta & Google Disclaimers */}
          <div className="space-y-1 text-slate-500 leading-relaxed max-w-4xl mx-auto">
            <p>
              VastuWheels Private Limited is not a part of Facebook.com or Facebook Inc or Google.com or Google Inc.
            </p>
            <p>
              Additionally, VastuWheels Private Limited is not endorsed by Facebook.com or Facebook Inc or Google.com or Google Inc.
            </p>
            <p className="text-amber-400/90 font-medium pt-1">
              * Refund Notice: All digital Vastu reports & services purchased on this platform are custom generated and strictly NON-REFUNDABLE under any circumstances.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 font-bold text-xs pt-2">
            Copyright 2026 - VastuWheels Private Limited. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
