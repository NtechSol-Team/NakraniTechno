import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            background: '#0f172a', /* Dark Base */
            overflow: 'hidden'
        }}>
            {/* Base Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 15% 50%, rgba(14, 165, 233, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.15), transparent 25%)',
                zIndex: 1
            }}></div>

            {/* Aurora Blob 1 (Cyan) */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-10%',
                    width: '70vw',
                    height: '70vw',
                    background: '#0ea5e9',
                    filter: 'blur(120px)', /* Increased blur */
                    opacity: 0.2, /* Reduced opacity */
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                }}
            />

            {/* Aurora Blob 2 (Purple) */}
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: '#8b5cf6',
                    filter: 'blur(140px)', /* Increased blur */
                    opacity: 0.15, /* Reduced opacity */
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                }}
            />

            {/* Aurora Blob 3 (Pink Accent) */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40vw',
                    height: '40vw',
                    background: '#ec4899',
                    filter: 'blur(150px)',
                    opacity: 0.2,
                    borderRadius: '50%',
                }}
            />

            {/* Noise Overlay for texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                zIndex: 2,
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default AuroraBackground;
