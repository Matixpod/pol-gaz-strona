interface ServiceCardProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
      {/* Ikona i tytuł */}
      <div className="flex items-center mb-4">

        <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
      </div>
      
      {/* Opis */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Lista funkcji */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Call to action */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a 
          href="tel:601418645"
          className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold transition-colors group/cta"
        >
          <span>Zadzwoń w sprawie serwisu</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
