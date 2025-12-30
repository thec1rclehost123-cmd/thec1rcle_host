"use client";

import { motion } from "framer-motion";
import {
    Search,
    ScanLine,
    UserCheck,
    Clock,
    MoreHorizontal,
    Filter
} from "lucide-react";

// --- Host View: Operations & Flow ---
// "Live Scanner Feed": Real-time entry.
// "Guestlist Search": Functional utility.
// Inspiration: "Square UI" - Clean, Dark, Organized.

export default function HostView({ stats }) {

    // Mock Real-time Feed
    const feed = [
        { id: 1, name: "Ananya P.", action: "Checked In", time: "Just now", type: "VIP" },
        { id: 2, name: "Rahul M.", action: "Checked In", time: "2m ago", type: "Guestlist" },
        { id: 3, name: "Simran K.", action: "Ticket Scan", time: "5m ago", type: "GA" },
        { id: 4, name: "David R.", action: "Table Arrived", time: "12m ago", type: "Table 4" },
        { id: 5, name: "Priya S.", action: "Checked In", time: "15m ago", type: "Guestlist" },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">

            {/* 1. OPERATIONAL HEADER / SEARCH */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar - Big & Accessible */}
                <div className="flex-1 relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-[#666] group-focus-within:text-white transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search guestlist, tickets, or tables..."
                        className="w-full h-14 pl-12 pr-4 bg-[#111] border border-white/[0.1] rounded-2xl text-white placeholder:text-[#444] font-medium focus:outline-none focus:border-[#F44A22] transition-colors"
                    />
                    <div className="absolute inset-y-0 right-2 flex items-center">
                        <button className="p-2 hover:bg-white/[0.1] rounded-lg text-[#666] transition-colors">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Quick Scan Action */}
                <button className="h-14 px-8 bg-[#F44A22] text-white font-bold rounded-2xl flex items-center gap-3 hover:bg-[#D43A12] transition-colors shadow-lg shadow-[#F44A22]/20">
                    <ScanLine className="w-5 h-5" />
                    Open Scanner
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* 2. REAL-TIME FEED (The "Log") - Span 2 */}
                <div className="lg:col-span-2 bg-[#111] border border-white/[0.08] rounded-[32px] overflow-hidden flex flex-col min-h-[500px]">
                    <div className="p-6 border-b border-white/[0.08] flex justify-between items-center">
                        <h3 className="text-white text-lg font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#C6F432] animate-pulse" />
                            Live Entry Feed
                        </h3>
                        <p className="text-[#666] text-xs font-bold uppercase">Tonight</p>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {feed.map((item, i) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-black ${item.type === "VIP" ? "bg-[#FFD700]" :
                                            item.type.includes("Table") ? "bg-[#F44A22]" :
                                                "bg-white"
                                        }`}>
                                        {item.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">{item.name}</p>
                                        <p className="text-[#666] text-xs flex items-center gap-1.5">
                                            {item.action}
                                            <span className="w-1 h-1 rounded-full bg-[#444]" />
                                            <span className={item.type === "VIP" ? "text-[#FFD700]" : "text-[#888]"}>{item.type}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-[#666] text-xs font-mono">{item.time}</p>
                                    <button className="p-2 rounded-full hover:bg-white/[0.1] text-[#444] group-hover:text-white transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. NIGHT STATS - Span 1 */}
                <div className="flex flex-col gap-6">
                    {/* Capacity Card */}
                    <div className="bg-[#111] border border-white/[0.08] rounded-[32px] p-6">
                        <h3 className="text-[#888] text-sm font-bold uppercase mb-4">Venue Capacity</h3>
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-4xl font-black text-white">75%</span>
                            <span className="text-[#C6F432] text-sm font-bold mb-1.5">+ Fast filling</span>
                        </div>
                        <div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
                            <div className="h-full w-[75%] bg-[#F44A22] rounded-full" />
                        </div>
                        <div className="flex justify-between mt-4 text-xs font-bold">
                            <span className="text-white">450 / 600</span>
                            <span className="text-[#666]">Max Cap</span>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="flex-1 bg-[#111] border border-white/[0.08] rounded-[32px] p-6 flex flex-col gap-4">
                        <h3 className="text-[#888] text-sm font-bold uppercase">Check-in Stats</h3>

                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03]">
                            <div className="flex items-center gap-3">
                                <UserCheck className="w-5 h-5 text-[#C6F432]" />
                                <span className="text-white font-bold">Guestlist</span>
                            </div>
                            <span className="text-white font-bold">142</span>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03]">
                            <div className="flex items-center gap-3">
                                <ScanLine className="w-5 h-5 text-[#F44A22]" />
                                <span className="text-white font-bold">Tickets</span>
                            </div>
                            <span className="text-white font-bold">89</span>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03]">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-[#FFD700]" />
                                <span className="text-white font-bold">Pending</span>
                            </div>
                            <span className="text-white font-bold">28</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
