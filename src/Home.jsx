import { motion } from "framer-motion";
import { SiGithub, SiX, SiLinkedin, SiHackerone, SiYoutube, SiDiscord, SiBluesky, SiMailboxdotorg, SiMailchimp, SiMailgun, SiMinutemailer, SiMaildotcom, SiMaildotru } from "react-icons/si";
import Navbar from "./components/Navbar";
import TextType from "./components/TextType";
import newimg from "./assets/images/img10.jpg";
import { FiMail } from "react-icons/fi";

function Home() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [

    {
      icon: SiX,
      href: "https://x.com/yah1ax0",
      label: "X",
    },
    {
      icon: SiBluesky,
      href: "https://bsky.app/profile/yah1ax0.bsky.social",
      label: "Bluesky",
    },
        {
      icon: SiDiscord,
      href: "https://discord.gg/CbnEd7pQ",
      label: "Discord",
    },
    {
      icon: SiGithub,
      href: "https://github.com/yah1ax0/",
      label: "GitHub",
    },
{
  icon: FiMail,
  href: "mailto:yahiakhidour9@gmail.com",
  label: "Email",
},
    
  ];

  return (
    <>
      <Navbar />

      <main>
        <section className="h-screen flex items-center justify-center px-6 py-20 bg-gray-100">
          <div className="w-full max-w-5xl">

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

              {/* Text */}
              <div className="flex-1 text-center md:text-left">

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">
                    Welcome to my Website!
                  </p>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    Hi, I'm{" "}
                    <span className="text-blue-600">
                      Yah1ax0
                    </span>
                  </h1>

                  <div className="mt-4">
                    <TextType
                      className="text-xl md:text-2xl lg:text-3xl font-bold"
                      text={[
                        "Web Application Security",
                        "Penetration Tester",
                        "Security Researcher",
                      ]}
                      typingSpeed={100}
                      pauseDuration={2000}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                  </div>

                  <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
                  
Explore my journey through cybersecurity and development. Here you'll find my projects, security research, write-ups, and articles covering the things I build, break, and learn along the way.

                  </p>

                  {/* Socials */}
                  <div className="mt-8 flex justify-center md:justify-start gap-5">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          title={social.label}
                          className="text-gray-500 transition-colors hover:text-blue-600"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.a>
                      );
                    })}
                  </div>

                </motion.div>
              </div>

              {/* Profile Image */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={newimg}
                  alt="Yah1ax0"
                  className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-blue-600/20 shadow-xl"
                />
              </motion.div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;