import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import styles from '../styles/Futuristic.module.css';
import SEO from '../components/SEO';

const Contact = () => {
    // Form State
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzsYHtOsiCpHlZxeFABfb1ECrrDG92_--ER30ZsRsRsuPDbo-qqUjuK5kBlXI66TQp_0w/exec";

        try {
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('email', formData.email);
            params.append('message', formData.message);

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: params,
                mode: 'no-cors' // Important for Google Sheets
            });

            // Since mode is no-cors, we assume success if no error is thrown
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.heroBackground} style={{ maxHeight: '50vh' }}>
                <div className={styles.gridMesh}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.h1
                        className={styles.megaTitle}
                        style={{ fontSize: '4rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        LET'S TALK<br />FUTURE
                    </motion.h1>
                    <p className={styles.subtitle} style={{ margin: '0 auto' }}>
                        Ready to deploy? Fill the signal form below.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
                    {/* Info Side */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <h3 className={styles.sectionTitle} style={{ fontSize: '2rem' }}>Coordinates</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}><Mail color="#3b82f6" /></div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Email Us</div>
                                    <div style={{ color: '#64748b' }}>nakranitechno@gmail.com</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}><Phone color="#10b981" /></div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Call Us</div>
                                    <div style={{ color: '#64748b' }}>+91 90816 64982</div>
                                    <div style={{ color: '#64748b' }}>+91 88495 17761</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ padding: '1rem', background: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}><MapPin color="#f59e0b" /></div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Location</div>
                                    <div style={{ color: '#64748b' }}>106 – Blue Stone, Sarthana Jakatnaka, India</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        className={styles.glassForm}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className={styles.inputGroup}>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="email" name="email" placeholder="Business Email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea name="message" rows="5" placeholder="Project Details" value={formData.message} onChange={handleChange} required />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ justifyContent: 'center' }}>
                                {status === 'submitting' ? 'Transmitting...' : (
                                    <>Start a Conversation <Send size={18} style={{ marginLeft: '10px' }} /></>
                                )}
                            </button>

                            {status === 'success' && <p style={{ color: '#10b981', textAlign: 'center', fontWeight: 'bold' }}>Signal Received. We will respond shortly.</p>}
                            {status === 'error' && <p style={{ color: '#ef4444', textAlign: 'center' }}>Transmission Failed. Try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
