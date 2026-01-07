import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Wallet, Users, Zap, Brain } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const Products = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="Our Products"
                description="Explore our suite of enterprise products: PaySetu (Payroll), SecureGuard (Security), and HealthPulse (Hospital Management)."
                url="/products"
            />
            {/* --- Hero --- */}
            <div style={{ padding: '8rem 0 4rem 0', background: '#0f172a', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1
                        className={styles.megaTitle}
                        style={{ fontSize: '4rem', background: 'linear-gradient(180deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        PLATFORMS
                    </motion.h1>
                    <p className={styles.subtitle} style={{ margin: '0 auto', color: '#cbd5e1' }}>
                        Enterprise-grade SaaS solutions built for Indian workflows.
                    </p>
                </div>
            </div>

            {/* --- Product 1: PaySetu --- */}
            <section className={styles.seamlessSection}>
                <div className="container">
                    <div style={{
                        background: '#1e293b', borderRadius: '30px', padding: '4rem', color: 'white',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '2px', fontWeight: 'bold', mb: '1rem' }}>Product 1</div>
                                <h2 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: 1 }}>PaySetu<span style={{ color: '#38bdf8' }}>.</span></h2>
                                <p style={{ fontSize: '1.2rem', color: '#38bdf8', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                                    One Platform. Complete Accounting. Automated Compliance.
                                </p>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ color: '#94a3b8', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Core Capabilities</h4>
                                    <ul style={{ display: 'grid', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                        <FeatureItem text="Accounting & Ledger Management" />
                                        <FeatureItem text="GST-ready Invoicing & Calculations" />
                                        <FeatureItem text="PF, ESI, TDS Calculations" />
                                        <FeatureItem text="Payslip & Form-16 Generation" />
                                        <FeatureItem text="Financial Reports & Dashboards" />
                                        <FeatureItem text="AI-Based Anomaly Detection" />
                                    </ul>
                                </div>

                                <button className="btn btn-primary" style={{ background: '#38bdf8', color: '#0f172a', border: 'none' }}>
                                    Schedule Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                </button>
                            </div>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                {/* Visual Mockup - Dashboard */}
                                <motion.div
                                    style={{ background: '#fff', borderRadius: '12px', padding: '1rem', height: '400px', overflow: 'hidden', position: 'relative' }}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                >
                                    <div style={{ background: '#f1f5f9', height: '100%', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ width: '100px', height: '20px', background: '#cbd5e1', borderRadius: '4px' }}></div>
                                            <div style={{ width: '40px', height: '40px', background: '#38bdf8', borderRadius: '50%', opacity: 0.2 }}></div>
                                        </div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                                            {[60, 40, 75, 50, 90, 80].map((h, i) => (
                                                <div key={i} style={{ flex: 1, height: `${h}%`, background: '#38bdf8', borderRadius: '4px', opacity: 0.8 }}></div>
                                            ))}
                                        </div>
                                        <div style={{ height: '2px', background: '#cbd5e1', width: '100%' }}></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Product 2: Clinic & Hospital Management --- */}
            <section className={styles.seamlessSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        <div className={styles.holoCard} style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,253,244,0.9))' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: '#d1fae5', borderRadius: '50%' }}>
                                    <Users size={32} color="#059669" />
                                </div>
                                <div>
                                    <div style={{ textTransform: 'uppercase', color: '#059669', fontSize: '0.8rem', fontWeight: 'bold' }}>Product 2</div>
                                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#064e3b' }}>Clinic & Hospital Management</h3>
                                </div>
                            </div>

                            <p style={{ color: '#059669', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                                Designed for Indian healthcare workflows
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ color: '#64748b', marginBottom: '0.8rem', fontSize: '0.9rem', fontWeight: 'bold' }}>MODULES</h4>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#334155' }}>
                                        <li>• Patient registration & EMR</li>
                                        <li>• OPD / IPD & Bed Management</li>
                                        <li>• Billing, Pharmacy & Inventory</li>
                                        <li>• Insurance, TPA & Govt Schemes</li>
                                        <li>• Discharge Summary Automation</li>
                                        <li>• WhatsApp & SMS Notifications</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ color: '#64748b', marginBottom: '0.8rem', fontSize: '0.9rem', fontWeight: 'bold' }}>AI FEATURES</h4>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#334155' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Brain size={14} color="#059669" /> Smart Patient History Insights</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} color="#059669" /> OPD Load Prediction</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Brain size={14} color="#059669" /> Medicine & Inventory Forecasting</li>
                                    </ul>
                                </div>
                            </div>

                            <button className="btn btn-outline" style={{ width: '100%', marginTop: '2rem', borderColor: '#059669', color: '#059669' }}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureItem = ({ text }) => (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: '#e2e8f0' }}>
        <CheckCircle size={20} color="#38bdf8" /> {text}
    </li>
);

export default Products;
