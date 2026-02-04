'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClickable, setIsClickable] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickableElement =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer');

            setIsClickable(isClickableElement);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-lime-500 pointer-events-none z-[1000] hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isClickable ? 2.5 : 1,
                    backgroundColor: isClickable ? 'rgba(132, 204, 22, 0.1)' : 'transparent',
                    borderColor: isClickable ? 'rgba(132, 204, 22, 0.5)' : 'rgba(132, 204, 22, 1)',
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-lime-500 rounded-full pointer-events-none z-[1001] hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
}
