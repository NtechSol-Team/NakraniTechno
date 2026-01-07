import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Calendar, MessageSquare, User, Mail } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/contacts')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch data');
                return res.json();
            })
            .then(data => {
                setContacts(data.data || []);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
                >
                    Admin Dashboard
                </motion.h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>View and manage contact form submissions.</p>
            </div>

            {loading && <p style={{ textAlign: 'center' }}>Loading database entries...</p>}
            {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}. Is the backend running on port 5001?</p>}

            {!loading && !error && (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {contacts.length === 0 ? (
                        <p style={{ textAlign: 'center' }}>No submissions found.</p>
                    ) : (
                        contacts.map((contact, index) => (
                            <motion.div
                                key={contact.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <TiltCard className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '4px solid var(--color-primary)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <User size={18} color="var(--color-primary)" />
                                            <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{contact.name}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                            <Calendar size={16} />
                                            <span>{new Date(contact.timestamp).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-secondary)' }}>
                                        <Mail size={16} />
                                        <a href={`mailto:${contact.email}`} style={{ textDecoration: 'underline' }}>{contact.email}</a>
                                    </div>

                                    <div style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem' }}>
                                        <div style={{ display: 'flex', gap: '10px', marginBottom: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            <MessageSquare size={14} /> Message
                                        </div>
                                        <p style={{ lineHeight: '1.6' }}>{contact.message}</p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Admin;
