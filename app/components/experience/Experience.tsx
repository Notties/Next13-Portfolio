"use client";

import {
  fadeIn,
  staggerContainer,
  textContainer,
  textContainerCustom,
  textVariant,
  textVariant2,
} from "@/app/utils/motion";
import { motion } from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";
import { TypingText } from "../CustomTexts";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center"
        >
          <TypingText title="What Skills I Have" textStyles="text-center" />
        </motion.div>
        <h2 className="text-3xl">My Experience</h2>
        {/* experience__container */}
        <div
          className="container grid grid-cols-2 gap-[2rem] 
        max-[1280px]:grid-cols-1
        max-[600px]:gap-[1rem]
      "
        >
          {/* experience__frontend */}
          <div
            className="bg-bg-variant border-1  border-solid 
                rounded-[1rem] py-[2.4rem] px-[5rem]
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-br
                from-primary-variant transition
                duration-700 hover:cursor-default
                max-[1280px]:w-[80%]
                max-[1280px]:p-[2rem]
                max-[1280px]:mx-auto
                
                "
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="text-center mb-[2rem] text-xl"
            >
              <TypingText
                title="Frontend Development"
                textStyles="text-center text-xl"
              />
            </motion.div>
            <div
              className="grid grid-cols-2 gap-y-[2rem]
            max-[1280px]:gap-[1rem]
          "
            >
              <>
                <motion.div
                  variants={fadeIn("up", "tween", 0.3, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>TypeScript</h4>
                      <motion.p variants={textContainerCustom(3)}>
                        <small className="text-light">Intermediate</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.4, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>JavaScript</h4>
                      <motion.p variants={textContainerCustom(3)}>
                        <small className="text-light">Intermediate</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.5, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>NextJS</h4>
                      <motion.p variants={textContainerCustom(4)}>
                        <small className="text-light">Basic</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.6, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>ReactJS</h4>
                      <motion.p variants={textContainerCustom(3)}>
                        <small className="text-light">Intermediate</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.7, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>Tailwind</h4>
                      <motion.p variants={textContainerCustom(3)}>
                        <small className="text-light">Intermediate</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", "tween", 0.8, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <article
                    className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                  >
                    <BsPatchCheckFill className="mt-[6px] text-primary" />
                    <div>
                      <h4>MUI</h4>

                      <motion.p variants={textContainerCustom(3)}>
                        <small className="text-light">Intermediate</small>
                      </motion.p>
                    </div>
                  </article>
                </motion.div>
              </>
            </div>
          </div>
          {/* End of frontend */}

          <div
            className="bg-bg-variant border-1  border-solid 
                rounded-[1rem] py-[2.4rem] px-[5rem]
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-br
                from-primary-variant transition
                duration-700 hover:cursor-default
                max-[1280px]:w-[80%]
                max-[1280px]:p-[2rem]
                max-[1280px]:mt-0
                max-[1280px]:mx-auto
          "
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="text-center mb-[2rem] text-xl"
            >
              <TypingText
                title="Backend Development"
                textStyles="text-center text-xl"
              />
            </motion.div>
            <div
              className="grid grid-cols-2 gap-y-[2rem]
            max-[1280px]:gap-[1rem]
          "
            >
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>NestJS</h4>
                    <motion.p variants={textContainerCustom(3)}>
                      <small className="text-light">Intermediate</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>Express</h4>
                    <motion.p variants={textContainerCustom(4)}>
                      <small className="text-light">Basic</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>TypeORM</h4>
                    <motion.p variants={textContainerCustom(3)}>
                      <small className="text-light">Intermediate</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.6, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>MongoDB</h4>
                    <motion.p variants={textContainerCustom(4)}>
                      <small className="text-light">Basic</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.7, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4
                      className="flex gap-[1rem]
                  max-[420px]:text-[13px]
                "
                    >
                      PostgreSQL
                    </h4>
                    <motion.p variants={textContainerCustom(3)}>
                      <small className="text-light">Intermediate</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.8, 1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <article
                  className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
                >
                  <BsPatchCheckFill className="mt-[6px] text-primary" />
                  <div>
                    <h4>FastAPI</h4>
                    <motion.p variants={textContainerCustom(4)}>
                      <small className="text-light">Basic</small>
                    </motion.p>
                  </div>
                </article>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
