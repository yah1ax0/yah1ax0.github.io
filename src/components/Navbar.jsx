import { useState } from "react"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"
import { SlSocialLinkedin } from "react-icons/sl"
import { SiHackerone } from "react-icons/si"
import { FiGithub, FiTwitter, FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: SlSocialLinkedin, href: "https://www.linkedin.com/in/yahia-khidour-9254a0256/", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com/idkwhoiamx999/", label: "GitHub" },
    { icon: FiTwitter, href: "https://x.com/idkwhoiamx999", label: "Twitter" },
    { icon: SiHackerone, href: "https://hackerone.com/hunterxhunter_?type=user", label: "HackerOne" },
  ]

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            Yahia Kh
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className="px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition font-medium"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-gray-200 flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar