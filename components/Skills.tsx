import { resumeData } from "@/data/resume";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {resumeData.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            Basic knowledge in all the mentioned skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
