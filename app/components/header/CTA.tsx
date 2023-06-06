"use client";

const CTA = () => {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <a href={"/assets/resume.pdf"} download className="btn">
        <p>Download Resume</p>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
