import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                background: '#0f172a',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: 'white',
                    letterSpacing: '-2px',
                    fontFamily: 'Inter, sans-serif',
                    whiteSpace: 'nowrap'
                }}
            >
                NAKRANI <span style={{ color: '#38bdf8' }}>TECHNO</span>
            </motion.div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                style={{
                    height: '2px',
                    background: '#38bdf8',
                    marginTop: '20px',
                    borderRadius: '4px'
                }}
            />
        </motion.div>
    );
};

export default Preloader;
