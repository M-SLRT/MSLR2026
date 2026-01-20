// src/components/sections/Program.jsx
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, UserCircle, Clock, Coffee, Users, Mic, Presentation, MessageSquare, Award as AwardIcon } from 'lucide-react';


import Prof_Richard from "../../assets/images/RichardBowden.webp";
import Dr_Oscar from "../../assets/images/oscarkoller.jpg";
import Dr_Leon from "../../assets/images/leon-sigal.jpg";
import Dr_Abraham from "../../assets/images/glasser_abraham_headshot_cropped.jpeg";

const programSchedule = [
  { time: "08:30-08:45", event: "Opening remarks, goals, challenge overview", icon: Mic, type: "general" },
  { time: "08:45-09:45", event: "Oral presentations (Session 1)", icon: Presentation, type: "presentation", session: 1 },
  { time: "09:45-10:15", event: "Keynote 1 - Prof. Richard Bowden", icon: UserCircle, type: "keynote", img: Prof_Richard, title: "Automatic translation of Sign Languages" },
  { time: "10:15-11:15", event: "Oral presentations (Session 2)", icon: Presentation, type: "presentation", session: 2 },
  { time: "11:15-11:30", event: "Coffee Break & Networking", icon: Coffee, type: "break" },
  { time: "11:30-12:00", event: "Keynote 2 - Dr. Leon Sigal", icon: UserCircle, type: "keynote", img: Dr_Leon, title: "The Curious Case of Foundational and VLM Models" },
  { time: "12:00-13:00", event: "Oral presentations (Session 3)", icon: Presentation, type: "presentation", session: 3 },
  { time: "13:00-14:00", event: "Lunch Break", icon: Coffee, type: "break" },
  { time: "14:00-14:30", event: "Keynote 3 - Dr. Oscar Koller", icon: UserCircle, type: "keynote", img: Dr_Oscar, title: "Delivering Sign Language AI at Scale: From Synthetic Data to Real-World Use" },
  { time: "14:30-15:00", event: "Keynote 4 - Dr. Abraham Glasser", icon: UserCircle, type: "keynote", img: Dr_Abraham, title: "Technology Adoption Strategies: A Risk-Informed Approach for Evaluating AI and Hybrid AI-human Language Access Solutions" },
  { time: "15:00-15:15", event: "Coffee Break & Networking", icon: Coffee, type: "break" },
  { time: "15:15-16:15", event: "Oral presentations (Session 4)", icon: Presentation, type: "presentation", session: 4 },
  { time: "16:15-16:45", event: "Poster Presentations", icon: Presentation, type: "presentation"},
  { time: "16:45-17:00", event: "Awards and Closing Remarks", icon: AwardIcon, type: "general" },
  { time: "17:00-18:00", event: "Poster Session, Demos, & Networking", icon: Users, type: "poster" },
];

const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay } }
});

const listItemVariants = (delay = 0) => ({
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay } }
});

const sessionDetails = {
  1: [
    {
      title: "A Closer Look at Skeleton-based Continuous Sign Language Recognition",
      authors: "Yuecong Min, Yifan Yang, Peiqi Jiao, Zixi Nan and Xilin Chen",
    },
    {
      title: "Iterative Latent Refinement for Robust Non-Autoregressive Sign Language Production",
      authors: "Tuğçe Kızıltepe, Sümeyye Meryem Taşyürek and Hacer Yalım Keleş",
    },
    {
      title: "SAGE: Segment-Aware Gloss-Free Encoding for Token-Efficient Sign Language Translation",
      authors: "Jian He Low, Ozge Mercanoglu Sincan, Richard Bowden",
    },
  ],
  2: [
    {
      title: "AutoSign: Direct Pose-to-Text Translation for Continuous Sign Language Recognition",
      authors: "Samuel Johnny, Blessed Guda, Andrew Stephen, Assane Gueye",
    },
    {
      title: "Can a Lightweight Transformer Deliver a Robust Multimodal Sign Language Word Recognition?",
      authors: "Eva Berepiki, Philip Ciunkiewicz, Svetlana Yanushkevich",
    },
    {
      title: "Point-Supervised Japanese Fingerspelling Localization via HR-Pro and Contrastive Learning",
      authors: "Ryota Murai, Naoto Tsuta, Duk Shin, Yousun Kang",
    },
  ],
  3: [
    {
      title: "Text-Aligned Radar-Based Sign Language Recognition for Healthcare Communication",
      authors: "Raffaele Mineo, Amelia Sorrenti, Gaia Caligiore, Federica Proietto Salanitri, Giovanni Bellitto, Senya Polikovsky, Sabina Fontana, Edigio Ragonese, Concetto Spampinato, Simone Palazzo",
    },
    {
      title: "RF-ChessSIGN: Radar-enabled Human-Computer Interaction in a Real-Time Sign Language-Controlled Game",
      authors: "Kenneth DeHaan, Emre Kurtoglu, Sabyasachi Biswas, Caroline Kobek Pezzarossi, Darrin Griffin,Chris Crawford,Ali Gurbuz,Evie Malaia,Abraham Glasser, Raja Kushalnagar, Sevgi Gurbuz",
    },
    {
      title: "A Smart Glove to convert gestures to speech & Text to Assist Deaf & Mute People Using Machine Learning",
      authors: "Manisha A, Tamilselvi S",
    },
  ],
  4: [
    {
      title: "Development of an Intelligent System for Recognizing Islamic Religious Visual Signs in the Arabic Language",
      authors: "dauaa mhnaa, Dr.Jafar Slman, Dr.yaroub Dayoub",
    },
    {
      title: "Inclusive Sign Language AI: Towards Authentic Accessibility Through Community Collaboration",
      authors: "Abraham Glasser",
    },
    {
      title: "The SignEval 2026 Challenge at the CVPR Multimodal Sign Language Recognition Workshop: Results and Discussion",
      authors: "SignEval 2026 Organizing Committee",
    },
  ],
};


const getTypeColor = (type) => {
    switch (type) {
        case 'keynote': return 'bg-brand-accent/10 text-brand-accent-dark border-brand-accent';
        case 'presentation': return 'bg-brand-primary/10 text-brand-primary-dark border-brand-primary';
        case 'break': return 'bg-yellow-400/10 text-yellow-700 border-yellow-500';
        case 'poster': return 'bg-purple-500/10 text-purple-700 border-purple-600';
        case 'panel': return 'bg-indigo-500/10 text-indigo-700 border-indigo-600';
        default: return 'bg-gray-400/10 text-gray-700 border-gray-500';
    }
};

const Program = () => {
  return (
    <SectionWrapper
      id="program-schedule-internal"
      title="Workshop Program"
      subtitle="Day at a Glance"
      bgColor="bg-brand-neutral-100"
    >
      <motion.div
        className="bg-white shadow-xl rounded-xl overflow-hidden"
        variants={cardVariants(0)}
      >
        <div className="divide-y divide-brand-neutral-200">
          {programSchedule.map((item, index) => {
            const Icon = item.icon;
            const typeClasses = getTypeColor(item.type);

            return (
              <motion.div
                key={index}
                className={`p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-6 hover:bg-brand-neutral-50 transition-colors duration-200 ${
                  index % 2 === 0 ? "" : "bg-brand-neutral-50/50"
                }`}
                variants={listItemVariants(index * 0.05)}
              >
                {/* Left: time + icon */}
                <div className="flex items-center shrink-0 w-full sm:w-auto">
                  <span className={`p-2 rounded-full mr-3 ${typeClasses.split(" ")[0]}`}>
                    <Icon size={20} className={`${typeClasses.split(" ")[1]}`} />
                  </span>
                  <span className="font-sharetech text-sm sm:text-base text-brand-neutral-700 w-28 sm:w-32">
                    {item.time}
                  </span>
                </div>

                {/* Right: event details */}
                <div className="flex flex-col flex-grow space-y-1">
                  {/* Only show event name if NOT a keynote */}
                  {item.type !== "keynote" && (
                    <p className="text-sm sm:text-base font-semibold text-brand-neutral-900">
                      {item.event}
                    </p>
                  )}

                  {/* Keynote layout */}
                  {item.type === "keynote" && item.img && (
                    <div className="grid grid-cols-[auto_1fr] gap-x-3 mt-2">
                      {/* Speaker image (spans 2 rows) */}
                      <div className="row-span-2">
                        <img
                          src={item.img}
                          alt={item.speaker}
                          className="w-12 h-12 rounded-full object-cover border border-brand-neutral-300"
                        />
                      </div>
                      {/* Top-right: keynote label + speaker name */}
                      <p className="text-sm sm:text-base font-semibold text-brand-neutral-900">
                        {item.event}: {item.speaker}
                      </p>
                      {/* Bottom-right: title of speech */}
                      <p className="text-xs sm:text-sm text-brand-neutral-600 italic">
                        {item.title}
                      </p>
                    </div>
                  )}

                  {/* Oral presentations list */}
                  {item.type === "presentation" && item.session && (
                    <ul className="list-disc ml-5 text-sm text-brand-neutral-700 mt-2 space-y-3">
                      {sessionDetails[item.session].map((paper, i) => (
                        <li key={i} className="space-y-1">
                          {/* Paper title */}
                          <p className="font-medium">{paper.title}</p>

                          {/* Author names */}
                          <p className="text-xs italic text-teal-600">
                            {paper.authors}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Program;