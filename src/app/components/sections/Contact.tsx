import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

    useEffect(() => {
        emailjs.init("YOUR_EMAILJS_USER_ID");
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "YOUR_EMAILJS_SERVICE_ID",
                "YOUR_EMAILJS_TEMPLATE_ID",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }
            );

            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus("error");

            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github size={24} />,
            url: "https://github.com/yourusername",
            color: "from-white/10 to-white/5"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={24} />,
            url: "https://linkedin.com/in/yourusername",
            color: "from-white/10 to-white/5"
        },
        {
            name: "Email",
            icon: <Mail size={24} />,
            url: "mailto:your@email.com",
            color: "from-white/10 to-white/5"
        }
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.25,  ease: "easeOut" } },
    };

    return (
        <AnimatedSection
            id="contact"
            className="min-h-screen px-6 sm:px-20 py-24 flex flex-col items-center justify-center relative"
        >
            <div className="text-center text-white max-w-4xl mx-auto relative z-10 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent"
                >
                    Contact Me
                </motion.h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="flex flex-wrap justify-center gap-9 mb-12"
            >
                {socialLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        variants={itemVariants}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 bg-gradient-to-br ${link.color} p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64`}
                    >
                        <div className="bg-white/10 p-3 rounded-lg">
                            {link.icon}
                        </div>
                        <div className="text-left">
                            <h3 className="font-medium text-white">{link.name}</h3>
                            <p className="text-xs text-white/70">Connect with me</p>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl w-full max-w-2xl"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent text-white"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent text-white"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent text-white"
                            placeholder="What is this regarding?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#99f2c8] focus:border-transparent text-white resize-none"
                            placeholder="Your message here..."
                        />
                    </div>

                    <div className="flex justify-end">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] text-gray-900 font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-70"
                        >
                            {isSubmitting ? "Sending..." : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </motion.button>
                    </div>

                    {submitStatus === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-500/20 border border-green-500/50 text-green-300 p-3 rounded-lg text-sm"
                        >
                            Message sent successfully! I'll get back to you soon.
                        </motion.div>
                    )}

                    {submitStatus === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-lg text-sm"
                        >
                            There was an error sending your message. Please try again later.
                        </motion.div>
                    )}
                </form>
            </motion.div>
        </AnimatedSection>
    );
}