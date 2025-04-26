"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Contáctame</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-300 mb-8">
              Estoy disponible para trabajar en proyectos de desarrollo web, diseño e impresión 3D, o cualquier otra
              colaboración relacionada con mis habilidades. ¡No dudes en contactarme!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-900/30 rounded-full text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <p className="text-white">jhangermanuel@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 rounded-full text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Teléfono</h4>
                  <p className="text-white">+58 412 4721740</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-900/30 rounded-full text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Ubicación</h4>
                  <p className="text-white">Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 rounded-2xl p-8 border border-purple-900/30">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-center">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-400 text-center">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
