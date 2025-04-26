"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Maximize2 } from "lucide-react"

// Ejemplo de proyectos - estos deberían ser reemplazados con proyectos reales
const projectsData = [
  {
    id: 1,
    title: "Tienda virtual de reposteria",
    description: "Creacion de una tienda virtual de reposteria con Next.js, Tailwind CSS la cual permitiera a los clientes hacer pedidos via whatsapp",
    image: "proyecto1.png?height=600&width=800",
    category: "Web",
    link: "https://repostisur.vercel.app",
  },
  {
    id: 2,
    title: "Aplicación Web para adivinar el anime",
    description: "Desarrollo de una aplicacion web para adivinar el anime seleccionado al azar",
    image: "/anime-guessing-game.jpg?height=600&width=800",
    category: "Web",
    link: "https://anime-guessing-game.vercel.app",
  },
  {
    id: 3,
    title: "Diseño e impresion del logo de FVF",
    description: "Diseño e impresion del logo de FVF para imprimir en 3D",
    image: "https://images.cults3d.com/wanaE7FRox7Lk0VLO7sqNjZVYSc=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/34409694/illustration-file/736ea743-50da-40f4-ba66-df5c8971dad6/photo_5078039194290466361_y.jpg?height=600&width=800",
    category: "3D",
    link: "https://cults3d.com/es/modelo-3d/joyas/pendiete-dige-federacion-venezolana-de-futbol",
  },
  {
    id: 4,
    title: "Creacion de contenido para instagram",
    description: "Creacion de contenido para instagram con fotografias y videos, para tienda de impresion 3D y personlizados.",
    image: "/dospuntostres.png?height=600&width=800",
    category: "Contenido",
    link: "https://www.instagram.com/somosdospuntostres/",
  },
  /*{
    id: 5,
    title: "Dashboard Interactivo",
    description: "Desarrollo de un dashboard para visualización de datos con JavaScript.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    link: "#",
  },
  {
    id: 6,
    title: "Prototipo Funcional",
    description: "Diseño e impresión de un prototipo funcional para un cliente del sector industrial.",
    image: "/placeholder.svg?height=600&width=800",
    category: "3D",
    link: "#",
  },*/
]

const categories = ["Todos", "3D", "Web", "Contenido"]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === "Todos" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Mis Proyectos
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 bg-purple-600 rounded-full text-white"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 text-xs bg-blue-900/50 text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Ver proyecto <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal para ver proyecto */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-gray-800 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full inline-flex items-center gap-2"
                  >
                    Ver proyecto <ExternalLink size={16} />
                  </a>
                  <a
                    href="#"
                    className="px-6 py-2 border border-gray-700 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    Código <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
