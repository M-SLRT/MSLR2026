// src/components/sections/Home.jsx
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { Award, Users, Mic, FileText, ChevronRight, ExternalLink } from 'lucide-react';

import dummy from "../../assets/images/dummy.png";
import dobi from "../../assets/images/dobi.png";
import Prof_Sevi from "../../assets/images/sevi.jpg";

const content = {
    overview: [
        "Sign language recognition has undergone rapid transformation in the past five years, fueled by advancements in deep learning and the integration of multimodal data sources. Both vision-based and sensor-based approaches have significantly improved accuracy and generalization, with emerging techniques combining RGB video, depth, skeletal keypoints, facial landmarks, and even radar data. These advances offer greater robustness and privacy in diverse real-world applications.",
        "Continuous Sign Language Recognition (CSLR) remains particularly challenging due to the need for precise temporal segmentation and the scarcity of annotated data. Innovative weakly-supervised, cross-lingual, and few-shot learning methods are addressing these gaps, enabling scalable solutions.",
        "Meanwhile, the field is expanding beyond recognition into translation and production, with generative models enabling avatar-based, fluent sign language synthesis. These developments are paving the way for seamless communication between Deaf and hearing communities. Foundational work in sign language translation further reveals the complexity of multi-channel linguistic articulation, emphasizing the urgent need for new datasets, benchmarks, and evaluation metrics tailored to sign languages.",
        "This workshop brings together researchers advancing Sign Language Recognition and Understanding, spanning isolated and continuous SLR, with focus on novel architectures, temporal modeling, and signer-independent systems. It highlights multimodal fusion—RGB, depth, skeletal data, facial expressions, and radar—for robust recognition, along with self-supervised and few-shot learning for data efficiency and domain adaptation. The program also covers sign language translation and production, including neural/statistical MT, avatar-based synthesis, and context-aware generation. Emphasis will be placed on diverse, ethically sourced datasets, cross-lingual benchmarks, privacy-preserving sensing, and real-world applications in healthcare, accessibility, and ethical AI practices."
    ],
    callForPapers: {
        intro: "We invite high-quality full-paper submissions on topics including, but not limited to:",
        categories: [
            { title: "Sign Language Recognition & Understanding", icon: <Award className="w-7 h-7 text-brand-accent" />, items: ["Isolated & Continuous SLR: novel architectures, temporal modeling, signer-independent recognition.", "Multimodal Fusion: RGB, depth, skeletal keypoints, facial expressions, radar for robust SLR.", "Self-Supervised & Few-Shot Learning: data-efficient sign recognition, domain adaptation, zero-shot learning."] },
            { title: "Sign Language Translation & Production", icon: <Mic className="w-7 h-7 text-brand-accent" />, items: ["Statistical & Neural MT for Sign Languages: end-to-end models for sign-to-text and text-to-sign translation.", "Generative Models for Sign Production: avatar-based synthesis, neural rendering, context-aware generation."] },
            { title: "Datasets, Benchmarks & Metrics", icon: <FileText className="w-7 h-7 text-brand-accent" />, items: ["New Corpora & Protocols: diverse, ethically sourced datasets; signer-independent and cross-lingual benchmarks.", "Privacy-Preserving Sensing: radar and non-visual modalities as alternatives to camera-based systems."] },
            { title: "SLR Applications & Ethics", icon: <Users className="w-7 h-7 text-brand-accent" />, items: ["Healthcare & Accessibility: deployment of SLR systems in clinical, telemedicine, and assistive contexts.", "Ethical Considerations: community-involved research, data governance, and algorithmic fairness."] }
        ],
        outro: "Submissions should follow the CVPR 2026 formatting guidelines and will undergo double-blind peer review. Accepted papers will be published in the CVPR Workshop Proceedings."
    },
};

const speakersData = [
    { 
        name: "Prof. Sevgi Gurbuz",
        affiliation: "North Carolina State University", 
        imgSrc: Prof_Sevi, 
        bio: "Dr. Sevgi Z. Gurbuz is an Associate Professor of Electrical and Computer Engineering at North Carolina State University, where she leads the Lab for Computational Intelligence in Radar (CI4R). Her research focuses on RF-enabled cyber-physical human systems, radar signal processing, and physics-aware machine learning for applications in human sensing, healthcare, automotive systems, and defense. She is a pioneer of radar-based American Sign Language recognition and holds a related patent awarded in 2022.", 
        link: "https://scholar.google.com/citations?hl=en&user=T5Uox50AAAAJ",
        // title: "TITLE",
        // abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay } }
});


const Home = () => {
    const handleCFPLinkClick = (e) => {
        e.preventDefault();
        const submissionSection = document.getElementById('submission');
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        if (submissionSection) {
            const elementPosition = submissionSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <SectionWrapper id="home-overview-internal" title="Welcome to MSLR 2026" subtitle="" bgColor="bg-white" contentMaxWidth="max-w-4xl">
                <div className="space-y-6 text-lg text-brand-neutral-700 leading-relaxed">
                    {content.overview.map((paragraph, index) => (
                        <motion.p key={index} variants={itemVariants}> {/* Framer Motion will inherit from parent SectionWrapper */}
                            {paragraph}
                        </motion.p>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper id="home-cfp-internal" title="Call for Papers" subtitle="Contribute Your Research" bgColor="bg-brand-neutral-100">
                <motion.p className="max-w-3xl mx-auto text-center text-lg text-brand-neutral-700 mb-12 leading-relaxed" variants={itemVariants}>
                    {content.callForPapers.intro}
                </motion.p>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {content.callForPapers.categories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            className="content-card transform hover:scale-[1.03]" // Using .content-card from index.css
                            variants={cardVariants(catIndex * 0.1)} // Stagger card appearance
                        >
                            <div className="flex items-center mb-4">
                                <span className="p-3 bg-brand-accent/10 rounded-full mr-4 shadow-sm">{category.icon}</span>
                                <h3 className="text-xl lg:text-2xl font-semibold text-brand-primary-dark">{category.title}</h3>
                            </div>
                            <ul className="space-y-3 text-brand-neutral-700 text-sm sm:text-base">
                                {category.items.map((item, itemIndex) => (
                                    <motion.li key={itemIndex} className="flex" variants={itemVariants}>
                                        <ChevronRight className="w-5 h-5 mr-2 mt-1 text-brand-accent flex-shrink-0" />
                                        <span>{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <motion.p className="mt-12 text-center text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
                    {content.callForPapers.outro} See the <button onClick={handleCFPLinkClick} className="btn-link">Submission Guidelines</button> for more details.
                </motion.p>
            </SectionWrapper>

            <SectionWrapper id="program-speakers-internal" title="Invited Speakers" subtitle="Learn from the Leaders" bgColor="bg-white">
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-10">
                    {speakersData.map((speaker, index) => (
                        <motion.div
                            key={speaker.name}
                            className="content-card flex flex-col text-center transform hover:scale-[1.02]"
                            variants={cardVariants(index * 0.1)}
                        >
                            <img
                                src={speaker.imgSrc}
                                alt={speaker.name}
                                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mx-auto mb-5 border-4 border-brand-accent/40 group-hover:border-brand-accent transition-colors duration-300 shadow-md"
                            />
                            <h3 className="text-xl lg:text-2xl font-semibold text-brand-primary-dark mb-1">{speaker.name}</h3>
                            <p className="text-brand-neutral-600 text-sm mb-3">{speaker.affiliation}</p>
                            <p className="text-sm text-brand-neutral-700 leading-relaxed flex-grow mb-4 px-2">{speaker.bio}</p>
                            {speaker.title && (
                                <h4 className="text-lg font-semibold text-brand-primary-dark mt-2 px-2">
                                    {speaker.title}
                                </h4>
                            )}
                            {speaker.abstract && (
                                <p className="text-sm text-brand-neutral-700 leading-relaxed mb-4 px-2">
                                    {speaker.abstract}
                                </p>
                            )}
                            {speaker.link && (
                                <a
                                    href={speaker.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link text-sm inline-flex items-center justify-center mt-auto"
                                >
                                    View Profile <ExternalLink size={14} className="ml-1.5" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

        </>
    );
};

export default Home;