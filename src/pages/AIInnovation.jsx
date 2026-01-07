import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Bot, Sparkles, Binary } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const AIInnovation = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="AI Innovation"
                description="Pioneering the future with Neural Networks, Computer Vision, and Generative AI agents. We solve the unsolvable."
                keywords="AI, Machine Learning, Neural Networks, Computer Vision, Generative AI, Innovation"
                url="/ai-innovation"
            />
            {/* Hero Section */}
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
                    NEURAL<br />NETWORKS
                </motion.h1>
                <p className={styles.subtitle}>
                    Deploying generative AI and machine learning models to solve the unsolvable.
                </p>
            </div>

            <section className={styles.seamlessSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <AICard icon={<Brain size={32} color="#ec4899" />} title="Generative Text" desc="Custom LLMs for automated customer support, document summarization, and code generation." />
                        <AICard icon={<Network size={32} color="#8b5cf6" />} title="Predictive Analytics" desc="Forecasting market trends and supply chain disruptions with 95% confidence intervals." />
                        <AICard icon={<Cpu size={32} color="#f59e0b" />} title="Edge AI" desc="Running optimized models directly on IoT devices with minimal latency." />
                        <AICard icon={<Zap size={32} color="#ef4444" />} title="Computer Vision" desc="Automated quality control, facial recognition, and object detection systems." />
                    </div>
                </div>
            </section>
        </div>
    );
};

const AICard = ({ icon, title, desc }) => (
    <div className={styles.holoCard}>
        <div style={{ marginBottom: '1.5rem', background: '#f1f5f9', width: 'fit-content', padding: '1rem', borderRadius: '50%' }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0f172a' }}>{title}</h3>
        <p style={{ color: '#64748b' }}>{desc}</p>
    </div>
);

export default AIInnovation;
