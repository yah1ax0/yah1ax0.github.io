import Navbar from "@/components/Navbar"
import img from "./assets/images/img9.jpg"
import proimg1 from "./assets/images/proimage1.png"
import proimg2 from "./assets/images/proimage2.png"
import proimg3 from "./assets/images/proimage3.png"
import TextType from "@/components/TextType"
import { motion } from "framer-motion"
import PageWrapper from "@/components/PageWrapper"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Eye } from "lucide-react"
import { FiGithub } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import Contact from "@/components/Contact"


const Home = () => {


  const MotionButton = motion(Button)



  const securityLogos = [
    { src: "https://www.kali.org/images/tool-logo-wireshark.svg", alt: "Company 1", href: "https://www.kali.org/images/tool-logo-wireshark.svg" },
    { src: "https://www.kali.org/images/tool-logo-burp.svg", alt: "Company 2" },
    { src: "https://www.kali.org/images/tool-logo-nmap.svg", alt: "Company 3" },
    { src: "https://www.kali.org/tools/sqlmap/images/sqlmap-logo.svg", alt: "Company 4" },
    { src: "https://www.kali.org/images/tool-logo-ffuf.svg", alt: "Company 5" },
    { src: "https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg", alt: "Company 6" },

    // { src: "https://www.vectorlogo.zone/logos/hackerone/hackerone-ar21.svg", alt: "Company 7"},
  ];


  const developmentLogos = [
    { src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg", alt: "Company 1" },
    { src: "https://www.vectorlogo.zone/logos/vitejsdev/vitejsdev-icon.svg", alt: "Company 2" },
    { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Company 3" },
    { src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg", alt: "Company 4" },
    // { src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg", alt: "Company 5"},
    { src: "https://www.vectorlogo.zone/logos/github/github-icon.svg", alt: "Company 6" },
    { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Company 7" },
    { src: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg", alt: "Company 7" },

    // { src: "https://www.vectorlogo.zone/logos/hackerone/hackerone-ar21.svg", alt: "Company 7"},
  ];



  const ProjectsArray = [
    {
      title: 'Ecommerce Web Application With Full Features', tech: ['React', 'Tailwind', 'Nodejs', 'Express', 'MongoDB'], images: [proimg1, ''], livelink: 'https://yahia-shop.netlify.app', githublink: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
    },
    {
      title: 'Mini Ecommerce Web Application', tech: ['Vite', 'Tailwind', 'Nodejs', 'Express', 'MongoDB'], images: [proimg2, ''], livelink: 'https://yahiastore.netlify.app/', githublink: '',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
    },
    {
      title: 'My Portfolio', tech: ['Vite', 'Tailwind', 'Framer Motion', 'Shadcn'], images: [proimg3, ''], livelink: 'https://yahiaportfolio.netlify.app', githublink: 'https://github.com/Ykx7/Portfolio',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
    },





  ]




  return (
    <PageWrapper>
      <div>

        <nav>
          <Navbar />
        </nav>


        <div>

          <section id="overview" className="h-screen flex items-center justify-between px-64">
            <div className="flex flex-col gap-2">
              <span className="text-4xl">Hi Im Yahia Khidour</span>
              <TextType
                className="text-4xl font-bold"
                text={["Web Application Security", "Penetration Tester", "Security Researcher"]}
                typingSpeed={150}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />

              <p className="text-ellipsis max-w-xl">

                {/* Frontend Developer & Penetration Tester & Strong Understand For Backend — passionate about creating modern, responsive applications while securing them with best practices. With hands-on experience in bug hunting at hackerone I bring both development skills and a security-first mindset to every project. */}

                Web Application Security Researcher & Penetration Tester with a strong full-stack development background and deep understanding of backend technologies. Passionate about building secure, modern applications and identifying real-world vulnerabilities before attackers do. With hands-on bug bounty experience on HackerOne and responsible disclosures to major organizations, I bring both an offensive security mindset and practical development knowledge to every project.

              </p>


              <div className="flex gap-2 pt-3">

                <MotionButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}

                >
                  View My Work
                </MotionButton>
                <MotionButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href="/cv.pdf"
                    download="cv.pdf"
                  >
                    Download CV
                  </a>
                </MotionButton>
              </div>




            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src={img} className="w-72 h-72 border-2 border-gray-400 rounded-full object-cover shadow-2xl shadow-black" alt="" />
            </motion.div>
          </section>






          <section id="skills" className="h-screen flex flex-col items-center justify-center gap-10 overflow-x-hidden">
            <span className="text-4xl font-bold pb-10">Skills</span>


            <span className="text-2xl">Security</span>


            <div className="flex gap-32">
              {securityLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={logo.src} alt={logo.alt} className="w-20 h-20" />
                </motion.div>
              ))}
            </div>





            <span className="text-2xl">Development</span>

            <div className="flex gap-32">
              {developmentLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={logo.src} alt={logo.alt} className="w-20 h-20" />
                </motion.div>
              ))}
            </div>

          </section>













          <section id="projects" className="h-screen px-20 flex items-center">
            <div className="space-y-10">

              <span className="text-4xl font-bold flex justify-center">My Projects</span>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                {ProjectsArray.map((project, index) => (

                  <div
                    key={index} className="max-w-[425px] min-h-[400px] shadow-2xl rounded-2xl hover:scale-105 transition-all duration-500">

                    <img src={project.images[0]} className="w-full h-1/2 rounded-t-xl" alt="" />

                    <div className="p-4 flex flex-col gap-5">
                      <span className="flex justify-center text-xl font-bold">{project.title}</span>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="rounded-full p-1 bg-gray-100">{tech}</span>
                        ))}
                      </div>

                      <div className="flex gap-3">

                        <Link to={project.livelink}>
                          <AiOutlineEye className="w-6 h-6" />
                        </Link>

                        <Link to={project.githublink}>
                          <FiGithub className="w-6 h-6" />
                        </Link>

                      </div>

                    </div>
                  </div>
                ))}
              </div>




            </div>
          </section>







          <section id="resume" className="h-screen flex flex-col items-center justify-center gap-10">
            <span className="text-4xl font-bold">Resume</span>




            <span className="text-3xl">Web Application Security Researcher & Penetration Tester</span>


            <div className="flex flex-col gap-5 ">
              <p className="max-w-[900px] text-lg">

I specialize in identifying and exploiting real-world web application vulnerabilities through manual security testing, AI-assisted workflows, bug bounty hunting, and security research. My expertise includes client-side attacks, JavaScript debugging and analysis, authentication and authorization testing, business logic vulnerabilities, API security, account takeover, and the OWASP Top 10 risks.

Alongside offensive security, I build automation tools and Bash scripts that streamline reconnaissance, testing, and repetitive security tasks, allowing me to work more efficiently while continuously expanding my technical skills. Combined with my full-stack development background, this enables me to understand applications from both a developer's and an attacker's perspective.

              </p>
            </div>


            <span className="font-semibold">My Hackerone Account: <a className="font-bold" href="https://hackerone.com/hunterxhunter_">Hacker One</a></span>
            <span className="font-semibold">Apple Hall Of Fame In Décembre 2023 Yahya Khidour (Dz): <a className="font-bold" href="https://support.apple.com/fr-cm/122162">Apple</a></span>



            <span className="text-3xl">Full-Stack Development Background</span>

            <div className="flex flex-col gap-5 ">
              <p className="max-w-[900px] text-lg">

                My background in full-stack development allows me to approach security from a developer's perspective. I have built modern web applications using React, Vite, TailwindCSS, Node.js, Express, and MongoDB, implementing secure authentication, authorization, rate limiting, CAPTCHA protection, security headers, and other security best practices.

                Understanding both how applications are built and how they can be attacked enables me to identify vulnerabilities more effectively and communicate practical remediation to developers.

              </p>









            </div>


          </section>







          <section id="contact" className="h-screen flex flex-col items-center justify-center gap-6">
            <span className="text-4xl font-bold">Contact</span>

            <div>
              <Contact />
            </div>

          </section>




        </div>

      </div>
    </PageWrapper>
  )
}

export default Home