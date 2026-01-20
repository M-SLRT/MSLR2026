// src/components/layout/Footer.jsx
import React from 'react';
import { Mail, MapPin, Copyright, Heart, ExternalLink } from 'lucide-react';
import { navLinksData } from '../../App'; // Import navLinks from App.jsx

import logo from "../../assets/images/logo.jpeg"
// import CVPR from "../../assets/images/CVPR2026.svg"
import SharedTech from "../../assets/images/SharedTech.png"
import jrcai from "../../assets/images/jrc-kfupm-logo-white.png"
import perceivelab from "../../assets/images/PeRCeiVeLab-LogoExtended.png"


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const header = document.querySelector('header'); // Assuming header is always rendered
        const headerHeight = header ? header.offsetHeight : 80;

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-brand-neutral-800 text-brand-neutral-300 section-padding">
            <div className="container-core">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    <div className="space-y-4">
                        <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-2 group">
                            <img src={logo} alt="MSLR Logo" className="h-10 w-25 rounded-full group-hover:opacity-80 transition-opacity" />
                            <span className="font-exo2 text-xl text-white group-hover:text-brand-accent transition-colors">MSLR 2026</span>
                        </button>
                        <p className="text-sm leading-relaxed font-exo2">
                            1st Multimodal Sign Language Recognition Workshop at IEEE/CVF CVPR 2026.
                            Join us in Denver, Colorado!
                        </p>
                        <div className="mt-4">
                            <a href="https://CVPR.thecvf.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src={CVPR} alt="CVPR 2026" className="w-32 h-auto opacity-80" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-exo2 text-lg text-white mb-4 font-medium">Quick Links</h5>
                        <ul className="space-y-2">
                            {navLinksData.map(link => ( 
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-sm hover:text-brand-accent transition-colors duration-200 font-exo2"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-exo2 text-lg text-white mb-4 font-medium">Get In Touch</h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <Mail size={18} className="mr-3 mt-0.5 text-brand-accent flex-shrink-0" />
                                <div className="font-exo2">
                                    <a href="mailto:raffaele.mineo@unict.it" className="hover:text-brand-accent transition-colors">raffaele.mineo[at]unict.it</a><br />
                                    <a href="mailto:hluqman@kfupm.edu.sa" className="hover:text-brand-accent transition-colors">hluqman[at]kfupm.edu.sa</a>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={18} className="mr-3 text-brand-accent flex-shrink-0" />
                                <span className="font-exo2">CVPR 2026, Denver, Colorado, USA</span>
                            </li>
                        </ul>
                    </div>
                </div> */}

                <div className="mt-16 border-t border-white/20 pt-10">
                    <h5 className="font-exo2 text-2xl text-white mb-6 font-semibold text-center">Sponsors</h5>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {/* <a
                            href="https://www.sharedtech.com.sa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img src={SharedTech} alt="SharedTech Logo" className="h-20 sm:h-24 object-contain" />
                        </a> */}
                        <a
                            href="https://ri.kfupm.edu.sa/jrcai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img src={jrcai} alt="JRCAI Logo" className="h-20 sm:h-24 object-contain" />
                        </a>
                        {/* <a
                            href="http://perceivelab.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img src={perceivelab} alt="PeRCeiVeLab Logo" className="h-20 sm:h-24 object-contain" />
                        </a> */}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-neutral-700 text-center text-sm">
                    <p className="flex items-center justify-center font-exo2">
                        <Copyright size={16} className="mr-1.5" /> {currentYear} CVPR Workshop. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;