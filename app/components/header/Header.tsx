"use client";

import CTA from "./CTA";
import Image from "next/image";
import HeaderSocial from "./HeaderSocial";
import { TypingText } from "../CustomTexts";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
    <header
      className="h-[100vh] pt-28 overflow-hidden
      max-[1024px]:h-[68vh] max-[600px]:h-[100vh]
    "
    >
      
      <div
        className="
        container text-center items-center h-[100%] relative 
        "
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <h5 className="text-light">Hello I'm</h5>
          <h2 className="text-light">Knot</h2>
          {/* <h1>Akthakorn Traimitr</h1> */}
          <TypingText
            title="Akthakorn Traimitr"
            textStyles="text-center text-[2.5rem]"
          />
          <TypingText
            title="Junior Developer"
            textStyles="text-center text-lg"
          />
          <CTA />
          <HeaderSocial />
          <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
            <div
              className="
                bg-gradient-to-b from-primary-variant absolute
                left-[calc(50%_-_11rem)] mt-16 rounded-t-[12rem]
                overflow-hidden px-3 pt-20
              "
            >
              <Image
                src="/me.png"
                alt="me"
                width={352}
                height={480}
                loading="lazy"
              />
            </div>
          </motion.div>

          <a
            href="#about"
            className="absolute right-[-2.3rem] bottom-[5rem] rotate-90 font-normal text-[0.9rem] max-[600px]:hidden"
          >
            Scroll Down
          </a>
        </motion.div>
      </div>
    </header>
    </>
  );
};

export default Header;
