import { resumeData } from "@/data/resume";
import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Mini projects showcasing my skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => {
            const isYouTubeManagement =
              project.title.toLowerCase().includes("youtube management");

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <FaCode className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center text-blue-600 dark:text-blue-400">
                    <FaGithub className="mr-2" />
                    <span className="text-sm font-semibold">Mini Project</span>
                  </div>
                  {isYouTubeManagement && (
                    <a
                      href="/youtube-management-system"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-purple-700 dark:text-purple-200 hover:text-purple-900 dark:hover:text-white"
                    >
                      Live demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
