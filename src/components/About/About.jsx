import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Left Side */}
        <div className="md:w-3/5 text-center md:text-left mt-8 md:mt-0 md:pr-6">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Tanishq Rana
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Engineer',
                'Next.js Developer',
                'AI Engineer',
                'Software Engineer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Full-stack software engineer with 2+ years of professional experience building production-grade web apps, backend APIs, and AI-powered tools at ZS Associates and Bain & Company. I ship end-to-end with Next.js, React, Node.js, Python and PostgreSQL, and have independently built and deployed four live full-stack products — including AI-native platforms using Next.js, Prisma, and LLM integrations. Master of Computer Science from the University of Sydney. Based in Sydney with Australian work rights.
          </p>
          {/* Resume Button */}
          <a
            href="/Tanishq_Rana_Master_Resume.pdf"
            download="Tanishq_Rana_Master_Resume.pdf"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-2/5 flex justify-center md:justify-end flex-shrink-0">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Tanishq Rana"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
