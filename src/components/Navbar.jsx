
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    // { label: "Projects", href: "/projects" },
  ];

  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="mx-auto mt-4 max-w-6xl">

          <div className="flex h-16 items-center justify-between rounded-2xl border border-gray-200/70 bg-gray-200 px-5 shadow-sm backdrop-blur-xl sm:px-7">

            {/* Logo */}
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
            >
              Yah<span className="text-blue-600">1a</span>
            </a>


            {/* Desktop Navigation */}
            <div className="hidden items-center gap-3 md:flex">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl border border-gray-300 bg-white/60 px-7 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow"
                >
                  {link.label}
                </a>
              ))}

            </div>


            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>

          </div>


          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-2 overflow-hidden rounded-2xl border border-gray-200/70 bg-white/95 shadow-lg backdrop-blur-xl md:hidden"
              >
                <div className="space-y-1 p-3">

                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
