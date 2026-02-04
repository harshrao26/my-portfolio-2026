'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-lime-400/50 transition-smooth group overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'dark' ? 0 : 30,
                        opacity: theme === 'dark' ? 1 : 0
                    }}
                    className="absolute inset-0 flex items-center justify-center text-lime-400"
                >
                    <Moon size={20} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        y: theme === 'light' ? 0 : -30,
                        opacity: theme === 'light' ? 1 : 0
                    }}
                    className="absolute inset-0 flex items-center justify-center text-orange-500"
                >
                    <Sun size={20} />
                </motion.div>
            </div>
        </motion.button>
    );
}
