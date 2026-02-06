"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  Code2,
  Zap,
  BarChart3,
  CheckCircle2,
  Share2,
} from "lucide-react";

const ResumePage = () => {
  const [devMode, setDevMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const MetricBadge = ({ icon: Icon, label, value, color = "emerald" }) => (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-${color}-50 border border-${color}-100 text-${color}-700 text-[10px] font-semibold uppercase tracking-wider print:hidden no-print`}
    >
      <Icon className="w-3 h-3" />
      <span>
        {label}: {value}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-12 px-4 print:p-0 print:bg-white font-poppins transition-colors duration-500">
      <Head>
        <title>Harsh Deep Rao - Senior Full Stack Developer Resume</title>
        <meta
          name="description"
          content="Senior Full Stack Developer specializing in Next.js 15, Performance Engineering, and Scalable APIs. 2+ years of production experience."
        />

        {/* OpenGraph / Social Graph */}
        <meta
          property="og:title"
          content="Harsh Deep Rao | Senior Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Architecting high-performance commerce engines & scalable enterprise solutions."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://my-portfolio-2026-nu.vercel.app/resume"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Harsh Deep Rao",
            jobTitle: "Full Stack Developer",
            url: "https://my-portfolio-2026-nu.vercel.app/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lucknow",
              addressRegion: "UP",
              addressCountry: "India",
            },
            sameAs: [
              "https://www.linkedin.com/in/harsh-d-rao/",
              "https://github.com/harshrao26",
            ],
          })}
        </script>
      </Head>

      {/* Persistent Mobile Contact HUD */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 bg-black/90 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-2xl transition-all duration-500 md:hidden no-print print:hidden ${scrolled ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <a
          href="tel:+917233811034"
          className="p-2 text-white hover:text-emerald-400 transition-colors"
        >
          <Phone className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
        <a
          href="mailto:harshurao058@gmail.com"
          className="p-2 text-white hover:text-emerald-400 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a> 
        <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
        <button
          onClick={handleDownload}
          className="p-2 text-white hover:text-emerald-400 transition-colors"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>

      {/* Top Enhancement Bar (Web Only) */}
      <div className="max-w-[850px] mx-auto mb-6 flex flex-wrap justify-between items-center print:hidden no-print px-4 gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold font-sans text-slate-800 tracking-tight">
              Harsh D. Rao
            </h2>
            <p className="text-xs font-sans text-slate-500 font-medium uppercase tracking-widest leading-none">
              Senior Engineering Resume
            </p>
          </div>
          
        </div>
        <button
          onClick={handleDownload}
          className="group flex items-center gap-3 bg-black text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all font-sans text-xs font-black shadow-xl"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          Download PDF
        </button>
      </div>

      <div className="max-w-[850px] mx-auto bg-white shadow-[0_0_80px_rgba(0,0,0,0.15)] print:shadow-none min-h-[11in] p-5 sm:p-[0.75in] print:p-[0.25in] print:max-w-none print:w-full transition-all relative border border-slate-100 print:border-none">
        <div className="resume-content relative z-10 text-[11pt] text-black leading-[1.25]">
          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-[34pt] font-light uppercase tracking-[0.15em] mb-1 leading-none text-slate-900">
              Harsh Deep Rao
            </h1>
            <p className="text-[9pt] tracking-[0.2em] mb-2 opacity-70 text-slate-600 font-medium uppercase">
              Lucknow, India
            </p>

            <div className="flex flex-wrap print:flex-nowrap justify-center items-center gap-x-8 print:gap-x-3 gap-y-3 text-[9pt] print:text-[8pt] font-medium text-slate-700">
              <a
                href="tel:+917233811034"
                className="flex items-center gap-2 print:gap-1 hover:text-emerald-700 transition-all group shrink-0"
              >
                <div className="p-1.5 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors print:bg-transparent print:p-0 print:border-none">
                  <Phone className="w-3.5 h-3.5 print:w-2.5 print:h-2.5 text-slate-500 group-hover:text-emerald-600 print:text-black" />
                </div>
                <span className="print:text-black">+91-72338 11034</span>
              </a>
              <a
                href="mailto:harshurao058@gmail.com"
                className="flex items-center gap-2 print:gap-1 hover:text-emerald-700 transition-all group shrink-0"
              >
                <div className="p-1.5 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors print:bg-transparent print:p-0 print:border-none">
                  <Mail className="w-3.5 h-3.5 print:w-2.5 print:h-2.5 text-slate-500 group-hover:text-emerald-600 print:text-black" />
                </div>
                <span className="print:text-black">harshurao058@gmail.com</span>
              </a>
              <a
                href="https://my-portfolio-2026-nu.vercel.app/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 print:gap-1 hover:text-emerald-700 transition-all group shrink-0"
              >
                <div className="p-1.5 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors print:bg-transparent print:p-0 print:border-none">
                  <Globe className="w-3.5 h-3.5 print:w-2.5 print:h-2.5 text-slate-500 group-hover:text-emerald-600 print:text-black" />
                </div>
                <span className="print:text-black">Portfolio</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-d-rao/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 print:gap-1 hover:text-emerald-700 transition-all group shrink-0"
              >
                <div className="p-1.5 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors print:bg-transparent print:p-0 print:border-none">
                  <Linkedin className="w-3.5 h-3.5 print:w-2.5 print:h-2.5 text-slate-500 group-hover:text-emerald-600 print:text-black" />
                </div>
                <span className="print:text-black">Linkedin</span>
              </a>
              <a
                href="https://github.com/harshrao26"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 print:gap-1 hover:text-emerald-700 transition-all group shrink-0"
              >
                <div className="p-1.5 bg-slate-50 rounded-full group-hover:bg-emerald-50 transition-colors print:bg-transparent print:p-0 print:border-none">
                  <Github className="w-3.5 h-3.5 print:w-2.5 print:h-2.5 text-slate-500 group-hover:text-emerald-600 print:text-black" />
                </div>
                <span className="print:text-black">Github</span>
              </a>
            </div>
          </header>

          <main className="space-y-5">
            {/* Professional Summary Section */}
            <section
              className={`space-y-2 transition-all duration-300 ${devMode ? "bg-slate-50 p-2 rounded-lg -mx-2 ring-1 ring-slate-100" : ""}`}
            >
              <h2 className="text-[11pt] font-semibold uppercase tracking-[0.1em] border-b-[1px] border-black pb-0.5 mb-2 leading-none">
                Professional Summary
              </h2>
              <p className="text-[10pt] font-light leading-relaxed text-slate-800">
                <span className="font-semibold text-slate-900">
                  Full Stack Developer (Immediate Joiner)
                </span>{" "}
                with 2+ years of experience in architecting scalable,
                production-grade web applications. Expertise in building
                high-performance commerce engines and enterprise portals using{" "}
                <span className="font-semibold text-slate-900 border-b border-dotted border-black/20">
                  Next.js, React, Node.js, and MongoDB
                </span>
                . Proven track record of delivering end-to-end features with
                measurable business impact, specializing in performance
                optimization, logistics automation, and Core Web Vitals.
              </p>
            </section>

            {/* Technical Skills Section */}
            <section
              className={`space-y-1 transition-all duration-300 ${devMode ? "bg-emerald-50/30 p-2 rounded-lg -mx-2 ring-1 ring-emerald-100" : ""}`}
            >
              <h2 className="text-[11pt] font-semibold uppercase tracking-[0.1em] border-b-[1px] border-black pb-0.5 mb-2 leading-none">
                Technical Skills
              </h2>
              <div className="space-y-1 ml-0.5 text-[10pt] font-light leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-900">
                    Frontend Core:
                  </span>{" "}
                  Next.js 15, React 19, TypeScript, Tailwind CSS, Redux Toolkit,
                  Zustand
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Backend & DB:
                  </span>{" "}
                  Node.js, Express.js, MongoDB (Aggregation Pipelines), JWT /
                  OAuth, REST APIs
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Performance & SEO:
                  </span>{" "}
                  Technical SEO, Schema Markup (JSON-LD), Core Web Vitals (LCP,
                  CLS, INP), Lighthouse
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    DevOps & Cloud:
                  </span>{" "}
                  DigitalOcean (Droplets), Nginx, PM2, Docker, Git, CI/CD, SMTP
                </p>
              </div>
              {devMode && (
                <div className="mt-2 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-1 duration-300">
                  <MetricBadge
                    icon={Zap}
                    label="Core Web Vitals"
                    value="Optimized"
                    color="emerald"
                  />
                  <MetricBadge
                    icon={CheckCircle2}
                    label="TS Compliance"
                    value="Strict"
                    color="blue"
                  />
                </div>
              )}
            </section>

            {/* Experience Section */}
            <section className="space-y-6">
              <h2 className="text-[11pt] font-semibold uppercase tracking-[0.1em] border-b-[1px] border-black pb-0.5 mb-4 leading-none">
                Experience / Internship
              </h2>

              <div className="space-y-1 ml-0.5">
                <div className="flex justify-between items-baseline mb-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[11pt] font-semibold">
                      Lawfinity India PVT. LTD.
                    </h3>
                    <MetricBadge
                      icon={CheckCircle2}
                      label="Status"
                      value="Active"
                      color="emerald"
                    />
                  </div>
                  <span className="text-[10pt] font-semibold text-slate-800">
                    June 2025 - Present
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-[9pt] italic">
                  <span className="font-medium text-slate-500">
                    Full Stack Developer
                  </span>
                  <span className="font-medium uppercase tracking-tighter text-slate-400">
                    Remote
                  </span>
                </div>
                <ul className="custom-list space-y-1 text-[10pt] font-light leading-relaxed mt-2 text-slate-800">
                  <li>
                    Joined as the{" "}
                    <span className="font-semibold text-slate-900 border-b border-black/20">
                      Founding Technical Member
                    </span>{" "}
                    to build the entire IT infrastructure and digital department
                    from absolute zero.
                  </li>
                  <li>
                    <span className="font-semibold">Architecting</span> and
                    delivering the{" "}
                    <span className="font-semibold">Lawfinity Portal</span>—a
                    comprehensive legal-tech management suite with automated
                    document generation and case lifecycle tracking.
                  </li>
                  <li>
                    Spearheaded the development of{" "}
                    <span className="font-semibold">
                      proprietary ERP systems
                    </span>{" "}
                    for Sales, HR, and Operations, bridging the technical gap
                    between departments with custom automation.
                  </li>
                  <li>
                    Conducted deep{" "}
                    <span className="font-semibold">Competitor Research</span>{" "}
                    against global market leaders to architect a technical
                    strategy that secured top search rankings.
                  </li>
                  <li>
                    Optimized server actions and{" "}
                    <span className="font-semibold text-slate-900">
                      backend logic
                    </span>{" "}
                    to reduce{" "}
                    <span className="font-semibold text-slate-900">
                      TTFB by 40%
                    </span>{" "}
                    while ensuring high platform availability.
                  </li>
                  <li>
                    Leading the{" "}
                    <span className="font-semibold text-slate-900">
                      Technical Roadmap
                    </span>{" "}
                    and feature prioritization, translating complex legal
                    workflows into intuitive, production-ready digital
                    solutions.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="space-y-1 ml-0.5">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-[11pt] font-semibold text-slate-900">
                    Propques Services PVT. LTD.
                  </h3>
                  <span className="text-[10pt] font-semibold text-slate-800">
                    Oct 2024 - June 2025
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-[9pt] italic">
                  <span className="font-medium text-slate-500">
                    Full Stack Developer
                  </span>
                  <span className="font-medium uppercase tracking-tighter text-slate-400">
                    Onsite
                  </span>
                </div>
                <ul className="custom-list space-y-1 text-[10pt] font-light leading-relaxed mt-2 text-slate-800">
                  <li>
                    Revamped the core company website,{" "}
                    <span className="font-semibold underline decoration-slate-200">
                      Propques.com
                    </span>
                    , achieving a{" "}
                    <span className="font-semibold italic text-slate-900">
                      40% improvement
                    </span>{" "}
                    in page load speed and a 25% increase in user engagement.
                  </li>
                  <li>
                    <span className="font-semibold italic text-slate-900">
                      Optimized Data Pipelines
                    </span>{" "}
                    by integrating Make.com automation, resulting in a{" "}
                    <span className="font-semibold text-slate-900">
                      30% reduction
                    </span>{" "}
                    in manual data entry and processing.
                  </li>
                  <li>
                    Implemented scalable email handling with EmailJS and
                    perfected secure authentication workflows using{" "}
                    <span className="font-semibold text-slate-900 underline decoration-slate-200">
                      Otpless
                    </span>{" "}
                    social logins.
                  </li>
                </ul>
              </div>

              {/* Internships Inline */}
              <div className="grid grid-cols-2 gap-x-8 pt-1 ml-0.5">
                <div className="space-y-1">
                  <div className="flex justify-between border-b border-black/10 pb-0.5">
                    <h4 className="font-semibold text-[10pt]">
                      UnBoxing Community
                    </h4>
                    <span className="text-[9pt] italic font-semibold text-slate-500">
                      2 Months
                    </span>
                  </div>
                  <p className="italic text-[9.5pt] mb-1 font-semibold text-slate-600">
                    React Developer Intern
                  </p>
                  <ul className="custom-list text-[9.5pt] space-y-0.5 leading-snug opacity-90 print:opacity-100">
                    <li>
                      Integrated complex frontend components with backend
                      services.
                    </li>
                    <li>
                      Collaborated with design team for pixel-perfect wireframe
                      translation.
                    </li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between border-b border-black/10 pb-0.5">
                    <h4 className="font-semibold text-[10pt]">Adi Laxmi Exports</h4>
                    <span className="text-[9pt] italic font-semibold text-slate-500">
                      1 Month
                    </span>
                  </div>
                  <p className="italic text-[9.5pt] mb-1 font-semibold text-slate-600">
                    Full Stack Intern
                  </p>
                  <ul className="custom-list text-[9.5pt] space-y-0.5 leading-snug opacity-90 print:opacity-100">
                    <li>
                      Application performance and codebase scalability were
                      prioritized.
                    </li>
                    <li>
                      Optimized interactive user interfaces using React.js for
                      higher engagement.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-5">
              <h2 className="text-[11pt] font-semibold uppercase tracking-[0.1em] border-b-[1px] border-black pb-0.5 mb-4 leading-none">
                Projects
              </h2>

              {/* Project 1 */}
              <div
                className={`space-y-1.5 ml-0.5 transition-all duration-300 ${devMode ? "bg-slate-50 p-3 rounded-xl -mx-3 ring-1 ring-slate-200 shadow-sm" : ""}`}
              >
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                    <div className="flex items-center gap-2 group/title">
                      <h3 className="text-[10pt] font-semibold text-slate-900">
                        <a
                          href="https://onlineplanet.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-700 transition-all border-b border-transparent hover:border-emerald-300 leading-tight"
                        >
                          Online Planet (Multi-Utility Commerce Platform)
                        </a>
                      </h3>
                      <a
                        href="https://onlineplanet.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded-[4px] text-[8pt] text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all no-print print:hidden"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        <span>Link</span>
                      </a>
                      <ExternalLink className="hidden print:inline-block w-3.5 h-3.5 text-slate-900 opacity-40 ml-1" />
                    </div>
                    <span className="text-slate-300 print:hidden">•</span>
                    <span className="text-[8.5pt] font-normal text-slate-500 uppercase tracking-wide print:text-slate-600 print:no-underline">
                      Next.js 15, MongoDB, Gemini AI, Tailwind CSS
                    </span>
                  </div>
                </div>
                <ul className="custom-list space-y-1 text-[10pt] font-light leading-relaxed">
                  <li>
                    Developed a high-performance{" "}
                    <span className="font-semibold text-slate-900">
                      multi-utility commerce platform
                    </span>{" "}
                    with{" "}
                    <span className="font-semibold text-slate-900">
                      140+ API endpoints
                    </span>
                    , a 12-stage automated order lifecycle, and a 95% reduction
                    in server memory footprint.
                  </li>
                  <li>
                    Engineered{" "}
                    <span className="font-semibold text-slate-900">
                      deep logistics integrations
                    </span>{" "}
                    with Shiprocket and Ekart, featuring{" "}
                    <span className="font-semibold text-slate-900">
                      AI-powered carrier selection
                    </span>{" "}
                    and real-time tracking with 15+ automated status
                    checkpoints.
                  </li>
                  <li>
                    Integrated{" "}
                    <span className="font-semibold text-slate-900">
                      Google Gemini AI
                    </span>{" "}
                    for automated product listings, SEO optimization, and a
                    "Business Coach" for sellers; built an{" "}
                    <span className="font-semibold text-slate-900">
                      OCR-based identity verification
                    </span>{" "}
                    system.
                  </li>
                  <li>
                    Developed an{" "}
                    <span className="font-semibold text-slate-900">
                      internal PPC advertising network
                    </span>{" "}
                    with ROAS tracking and a bidding engine, alongside an
                    automated financial suite for transaction reconciliation.
                  </li>
                </ul>
                {devMode && (
                  <div className="pt-2 text-[9pt] text-slate-500 font-sans font-medium flex gap-4 animate-in fade-in duration-500">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3 h-3" /> Arch: Micro-services
                      Inspired Monolith
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 className="w-3 h-3" /> Scalability: Horizontal
                      @ DigitalOcean
                    </span>
                  </div>
                )}
              </div>

              {/* Project 2 */}
              <div
                className={`space-y-1.5 ml-0.5 transition-all duration-300 ${devMode ? "bg-slate-50 p-3 rounded-xl -mx-3 ring-1 ring-slate-200 shadow-sm" : ""}`}
              >
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                    <div className="flex items-center gap-2 group/title">
                      <h3 className="text-[10pt] font-semibold text-slate-900">
                        <a
                          href="https://strucaxis.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-700 transition-all border-b border-transparent hover:border-emerald-300 leading-tight"
                        >
                          StrucAxis (Marketing & Admin Platform)
                        </a>
                      </h3>
                      <a
                        href="https://strucaxis.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded-[4px] text-[8pt] text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all no-print print:hidden"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        <span>Link</span>
                      </a>
                      <ExternalLink className="hidden print:inline-block w-3.5 h-3.5 text-slate-900 opacity-40 ml-1" />
                    </div>
                    <span className="text-slate-300 print:hidden">•</span>
                    <span className="text-[8.5pt] font-normal text-slate-500 uppercase tracking-wide print:text-slate-600 print:no-underline">
                      Next.js, MongoDB, Cloudinary, Google API
                    </span>
                  </div>
                </div>
                <ul className="custom-list space-y-1 text-[10pt] font-light leading-relaxed">
                  <li>
                    Built a full-stack marketing and admin platform for
                    StrucAxis with secure,{" "}
                    <span className="font-semibold text-slate-900 border-b border-dotted border-black/20">
                      role-based authentication
                    </span>{" "}
                    to manage all website content.
                  </li>
                  <li>
                    Developed a custom{" "}
                    <span className="font-semibold text-slate-900">
                      Blog CMS
                    </span>{" "}
                    with advanced{" "}
                    <span className="font-semibold text-slate-900 italic">
                      SEO controls
                    </span>{" "}
                    and Cloudinary-based image management for creating and
                    editing posts.
                  </li>
                  <li>
                    Implemented modules to manage Job postings and dynamic
                    client logs; synchronized inquiries with{" "}
                    <span className="font-semibold italic text-slate-900">
                      Google Sheets API
                    </span>{" "}
                    and triggered automated email alerts.
                  </li>
                  <li>
                    Optimized site to achieve{" "}
                    <span className="font-semibold text-emerald-800">
                      95+ scores
                    </span>{" "}
                    in Performance metrics with an{" "}
                    <span className="font-semibold text-slate-900">
                      Awwwards-inspired
                    </span>{" "}
                    responsive UI and strong visual design.
                  </li>
                </ul>
              </div>

              {/* Project 3 */}
              <div
                className={`space-y-1.5 ml-0.5 transition-all duration-300 ${devMode ? "bg-slate-50 p-3 rounded-xl -mx-3 ring-1 ring-slate-200 shadow-sm" : ""}`}
              >
                <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                  <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                    <div className="flex items-center gap-2 group/title">
                      <h3 className="text-[10pt] font-semibold text-slate-900">
                        <a
                          href="https://naturemedica.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-700 transition-all border-b border-transparent hover:border-emerald-300 leading-tight"
                        >
                          Nature Medica (Ayurvedic E-Commerce)
                        </a>
                      </h3>
                      <a
                        href="https://naturemedica.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-1.5 py-0.5 bg-slate-50 border border-slate-100 rounded-[4px] text-[8pt] text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-all no-print print:hidden"
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        <span>Link</span>
                      </a>
                      <ExternalLink className="hidden print:inline-block w-3.5 h-3.5 text-slate-900 opacity-40 ml-1" />
                    </div>
                    <span className="text-slate-300 print:hidden">•</span>
                    <span className="text-[8.5pt] font-normal text-slate-500 uppercase tracking-wide print:text-slate-600 print:no-underline">
                      Next.js 15, MongoDB, Redux Toolkit, Tailwind V4
                    </span>
                  </div>
                </div>
                <ul className="custom-list space-y-1 text-[10pt] font-light leading-relaxed">
                  <li>
                    Engineered a high-performance{" "}
                    <span className="font-semibold text-slate-900">
                      Ayurvedic e-commerce platform
                    </span>{" "}
                    with Next.js 15 and Turbopack, achieving{" "}
                    <span className="font-semibold italic text-slate-900">
                      sub-2s load times
                    </span>{" "}
                    and near-perfect Lighthouse scores.
                  </li>
                  <li>
                    Architected a{" "}
                    <span className="font-semibold text-slate-900 text-slate-900">
                      tri-integrated logistics engine
                    </span>{" "}
                    (Shiprocket, Delhivery, Ekart) with automated AWB
                    generation, reducing processing time by 90%.
                  </li>
                  <li>
                    Implemented a{" "}
                    <span className="font-semibold text-slate-900">
                      redundant payment ecosystem
                    </span>{" "}
                    (PhonePe, Cashfree, Razorpay) with recovery logic for
                    abandoned payments and partial COD to slash RTO losses by
                    35%.
                  </li>
                  <li>
                    Developed a{" "}
                    <span className="font-semibold italic text-slate-900">
                      custom CMS
                    </span>{" "}
                    for dynamic content management and integrated a{" "}
                    <span className="font-semibold text-slate-900">
                      GA4 DataLayer analysis engine
                    </span>{" "}
                    for granular funnel tracking.
                  </li>
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-1.5 pt-3">
              <h2 className="text-[12pt] font-semibold uppercase tracking-[0.1em] border-b-[1.2px] border-black pb-0.5 mb-2.5 leading-none">
                Education
              </h2>
              <div className="flex justify-between items-start ml-0.5">
                <div className="space-y-1">
                  <h3 className="text-[11.5pt] font-semibold leading-none text-slate-900">
                    Bansal Institute of Engineering and Technology
                  </h3>
                  <p className="italic text-[10.5pt] leading-none opacity-90 mt-1 uppercase tracking-tighter text-slate-600">
                    B.Tech - Computer Science and Engineering
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <span className="text-[11pt] font-semibold">2020 – 2024</span>
                  <p className="text-[9.5pt] italic opacity-80 leading-none mt-1 font-medium text-slate-500">
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <style jsx global>{`
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .resume-content {
          font-family: var(--font-poppins), "Poppins", sans-serif;
          word-spacing: 0em;
          letter-spacing: -0.01em;
          color: #1e293b; /* Slate-800 */
        }

        .resume-content b,
        .resume-content .font-semibold,
        .resume-content .font-semibold {
          color: #000000;
        }

        .custom-list {
          list-style: disc;
          padding-left: 1.35rem;
        }

        /* Target active links during PDF generation to ensure color doesn't bleed weirdly */
        @media print {
          .custom-list {
            padding-left: 1.25rem;
          }
          .custom-list li::marker {
            font-size: 0.8rem;
            color: #000;
          }
        }

        @media print {
          @page {
            margin: 0;
            size: A4;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .no-print {
            display: none !important;
          }
          .resume-content {
            padding: 0in !important;
          }
          .resume-content a {
            color: black !important;
            font-weight: 600;
            text-decoration: none !important;
            display: inline-block !important;
          }
          .resume-content a span {
            color: black !important;
            text-decoration: none !important;
          }
          .resume-content h3 a {
            text-decoration: underline !important;
            text-decoration-color: #000 !important;
            text-underline-offset: 2px !important;
          }
          .resume-content .no-print {
            display: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
