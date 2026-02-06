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
                                    <h3 className="text-xl font-semibold text-black dark:text-white">Harsh D. Rao Resume</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href="/resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 text-black dark:text-white rounded-full text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                                >
                                    <ExternalLink size={18} />
                                    Full Page
                                </a>
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1qbdCwxwQsFcnLSvO95z8j1Cmb85rnvLW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-lime-400 text-black rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-lg shadow-lime-400/20"
                                >
                                    <Download size={18} />
                                    Download PDF
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all text-gray-500 dark:text-gray-400"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Live Resume Preview */}
                        <div className="flex-1 bg-white dark:bg-[#111] overflow-hidden">
                            <iframe
                                src="/resume"
                                className="w-full h-full border-none"
                                title="Harsh D. Rao Resume Preview"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
