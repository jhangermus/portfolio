import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-10 bg-black border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Jhanger Urdaneta
            </h2>
            <p className="text-gray-400 mt-2">Ingeniero en Computación | Emprendedor | Creador</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Jhanger Manuel Urdaneta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
