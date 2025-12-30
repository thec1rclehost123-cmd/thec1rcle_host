"use client";

import { motion } from "framer-motion";
import {
    Wallet,
    Share2,
    Copy,
    Trophy,
    TrendingUp,
    ChevronRight,
    QrCode
} from "lucide-react";

// --- Promoter View: Earnings & Gamification ---
// "Commission Wallet": Gold/Earnings focus.
// "Leaderboard": Gamification.

export default function PromoterView({ stats }) {

    // Mock Data for Leaderboard
    const leaderboard = [
        { rank: 1, name: "Vikram S.", sales: 450, delta: "+12" },
        { rank: 2, name: "Sarah J.", sales: 380, delta: "+5" },
        { rank: 3, name: "You", sales: 345, delta: "+18", isMe: true },
        { rank: 4, name: "Arjun K.", sales: 310, delta: "-2" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* 1. COMMISSION WALLET (The "Bag") */}
            <div className="relative overflow-hidden rounded-[32px] p-8 md:p-12">
                {/* Gold/Iris Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-[#4B0082]/40 to-[#000000] z-0" />
                <div className="absolute inset-0 backdrop-blur-3xl z-0" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent z-10" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-full bg-[#FFD700]/20 text-[#FFD700]">
                                <Wallet className="w-5 h-5" />
                            </div>
                            <span className="text-[#FFD700] font-bold text-sm tracking-widest uppercase">My Commission</span>
                        </div>

                        <div className="flex items-baseline gap-2">
                            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter">
                                ₹{stats?.totalRevenue ? (stats.totalRevenue * 0.15).toLocaleString() : "45,000"}
                            </h1>
                        </div>
                        <p className="text-white/60 font-medium ml-2">Total earnings this month</p>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <button className="px-8 py-4 bg-[#FFD700] text-black font-black text-lg rounded-full hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.6)] hover:scale-105 transition-all">
                            CASHOUT NOW
                        </button>
                        <p className="text-center text-white/40 text-xs text-xs font-bold">Instant transfer to UPI</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* 2. LEADERBOARD (Gamification) - Span 7 */}
                <div className="lg:col-span-7 bg-[#111] border border-white/[0.08] rounded-[32px] p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
                                <Trophy className="w-6 h-6 text-[#FFD700]" />
                                Leaderboard
                            </h3>
                            <p className="text-[#666] text-sm mt-1">Top promoters this week</p>
                        </div>
                        <div className="px-3 py-1 bg-white/[0.05] rounded-full text-[#ccc] text-xs font-bold">
                            Club: High Street
                        </div>
                    </div>

                    <div className="space-y-3">
                        {leaderboard.map((user) => (
                            <div
                                key={user.rank}
                                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${user.isMe
                                        ? "bg-[#F44A22]/10 border-[#F44A22]/30"
                                        : "bg-white/[0.02] border-transparent"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-black ${user.rank === 1 ? "bg-[#FFD700] text-black" :
                                            user.rank === 2 ? "bg-[#C0C0C0] text-black" :
                                                user.rank === 3 ? "bg-[#CD7F32] text-black" :
                                                    "bg-[#333] text-white"
                                        }`}>
                                        {user.rank}
                                    </div>
                                    <div>
                                        <p className={`font-bold ${user.isMe ? "text-[#F44A22]" : "text-white"}`}>
                                            {user.name} {user.isMe && "(You)"}
                                        </p>
                                        {user.isMe && <p className="text-[#F44A22]/70 text-xs font-bold">5 sales to reach #2!</p>}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-bold">{user.sales} tix</p>
                                    <p className="text-[#C6F432] text-xs font-bold">{user.delta}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. SHARE CENTER - Span 5 */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="flex-1 bg-[#111] border border-white/[0.08] rounded-[32px] p-8 flex flex-col justify-center gap-6">
                        <div className="text-center">
                            <h3 className="text-white text-xl font-bold mb-2">Share & Earn</h3>
                            <p className="text-[#666] text-sm">Every click counts. Share your unique link.</p>
                        </div>

                        <div className="p-4 bg-black rounded-2xl border border-white/[0.1] flex items-center justify-between gap-4">
                            <code className="text-[#C6F432] font-mono text-sm truncate">posh.vip/p/vikram22</code>
                            <button className="p-2 hover:bg-white/[0.1] rounded-lg transition-colors text-white">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-4 rounded-2xl bg-[#000] border border-[#333] hover:border-[#F44A22] text-white font-bold flex flex-col items-center gap-2 transition-all">
                                <Share2 className="w-5 h-5" />
                                WhatsApp
                            </button>
                            <button className="py-4 rounded-2xl bg-[#000] border border-[#333] hover:border-[#F44A22] text-white font-bold flex flex-col items-center gap-2 transition-all">
                                <QrCode className="w-5 h-5" />
                                QR Code
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
