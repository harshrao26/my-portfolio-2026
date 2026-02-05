"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowUpRight,
    Terminal,
    Database,
    Truck,
    ShoppingCart,
    ShieldCheck,
    Zap,
    CreditCard,
    Bot,
    Search,
    MapPin,
    BarChart3,
    Settings,
    Image as ImageIcon,
    CheckCircle2,
    Workflow,
    Cpu,
    Layers,
    LineChart as LineChartIcon,
    PieChart as PieChartIcon,
    Activity,
    UserCheck,
    Building2,
    Mail,
    ShieldAlert,
    Boxes,
    Bell,
    Layout,
    Users,
    TrendingUp,
    FileText,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import MagneticButton from "@/components/MagneticButton";
import Footer from "@/components/Footer";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area,
    Cell
} from 'recharts';

// Data for visualizations
const performanceData = [
    { name: 'Traditional System', memory: 100, latency: 100 },
    { name: 'Online Planet', memory: 5, latency: 40 },
];

const onboardingFlow = [
    { name: 'Registration', time: 5 },
    { name: 'OCR Upload', time: 2 },
    { name: 'AI Verification', time: 10 },
    { name: 'Admin Approval', time: 15 },
];

const COLORS = ['#d1d5db', '#c4ff61'];

const RoleCard = ({ title, features, role }) => (
    <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-8xl font-black uppercase tracking-tighter">
                {role}
            </span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <div className="w-2 h-10 bg-lime-500 rounded-full" />
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-5 h-5 rounded-full border border-lime-500/30 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
                </div>
            ))}
        </div>
    </div>
);

const SectionTitle = ({ children, subtitle, icon: Icon }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-lime-400/10 text-lime-400">
                <Icon size={24} />
            </div>
            <span className="text-lime-500 font-bold text-xs uppercase tracking-[0.3em]">{subtitle}</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">{children}</h2>
    </div>
);

const FeatureList = ({ items }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all">
                <CheckCircle2 className="text-lime-500 shrink-0 mt-1" size={18} />
                <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
);

const ImagePlaceholder = ({ label, height = "500px", description }) => (
    <div className="relative group">
        <div
            style={{ height }}
            className="w-full rounded-[2.5rem] bg-zinc-900/50 border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center gap-4 cursor-help transition-all group-hover:border-lime-500/20 group-hover:bg-zinc-900/80"
        >
            <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-lime-400/10 transition-all duration-500">
                <ImageIcon className="text-zinc-600 group-hover:text-lime-500" size={40} />
            </div>
            <div className="text-center">
                <p className="text-zinc-500 text-sm font-bold tracking-[0.2em] uppercase mb-1">{label || "Module Interface"}</p>
                <p className="text-zinc-700 text-xs italic">High-fidelity visualization pending</p>
            </div>
        </div>
        {description && (
            <div className="mt-4 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-gray-500 text-sm italic">{description}</p>
            </div>
        )}
    </div>
);

const ArchitectureIllustration = () => (
    <div className="relative w-full h-[400px] bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.05),transparent_70%)]" />
        <svg viewBox="0 0 800 400" className="w-full h-full p-8">
            {/* Connection Lines */}
            <motion.path
                d="M200 200 L400 100 M200 200 L400 300 M400 100 L600 200 M400 300 L600 200"
                stroke="rgba(163,230,53,0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Central Engine */}
            <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="400" cy="200" r="40" fill="rgba(163,230,53,0.1)" stroke="#a3e635" strokeWidth="1" strokeDasharray="5 5" />
            </motion.g>
            <circle cx="400" cy="200" r="30" fill="#a3e635" className="opacity-20" />
            <text x="400" y="205" textAnchor="middle" className="fill-lime-400 text-[10px] font-bold tracking-widest uppercase">CORE</text>

            {/* Admin Node */}
            <motion.g whileHover={{ scale: 1.1 }}>
                <rect x="350" y="60" width="100" height="40" rx="20" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
                <text x="400" y="85" textAnchor="middle" className="fill-white text-[10px] font-bold uppercase">Admin Panel</text>
            </motion.g>

            {/* Seller Node */}
            <motion.g whileHover={{ scale: 1.1 }}>
                <rect x="150" y="180" width="100" height="40" rx="20" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
                <text x="200" y="205" textAnchor="middle" className="fill-white text-[10px] font-bold uppercase">Seller Hub</text>
            </motion.g>

            {/* Customer Node */}
            <motion.g whileHover={{ scale: 1.1 }}>
                <rect x="550" y="180" width="100" height="40" rx="20" fill="#18181b" stroke="rgba(255,255,255,0.1)" />
                <text x="600" y="205" textAnchor="middle" className="fill-white text-[10px] font-bold uppercase">Customer App</text>
            </motion.g>

            {/* Logistics & AI Nodes */}
            <motion.g whileHover={{ scale: 1.1 }}>
                <rect x="350" y="300" width="100" height="40" rx="20" fill="#a3e635" stroke="none" />
                <text x="400" y="325" textAnchor="middle" className="fill-black text-[10px] font-bold uppercase">AI & Logistics</text>
            </motion.g>
        </svg>

        <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sovereign Data Flow</p>
            <div className="flex gap-2">
                <div className="w-1 h-1 rounded-full bg-lime-500 animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-lime-500 animate-pulse delay-75" />
                <div className="w-1 h-1 rounded-full bg-lime-500 animate-pulse delay-150" />
            </div>
        </div>
    </div>
);

const AIInsightIllustration = () => (
    <div className="relative w-full h-[300px] bg-lime-400/[0.02] border border-lime-400/10 rounded-[2.5rem] overflow-hidden group">
        <svg viewBox="0 0 400 300" className="w-full h-full p-8">
            <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a3e635" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#a3e635" stopOpacity="0.05" />
                </linearGradient>
            </defs>
            {/* Neural Net Pattern */}
            {[...Array(5)].map((_, i) => (
                <motion.circle
                    key={`node-${i}`}
                    cx={100 + i * 50}
                    cy={150 + Math.sin(i) * 50}
                    r="4"
                    fill="#a3e635"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
            <motion.path
                d="M100 150 Q 200 50 300 150 T 400 150"
                stroke="#a3e635"
                strokeWidth="1"
                fill="none"
                strokeDasharray="10 5"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <text x="200" y="250" textAnchor="middle" className="fill-lime-500/50 text-[8px] font-mono uppercase tracking-[0.5em]">Neural Logic Stream</text>
        </svg>
    </div>
);

export default function OnlinePlanetContent() {
    return (
        <main className="bg-black max-w-8xl mx-auto min-h-screen">
 
            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[150vh] bg-[radial-gradient(circle_at_50%_0%,rgba(163,230,53,0.1),transparent_70%)] pointer-events-none" />
                <div className="container-custom relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-lime-400 text-xs font-bold uppercase tracking-widest mb-16 hover:bg-white/10 transition-all"
                        >
                            <ArrowLeft size={16} /> Back to Showcase
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-7xl md:text-9xl font-bold text-white mb-10 tracking-tighter leading-none"
                    >
                        Online <span className="italic font-serif font-normal text-lime-400">Planet</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl text-gray-400 max-w-4xl tracking-tight leading-snug mb-20"
                    >
                        A high-performance <span className="text-white italic">multi-utility commerce platform</span> architected for enterprise-grade scalability, high-speed logistics, and AI-driven business intelligence.
                    </motion.p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-6xl">
                        {[
                            { name: "Next.js 15", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
                            { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
                            { name: "MongoDB", logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
                            { name: "Gemini AI", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/gemini-color.png" },
                            { name: "Redis", logo: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg" },
                            { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg" }
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center gap-3 hover:bg-white/[0.05] hover:border-lime-500/20 transition-all group"
                            >
                                <div className="w-8 h-8 relative flex items-center justify-center  group-hover:-0 group-hover:scale-110 transition-all duration-500">
                                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

           

            {/* Chapter 2: Automated Logistics */}
            <section className="py-40 bg-black">
                <div className="container-custom">
                    <SectionTitle subtitle="Operational Speed" icon={Truck}>
                        Automated Logistics & <br /> <span className="text-gray-500">Global Fulfillment</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-start">
                        <div className="space-y-12">
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Workflow className="text-lime-400" size={24} />
                                    Technical Implementation
                                </h3>
                                <div className="flex flex-wrap gap-6 mb-10">
                                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 group/logistics hover:border-lime-500/30 transition-all">
                                        <img src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/90c1773c-fe14-47f4-9234-fa313d1f8eee/image.png?t=1713811990" className="w-6 h-6 object-contain  group-hover/logistics:-0 transition-all" alt="Shiprocket" />
                                        <span className="text-xs font-bold text-white uppercase tracking-widest">Shiprocket</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 group/logistics hover:border-lime-500/30 transition-all">
                                        <img src="https://static-assets-web.flixcart.com/ekart-assets/assets/fonts/ekblueLogo.e2611ca7449dd40e420e1620f973a5e4.png" className="w-6 h-6 object-contain  group-hover/logistics:-0 transition-all" alt="Ekart" />
                                        <span className="text-xs font-bold text-white uppercase tracking-widest">Ekart</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <p className="text-lime-500 font-bold text-sm uppercase tracking-widest">Multi-Carrier Handshake</p>
                                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                            Engineered a robust direct API integration layer with <span className="text-white italic">Shiprocket & Ekart</span>. We implemented an event-driven webhook architecture that processes 15+ status checkpoints (Manifested to Delivered) in real-time.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-lime-500 font-bold text-sm uppercase tracking-widest">Dynamic Routing Algorithim</p>
                                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                                            The "Sentient Carrier Selection" logic uses a priority-weighted algorithm that ranks couriers based on real-time performance data for specific pincodes, favoring cost-efficiency without sacrificing speed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.3em]">Operational Mastery</h4>
                                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10">
                                        The platform features deep, direct integrations with major logistics providers (comparable to Amazon's and Flipkart's internal systems).
                                    </p>
                                </div>

                                <FeatureList items={[
                                    { title: "AI-Powered Carrier Selection", description: "Automatically chooses the most cost-effective and fastest courier for every order." },
                                    { title: "Real-Time Label Generation", description: "Automated creation of Air Waybills (AWB), shipping labels, and warehouse manifests." },
                                    { title: "End-to-End Tracking", description: "Live shipment monitoring with over 15 status checkpoint updates." },
                                    { title: "Returns Management", description: "Automated handling of 'Return to Origin' (RTO) and customer-initiated reverse logistics." },
                                    { title: "Serviceability Engine", description: "Instant pincode validation and shipping cost estimation before checkout." },
                                ]} />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-10 rounded-[3rem] bg-lime-400 text-black">
                                <p className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-70">Operational Impact</p>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-4xl font-black tracking-tighter">80%</h4>
                                        <p className="font-bold text-sm uppercase leading-tight">Reduction in Manual <br /> RTO Intervention</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-black tracking-tighter">24h</h4>
                                        <p className="font-bold text-sm uppercase leading-tight">Average Fulfillment <br /> Speed Improvement</p>
                                    </div>
                                </div>
                            </div>
                            <ImagePlaceholder
                                label="Logistics Command Interface"
                                height="450px"
                                description="Warehouse-grade operations dashboard showing real-time courier assignments and pickup manifest pipelines."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 3: Advanced Order Management */}
            <section className="py-40 bg-zinc-950/50 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Operational Workflow" icon={ShoppingCart}>
                        Advanced Order <br /> <span className="text-gray-500">Lifecycle Management</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.3em] mb-6">Workflow Highlights</h4>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg mb-2">Lifecycle Tracking</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                A comprehensive 12-stage system tracking orders precisely from <span className="text-white italic">Pending</span> through <span className="text-white italic">Packed</span>, <span className="text-white italic">Shipped</span>, and finally <span className="text-white italic">Delivered</span>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                                            <Settings size={24} />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg mb-2">Seller Operations</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Empowering merchants with bulk order processing, automated packing slip generation, and internal operational notes for warehouse efficiency.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-lg mb-2">Customer Transparency</h5>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Live tracking portals with automated status timelines and integrated return request systems for a frictionless buyer experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10">
                                This 12-stage lifecycle management ensures absolute transparency and operational control for both sellers and customers, eliminating guesswork at every step.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="p-10 rounded-[3.5rem] bg-lime-400 text-black">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 opacity-70">Document Automation</h4>
                                <div className="space-y-6">
                                    {[
                                        "GST-Compliant Tax Invoices",
                                        "Warehouse Packing Slips",
                                        "Digital Shipping Labels",
                                        "Refund & Credit Notes"
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-center gap-4 py-4 border-b border-black/10">
                                            <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                                            <span className="font-bold text-xl tracking-tight">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 pt-10 border-t border-black/5">
                                    <p className="text-sm font-bold leading-relaxed">
                                        Instant, automated generation of all critical commerce documents, reducing administrative overhead by 100%.
                                    </p>
                                </div>
                            </div>

                            <ImagePlaceholder
                                label="Order Lifecycle Interface"
                                height="300px"
                                description="Visual timeline showing order status micro-steps and automated document generation triggers."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 4: Integrated Payment & Financial Systems */}
            <section className="py-40 bg-zinc-950/50 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Financial Engine" icon={CreditCard}>
                        Integrated Payment & <br /> <span className="text-gray-500">Financial Systems</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-start">
                        <div className="space-y-12">
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.3em] mb-8">Key Capabilities</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h5 className="text-white font-bold text-lg mb-2">Secure Payments</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Fully integrated production-grade financial engine with support for <span className="text-white italic">UPI, Cards, Net Banking</span>, and Digital Wallets.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="text-white font-bold text-lg mb-2">Automated Refunds</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Instant full or partial refund processing directly within the platform, ensuring consumer trust and operational speed.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="text-white font-bold text-lg mb-2">Seller Payouts</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Automated calculation and transfer of earnings (post-commission) to seller bank accounts with absolute precision.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="text-white font-bold text-lg mb-2">Real-Time Reconciliation</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Automated verification of every transaction using <span className="text-white italic">enterprise-grade security signatures</span> and audit trails.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-lime-400/5 border border-lime-400/10">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Financial Compliance</h4>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Automatic tax calculation and generation of digital receipts for every stakeholder, ensuring 100% regulatory compliance.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div className="p-10 rounded-[3rem] bg-lime-400 text-black">
                                <h4 className="text-4xl font-black tracking-tighter mb-4">100%</h4>
                                <p className="font-bold text-sm uppercase leading-tight mb-8">Reconciliation <br /> Accuracy Rate</p>
                                <p className="text-sm font-medium leading-relaxed opacity-70">
                                    Our financial engine eliminates manual errors by cross-referencing payment gateway tokens with internal ledger entries in real-time.
                                </p>
                            </div>
                            <ImagePlaceholder
                                label="Financial Settlement Dashboard"
                                height="400px"
                                description="Real-time payout tracking, commission breakdown, and transaction reconciliation interface."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 5: Artificial Intelligence & Automation */}
            <section className="py-40 bg-black">
                <div className="container-custom">
                    <SectionTitle subtitle="Intelligence" icon={Bot}>
                        Artificial Intelligence <br /> <span className="text-gray-500">& Automation</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20">
                        <div className="space-y-16">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10 mb-16">
                                Leveraging <span className="text-white font-bold">Google's advanced Gemini AI models</span> to automate operations, optimize product discovery, and provide intelligent business insights for every stakeholder.
                            </p>
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5">
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Cpu className="text-lime-400" size={24} />
                                    Intelligent Services
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                            <Zap size={16} />
                                            Listing Automation
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            AI-generated product titles, SEO-friendly descriptions, and automated keyword optimization using <span className="text-white">Gemini 1.5 Pro</span>.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                            <Layers size={16} />
                                            Smart Categorization
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Automated product placement and taxonomy mapping using deep multi-modal content analysis of images and text.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                            <TrendingUp size={16} />
                                            Dynamic Pricing
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Intelligent pricing recommendations based on real-time market demand and competitor trend analysis.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                            <Building2 size={16} />
                                            Business Coaching
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Real-time sales performance insights and data-driven optimization suggestions for merchant growth.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                            <UserCheck size={16} />
                                            AI Assistant
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Automated support for order queries and personalized product discovery journeys for every customer.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-6 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400">
                                        <BarChart3 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Internal PPC</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        A proprietary internal advertising network allowing sellers to bid for visibility, track ROAS, and optimize conversions through real-time metrics.
                                    </p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[3rem] bg-lime-400/5 border border-lime-400/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <Bot size={120} className="text-lime-400" />
                                </div>
                                <div className="relative z-10 max-w-2xl">
                                    <h3 className="text-3xl font-bold text-white mb-6">Gemini AI Business Coaching</h3>
                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        We integrated Google's Gemini models to provide every seller with a dedicated <span className="text-lime-400 italic font-bold">Smart Assistant</span>.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Automated SEO-friendly product description & title generation",
                                            "Dynamic pricing recommendations based on competitor trends",
                                            "Real-time sales performance insights and stock optimization",
                                            "Intelligent categorization based on deep product data analysis"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-gray-400">
                                                <Bot size={16} className="text-lime-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-12">
                                        <AIInsightIllustration />
                                    </div>
                                    <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-8 items-center opacity-40 hover:opacity-100 transition-opacity">
                                        <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/gemini-color.png" className="h-8  hover:-0 transition-all cursor-pointer" alt="Gemini" />
                                        <img src="https://avatars.githubusercontent.com/u/7713209?s=200&v=4" className="h-6  hover:-0 transition-all cursor-pointer" alt="Razorpay" />
                                        <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" className="h-6  hover:-0 transition-all cursor-pointer" alt="MongoDB" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <ImagePlaceholder
                                label="Seller Onboarding Flow"
                                height="350px"
                                description="OCR verification queue with real-time field extraction and verification status."
                            />
                            <ImagePlaceholder
                                label="PPC Advertising Hub"
                                height="450px"
                                description="Campaign management with real-time bidding, CTR visualization, and ROAS calculations."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 6: Automated Identity Verification (OCR) */}
            <section className="py-40 bg-zinc-950/50 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Security & Trust" icon={FileText}>
                        Automated Identity <br /> <span className="text-gray-500">Verification (OCR)</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
                        <div className="space-y-12">
                            <p className="text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10">
                                Zero-error onboarding system using Optical Character Recognition (OCR) to parse and verify official documents in real-time.
                            </p>
                            
                            <div className="p-10 rounded-[3rem] bg-lime-400 text-black">
                                <h4 className="text-4xl font-black tracking-tighter mb-4">-70%</h4>
                                <p className="font-bold text-sm uppercase leading-tight mb-8">Reduction in Manual <br /> Verification Time</p>
                                <p className="text-sm font-medium leading-relaxed opacity-70">
                                    By automating the extraction of legal identifiers, we allow legitimate sellers to start their business cycle 70% faster than traditional manual review systems.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Automatic Parsing",
                                    desc: "Instant extraction of data from PAN Cards, GST Certificates, Aadhaar Cards, and Passports with 99% accuracy.",
                                    icon: Zap
                                },
                                {
                                    title: "International Support",
                                    desc: "Specialized handling for regional documents including Emirates ID (UAE) and global identity standards.",
                                    icon: Building2
                                },
                                {
                                    title: "Fraud Prevention",
                                    desc: "Automated field validation and data consistency checks against official government patterns and checksums.",
                                    icon: ShieldCheck
                                },
                                {
                                    title: "Seamless Onboarding",
                                    desc: "A frictionless document vault experience that guides users through successful capture and verification.",
                                    icon: CheckCircle2
                                }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                                        <feature.icon size={24} />
                                    </div>
                                    <h5 className="text-white font-bold text-lg mb-3">{feature.title}</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 7: Precise Geolocation & Delivery Estimates */}
            <section className="py-40 bg-black">
                <div className="container-custom">
                    <SectionTitle subtitle="User Experience" icon={MapPin}>
                        Precise Geolocation & <br /> <span className="text-gray-500">Delivery Estimates</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <p className="text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10">
                                A high-accuracy location system (similar to major food delivery apps) designed to provide a frictionless and superior user experience.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                        <Navigation size={16} />
                                        Auto-Detection
                                    </div>
                                    <h5 className="text-white font-bold text-lg">Automatic Address Detection</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Uses GPS and mapping technology to detect exact delivery addresses, eliminating manual input errors.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-lime-500 font-bold text-sm uppercase tracking-widest">
                                        <Layers size={16} />
                                        Hyper-Local
                                    </div>
                                    <h5 className="text-white font-bold text-lg">Hyper-Local Logic</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Automatically extracts street, city, and pincode for perfect delivery accuracy and routing efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                                        <Activity size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold text-xl mb-2">Instant Delivery Promises</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Real-time calculation of delivery dates based on the user's specific location and the nearest vendor fulfillment center.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold text-xl mb-2">Smart Checkout</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Pre-filled address information minimizes friction, reducing checkout time by an average of 45 seconds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <ImagePlaceholder 
                                label="Hyper-Local Discovery Interface" 
                                height="300px" 
                                description="Map-based address confirmation and real-time shipping promise visualization."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 8: Multi-Channel Notification Engine */}
            <section className="py-40 bg-zinc-950/50 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Communication" icon={Bell}>
                        Multi-Channel <br /> <span className="text-gray-500">Notification Engine</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-start">
                        <div className="space-y-12">
                            <p className="text-2xl text-gray-300 leading-relaxed italic border-l-2 border-lime-500 pl-10">
                                A robust communication system designed to keep users informed and engaged through every critical milestone of their journey.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 mb-4">
                                        <Mail size={24} />
                                    </div>
                                    <h5 className="text-white font-bold text-lg">Omni-Channel Alerts</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Automated notifications delivered across <span className="text-white italic">WhatsApp, SMS, and Email</span>, ensuring 100% reachability regardless of the user's preferred platform.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 mb-4">
                                        <Zap size={24} />
                                    </div>
                                    <h5 className="text-white font-bold text-lg">Event-Driven Messaging</h5>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Instant alerts triggered by real-time events: Order Confirmations, Shipping Updates, Out-for-Delivery status, and Refund processing.
                                    </p>
                                </div>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-lime-400/5 border border-lime-400/10">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.2em] mb-4">Professional Experience</h4>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Every notification is powered by <span className="text-white font-bold">Branded Professional Templates</span>, ensuring a premium and consistent customer experience that reinforces brand trust.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-10 rounded-[3rem] bg-lime-400 text-black">
                                <h4 className="text-4xl font-black tracking-tighter mb-4">Instant</h4>
                                <p className="font-bold text-sm uppercase leading-tight mb-8">Delivery Pulse <br /> Notifications</p>
                                <p className="text-sm font-medium leading-relaxed opacity-70">
                                    Eliminating anxiety through transparency. Users receive micro-updates at every critical status shift in the order lifecycle.
                                </p>
                            </div>
                            <ImagePlaceholder 
                                label="Notification Flow Designer" 
                                height="350px" 
                                description="Visual dashboard showing event triggers and delivery success rates across WhatsApp and Email channels."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 9: Enterprise Portals & Performance */}
            <section className="py-40 bg-black overflow-hidden border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Governance" icon={ShieldAlert}>
                        Enterprise Portals & <br /> <span className="text-gray-500">Performance Governance</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-12">
                            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.3em] mb-6">Seller Operations Hub</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {[
                                        { title: "Real-Time Analytics", desc: "Granular revenue and visitor monitoring." },
                                        { title: "Inventory Engine", desc: "Automated low-stock alerts & variant control." },
                                        { title: "Engagement Tools", desc: "Review moderation & customer interaction Hub." },
                                        { title: "Supply Chain", desc: "End-to-end warehouse and supplier tracking." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-5 rounded-2xl bg-zinc-900 border border-white/5">
                                            <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                                            <p className="text-gray-500 text-xs leading-tight">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
                                <h4 className="text-lime-400 font-bold text-xs uppercase tracking-[0.3em] mb-6">Sophisticated Business Engines</h4>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-white font-bold">
                                            <TrendingUp size={20} className="text-lime-500" />
                                            Internal PPC Network
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            A proprietary advertising engine that tracks <span className="text-white italic">ROAS, CTR, Impressions, and Conversions</span> in real-time. Sellers utilize a Bidding & Boosting system to increase product visibility based on custom bid amounts.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-white font-bold">
                                            <Zap size={20} className="text-lime-500" />
                                            Dynamic Pricing Engine
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Priority-based pricing rules that allow merchants to set automated discount or markup logic. Rules execute based on custom priorities to ensure optimal profit margins and competitiveness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <ImagePlaceholder
                                label="Administrative Sovereign Dashboard"
                                height="450px"
                                description="High-privilege command center showing real-time marketplace health, compliance queues, and CMS controls."
                            />
                            <ImagePlaceholder
                                label="Seller Growth Analytics"
                                height="350px"
                                description="Deep-dive revenue visualization and variant-level inventory performance reports."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 10: Detailed Ecosystem Stakeholders */}
            <section className="py-40 bg-zinc-950/30 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Platform Roles" icon={Users}>
                        Omni-Channel <br /> <span className="text-gray-500 text-5xl">Stakeholder Modules</span>
                    </SectionTitle>

                    <div className="space-y-12">
                        <RoleCard
                            role="Customer"
                            title="Consumer Experience"
                            features={[
                                "Smart Discovery: Personalized home feed with 'Steal Deals' and 'Trending' curation via relevance-based algorithms",
                                "Advanced Search: Multi-attribute filtering by brand, price, category, and seller verification status",
                                "Precision Tracking: Dedicated portal providing real-time updates through a 12-stage fulfillment lifecycle",
                                "Account Hub: Self-service profile management, multi-address book, and consolidated order history",
                                "Returns & Support: One-click return requests with image upload capability and real-time refund tracking",
                                "Hyper-Local Delivery: Precision estimates and serviceability checks based on exact GPS-detected location"
                            ]}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
                            <div className="p-8 rounded-[3rem] bg-zinc-900/50 border border-white/5 flex items-center justify-center">
                                <div className="text-center">
                                    <ShoppingCart className="text-lime-500 mx-auto mb-6" size={60} />
                                    <h4 className="text-2xl font-bold text-white mb-2">Merchant Hub</h4>
                                    <p className="text-gray-500 text-sm italic">High-Performance Command Center</p>
                                </div>
                            </div>
                            <RoleCard
                                role="Seller"
                                title="Seller Command Center"
                                features={[
                                    "Full Inventory Control: Manage variants, track stock across warehouses with automated low-stock alerts",
                                    "Automated Fulfillment: One-click logistics via direct Shiprocket/Ekart portals and instant document printing",
                                    "AI Business Insights: Dedicated 'Business Coach' analyzing performance for pricing & inventory optimization",
                                    "Financial Dashboard: 100% transparency into earnings, pending payouts, fees, and reconciliation",
                                    "Marketing & Coupons: Store-specific discount codes, flash sales, and targeted promotional banners",
                                    "Customer Engagement: Moderation tools for reviews and product Q&A tracking",
                                    "Document Vault: Seamless OCR-powered onboarding with real-time application status"
                                ]}
                            />
                        </div>

                        <RoleCard
                            role="Admin"
                            title="Administrative Governance"
                            features={[
                                "Merchant Onboarding: Multi-layer document verification suite using OCR for high-integrity approvals",
                                "Automated Termination: Ability to suspend accounts or toggle status with automated SMTP email alerts",
                                "Global CMS: Real-time control over homepage layouts, primary banners, and platform-wide campaigns",
                                "Financial Oversight: Payout approval engine and platform-wide commission revenue monitoring",
                                "Governance & Safety: Global moderation for reviews and policy enforcement settings",
                                "Strategic Analytics: High-level visualizations for platform growth and marketplace health"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Chapter 11: Performance & Security */}
            <section className="py-40 bg-zinc-950 border-t border-white/5">
                <div className="container-custom">
                    <SectionTitle subtitle="Core Foundation" icon={ShieldCheck}>
                        Performance & <br /> <span className="text-gray-500">Platform Security</span>
                    </SectionTitle>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Speed Optimized",
                                desc: "Engineered high-performance database queries and optimized media delivery pipelines for a 60% faster search and browsing experience.",
                                icon: Zap
                            },
                            {
                                title: "Enterprise Security",
                                desc: "Robust multi-layer defense including Role-Based Access Control (RBAC), secure data encryption, and strictly protected API routes.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Global Scalability",
                                desc: "Architected for infinite horizontal scaling with native support for multi-country, multi-currency, and regional compliance from day one.",
                                icon: Layers
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-lime-500/30 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400 mb-8 group-hover:scale-110 transition-transform">
                                    <feature.icon size={28} />
                                </div>
                                <h4 className="text-white font-bold text-2xl mb-4">{feature.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chapter 12: Technical Achievements & Impact */}
            <section className="py-40 bg-zinc-950 border-t border-white/5">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-32">
                        <SectionTitle subtitle="Technical ROI" icon={Zap}>
                            Impact & <span className="text-gray-500 text-4xl italic font-serif">Engineering Achievements</span>
                        </SectionTitle>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8">
                            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400">
                                <Database size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">How we achieved -95% Resource Footprint</h3>
                            <p className="text-gray-400 leading-relaxed text-justify">
                                Traditional multi-vendor systems often suffer from redundant data polling. We implemented a <span className="text-white italic">Polyglot Persistence strategy</span>—using MongoDB for flexible schemas and internal memory caching for high-frequency operational data. By moving to an event-driven architecture, we eliminated "N+1" query problems, allowing the entire application to run on 95% less server memory compared to standard marketplace frameworks.
                            </p>
                        </div>

                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-8">
                            <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex items-center justify-center text-lime-400">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-white">How we achieved +60% Search Speed</h3>
                            <p className="text-gray-400 leading-relaxed text-justify">
                                Instead of standard full-table scans, we architected a <span className="text-white italic">Multi-Attribute Search Pipeline</span>. We utilized Redis for real-time category caching and implemented specialized MongoDB aggregation pipelines with compound indexing. This ensures that even with 49+ complex datasets, sub-millisecond query responses are maintained across 140+ endpoints.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { value: "95%", label: "System Efficiency", sub: "Resource Consumption Reduced" },
                            { value: "60%", label: "Operational Speed", sub: "Search Velocity (Indexing)" },
                            { value: "70%", label: "Onboarding Speed", sub: "OCR Automation" },
                            { value: "100%", label: "Feature Depth", sub: "Automated Lifecycle Hub" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <h3 className="text-7xl md:text-8xl font-bold text-white tracking-tighter mb-4 group-hover:text-lime-400 transition-colors">
                                    {stat.value}
                                </h3>
                                <p className="text-lime-500 text-xs font-bold uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                                <p className="text-gray-500 text-sm italic font-serif">{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-40 p-20 rounded-[3rem] bg-gradient-to-t from-lime-400/[0.05] to-transparent border border-white/5 flex flex-col items-center">
                        <h3 className="text-4xl font-bold text-white mb-8">Project Status: <span className="text-lime-400 itali">Production-Ready</span></h3>
                        <p className="text-gray-400 text-center max-w-2xl text-lg leading-relaxed mb-12">
                            Online Planet is currently deployed on <span className="text-white font-bold">Enterprise Cloud Infrastructure</span>, managing a global e-commerce scope with sub-millisecond precision. It stands as a testament to the next generation of automated digital commerce.
                        </p>

                        <div className="flex flex-wrap gap-8 justify-center">
                            <MagneticButton strength={0.2}>
                                <a href="#contact" className="px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-lime-400 transition-all hover:scale-105 shadow-2xl">
                                    Discuss Collaboration
                                </a>
                            </MagneticButton>
                            <MagneticButton strength={0.2}>
                                <Link href="/#work" className="px-12 py-6 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/5 transition-all">
                                    Browse More Work
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
