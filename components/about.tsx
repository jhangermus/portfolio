import { Code, Cpu, Users, Lightbulb } from "lucide-react"

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Sobre Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Ingeniero en Computación con experiencia en soporte técnico y gestión de equipos. Emprendedor en impresión
              3D, especializado en diseño personalizado y optimización de procesos.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Habilidades en redes, atención al cliente y marketing digital, junto con habilidades para el desarrollo
              Frontend y vibecoding.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Interesado en aprender:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-900/30 border border-blue-700 rounded-full text-blue-400">
                  PostgreSQL
                </span>
                <span className="px-4 py-2 bg-green-900/30 border border-green-700 rounded-full text-green-400">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-6 rounded-xl border border-purple-800/30">
              <Cpu className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Ingeniero</h3>
              <p className="text-gray-400">Especializado en computación y soporte técnico</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-800/30">
              <Lightbulb className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Emprendedor</h3>
              <p className="text-gray-400">Impresión 3D y diseño personalizado</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 p-6 rounded-xl border border-indigo-800/30">
              <Code className="text-indigo-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Desarrollador</h3>
              <p className="text-gray-400">Frontend y vibecoding</p>
            </div>

            <div className="bg-gradient-to-br from-violet-900/40 to-violet-800/20 p-6 rounded-xl border border-violet-800/30">
              <Users className="text-violet-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Creador</h3>
              <p className="text-gray-400">Contenido digital y marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
