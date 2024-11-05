'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Home, User, Briefcase, Wrench, Github, Mail, Sun, Moon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NextImage from "next/image"
import Head from "next/head"

import gitprofile from "./assets/profile/gitprofile.jpeg"
import cardprofile from "./assets/profile/cardprofile.jpeg"
import profile from "./assets/profile/profile.jpeg"
import ecom from "./assets/projects/ecom.png"
import chip8 from "./assets/projects/chip8.png"
import app from "./assets/projects/ecomapp.png"
import comic from "./assets/projects/comic.png"
import rustchat from "./assets/projects/rustchat.png"
import sveltechat from "./assets/projects/sveltechat.png"
import favnext from "./favicon.ico"

const techStack = [
  {name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"},
  {name : "PocketBase" , icon : "https://pocketbase.io/images/logo.svg"},
  {name : "Supabase" , icon : "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"},
  {name : "Next.js" , icon : favnext},
  {name : "Rust" , icon : "https://rustacean.net/assets/rustacean-orig-noshadow.svg"},
  {name : "Flutter" , icon : "https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg"},
  {name : "React Native" , icon : "https://reactnative.dev/img/header_logo.svg"},
  {name : "C programming" , icon : "https://upload.wikimedia.org/wikipedia/commons/d/d8/C_Language_Logo.svg"},
  {name : "TailwindCss" , icon : "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},
  {name : "Python", icon : "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"}
]

const projects = [
  { id: 1, name: "E-commerce Website 🛍️", description: "An e-commerce fullstack website sample built using Next.js & pocketbase🐻", image: ecom, link: "https://github.com/ayoubbijarche/fashion-store-sample" },
  { id: 2, name: "Chip-8 Emulator 🖳 ", description: "A chip-8 emulator that takes you back to the 70s using rust-lang 🦀", image: chip8, link: "https://github.com/ayoubbijarche/chip8emu-rust" },
  { id: 3, name: "E-commerce Mobile app 📱", description: "A full stack e-commerce mobile app made with flutter & pocketbase🐻", image: app, link: "https://github.com/ayoubbijarche/ecommerce-fullstack-app" },
  { id: 4, name: "Manga Store 📖", description: "A full comic & manga store e-commerce homepage build in Next.js", image: comic, link: "https://github.com/ayoubbijarche/manga-shop" },
  { id: 5, name: "Rocket's🚀 chat app", description: "A full stack chat app made using rocketframework in rust", image: rustchat, link: "https://github.com/ayoubbijarche/rust-chat-app" },
  { id: 6, name: "Svelte chat app 💬", description: "A full stack chat app made with svelte & pocketbase🐻", image: sveltechat, link: "https://github.com/ayoubbijarche/svelte-pocketbase-chatapp" },
]

const GlowingElement = ({ color, size, left, top, delay } : { color : string, size : any , left : any, top : any, delay : any }) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      className={`absolute rounded-full blur-xl opacity-1 ${color} ${size}`}
      style={{ left, top }}
      animate={shouldReduceMotion ? {} : {
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  const handleTabChange = useCallback((tab : any ) => {
    setActiveTab(tab)
  }, [])

  // Preload images
  useEffect(() => {
    const imageUrls = [
      ...projects.map(project => project.image),
      ...techStack.map(tech => tech.icon),
      gitprofile,
      cardprofile,
      profile
    ]

    imageUrls.forEach(src => {
      const img = new Image()
      img.src = typeof src === 'string' ? src : src.src
    })
  }, [])

  return (
    <>
      <Head>
        {projects.map(project => (
          <link key={project.id} rel="preload" href={typeof project.image === "string" ? project.image : project.image.src} as="image" />
        ))}
        {techStack.map(tech => (
          <link key={tech.name} rel="preload" href={typeof tech.icon === "string" ? tech.icon : tech.icon.src} as="image" />
        ))}
      </Head>
      <div
        className={`min-h-screen flex flex-col justify-between p-4 transition-colors duration-200 ${
          isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        } font-roboto`}
      >
        {/* Background and glowing elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-5 blur-3xl"></div>
          <GlowingElement color="bg-blue-400" size="w-32 h-32" left="10%" top="20%" delay={0} />
          <GlowingElement color="bg-red-500" size="w-40 h-40" left="70%" top="60%" delay={1.5} />
          <GlowingElement color="bg-purple-400" size="w-24 h-24" left="20%" top="80%" delay={1} />
          <GlowingElement color="bg-orange-400" size="w-40 h-40" left="85%" top="15%" delay={2.5} />
        </div>

        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className={isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center pb-24">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HomeContent isDarkMode={isDarkMode} isExpanded={isExpanded} setIsExpanded={setIsExpanded} shouldReduceMotion={shouldReduceMotion} />}
            {activeTab === "about" && <AboutContent isDarkMode={isDarkMode} shouldReduceMotion={shouldReduceMotion} />}
            {activeTab === "portfolio" && <PortfolioContent isDarkMode={isDarkMode} shouldReduceMotion={shouldReduceMotion} />}
            {activeTab === "tech" && <TechContent isDarkMode={isDarkMode} shouldReduceMotion={shouldReduceMotion} />}
          </AnimatePresence>
        </main>

        {/* Floating Navbar */}
        <FloatingNavbar activeTab={activeTab} handleTabChange={handleTabChange} isDarkMode={isDarkMode} />

        <style jsx>{`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
          .wave {
            display: inline-block;
            animation: wave 2.5s infinite;
            transform-origin: 70% 70%;
          }
        `}</style>
      </div>
    </>
  )
}

const HomeContent = ({ isDarkMode, isExpanded, setIsExpanded, shouldReduceMotion } : any ) => (
  <motion.div
    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="relative"
    onMouseEnter={() => setIsExpanded(true)}
    onMouseLeave={() => setIsExpanded(false)}
  >
    {/* Glassy effect */}
    <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl"></div>

    {/* Text Content */}
    <motion.div
      className={`relative p-8 rounded-3xl shadow-lg ${
        isDarkMode ? "bg-[#171717] bg-opacity-20" : "bg-white bg-opacity-70"
      } flex flex-col items-center justify-center text-center`}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-2">
        Hey, I'm <span className="bg-blue-500 px-2 py-1 rounded-md inline-block">Ayoub<span className="wave ml-1">👋</span></span>
      </h1>
      <h2 className="text-2xl font-bold mb-2">
        I'm a <span className="bg-[#f6984d] px-2 py-1 rounded-md inline-block">Software Developer,</span>
      </h2>
      <h3 className="text-2xl font-bold mb-4">
        a <span className="bg-purple-500 px-2 py-1 rounded-md inline-block">Freelancer🕊️.</span>
      </h3>
    </motion.div>

    {/* Surrounding elements on click */}
    <AnimatePresence>
      {isExpanded && (
        <>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute -left-52 top-[10%] transform -translate-y-[45%] -translate-x-full"
          >
            <Card className="w-40">
              <CardContent className="p-4 flex flex-col items-center">
                <NextImage
                  src={cardprofile}
                  alt="Ayoub"
                  width={100}
                  height={100}
                  className="rounded-full mb-2"
                  priority
                />
                <span className="font-semibold text-sm">Ayoub</span>
                <span className="text-xs text-muted-foreground">Software Developer</span>
              </CardContent>
            </Card>
            <div className="w-16 h-0.5 bg-blue-500 absolute top-1/2 -right-16"></div>
          </motion.div>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-5 left-[110%] transform -translate-x-1/2 flex flex-col items-center space-y-5"
          >
            <Card className="w-40">
              <CardContent className="p-4 flex flex-col items-center">
                <NextImage
                  src={gitprofile}
                  alt="GitHub Profile"
                  width={80}
                  height={80}
                  className="rounded-full mb-2"
                  priority
                />
                <span className="font-semibold text-sm mb-2">ayoubbijarche</span>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>
            <div className="flex space-x-4">
              <a href="mailto:ayoubbijarche6@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </a>
              <a  href="https://www.fiverr.com/bi_ayoub/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-[#50caa3]">
                    <h1 className="font-bold text-white">F</h1>
                </Button>
              </a>
              <a href="https://www.upwork.com/freelancers/~019f2d8062659aa24e" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="bg-[#37A000]">
                  <h1 className="font-bold text-white">U</h1>
                </Button>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </motion.div>
)

const AboutContent = ({ isDarkMode, shouldReduceMotion } : any ) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NextImage
            src={profile}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
            priority
          />
        </motion.div>
      </div>
      <div className="md:col-span-2">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            I'm Ayoub, a software developer from Morocco. I work with a variety of technologies like  Rust, C, TypeScript, and Next.js. I enjoy building applications using Pocketbase and Supabase, and I also develop mobile apps with React Native and Flutter. I love exploring new tools and frameworks to enhance my skills and create innovative solutions.
          </p>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mt-6 mb-3">Hire Me!</h3>
          <div className="flex space-x-4">
            <a href="https://www.fiverr.com/bi_ayoub/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Fiverr</Button>
            </a>
            <a href="https://www.upwork.com/freelancers/~019f2d8062659aa24e" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Upwork</Button>
            </a>
            <a href="mailto:ayoubbijarche6@gmail.com">
              <Button variant="outline">
                Email Me
              </Button>
           </a>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
)

const PortfolioContent = ( { isDarkMode, shouldReduceMotion } : any ) => (
  <motion.div
    key="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
  >
    <h2 className="text-2xl font-bold mb-4">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: project.id * 0.1 }}
          className={`border rounded-lg overflow-hidden ${isDarkMode ? "border-[#141414] " : "border-gray-200"}`}
        >
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-lg bg-white">
            <NextImage
              src={project.image}
              alt={project.name}
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
              style={{ borderRadius: '0.5rem' }}
              priority
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{project.name}</h3>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {project.description}
            </p>
            <div className="flex space-x-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  View Source
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const TechContent = ({ isDarkMode, shouldReduceMotion } : any) => (
  <motion.div
    key="tech"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
  >
    <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`p-4 rounded-lg ${isDarkMode ? "bg-black" : "bg-gray-100"} flex flex-col items-center justify-center`}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, zIndex: 1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <NextImage
            src={tech.icon}
            alt={tech.name}
            width={48}
            height={48}
            className="mb-2"
            priority
          />
          <span className="font-medium text-center font-semibold text-sm">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const FloatingNavbar = ({ activeTab, handleTabChange, isDarkMode } : any ) => (
  <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
    <motion.div
      className={`rounded-2xl shadow-lg p-2 flex space-x-2 bg-opacity-30 backdrop-blur-md ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.5 }}
    >
      <NavItem
        icon={<Home />}
        isActive={activeTab === "home"}
        onClick={() => handleTabChange("home")}
        color="bg-[#3b82f6]"
      />
      <NavItem
        icon={<User />}
        isActive={activeTab === "about"}
        onClick={() => handleTabChange("about")}
        color="bg-green-500"
      />
      <NavItem
        icon={<Briefcase />}
        isActive={activeTab === "portfolio"}
        onClick={() => handleTabChange("portfolio")}
        color="bg-yellow-500"
      />
      <NavItem
        icon={<Wrench />}
        isActive={activeTab === "tech"}
        onClick={() => handleTabChange("tech")}
        color="bg-purple-500"
      />
    </motion.div>
  </nav>
)

const NavItem = ({ icon, isActive, onClick, color } : any) => (
  <motion.button
    className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all overflow-hidden`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className={`absolute inset-0 ${isActive ? color : 'bg-transparent'} bg-opacity-80`}></div>
    <div className={`relative z-10 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-300'}`}>
      {icon}
    </div>
  </motion.button>
)
