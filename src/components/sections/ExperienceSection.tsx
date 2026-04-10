export default function ExperienceSection() {
  return (
    <section className="py-12 lg:py-2 bg-white" aria-label="Statystyki firmy">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-blue-900 mb-8 lg:mb-12">
          Doświadczenie serwisu POL-GAZ w liczbach
        </h2>
        {/* Grid responsywny - 2 kolumny na mobile, 4 na desktop */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-12 lg:mb-2" role="list">
          <li className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">31</div>
            <div className="text-sm lg:text-base text-gray-600">Lat doświadczenia<br/>na rynku</div>
          </li>
          
          <li className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">2</div>
            <div className="text-sm lg:text-base text-gray-600">Wykwalifikowanych serwisantów</div>
          </li>
          
          <li className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">60km</div>
            <div className="text-sm lg:text-base text-gray-600">zasięgu<br/>wokół Szczecina</div>
          </li>
          
          <li className="text-center p-4 lg:p-6">
            <div className="text-4xl lg:text-6xl font-bold text-blue-900 mb-2">5★</div>
            <div className="text-sm lg:text-base text-gray-600">
              Średnia ocena na Google<br/>
              <span className="font-semibold">Tysiące zadowolonych klientów</span>
            </div>
          </li>
        </ul>

        <div className="text-center text-gray-700 max-w-3xl mx-auto mt-8 lg:mt-12">
          <p className="text-base lg:text-lg mb-4">
            Od 1994 roku zrealizowaliśmy ponad <span className="font-semibold">37 000</span> przeglądów i napraw kotłów gazowych. Specjalizujemy się w serwisie <span className="font-semibold">6 wiodących marek</span>, w tym Beretta, Vaillant, Junkers.
          </p>
          <p className="text-sm lg:text-base text-gray-600">
            W przypadku awarii nagłych, nasz serwis dojeżdża na miejsce w Szczecinie średnio w ciągu <span className="font-semibold">1-3</span> godzin. W obszarze 60 km od miasta czas dojazdu wynosi do <span className="font-semibold">1-3</span> godzin.
          </p>
        </div>

        {/* POTENCJALNE FAQ DO PRZYSZŁEJ IMPLEMENTACJI SCHEMATU FAQPage
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">Najczęściej zadawane pytania o nasze doświadczenie</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg">Od ilu lat działa serwis kotłów Pol-Gaz w Szczecinie?</h4>
              <p className="text-gray-700">Serwis kotłów Pol-Gaz działa na rynku od 31 lat, od 1994 roku, zdobywając bogate doświadczenie w naprawie i serwisie pieców gazowych.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Ilu serwisantów pracuje w Pol-Gaz?</h4>
              <p className="text-gray-700">W serwisie Pol-Gaz pracuje dwóch wykwalifikowanych serwisantów, co zapewnia szybką reakcję na zgłoszenia awaryjne.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Jaki jest zasięg działania serwisu Pol-Gaz?</h4>
              <p className="text-gray-700">Serwis Pol-Gaz działa w promieniu 60 kilometrów wokół Szczecina, obsługując klientów z miasta i okolicznych miejscowości.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Jakie oceny ma serwis Pol-Gaz?</h4>
              <p className="text-gray-700">Serwis Pol-Gaz ma doskonałe, 5-gwiazdkowe oceny na Google, co potwierdza zadowolenie klientów z jakości usług.</p>
            </div>
          </div>
        </div>
        */}

      </div>
    </section>
  )
}
