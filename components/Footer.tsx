import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="h-10 w-20 overflow-hidden rounded-xl flex items-center justify-center border border-zinc-100/50 bg-zinc-50/50 group-hover:scale-110 transition-transform duration-500">
              <img 
                src="/Logo.png" 
                alt="Hozza Logo" 
                className="w-full h-full object-cover scale-[1.8]" 
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors">
              Hozza Technologies
            </span>
          </Link>
          <p className="text-zinc-500 max-w-sm mb-10 leading-relaxed text-sm">
            Your premium product engineering partner. We build <span className="text-zinc-900 font-medium">sophisticated software products</span> for the world's most ambitious startups.
          </p>
          <div className="flex gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50/10 transition-all cursor-pointer bg-white shadow-sm">
                <div className="w-4 h-4 rounded-sm bg-current" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-[0.2em] mb-8">Solutions</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-medium">
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Backend</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Frontend</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Mobile</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">AI / ML</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-zinc-900 text-xs uppercase tracking-[0.2em] mb-8">Company</h4>
          <ul className="space-y-4 text-zinc-500 text-sm font-medium">
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Expertise</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Process</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Stack</li>
            <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-loose">
          © 2026 Hozza Technologies. All rights reserved.
        </p>
        <div className="flex gap-10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
