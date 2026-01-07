import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Activity, CreditCard } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const Projects = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="Global Projects"
                description="Case studies of our success: FinTech Platforms, Hospital Systems, and Global E-Commerce solutions delivering 100% success rates."
                url="/projects"
            />
            {/* --- Hero --- */}
            <div className={styles.heroBackground} style={{ maxHeight: '50vh' }}>
                <div className={styles.gridMesh}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '10rem', paddingBottom: '4rem' }}>
                <motion.h1
                    className={styles.megaTitle}
                    style={{ fontSize: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    SHIP.<br />SCALE.<br />SUCCEED.
                </motion.h1>
            </div>

            {/* --- Process Timeline --- */}
            <section className={styles.seamlessSection} style={{ background: '#fff' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '4rem' }}>The Protocol.</h2>

                    <div style={{ maxWidth: '800px' }}>
                        <TimelineItem
                            step="01"
                            title="Discovery & Blueprint"
                            desc="We decode your requirements. We don't just ask 'what feature?', we ask 'what business outcome?'. We deliver a technical architectural blueprint."
                        />
                        <TimelineItem
                            step="02"
                            title="Agile Engineering"
                            desc="Development sprints. Bi-weekly demos. You see your product evolve in real-time. Code is pushed to staging environments automatically."
                        />
                        <TimelineItem
                            step="03"
                            title="Rigorous QA"
                            desc="Automated testing suites, load testing for scalability, and security audits to ensure your data is fortress-secure."
                        />
                        <TimelineItem
                            step="04"
                            title="Deployment & Growth"
                            desc="Zero-downtime deployment. We set up CI/CD pipelines and monitoring dashboards. We stay to help you scale."
                        />
                    </div>
                </div>
            </section>

            {/* --- Featured Projects --- */}
            <section className={styles.seamlessSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Case Studies.</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <ProjectCard
                            title="Accounting & Payroll Platforms"
                            category="FinTech"
                            desc="Comprehensive automation for financial compliance and workforce management."
                        />
                        <ProjectCard
                            title="Healthcare Systems"
                            category="HealthTech"
                            desc="Integrated clinic and hospital management solutions for seamless patient care."
                        />
                        <ProjectCard
                            title="Enterprise & Compliance Software"
                            category="Enterprise"
                            desc="Scalable systems designed for high-volume corporate and government operations."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const TimelineItem = ({ step, title, desc }) => (
    <motion.div
        className={styles.timelineNode}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    >
        <div style={{ position: 'absolute', left: '-50px', fontWeight: '900', fontSize: '1.5rem', color: '#cbd5e1' }}>{step}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>{desc}</p>
    </motion.div>
);

const ProjectCard = ({ title, category, desc }) => (
    <div className={styles.holoCard} style={{ padding: '2rem' }}>
        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#3b82f6', marginBottom: '0.5rem', fontWeight: 'bold' }}>{category}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: '#64748b' }}>{desc}</p>
        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '5px', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer' }}>
            View Case <ArrowRight size={16} />
        </div>
    </div>
);

export default Projects;
