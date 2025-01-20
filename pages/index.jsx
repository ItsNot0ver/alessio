import LogoIcon from "../assets/svg/LogoIcon";

export default function Home() {
  return (
    <div className="bg-black text-gray-200 min-h-screen">
      <header className="bg-purple-700 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Alessio Nisati</h1>
        <p className="text-lg">Auditor Certificato ISO 27001 e Partner di WebGain SRLS per lo Sviluppo Software</p>
      </header>
      <main className="max-w-3xl mx-auto bg-gray-800 p-6 mt-6 shadow-md rounded-md">
        <div className="photo text-center mb-6">
          <img
            className="w-40 h-48 rounded-full mx-auto border-4 border-purple-700 shadow-lg"
            src="/alessio.jpg"
            alt="Alessio Nisati in giacca e cravatta"
          />
        </div>
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">Perché scegliere Alessio Nisati?</h2>
        <p className="mb-4">
          Con anni di esperienza nel campo della sicurezza informatica come auditor ISO 27001, Alessio Nisati ti offre
          consulenze mirate per proteggere i tuoi dati e ottimizzare i processi aziendali. Inoltre, attraverso la
          partnership con WebGain SRLS, sviluppiamo soluzioni software personalizzate per la tua attività.
        </p>
        <h2 className="text-xl font-semibold text-purple-500 mb-4">Servizi Offerti:</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Analisi dei rischi informatici</li>
          <li>Implementazione di sistemi di gestione della sicurezza delle informazioni</li>
          <li>Auditing ISO 27001</li>
          <li>Formazione del personale in ambito sicurezza</li>
          <li>Sviluppo di software personalizzato tramite WebGain SRLS</li>
          <li>Soluzioni innovative per la trasformazione digitale</li>
        </ul>
        <div className="cta text-center space-x-4 mb-6">
          <a
            href="mailto:alessio.nisati@gmail.com"
            className="bg-purple-700 text-white py-2 px-4 rounded-lg text-lg shadow hover:bg-purple-800"
          >
            Contattami Ora
          </a>
          <a
            href="tel:+393791435900"
            className="bg-purple-500 text-white py-2 px-4 rounded-lg text-lg shadow hover:bg-purple-600"
          >
            Chiamami Ora
          </a>
        </div>
        <div className="text-center mt-6">
          <a href="https://webgain.it/" target="_blank" className="flex flex-col justify-center items-center text-purple-500 font-semibold hover:underline">
            Visita il sito del mio partner <LogoIcon className="w-40 h-40 fill-black" />
          </a>
        </div>
      </main>
      <footer className="text-center py-4 bg-gray-900 text-gray-400 text-sm mt-8">
        <p>&copy; 2025 Alessio Nisati e WebGain SRLS. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
