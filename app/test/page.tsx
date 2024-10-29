'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  User,
  Briefcase,
  Wrench,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  ExternalLink,
  BookOpen,
  GraduationCap,
  Book,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const techStack = [
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Docker", icon: "/docker.svg" },
  { name: "GraphQL", icon: "/graphql.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
]

const projects = [
  { id: 1, name: "Project 1", description: "An e-commerce fullstack website sample built using Next.js & pocketbase", image: "/placeholder.svg?height=200&width=300" },
  { id: 2, name: "Project 2", description: "A chip-8 emulator that takes you back to the 80s using rust-lang 🦀", image: "/placeholder.svg?height=200&width=300" },
  { id: 3, name: "Project 3", description: "A mobile app developed with React Native", image: "/placeholder.svg?height=200&width=300" },
  { id: 4, name: "Project 4", description: "A machine learning model for image classification", image: "/placeholder.svg?height=200&width=300" },
  { id: 5, name: "Project 5", description: "A machine learning model for image classification", image: "/placeholder.svg?height=200&width=300" },
  { id: 6, name: "Project 6", description: "A machine learning model for image classification", image: "/placeholder.svg?height=200&width=300" },
  { id: 7, name: "Project 7", description: "A machine learning model for image classification", image: "/placeholder.svg?height=200&width=300" },
]

const GlowingElement = ({ color, size, left, top, delay }) => (
  <motion.div
    className={`absolute rounded-full blur-xl opacity-1 ${color} ${size}`}
    style={{ left, top }}
    animate={{
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

export default function Component() {
  const [activeTab, setActiveTab] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <div
      className={`min-h-screen flex flex-col justify-between p-4 transition-colors duration-200 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      } font-roboto`}
    >
      {/* Subtle background blur/glow effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-5 blur-3xl"></div>
      </div>

      {/* Glowing elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pb-24">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
            >
              {/* Glassy effect */}
              <div
                className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl"
              ></div>

              {/* Text Content */}
              <div
                className={`relative p-8 rounded-3xl shadow-lg ${
                  isDarkMode ? "bg-[#171717] bg-opacity-20" : "bg-white bg-opacity-70"
                } flex flex-col items-center justify-center text-center`}
              >
                <h1 className="text-2xl font-bold mb-2">
                  Hey, I'm <span className="bg-blue-500 px-2 py-1 rounded-md inline-block">Ayoub🧑🏻‍💻</span>
                </h1>
                <h2 className="text-2xl font-bold mb-2">
                  I'm a <span className="bg-[#f6984d] px-2 py-1 rounded-md inline-block">Software Developer,</span>
                </h2>
                <h3 className="text-2xl font-bold mb-4">
                  a <span className="bg-purple-500 px-2 py-1 rounded-md inline-block">Freelancer🕊️.</span>
                </h3>
              </div>

              {/* Surrounding elements on click */}
              <AnimatePresence>
                {isExpanded && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -left-52 top-[10%] transform -translate-y-[45%] -translate-x-full"
                    >
                      <Card className="w-40">
                        <CardContent className="p-4 flex flex-col items-center">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Ayoub"
                            width={100}
                            height={100}
                            className="rounded-full mb-2"
                          />
                          <span className="font-semibold text-sm">Ayoub</span>
                          <span className="text-xs text-muted-foreground">Software Developer</span>
                        </CardContent>
                      </Card>
                      <div className="w-16 h-0.5 bg-blue-500 absolute top-1/2 -right-16"></div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
                    >
                      <Card>
                        <CardContent className="p-4 flex space-x-4">
                          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                              <Github className="h-4 w-4" />
                            </Button>
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                              <Linkedin className="h-4 w-4" />
                            </Button>
                          </a>
                          <a href="mailto:your.email@example.com">
                            <Button variant="outline" size="icon">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </a>
                          <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                          <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="icon">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                      <div className="w-0.5 h-5 bg-blue-500 absolute -top-5 left-1/2 transform -translate-x-1/2"></div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === "about" && (
            <div
              className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Profile"
                      width={300}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      I'm Ayoub, a software developer from Morocco. I work with a variety of technologies like Rust, C, TypeScript, and Next.js. I enjoy building applications using Pocketbase and Supabase, and I also develop mobile apps with React Native and Flutter. I love exploring new tools and frameworks to enhance my skills and create innovative solutions.
                    </p>
                    <div className={`mb-6`}>
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Education</h3>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <p className="text-black dark:text-white">Undergraduate</p>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Book className="w-5 h-5 text-primary" />
                        <p className="text-black dark:text-white">Self-taught</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h3 className="text-2xl font-semibold mt-6 mb-3">Hire Me!</h3>
                    <div className="flex space-x-4">
                      <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">Fiverr</Button>
                      </a>
                      <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">Upwork</Button>
                      </a>
                      <a href="mailto:your.email@example.com">
                        <Button variant="outline">Email Me</Button>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
            >
              <h2 className="text-2xl font-bold mb-4">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: project.id * 0.1 }}
                    className={`border rounded-lg overflow-hidden ${isDarkMode ? "border-[#141414] " : "border-gray-200"}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{project.name}</h3>
                      <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Project
                        </Button>
                        
                        <Button variant="outline" 
                         size="sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read Blog
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`p-8 rounded-3xl shadow-lg max-w-4xl ${isDarkMode ? "bg-[#171717]" : "bg-white"}`}
            >
              <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`p-4 rounded-lg ${isDarkMode ? "bg-black" : "bg-gray-100"} flex flex-col items-center justify-center`}
                    whileHover={{ scale: 1.05, zIndex: 1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="mb-2"
                    />
                    <span className="font-medium text-center text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Navbar */}
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
            onClick={() => setActiveTab("home")}
            color="bg-[#3b82f6]"
          />
          <NavItem
            icon={<User />}
            isActive={activeTab === "about"}
            onClick={() => setActiveTab("about")}
            color="bg-green-500"
          />
          <NavItem
            icon={<Briefcase />}
            isActive={activeTab === "portfolio"}
            onClick={() => setActiveTab("portfolio")}
            color="bg-yellow-500"
          />
          <NavItem
            icon={<Wrench />}
            isActive={activeTab === "tech"}
            onClick={() => setActiveTab("tech")}
            color="bg-purple-500"
          />
        </motion.div>
      </nav>
    </div>
  )
}

function NavItem({
  icon,
  isActive,
  onClick,
  color,
}: {
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
  color: string
}) {
  return (
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
}