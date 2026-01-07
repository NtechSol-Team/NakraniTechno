import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>NAKRANI <span style={{ color: 'var(--color-secondary)' }}>TECHNO</span></h3>
                        <p>Engineering AI-Driven Digital Systems for a Smarter Future.</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Solutions</h4>
                        <Link to="/products">PaySetu</Link>
                        <Link to="/products">PMS</Link>
                        <Link to="/ai-innovation">AI Labs</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Connect</h4>
                        <p>nakranitechno@gmail.com</p>
                        <p>+91 90816 64982</p>
                        <p>+91 88495 17761</p>
                        <p>Blue Stone, Sarthana Jakatnaka</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Nakrani Techno & Solution LLP. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
