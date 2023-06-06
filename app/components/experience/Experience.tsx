"use client";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
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
            <h3 className="text-center mb-[2rem] text-primary text-xl">
              Frontend Development
            </h3>
            <div
              className="grid grid-cols-2 gap-y-[2rem]
            max-[1280px]:gap-[1rem]
          "
            >
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>NextJS</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>ReactJS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>MUI</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
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
            <h3 className="text-center mb-[2rem] text-primary text-xl">
              Backend Development
            </h3>
            <div
              className="grid grid-cols-2 gap-y-[2rem]
            max-[1280px]:gap-[1rem]
          "
            >
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>NestJS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>Express</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>TypeORM</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
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
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article
                className="flex gap-[1rem]
              max-[420px]:text-[13px]
            "
              >
                <BsPatchCheckFill className="mt-[6px] text-primary" />
                <div>
                  <h4>FastAPI</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
