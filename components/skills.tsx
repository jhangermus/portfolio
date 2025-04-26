"use client"

import { useState } from "react"
import { Users, Cpu, Palette, Code, Lightbulb, MessageSquare, Users2, Briefcase, PenTool } from "lucide-react"

const skillCategories = [
  {
    name: "Habilidades Técnicas",
    icon: <Cpu className="text-blue-400" size={24} />,
    skills: [
      { name: "CSS", icon: <Code className="text-blue-400" size={24} /> },
      { name: "Javascript", icon: <Code className="text-yellow-400" size={24} /> },
      { name: "Modelado 3D (Fusion 360, TinkerCAD)", icon: <PenTool className="text-green-400" size={24} /> },
      { name: "Impresión FDM y SLA", icon: <Briefcase className="text-purple-400" size={24} /> },
      { name: "Cursor", icon: <Lightbulb className="text-orange-400" size={24} /> },
      { name: "ChatGPT", icon: <MessageSquare className="text-teal-400" size={24} /> },
    ],
  },
  {
    name: "Habilidades Generales",
    icon: <Users className="text-purple-400" size={24} />,
    skills: [
      { name: "Atención al cliente", icon: <Users2 className="text-pink-400" size={24} /> },
      { name: "Trabajo en equipo", icon: <Users className="text-indigo-400" size={24} /> },
      { name: "Liderazgo", icon: <Briefcase className="text-amber-400" size={24} /> },
      { name: "Comunicación efectiva", icon: <MessageSquare className="text-cyan-400" size={24} /> },
    ],
  },
  {
    name: "Habilidades Creativas",
    icon: <Palette className="text-indigo-400" size={24} />,
    skills: [
      { name: "Creación de contenido", icon: <PenTool className="text-rose-400" size={24} /> },
      { name: "Diseño 3D", icon: <Briefcase className="text-emerald-400" size={24} /> },
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Mis Habilidades
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === index
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-black/50 rounded-2xl p-8 border border-purple-900/30">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            {skillCategories[activeCategory].icon}
            {skillCategories[activeCategory].name}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-xl border border-purple-900/20 flex flex-col items-center text-center hover:border-purple-500/50 transition-all"
              >
                <div className="p-4 bg-black/50 rounded-full mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
