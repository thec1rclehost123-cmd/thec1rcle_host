"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../../components/providers/AuthProvider";
import { subscribeToHostStats } from "../../lib/firebase/host";

// --- Views ---
import ClubOwnerView from "../../components/host/dashboard/ClubOwnerView";
import PromoterView from "../../components/host/dashboard/PromoterView";
import HostView from "../../components/host/dashboard/HostView";

export default function HostDashboard() {
    const { profile } = useAuth();
    const [activeMode, setActiveMode] = useState("club"); // Default: Club Owner
    const [stats, setStats] = useState(null);

    // Subscribe to Data
    useEffect(() => {
        if (profile?.uid) {
            const unsub = subscribeToHostStats(profile.uid, setStats);
            return () => {
                if (typeof unsub === 'function') {
                    try { unsub(); } catch (error) { console.error("Error unsubscribing:", error); }
                }
            };
        }
    }, [profile?.uid]);

    // Role Definitions & Components
    const modes = [
        { id: "club", label: "Club Owner", component: ClubOwnerView },
        { id: "promoter", label: "Promoter", component: PromoterView },
        { id: "host", label: "Host / Door", component: HostView },
        // "Artist" could map to PromoterView or a dedicated view later
        { id: "artist", label: "Artist", component: PromoterView },
    ];

    const ActiveComponent = modes.find(m => m.id === activeMode)?.component || ClubOwnerView;

    return (
        <div className="max-w-[2000px] mx-auto space-y-10 pb-16">

            {/* Header & Controller */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-[#888] text-base font-medium">Welcome back, {profile?.displayName}</p>
                </div>

                <div className="flex items-center gap-6">
                    {/* Mode Switcher Pill */}
                    <div className="flex w-full overflow-x-auto pb-2 md:w-auto md:pb-0 scrollbar-hide bg-[#111] rounded-full p-1.5 border border-[#222]">
                        {modes.map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => setActiveMode(mode.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeMode === mode.id
                                        ? "bg-white text-black shadow-sm"
                                        : "text-[#666] hover:text-white"
                                    }`}
                            >
                                {mode.label}
                            </button>
                        ))}
                    </div>

                    <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#F44A22] text-white rounded-full font-bold text-xs hover:bg-[#D43A12] transition-colors shadow-lg shadow-[#F44A22]/20">
                        <Download className="w-3.5 h-3.5" />
                        Download Report
                    </button>
                </div>
            </div>

            {/* Dynamic View Rendering */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeMode}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <ActiveComponent stats={stats} />
                </motion.div>
            </AnimatePresence>

        </div>
    );
}
