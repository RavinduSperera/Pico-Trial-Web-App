// src/pages/LandingPage.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navigation - now sticky */}
        <nav
            className={`px-6 py-4 sm:px-10 sm:py-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50 transition-all ${
                scrolled ? "shadow-md" : "shadow-sm"
            }`}
        >
          <div className="flex items-center">
            <svg
                className="h-8 w-8 text-[#117a65]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l7-7 3 3-7 7-3-3z"
              />
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
              />
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 2l7.586 7.586"
              />
              <circle cx="11" cy="11" r="2" />
            </svg>
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Pico Trail</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/trail-info" className="text-gray-600 hover:text-[#117a65] font-medium">
              Trail Info
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-[#117a65] font-medium">
              Gallery
            </Link>
            <Link to="/plan-trip" className="text-gray-600 hover:text-[#117a65] font-medium">
              Plan Your Trip
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#117a65] font-medium">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                  className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                  className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
                to="/login"
                className="px-4 py-2 text-[#117a65] font-medium rounded-md hover:bg-[#f5f5f5] transition-colors"
            >
              Sign In
            </Link>
            <Link
                to="/register"
                className="px-4 py-2 bg-[#117a65] text-white font-medium rounded-md hover:bg-[#138d75] transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
                to="/trail-info"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#117a65] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
            >
              Trail Info
            </Link>
            <Link
                to="/gallery"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#117a65] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
                to="/plan-trip"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#117a65] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
            >
              Plan Your Trip
            </Link>
            <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#117a65] hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#117a65] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#117a65] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section - Updated without image */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="relative z-10 py-16 sm:py-24 md:py-32"
            >
              <main className="mx-auto">
                <div className="text-center">
                  <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  >
                    <span className="block">Discover the Majestic</span>
                    <span className="block text-[#117a65]">Pico Trail</span>
                  </motion.h1>
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                  >
                    Experience one of Sri Lanka's most breathtaking hiking trails through misty mountains and lush forests.
                  </motion.p>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="mt-5 sm:mt-8 sm:flex sm:justify-center"
                  >
                    <div className="rounded-md shadow">
                      <Link
                          to="/register"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#117a65] hover:bg-[#138d75] md:py-4 md:text-lg md:px-10"
                      >
                        Plan Your Hike
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                          to="/trail-info"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#117a65] bg-[#e8f5f2] hover:bg-[#d0ebe5] md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </main>
            </motion.div>
          </div>
        </section>

        {/* Features Section with animations */}
        <section className="py-12 bg-[#f8faf9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:text-center"
            >
              <h2 className="text-base text-[#117a65] font-semibold tracking-wide uppercase">Trail Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Hike the Pico Trail?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                A journey through Sri Lanka's most spectacular mountain scenery.
              </p>
            </motion.div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    icon: (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                    ),
                    title: "Breathtaking Views",
                    description: "Panoramic vistas of Sri Lanka's central highlands from the summit.",
                  },
                  {
                    icon: (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                    ),
                    title: "Unique Biodiversity",
                    description: "Encounter rare flora and fauna endemic to Sri Lanka's cloud forests.",
                  },
                  {
                    icon: (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                    ),
                    title: "Well-Maintained Path",
                    description: "Clearly marked trail with rest points and information boards.",
                  },
                  {
                    icon: (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                    ),
                    title: "Misty Cloud Forests",
                    description: "Experience the magical atmosphere of Sri Lanka's montane forests.",
                  },
                ].map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#117a65] text-white">
                        {feature.icon}
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                      <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trail Difficulty Section with animations */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:text-center"
            >
              <h2 className="text-base text-[#117a65] font-semibold tracking-wide uppercase">Trail Information</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Trail Difficulty & Preparation
              </p>
            </motion.div>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: (
                      <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                  ),
                  title: "Moderate Difficulty",
                  description:
                      "The Pico Trail is rated as moderate, suitable for hikers with some experience. Expect 5-6 hours of hiking round trip.",
                },
                {
                  icon: (
                      <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                  ),
                  title: "What to Bring",
                  description:
                      "Sturdy hiking boots, rain jacket, water (2L minimum), snacks, sunscreen, and a camera for the stunning views.",
                },
                {
                  icon: (
                      <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                  ),
                  title: "Best Time to Hike",
                  description:
                      "January to April offers the clearest views. Start early (6-7am) to avoid afternoon clouds and potential rain.",
                },
              ].map((item, index) => (
                  <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-[#f8faf9] p-6 rounded-lg shadow"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#16a085] rounded-md p-2">
                        {item.icon}
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-gray-900">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-base text-gray-500">{item.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with animation */}
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#117a65]"
        >
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready for Adventure?</span>
              <span className="block">Plan Your Pico Trail Hike Today</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-[#c1e0d9]">
              Join hundreds of hikers who've experienced this unforgettable Sri Lankan treasure.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                  to="/register"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#117a65] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
              <Link
                  to="/plan-trip"
                  className="ml-3 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#138d75] hover:bg-[#16a085] md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-[#f8faf9]">
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
              <div className="px-5 py-2">
                <Link to="/about" className="text-base text-gray-600 hover:text-[#117a65]">
                  About
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link to="/blog" className="text-base text-gray-600 hover:text-[#117a65]">
                  Blog
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link to="/safety" className="text-base text-gray-600 hover:text-[#117a65]">
                  Safety
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link to="/faq" className="text-base text-gray-600 hover:text-[#117a65]">
                  FAQ
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link to="/contact" className="text-base text-gray-600 hover:text-[#117a65]">
                  Contact
                </Link>
              </div>
              <div className="px-5 py-2">
                <Link to="/terms" className="text-base text-gray-600 hover:text-[#117a65]">
                  Terms
                </Link>
              </div>
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#117a65]">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#117a65]">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.059v-.07c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} Pico Trail Guide. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
}