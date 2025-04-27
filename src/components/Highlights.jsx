// src/components/Highlights.jsx
import { CalendarDaysIcon, MusicalNoteIcon, SparklesIcon } from '@heroicons/react/24/outline'

function Highlights() {
  return (
    <section id="programacao" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700">Programação em Destaque</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-transform">
          <CalendarDaysIcon className="h-12 w-12 text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Abertura Oficial</h3>
          <p className="text-gray-700 text-center">
            Um momento emocionante de fé, cultura e boas-vindas! Vamos dar início a esse grande festival.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-transform">
          <MusicalNoteIcon className="h-12 w-12 text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Noite Cultural</h3>
          <p className="text-gray-700 text-center">
            Apresentações culturais, danças e louvores, celebrando nossa diversidade e nossa fé.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-100 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-transform">
          <SparklesIcon className="h-12 w-12 text-purple-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-purple-800 mb-2 text-center">Grande Encerramento</h3>
          <p className="text-gray-700 text-center">
            Um final inesquecível com shows, palavras de gratidão e comunhão entre todos os participantes.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Highlights
