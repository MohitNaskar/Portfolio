import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I’m Mohit Naskar, an AI/ML Developer from India passionate about
        creating user-friendly, intelligent applications. I work with Python,
        data analysis, machine learning, GenAI, and Agentic AI models to build
        practical, real-world solutions with clean engineering and modern AI
        practices.
        <br></br>
        <br></br>
        I’m a fast learner currently expanding my skills in React, flask,
        Docker, backend systems, and full-stack development to build richer,
        more interactive experiences. When I’m not upskilling or experimenting
        with new tech, you’ll find me on the field, scoring my next goal in a
        Barça jersey.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <Tilt key={service.title} className="w-full xs:w-[250px]">
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
