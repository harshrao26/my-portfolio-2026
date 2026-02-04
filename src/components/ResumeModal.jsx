'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-lime-400/10 rounded-lg">
                                    <FileText className="text-lime-600 dark:text-lime-400" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-black dark:text-white">Harsh D. Rao Resume</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-bold hover:scale-105 transition-all"
                                >
                                    <Download size={18} />
                                    Download
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all text-gray-500 dark:text-gray-400"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Resume Content (Iframe or Placeholder) */}
                        <div className="flex-1 bg-gray-100 dark:bg-[#111] overflow-auto flex flex-col items-center justify-center p-8 text-center">
                            {/* This would normally be an iframe for the PDF */}
                            <div className="w-full max-w-2xl aspect-[1/1.4] bg-white dark:bg-black rounded-lg shadow-lg border border-black/5 dark:border-white/10 p-12 flex flex-col gap-8">
                                <div className="h-8 w-48 bg-gray-200 dark:bg-white/5 rounded animate-pulse" />
                                <div className="space-y-4">
                                    <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                    <div className="h-4 w-5/6 bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                    <div className="h-4 w-4/6 bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <div className="h-6 w-32 bg-gray-200 dark:bg-white/5 rounded animate-pulse" />
                                        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-6 w-32 bg-gray-200 dark:bg-white/5 rounded animate-pulse" />
                                        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded animate-pulse" />
                                    </div>
                                </div>
                                <div className="mt-auto pt-10 text-gray-400 dark:text-gray-600 text-sm italic">
                                    Previewing Resume... Please download for full details.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
