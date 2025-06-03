export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pol-Gaz Szczecin</h3>
            <p className="text-gray-300">
              Profesjonalny serwis kotłów gazowych Beretta, Junkers, Buderus
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">Tel: +48 123 456 789</p>
            <p className="text-gray-300">Email: kontakt@pol-gaz.szczecin.pl</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Obszar działania</h3>
            <p className="text-gray-300">Szczecin i okolice</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2025 Pol-Gaz Szczecin. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
