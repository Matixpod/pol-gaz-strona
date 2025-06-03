interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ title, icon, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden service-card">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-600">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mr-2 text-xs">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
