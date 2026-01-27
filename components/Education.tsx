import { resumeData } from "@/data/resume";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My academic journey
          </p>
        </div>
        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {edu.status === "Pursuing" ? (
                    <FaGraduationCap className="text-4xl text-blue-600 dark:text-blue-400" />
                  ) : (
                    <FaSchool className="text-4xl text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                    {edu.location && `, ${edu.location}`}
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    {edu.percentage && (
                      <span className="font-semibold">
                        Percentage: {edu.percentage}
                      </span>
                    )}
                    {edu.semester && (
                      <span className="font-semibold">{edu.semester}</span>
                    )}
                    {edu.year && (
                      <span className="font-semibold">Year: {edu.year}</span>
                    )}
                    {edu.status && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
