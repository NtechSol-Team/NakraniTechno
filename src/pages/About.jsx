import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, ShieldCheck, Cpu, Lightbulb, Users } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const About = () => {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className={styles.container}>
            <SEO
                title="About Us"
                description="We are Nakrani Techno: Digital Architects bridging the gap between human intuition and machine scale. Learn about our mission and vision."
                url="/about"
            />
            {/* --- Hero --- */}
            <div style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div className={styles.heroBackground}>
                    <div className={styles.gridMesh}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.h1
                        className={styles.megaTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ y: yHero }}
                    >
                        HUMAN INTUITION<br />MACHINE SCALE
                    </motion.h1>
                </div>
            </div>

            {/* --- Vision & Mission Holo Grid --- */}
            <section className={styles.seamlessSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <HoloCard
                            icon={<Target size={32} color="#2563eb" />}
                            title="The Mission"
                            text="To build intelligent, automation-first, scalable systems that combine AI, data compliance, and real-world workflows."
                        />
                        <HoloCard
                            icon={<Eye size={32} color="#06b6d4" />}
                            title="The Vision"
                            text="To be the leading partner for enterprise digital transformation, where software solves problems before they occur."
                        />
                        <HoloCard
                            icon={<ShieldCheck size={32} color="#10b981" />}
                            title="Core Values"
                            text="Corporate Integrity. Trustworthy Engineering. Enterprise-Grade Quality. Innovation with a Practical Mindset."
                        />
                    </div>
                </div>
            </section>

            {/* --- Corporate DNA --- */}
            <section className={styles.seamlessSection} style={{ background: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className={styles.sectionTitle}>Why We Exist</h2>
                            <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
                                The old way of building software—bloated teams, slow cycles, and legacy code—is dying.
                                We represent the new guard. Lean, AI-augmented, and hyper-efficient.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <DnaItem icon={<Cpu />} title="AI-Native Architecture" desc="We don't bolt AI on; we build on top of it." />
                                <DnaItem icon={<Lightbulb />} title="Pragmatic Innovation" desc="We pursue technology that moves the needle, not the hype." />
                                <DnaItem icon={<Users />} title="Long-Term Partnership" desc="We code for the next decade, not just the next demo." />
                            </ul>
                        </div>

                        <div style={{ position: 'relative', height: '500px', background: '#f1f5f9', borderRadius: '30px', overflow: 'hidden' }}>
                            {/* Abstract Visual - Placeholder for Futuristic Office */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{ width: '300px', height: '300px', border: '1px dashed #cbd5e1', borderRadius: '50%' }}
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    style={{ width: '200px', height: '200px', border: '1px solid #94a3b8', borderRadius: '50%', position: 'absolute' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const HoloCard = ({ icon, title, text }) => (
    <motion.div
        className={styles.holoCard}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <div style={{ marginBottom: '1.5rem', background: 'rgba(59, 130, 246, 0.1)', width: 'fit-content', padding: '1rem', borderRadius: '12px' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: '#64748b', lineHeight: '1.6' }}>{text}</p>
    </motion.div>
);

const DnaItem = ({ icon, title, desc }) => (
    <li style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ color: '#2563eb', marginTop: '4px' }}>{icon}</div>
        <div>
            <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{title}</h4>
            <span style={{ color: '#64748b' }}>{desc}</span>
        </div>
    </li>
);

export default About;
