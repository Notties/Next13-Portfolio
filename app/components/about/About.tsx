"use client";

import Image from "next/image";

import { FaAward } from "react-icons/fa";
import { RxTimer } from "react-icons/rx";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2 className="text-3xl">About Me</h2>

        {/* about__container */}
        <div
          className="container grid-cols-2 gap-[15%]
          max-[1024px]:grid-cols-1 max-[1024px]:gap-0
        "
          style={{ display: "grid" }}
        >
          {/* about__me */}
          <div
            className="w-[100%] aspect-square rounded-[2rem] bg-gradient-to-t from-primary
            grid place-items-center
            max-[1024px]:w-[50%] 
            max-[1024px]:mx-auto 
            max-[1024px]:my-10
            max-[600px]:w-[65%] 
            max-[600px]:mx-auto 
            max-[600px]:mt-3
            max-[600px]:mb-7
          "
          >
            {/* about__me-image */}
            <div
              className="rounded-[2rem] overflow-hidden rotate-[10deg] transition
              hover:rotate-[0deg] duration-700
            "
            >
              <Image
                src="/assets/me-about.jpg"
                alt="about me"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>

          {/* about__content */}
          <div className="max-[600px]:text-center">
            {/* about__cards */}
            <div
              className="gap-[1.5rem]
              grid
              grid-cols-3
              max-[1800px]:grid-cols-2
              max-[1169px]:grid-cols-2
              max-[600px]:grid-cols-2
              max-[600px]:gap-[1rem]
              max-[600px]:mx-3
              max-[600px]:my-[-5px]
              
              "
            >
              {/* about__card */}
              <article
                className="bg-bg-variant border-1 scale-95  border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:scale-100 hover:cursor-default
                "
              >
                {/* about__icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FaAward className="text-primary text-[1.4rem] mb-[1rem]" />
                </div>
                <h5 className="text-[0.95rem]">Experience</h5>
                <p
                  className="max-[600px]:mt-1
              max-[600px]:mb-0 text-[0.8rem] text-light max-[1024px]:my-1"
                >
                  4 Months Working
                </p>
              </article>
              <article
                className="bg-bg-variant border-1 scale-95  border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:scale-100 hover:cursor-default
              "
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <RxTimer className="text-primary text-[1.4rem] mb-[1rem]" />
                </div>
                <h5 className="text-[0.95rem]">Coding times</h5>
                <p
                  className="max-[600px]:mt-1
              max-[600px]:mb-0 text-[0.8rem] text-light max-[1024px]:my-1"
                >
                  500+ Hours
                </p>
              </article>
              <article
                className="bg-bg-variant border-1 scale-95  border-solid rounded-[1rem] p-[2rem] text-center
                hover:bg-opacity-10 backdrop-blur-sm hover:bg-gradient-to-b from-primary-variant transition
                duration-700 hover:scale-100 hover:cursor-default
              "
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <VscFolderLibrary className="text-primary text-[1.4rem] mb-[1rem]" />
                </div>
                <h5 className="text-[0.95rem]">Lab Project</h5>
                <p
                  className="max-[600px]:mt-1
              max-[600px]:mb-0 text-[0.8rem] text-light max-[1024px]:my-1"
                >
                  20+ Repositories
                </p>
              </article>
            </div>

            <p
              className="my-6 text-light max-[600px]:mb-2
              max-[600px]:mt-4 max-[600px]:text-[0.9rem]
            "
            >
              I have a high intention to apply my knowledge and a passion for
              developing designing and implement applications, fast learning,
              and is willing to learn new skills for further improvement.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
