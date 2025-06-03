import ServiceCard from '@/components/ui/ServiceCard'
import servicesData from '@/data/services.json'

export default function ServicesSection() {
  return (
    <section id="uslugi" className="py-20 bg-white scroll-offset">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">Kompleksowe usługi serwisowe</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Oferujemy pełen zakres usług związanych z kotłami i urządzeniami grzewczymi, 
          zapewniając najwyższą jakość i szybką reakcję na zgłoszenia.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
