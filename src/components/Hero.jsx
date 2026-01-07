import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundMesh}></div>

            <div className="container">
                <div className={styles.content}>
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Engineering <span className={styles.highlight}>AI-Driven</span> Digital Systems for a Smarter Future
                    </motion.h1>

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        We build next-gen enterprise software, healthcare management platforms, and intelligent automation solutions powered by cutting-edge AI.
                    </motion.p>

                    <motion.div
                        className={styles.addActions}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <Link to="/products" className="btn btn-primary">
                            Explore Solutions <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
                            Talk to Experts <MessageCircle size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}></div>
            </div>
        </section>
    );
};

export default Hero;
