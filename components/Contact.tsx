import { resumeData } from "@/data/resume";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                    <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {resumeData.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                    <FaPhone className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${resumeData.phone}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {resumeData.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-2xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {resumeData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
