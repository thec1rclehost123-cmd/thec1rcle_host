"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    TrendingUp,
    Users,
    Check,
    X,
    Activity,
    ArrowRight
} from "lucide-react";

// --- Club Owner View: Control & Revenue ---
// "The Pulse": Massive central number.
// "Approval Stack": Quick decisions.

export default function ClubOwnerView({ stats }) {
    const [pulse, setPulse] = useState(false);

    // Simulate "Live" pulse effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPulse(true);
            setTimeout(() => setPulse(false), 200);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">

            {/* 1. THE PULSE: Main Revenue Display */}
            <div className="relative group min-h-[400px] flex flex-col items-center justify-center p-10 rounded-[40px] bg-gradient-to-b from-[#111] to-[#050505] border border-white/[0.08] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F44A22]/50 to-transparent" />

                {/* Background Glow Pulse */}
                <motion.div
                    animate={{ opacity: pulse ? 0.15 : 0.05, scale: pulse ? 1.2 : 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[#F44A22] rounded-full blur-[150px] pointer-events-none"
                />

                <h3 className="text-[#888] font-bold text-lg uppercase tracking-widest mb-4">Tonight's Revenue</h3>

                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C6F432] animate-pulse" />
                    <span className="text-[#C6F432] text-xs font-bold uppercase tracking-wider">Live Updates</span>
                </div>

                <motion.h1
                    key={stats?.totalRevenue} // Re-animate on change if needed
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-[120px] md:text-[180px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-2xl"
                >
                    ₹{stats?.totalRevenue ? (stats.totalRevenue / 1000).toFixed(1) : "0"}k
                </motion.h1>

                <div className="flex items-center gap-4 mt-8 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.05]">
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#888]" />
                        <span className="text-white font-bold text-lg">{stats?.activeGuests || 0}</span>
                        <span className="text-[#666] text-sm">Active Guests</span>
                    </div>
                    <div className="w-px h-6 bg-white/[0.1]" />
                    <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-[#C6F432]" />
                        <span className="text-[#C6F432] font-bold text-lg">+12%</span>
                        <span className="text-[#666] text-sm">vs last week</span>
                    </div>
                </div>
            </div>

            {/* 2. Grid for Operations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Approval Stack (The "Tinder" for Club Ops) */}
                <div className="p-8 rounded-[32px] bg-[#111] border border-white/[0.08] relative overflow-hidden h-[400px] flex flex-col">
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <h3 className="text-white text-2xl font-bold">Quick Approvals</h3>
                        <span className="bg-[#F44A22] text-white text-xs font-bold px-2 py-1 rounded-full">5 Pending</span>
                    </div>

                    {/* Stack Cards */}
                    <div className="flex-1 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none" />

                        {/* Fake stacked card effect */}
                        <div className="absolute w-full max-w-sm h-64 bg-[#1a1a1a] rounded-3xl border border-white/[0.05] rotate-[-4deg] scale-95 opacity-50 top-10" />
                        <div className="absolute w-full max-w-sm h-64 bg-[#222] rounded-3xl border border-white/[0.05] rotate-[2deg] scale-98 opacity-70 top-6" />

                        {/* Top Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative w-full max-w-sm bg-[#0A0A0A] rounded-3xl border border-white/[0.1] p-6 shadow-2xl z-20 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                                <div>
                                    <h4 className="text-white font-bold text-lg">Raj Malhotra</h4>
                                    <p className="text-[#888] text-xs uppercase font-bold">Guestlist Request • +4 Pax</p>
                                </div>
                            </div>
                            <div className="p-3 bg-white/[0.03] rounded-xl">
                                <p className="text-[#ccc] text-sm italic">"Regular at High Street, friends with the DJ."</p>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <button className="flex-1 py-3 rounded-xl bg-white/[0.05] text-[#ccc] font-bold hover:bg-red-500/20 hover:text-red-500 transition-colors flex items-center justify-center gap-2">
                                    <X className="w-5 h-5" /> Decline
                                </button>
                                <button className="flex-1 py-3 rounded-xl bg-white text-black font-bold hover:bg-[#C6F432] transition-colors flex items-center justify-center gap-2">
                                    <Check className="w-5 h-5" /> Approve
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Busy Meter & Capacity */}
                <div className="p-8 rounded-[32px] bg-[#111] border border-white/[0.08] flex flex-col justify-between h-[400px]">
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-2xl font-bold">Venue Capacity</h3>
                        <button className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <ArrowRight className="w-5 h-5 -rotate-45" />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center gap-4">
                        {/* Gauge Visual */}
                        <div className="relative w-48 h-24 overflow-hidden">
                            <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[12px] border-white/[0.1]" />
                            <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[12px] border-transparent border-t-[#F44A22] rotate-[45deg]" /> {/* 75% full */}
                        </div>
                        <h2 className="text-6xl font-black text-white">75<span className="text-2xl text-[#666]">%</span></h2>
                        <p className="text-[#888] font-bold">Almost Full</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                            <p className="text-[#666] text-xs font-bold uppercase mb-1">Entry</p>
                            <p className="text-white font-bold text-xl">240</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                            <p className="text-[#666] text-xs font-bold uppercase mb-1">Exit</p>
                            <p className="text-white font-bold text-xl">45</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
