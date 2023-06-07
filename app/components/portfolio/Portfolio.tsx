"use client";

import Image from "next/image";
import data from "../../constants/PortfolioData.json";
import { motion } from "framer-motion";
import { staggerContainer } from "@/app/utils/motion";
import { TypingText } from "../CustomTexts";

interface MyData {
  id: number;
  image?: string;
  title?: string;
  github?: string;
  demo?: string;
  view?: string;
}

const Portfolio = () => {
  const jsonData: MyData[] = data;

  return (
    <>
      <section id="portfolio">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center"
        >
          <TypingText title="My Recent" textStyles="text-center" />
        </motion.div>
        <h2 className="text-3xl">Portfolio</h2>

        {/* portfolio__container */}
        <div
          className="container grid-cols-3 gap-[1.5rem]
          max-[1220px]:grid-cols-2
          max-[1220px]:gap-[1rem]
          max-[750px]:grid-cols-1
          max-[750px]:gap-[1rem]
          max-[750px]:w-[90%]
        "
          style={{
            display: "grid",
          }}
        >
          {jsonData.map(({ id, image, title, github, demo, view }: MyData) => {
            return (
                  <article
                    className="bg-bg-variant border-1  border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:cursor-default"
                    key={id}
                  >
                    <div className="rounded-[1.5rem] overflow-hidden">
                      {image ? (
                        <Image
                          key={id}
                          loading="lazy"
                          src={image as string}
                          alt="image"
                          width={1920}
                          height={1080}
                          className="opacity-0 object-cover w-[100%] h-fit scale-95 rounded-[1.5rem] hover:scale-100 transition duration-700"
                          onLoadingComplete={(image) =>
                            image.classList.remove("opacity-0")
                          }
                        />
                      ) : (
                        <Image
                          key={id}
                          loading="lazy"
                          src={"/noimg.png"}
                          alt="image"
                          width={1920}
                          height={1080}
                          className="opacity-0 object-cover w-[100%] h-fit scale-95 rounded-[1.5rem] hover:scale-100 transition duration-700"
                          onLoadingComplete={(image) =>
                            image.classList.remove("opacity-0")
                          }
                        />
                      )}
                    </div>
                    <h3 className="my-[1.2rem] text-center">{title}</h3>
                    <div className="flex gap-[1rem] mb-[0.5rem] justify-center">
                      {github ? (
                        <a href={github} className="btn " target="_blank">
                          Github
                        </a>
                      ) : null}
                      {view ? (
                        <a
                          href={view}
                          className="btn btn-primary"
                          target="_blank"
                        >
                          View
                        </a>
                      ) : null}
                      {demo ? (
                        <a
                          href={demo}
                          className="btn btn-primary"
                          target="_blank"
                        >
                          Live Site
                        </a>
                      ) : null}
                    </div>
                  </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
