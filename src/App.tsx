import { useState } from 'react';
import { X, Send, UserPlus, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const INMATES = [
  { id: 1, name: "Caleb", age: 28, location: "Maricopa County, AZ", bio: "Fitness enthusiast and avid reader. Looking for positive vibes." },
  { id: 2, name: "Marcus", age: 31, location: "Pelican Bay, CA", bio: "Self-taught artist. I want to share my work and hear about the world." }
];

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center p-4">
      <nav className="w-full max-w-md py-6 flex justify-between items-center border-b border-zinc-800 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-black shadow-lg shadow-sky-500/20">T</div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">Texta<span className="text-sky-500">con</span></h1>
        </div>
        <button className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 text-[10px] font-bold text-zinc-400">
          SIGNUP
        </button>
      </nav>

      <div className="flex-1 w-full max-w-sm flex flex-col justify-center gap-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-zinc-900 rounded-[2.5rem] border border-zinc-800 overflow-hidden shadow-2xl"
          >
            <div className="h-72 bg-zinc-800 flex items-center justify-center relative">
               <span className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">SECURE_PHOTO_DATA</span>
               <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1 rounded-full text-[10px] font-bold">
                 VERIFIED
               </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-1">{INMATES[index].name}, {INMATES[index].age}</h2>
              <p className="text-sky-500 text-sm font-bold mb-4 tracking-wide">{INMATES[index].location}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{INMATES[index].bio}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIndex((prev) => (prev + 1) % INMATES.length)}
            className="w-20 h-20 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-3xl text-zinc-500 hover:text-red-500 transition-all"
          >
            <X size={32} />
          </button>
          <button className="flex-1 h-20 bg-white text-black font-black rounded-3xl flex flex-col items-center justify-center gap-1 hover:bg-sky-500 hover:text-white transition-all">
            <div className="flex items-center gap-2">
               <Send size={20} />
               <span>SEND LETTER</span>
            </div>
            <span className="text-[10px] opacity-60">.99 PER SHIPMENT</span>
          </button>
        </div>
      </div>

      <footer className="py-8 flex items-center gap-2 text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
        <Shield size={12} /> Encrypted & Secure Connection
      </footer>
    </div>
  );
}
