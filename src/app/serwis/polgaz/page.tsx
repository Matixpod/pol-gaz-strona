// import { notFound } from 'next/navigation'
// import servicesData from '@/data/services.json'

// export async function generateStaticParams() {
//   return servicesData.map((service) => ({
//     marka: service.id,
//   }))
// }

// export async function generateMetadata({ params }: { params: { marka: string } }) {
//   const service = servicesData.find(s => s.id === params.marka)
  
//   if (!service) return {}

//   return {
//     title: `Serwis ${service.name} Szczecin - Pol-Gaz`,
//     description: `${service.description}. Profesjonalny serwis, naprawa i konserwacja kotłów ${service.name} w Szczecinie.`
//   }
// }

// export default function ServicePage({ params }: { params: { marka: string } }) {
//   const service = servicesData.find(s => s.id === params.marka)

//   if (!service) {
//     notFound()
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6">Serwis {service.name} Szczecin</h1>
//       <div className="prose max-w-none">
//         <p className="text-xl mb-6">{service.description}</p>
        
//         <h2 className="text-2xl font-semibold mb-4">Nasze usługi {service.name}:</h2>
//         <ul className="grid md:grid-cols-2 gap-4 mb-8">
//           {service.services.map((item, index) => (
//             <li key={index} className="bg-gray-100 p-4 rounded-lg">
//               {item} kotłów {service.name}
//             </li>
//           ))}
//         </ul>

//         <div className="bg-blue-50 p-6 rounded-lg">
//           <h3 className="text-xl font-semibold mb-3">Skontaktuj się z nami</h3>
//           <p>Telefon: +48 123 456 789</p>
//           <p>Email: kontakt@pol-gaz.szczecin.pl</p>
//         </div>
//       </div>
//     </div>
//   )
// }
