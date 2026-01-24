import { resumeData } from "@/data/resume";
import { FaUser, FaLanguage, FaHeart, FaTrophy } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Strengths */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaTrophy className="text-3xl text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Strengths
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {resumeData.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg text-center"
                >
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {strength}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaLanguage className="text-3xl text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Languages
              </h3>
            </div>
            <div className="space-y-4">
              {resumeData.languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg"
                >
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {lang.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {lang.proficiency}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="md:col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaHeart className="text-3xl text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Hobbies
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {resumeData.hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-600 dark:to-gray-500 p-4 rounded-lg flex-1 min-w-[200px] text-center"
                >
                  <p className="font-semibold text-gray-800 dark:text-white">
                    {hobby}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
