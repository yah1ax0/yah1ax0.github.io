import Navbar from "@/components/Navbar"
import img from "./assets/images/img9.jpg"
import proimg1 from "./assets/images/proimage1.png"
import proimg3 from "./assets/images/proimage3.png"
import proimg4 from "./assets/images/proimage4.png"
import TextType from "@/components/TextType"
import { motion } from "framer-motion"
import PageWrapper from "@/components/PageWrapper"
import { Button } from "@/components/ui/button"
import {  FiTwitter, FiGithub } from "react-icons/fi"
import { AiOutlineEye } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl"
import { SiHackerone } from "react-icons/si"

const Home = () => {
  const MotionButton = motion.create(Button)

  const securityLogos = [
    { src: "https://www.kali.org/images/tool-logo-wireshark.svg", alt: "Wireshark" },
    { src: "https://www.kali.org/images/tool-logo-burp.svg", alt: "Burp Suite" },
    { src: "https://www.kali.org/images/tool-logo-nmap.svg", alt: "Nmap" },
    { src: "https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg", alt: "SQLMap" },
    { src: "https://www.kali.org/images/tool-logo-ffuf.svg", alt: "FFUF" },
    { src: "https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg", alt: "Chrome DevTools" },
  ]

  const developmentLogos = [
    { src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", alt: "React" },
    { src: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg", alt: "Vite" },
    { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Tailwind CSS" },
    { src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg", alt: "Node.js" },
    { src: "https://www.vectorlogo.zone/logos/github/github-icon.svg", alt: "GitHub" },
    { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git" },
    { src: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg", alt: "Cloudflare" },
  ]

  const ProjectsArray = [
    {
      title: 'Ecommerce Web Application',
      description: 'Full-featured e-commerce platform with cart, checkout, and payment integration',
      tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
      images: [proimg1],
      livelink: 'https://yahia-shop.netlify.app',
      githublink: '',
    },
    {
      title: 'My Security Articles',
      description: 'In-depth blog posts on web security vulnerabilities and penetration testing techniques',
      tech: ['Medium', 'Security'],
      images: [proimg4],
      livelink: 'https://idkwhoiamx999.medium.com/',
      githublink: '',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and security expertise',
      tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      images: [proimg3],
      livelink: 'https://yahiaportfolio.netlify.app',
      githublink: 'https://github.com/Ykx7/Portfolio',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <PageWrapper>
      <div className="bg-gradient-to-b from-white via-slate-50 to-white">
        <nav>
          <Navbar />
        </nav>

        <div>
          {/* Hero Section */}
          <section id="overview" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="flex flex-col gap-4 md:gap-6" variants={itemVariants}>
                <div>
                  <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2" variants={itemVariants}>
                    Hi, I'm Yahia Khidour
                  </motion.h1>
                  <TextType
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600"
                    text={["Web Application Security", "Penetration Tester", "Security Researcher"]}
                    typingSpeed={100}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                  />
                </div>

                <motion.p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed" variants={itemVariants}>
                  Web Application Security Researcher & Penetration Tester with strong full-stack development expertise. I identify real-world vulnerabilities, build secure applications, and share security insights through bug bounties and responsible disclosures.
                </motion.p>

                {/* <motion.div className="flex flex-wrap gap-3 pt-2" variants={itemVariants}>
                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                   
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8"
                  >
                    <a href="#projects">View My Work</a>
                  </MotionButton>
                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
className="border-2 bg-white border-red-600 text-red-600 hover:bg-red-50"                  >
                    <a href="/yahiakhidourCV.pdf" download="yahiakhidourCV.pdf">
                      Download CV
                    </a>
                  </MotionButton>
                </motion.div> */}
                
              </motion.div>

              {/* <motion.div
                className="flex justify-center md:justify-end"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-2xl opacity-40"></div>
                  <img 
                    src={img} 
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-white rounded-full object-cover shadow-2xl relative z-10" 
                    alt="Yahia Khidour" 
                  />
                </div>
              </motion.div> */}

            </motion.div>
          </section>

          {/* Skills Section */}


              {/* Security Skills */}


          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-blue-50 to-indigo-50">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-16" variants={itemVariants}>
                Featured Projects
              </motion.h2>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
              >
                {ProjectsArray.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                      <img src={project.images[0]} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={project.title} />
                    </div>

                    <div className="p-6 flex flex-col gap-4 flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{project.title}</h3>
                      
                      <p className="text-sm md:text-base text-gray-600 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-2">
                        <motion.a
                          href={project.livelink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          <AiOutlineEye className="w-5 h-5" />
                          Live
                        </motion.a>

                        {project.githublink && (
                          <motion.a
                            href={project.githublink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold"
                            whileHover={{ x: 5 }}
                          >
                            <FiGithub className="w-5 h-5" />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="py-20 px-4 sm:px-6 lg:px-12">
            <motion.div 
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12" variants={itemVariants}>
                About Me
              </motion.h2>

              <motion.div className="space-y-12" variants={containerVariants}>
                {/* Security Expertise */}
                <motion.div className="space-y-4" variants={itemVariants}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-600">Security Researcher</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    I specialize in identifying and exploiting real-world web application vulnerabilities through manual security testing, AI-assisted workflows, and bug bounty hunting. My expertise includes client-side attacks, JavaScript debugging, authentication testing, business logic vulnerabilities, API security, and OWASP Top 10 risks.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="https://hackerone.com/hunterxhunter_" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                      → View HackerOne Profile
                    </a>
                    <a href="https://support.apple.com/fr-cm/122162" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                      → Apple Hall of Fame
                    </a>
                  </div>
                </motion.div>

                {/* Development Background */}
                <motion.div className="space-y-4" variants={itemVariants}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-600">Full-Stack Developer</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    My full-stack development background enables me to approach security from a developer's perspective. I build secure web applications using React, Vite, TailwindCSS, Node.js, Express, and MongoDB, implementing best practices for authentication, authorization, rate limiting, and security headers. This unique perspective allows me to identify vulnerabilities more effectively and communicate practical solutions to development teams.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-blue-200 to-indigo-600">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-8" variants={itemVariants}>
                Let's Connect
              </motion.h2>

              <motion.p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
Let's connect! Whether you have a job opportunity, a security project, or just want to talk about cybersecurity, you can reach me through any of the platforms below.              </motion.p>

              <motion.div className="flex justify-center gap-6 md:gap-8 flex-wrap" variants={containerVariants}>
                <motion.a
                  href="https://www.linkedin.com/in/yahia-khidour-9254a0256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="LinkedIn"
                >
                  <SlSocialLinkedin className="w-6 h-6 text-blue-600" />
                </motion.a>

                <motion.a
                  href="https://github.com/idkwhoiamx999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="GitHub"
                >
                  <FiGithub className="w-6 h-6 text-blue-600" />
                </motion.a>

                <motion.a
                  href="https://x.com/idkwhoiamx999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="Twitter"
                >
                  <FiTwitter className="w-6 h-6 text-blue-600" />
                </motion.a>





                <motion.a
                  href="mailto:yahiakhidour9@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  title="Email"
                >
                  <MdOutlineEmail className="w-6 h-6 text-blue-600" />
                </motion.a>



              </motion.div>

              <motion.p className="text-blue-100 text-sm md:text-base mt-12" variants={itemVariants}>
                © 2024 Yahia Khidour. All rights reserved.
              </motion.p>
            </motion.div>
          </section>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Home
