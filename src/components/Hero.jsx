import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { avator } from "../assets";
import { hero } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Mohit</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 w-80`}>
            I am a <span className="text-[#ffffff]">Artificial Intelligence,
              <br className="sm:block hidden"/> Machine Learning Engineer who is passionate about creating user-friendly, intelligent applications.</span>
          </p>
          <div className="flex flex-row gap-4 mt-4">
          {hero.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className="w-12 object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
        </div>
      </div>
      
      <div className="absolute inset-0 top-20 flex justify-center items-center -z-10 pt-30">
        <img src={avator} alt="avator" className="w-[750px] opacity-60 object-contain"/>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
