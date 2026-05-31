// src/components/sections/Program.jsx
import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, UserCircle, Clock, Coffee, Users, Mic, Presentation, MessageSquare, Award as AwardIcon } from 'lucide-react';


import dummy from "../../assets/images/dummy.png";
import Prof_Sevi from "../../assets/images/sevi.jpg";
import Prof_Gul from "../../assets/images/gul.jpg";
import Prof_Lu from "../../assets/images/alexlu_photo.png";

const programSchedule = [
  { time: "13:00-13:05", event: "Opening remarks", icon: Mic, type: "general" },

  {
    time: "13:05-13:35",
    event: "Prof. Varol",
    icon: UserCircle,
    type: "keynote",
    img: Prof_Gul,
    title: "Towards Open-Vocabulary Sign Language Translation"
  },

  {
    time: "13:35-13:50",
    event: "Oral presentations (Session 1)",
    icon: Presentation,
    type: "presentation",
    session: 1,
    title: "TEMPO at SignEval 2026: Signer-Independent Temporal Modeling and Vocabulary-Constrained Post-Processing for Arabic CSLR"
  },

  {
    time: "13:50-14:05",
    event: "Oral presentations (Session 2)",
    icon: Presentation,
    type: "presentation",
    session: 2,
    title: "Isolated Sign Language Recognition via MediaPipe Landmarks: A Case Study On Indian Sign Language"
  },

  {
    time: "14:05-14:35",
    event: "Prof. Lu",
    icon: UserCircle,
    type: "keynote",
    img: Prof_Lu,
    title: "Beyond Translation: Why Linguistic Study of Sign Language Empowers Deaf Communities"
  },

  {
    time: "14:35-14:50",
    event: "Oral presentations (Session 1)",
    icon: Presentation,
    type: "presentation",
    session: 1,
    title: "PRISM at SignEval 2026: Privacy-Preserving Radar-Based Italian Sign Language Recognition via ConvNeXt and Ensemble Learning"
  },

  {
    time: "14:50-15:05",
    event: "Oral presentations (Session 2)",
    icon: Presentation,
    type: "presentation",
    session: 2,
    // Keep both lines within the same list item by using an array
    title: ["SignEval 2026 Challenges", "Results and Awards"]
  },

  {
    time: "15:05-15:30",
    event: "Coffee Break & Networking",
    icon: Coffee,
    type: "break"
  },

  {
    time: "15:30-17:30",
    event: "Poster Session",
    icon: Presentation,
    type: "poster",
    session: 3
  },

  {
    time: "17:30-17:35",
    event: "Closing Remarks",
    icon: AwardIcon,
    type: "general"
  },
];

const cardVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay } }
});

const listItemVariants = (delay = 0) => ({
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay } }
});

// Removed detailed sessionDetails per request; individual oral titles are now embedded in `programSchedule` entries.


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
                  <span className="font-exo2 text-sm sm:text-base text-brand-neutral-700 w-28 sm:w-32">
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
                          alt={item.event}
                          className="w-12 h-12 rounded-full object-cover border border-brand-neutral-300"
                        />
                      </div>
                      {/* Top-right: keynote label + speaker name */}
                      <p className="text-sm sm:text-base font-semibold text-brand-neutral-900">
                        {item.event}
                      </p>
                      {/* Bottom-right: title of speech */}
                      <p className="text-xs sm:text-sm text-brand-neutral-600 italic">
                        {item.title}
                      </p>
                    </div>
                  )}

                      {/* Presentation title (for oral/poster items) */}
                      {item.type === "presentation" && item.title && (
                        Array.isArray(item.title) ? (
                          <ul className="list-disc ml-5 mt-1">
                            {item.title.map((t, i) => (
                              <li key={i} className="text-xs sm:text-sm text-brand-neutral-600 italic">
                                {t}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs sm:text-sm text-brand-neutral-600 italic mt-1">
                            {item.title}
                          </p>
                        )
                      )}

                  {/* Oral presentations list */}
                  {/* {item.type === "presentation" && item.session && ( */}
                    {/* <ul className="list-disc ml-5 text-sm text-brand-neutral-700 mt-2 space-y-3"> */}
                      {/* {sessionDetails[item.session].map((paper, i) => ( */}
                        {/* <li key={i} className="space-y-1"> */}
                          {/* Paper title */}
                          {/* <p className="font-medium">{paper.title}</p> */}

                          {/* Author names */}
                          {/* <p className="text-xs italic text-teal-600"> */}
                            {/* {paper.authors} */}
                          {/* </p> */}
                        {/* </li> */}
                      {/* ))} */}
                    {/* </ul> */}
                  {/* )} */}
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