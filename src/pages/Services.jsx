import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Activity, Cpu, Code, BarChart } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const Services = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="Our Services"
                description="Comprehensive digital services: Web & Mobile App Development, Cloud Infrastructure, AI Integration, and Hardware Automation."
                url="/services"
            />
            <div className={styles.heroBackground} style={{ maxHeight: '60vh' }}>
                <div className={styles.gridMesh}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '10rem', paddingBottom: '4rem' }}>
                <motion.h1
                    className={styles.megaTitle}
                    style={{ fontSize: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    OUR<br />EXPERTISE
                </motion.h1>
                <p className={styles.subtitle}>
                    We span the entire digital spectrum. From low-level hardware integration to high-level AI reasoning agents.
                </p>
            </div>

            <section className={styles.seamlessSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                        <ServiceHolo icon={<Database size={32} color="#2563eb" />} title="AI & Data Services" desc="AI feature integration, predictive analytics, and intelligent reporting systems." />
                        <ServiceHolo icon={<Code size={32} color="#06b6d4" />} title="Software Development" desc="Custom web & mobile apps, SaaS platforms, ERP, Accounting, and HRMS systems." />
                        <ServiceHolo icon={<Activity size={32} color="#10b981" />} title="Healthcare IT" desc="Complete clinic & hospital management systems, EMR, billing, and compliance." />
                        <ServiceHolo icon={<Cpu size={32} color="#f59e0b" />} title="Hardware & Automation" desc="IoT systems and software-hardware integration for industrial automation." />
                        <ServiceHolo icon={<Server size={32} color="#6366f1" />} title="Enterprise Platforms" desc="Scalable, production-ready systems for government and large corporate clients." />
                        <ServiceHolo icon={<BarChart size={32} color="#ec4899" />} title="Consulting" desc="Technology consulting & system integration for long-term growth." />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceHolo = ({ icon, title, desc }) => (
    <div className={styles.holoCard}>
        <div style={{ marginBottom: '1.5rem', background: '#f1f5f9', width: 'fit-content', padding: '1rem', borderRadius: '50%' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0f172a' }}>{title}</h3>
        <p style={{ color: '#64748b' }}>{desc}</p>
    </div>
);

export default Services;
