import { resumeData } from "@/data/resume";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/80 via-white/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                {resumeData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {resumeData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8 font-semibold">
            {resumeData.title}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            {resumeData.profile}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaEnvelope />
              <span>{resumeData.email}</span>
            </a>
            <a
              href={`tel:${resumeData.phone}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaPhone />
              <span>{resumeData.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{resumeData.location}</span>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
