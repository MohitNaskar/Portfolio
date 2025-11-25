import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; // <-- FIXED
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>What tech do I know.</h2>
      </motion.div>
      <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", index * 0.2, 0.5)}
          >
            <SkillCard icon={tech.icon} name={tech.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
