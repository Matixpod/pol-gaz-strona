export default function ExperienceSection() {
  return (
    <section className="py-12 lg:py-2 bg-white">
      <div className="container mx-auto px-4">
        {/* Grid responsywny - 2 kolumny na mobile, 4 na desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2">
          <div className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">31</div>
            <div className="text-sm lg:text-base text-gray-600">Lat doświadczenia<br/>na rynku</div>
          </div>
          
          <div className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">2</div>
            <div className="text-sm lg:text-base text-gray-600">Serwisantów</div>
          </div>
          
          <div className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">60km</div>
            <div className="text-sm lg:text-base text-gray-600">zasięgu<br/>wokół Szczecina</div>
          </div>
          
          <div className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
            <div className="text-sm lg:text-base text-gray-600">Ocen na Google<br/>Zadowoleni klienci</div>
          </div>
        </div>


      </div>
    </section>
  )
}
