import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Database, Activity, Server, Zap, ShieldCheck, CheckCircle, Code, Globe, Smartphone, Cpu, Cloud, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomeOverhaul.module.css';
import SEO from '../components/SEO';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className={styles.innovationContainer}>
            <SEO
                title="Home"
                description="Nakrani Techno & Solution LLP: A global leader in Enterprise AI, Custom Software, and Hardware Automation. We build the digital future."
            />

            {/* --- Ultra Hero --- */}
            <section className={styles.ultraHero}>
                <div className={styles.heroGrid}></div>

                {/* Floating Elements (Parallax) */}
                <motion.div style={{ y: y1, right: '10%', top: '20%', width: '100px', height: '100px' }} className={styles.floater} />
                <motion.div style={{ y: y2, left: '5%', bottom: '20%', width: '150px', height: '150px' }} className={styles.floater} />

                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className={styles.megaTitle}>
                            Engineering AI-Driven Digital Systems for a Smarter Future
                        </h1>
                    </motion.div>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        AI-powered software, accounting automation, healthcare systems, and enterprise solutions built for scale.
                    </motion.p>

                    <motion.div
                        className={styles.heroActions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/products" className="btn btn-primary">
                            Explore Solutions <ArrowRight style={{ marginLeft: '10px' }} size={20} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Talk to Experts
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* --- Who We Are (Seamless) --- */}
            <section className={styles.seamlessSection}>
                <div className="container">
                    <div className={styles.whoWrapper}>
                        <motion.div
                            className={styles.whoTextContent}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h5 style={{ color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px' }}>WHO WE ARE</h5>
                            <h2>Beyond the Code</h2>
                            <p>
                                We are not just developers; we are <strong>digital architects</strong>.
                                Beyond high-end software development, we provide professional <strong>server installation services</strong>, cloud infrastructure management, and hardware automation.
                            </p>
                            <p>
                                Our approach bridges the gap between massive enterprise requirements and the agility of modern AI, ensuring your business infrastructure isn't just running—it's evolving.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>5+</h3>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>PROJECTS DELIVERED</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-secondary)' }}>AI</h3>
                                    <span style={{ fontSize: '0.9rem', color: '#64748b' }}>ENABLED PLATFORMS</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className={styles.whoVisual}>
                            {/* Abstract Geometric Composition */}
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'white', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.8 }}></div>
                            <img
                                src="/beyond_the_code.png"
                                alt="Abstract Tech Infrastructure"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }}
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* --- Expertise (Holographic) --- */}
            <section className={styles.seamlessSection} style={{ background: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#0f172a' }}>Our Core Engine</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Three pillars of technological dominance.</p>
                    </div>

                    <div className={styles.expertiseGrid}>
                        <HoloCard
                            icon={<Brain size={40} color="#2563eb" />}
                            title="AI-Powered Automation"
                            desc="Intelligent agents that automate complex workflows and decision-making processes."
                        />
                        <HoloCard
                            icon={<Activity size={40} color="#0891b2" />}
                            title="Healthcare & Enterprise"
                            desc="Comprehensive systems for hospitals, clinics, and large-scale government operations."
                        />
                        <HoloCard
                            icon={<Database size={40} color="#4f46e5" />}
                            title="Accounting & GST"
                            desc="All-in-one financial platforms with automated compliance and tax generation."
                        />
                    </div>
                </div>
            </section>

            {/* --- Capabilities (Dark Mode) --- */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900' }}>Our Capabilities</h2>
                        <p style={{ color: '#94a3b8' }}>A full spectrum of digital engineering services.</p>
                    </div>
                    <div className={styles.capabilityGrid}>
                        {[
                            { icon: <Globe size={32} />, title: "Web Architectures", desc: "Building scalable, high-performance web applications with modern frameworks." },
                            { icon: <Smartphone size={32} />, title: "Mobile Engineering", desc: "Native and cross-platform solutions that deliver exceptional mobile experiences." },
                            { icon: <Brain size={32} />, title: "AI Integration", desc: "Deploying intelligent agents and machine learning models for business automation." },
                            { icon: <Cloud size={32} />, title: "Cloud Systems", desc: "Architecting secure, resilient, and elastic infrastructure on AWS, Azure, and Google Cloud." },
                            { icon: <Database size={32} />, title: "Data Analytics", desc: "Turning raw data into actionable insights with professional data engineering." },
                            { icon: <ShieldCheck size={32} />, title: "Cybersecurity", desc: "Implementing robust security protocols and zero-trust architectures for your digital assets." },
                            { icon: <Code size={32} />, title: "Custom Software", desc: "Bespoke software development tailored precisely to your complex business needs." },
                            { icon: <Cpu size={32} />, title: "IoT & Automation", desc: "Connecting the physical and digital worlds with smart sensors and hardware control." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.capabilityCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <div className={styles.cardFooter}>
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us --- */}
            <section className={styles.seamlessSection} style={{ background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div className={styles.badge}>Differentiators</div>
                        <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Why Different?</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            We don't just write code; we solve complex business problems with engineering precision.
                        </p>
                    </div>
                    <div className={styles.whyChooseGrid}>
                        <motion.div
                            className={styles.whyCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.whyIcon}>
                                <Zap size={30} color="var(--color-accent)" />
                            </div>
                            <h3>Speed to Market</h3>
                            <p>Rapid prototyping and agile delivery cycles designed to get your vision launched in record time.</p>
                        </motion.div>

                        <motion.div
                            className={styles.whyCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className={styles.whyIcon}>
                                <ShieldCheck size={30} color="#10b981" />
                            </div>
                            <h3>Enterprise Security</h3>
                            <p>Bank-grade security protocols and zero-trust architecture baked into every single layer of code.</p>
                        </motion.div>

                        <motion.div
                            className={styles.whyCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className={styles.whyIcon}>
                                <TrendingUp size={30} color="#3b82f6" />
                            </div>
                            <h3>Scalable Core</h3>
                            <p>Systems engineered to handle millions of concurrent users and massive data loads from day one.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PaySetu (The Monolith) --- */}
            <div className="container">
                <section className={styles.monolithSection}>
                    <div className={styles.glowingOrb}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                        <div className={styles.monolithGrid}>
                            <div>
                                <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1' }}>
                                    Paysetu<span style={{ color: '#38bdf8' }}></span>
                                </h2>
                                <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '3rem', fontWeight: '300' }}>
                                    The operating system for your workforce.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <Zap size={24} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Auto-Payroll</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Zero-touch processing.</p>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <ShieldCheck size={24} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Compliance</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>100% Statutory accuracy.</p>
                                    </div>
                                </div>

                                <Link to="/products" className="btn btn-primary" style={{ background: '#38bdf8', color: '#0f172a', border: 'none' }}>
                                    Explore Platform
                                </Link>
                            </div>

                            {/* Simulated UI Glass Stack */}
                            <div style={{ position: 'relative', height: '400px' }}>
                                <motion.div
                                    style={{
                                        position: 'absolute', top: 0, right: 0, width: '90%', height: '100%',
                                        background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(56, 189, 248, 0.3)',
                                        borderRadius: '24px', backdropFilter: 'blur(20px)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                    }}
                                    initial={{ transform: 'rotateY(-10deg) rotateX(5deg)' }}
                                    whileInView={{ transform: 'rotateY(0deg) rotateX(0deg)' }}
                                    transition={{ duration: 1 }}
                                >
                                    {/* Mock Graph */}
                                    <div style={{ padding: '2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                            <div style={{ width: '40%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}></div>
                                            <div style={{ width: '20%', height: '10px', background: 'rgba(56, 189, 248, 0.2)', borderRadius: '10px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '20px' }}>
                                            {[40, 70, 50, 90, 60].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                                    style={{ flex: 1, background: `linear-gradient(to top, rgba(56, 189, 248, 0.2), #38bdf8)`, borderRadius: '8px 8px 0 0' }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* --- Tech Ecology (Marquee) --- */}
            <section className={styles.techMarqueeSection}>
                <div className={styles.marqueeTrack}>
                    {/* Repeat items twice for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <div className={styles.techItem}><Code color="#61DAFB" /> React</div>
                            <div className={styles.techItem}><Server color="#339933" /> Node.js</div>
                            <div className={styles.techItem}><Database color="#336791" /> PostgreSQL</div>
                            <div className={styles.techItem}><Cloud color="#FF9900" /> AWS</div>
                            <div className={styles.techItem}><Activity color="#00C7B7" /> Terraform</div>
                            <div className={styles.techItem}><Cpu color="#FF6F00" /> TensorFlow</div>
                            <div className={styles.techItem}><Globe color="#02569B" /> Flutter</div>
                            <div className={styles.techItem}><ShieldCheck color="#E15343" /> Rust</div>
                            <div className={styles.techItem}><Zap color="#FFD700" /> Python</div>
                            <div className={styles.techItem}><Brain color="#000000" /> OpenAI</div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* --- CTA Footer --- */}
            <section style={{ padding: '8rem 0', textAlign: 'center', background: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0f172a', marginBottom: '1rem' }}>Ready to Scale?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>Let's build something extraordinary together.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Start a Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
};

const HoloCard = ({ icon, title, desc }) => (
    <div className={styles.holoCard}>
        <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0f172a' }}>{title}</h3>
        <p style={{ color: '#475569', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

export default Home;
