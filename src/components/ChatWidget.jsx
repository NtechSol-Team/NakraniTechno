import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hello! I am Nakrani Intelligence. How can I help you elevate your business today?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleOptionClick = async (option) => {
        // User Message
        setMessages(prev => [...prev, { type: 'user', text: option.label }]);

        setIsTyping(true);

        // Simulate AI "Thinking"
        await new Promise(r => setTimeout(r, 1000));

        setIsTyping(false);
        setMessages(prev => [...prev, { type: 'bot', text: option.response }]);

        if (option.action) {
            option.action();
        }
    };

    const options = [
        {
            label: "What services do you offer?",
            response: "We specialize in Enterprise AI, Custom Software Development, Hardware Automation, and Cloud Infrastructure. We build systems that scale.",
            action: null
        },
        {
            label: "I need a quote.",
            response: "Excellent. To give you an accurate estimate, I need some details. Please fill out our contact signal form.",
            action: () => setTimeout(() => { setIsOpen(false); navigate('/contact'); }, 1500)
        },
        {
            label: "Tell me about AI integration.",
            response: "We can integrate LLMs, Computer Vision, and Predictive Analytics directly into your existing workflow to automate decisions.",
            action: null
        }
    ];

    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 9999, fontFamily: 'Inter, sans-serif' }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: '0',
                            width: '350px',
                            height: '500px',
                            background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.5rem', background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ background: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Bot size={20} color="#6366f1" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem' }}>Nakrani Intelligence</div>
                                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Sparkles size={10} /> Online
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        alignSelf: msg.type === 'bot' ? 'flex-start' : 'flex-end',
                                        maxWidth: '85%',
                                        background: msg.type === 'bot' ? 'rgba(255,255,255,0.1)' : '#0ea5e9',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: msg.type === 'bot' ? '0 16px 16px 16px' : '16px 0 16px 16px',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        border: msg.type === 'bot' ? '1px solid rgba(255,255,255,0.05)' : 'none'
                                    }}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '16px', display: 'flex', gap: '4px' }}>
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%' }} />
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options */}
                        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOptionClick(opt)}
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid rgba(56, 189, 248, 0.3)',
                                        color: '#38bdf8',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '0.85rem',
                                        transition: 'all 0.2s'
                                    }}
                                    className="hover:bg-white/5"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)'
                }}
            >
                {isOpen ? <X color="white" size={28} /> : <MessageSquare color="white" size={28} />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
