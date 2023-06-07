"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
const CTA = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 flex gap-5 justify-center"
    >
      <a href={"/assets/resume.pdf"} download className="btn">
        <p>Download Resume</p>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default CTA;
