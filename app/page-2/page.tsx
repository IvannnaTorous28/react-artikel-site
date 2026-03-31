import ArticleNavigation from "@/components/ArticleNavigation";

export default function Page2() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-4 pb-12">
      
      <img
        src="/foto2.png"
        alt="Vibecoding AI game"
        className="w-full rounded-2xl mb-8"
      />

      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
        De Helpdesk
      </p>

      <h1 className="text-4xl font-bold leading-tight mb-4">
        Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
      </h1>

      <p className="text-gray-600 text-sm mb-8">
        <span className="font-semibold text-gray-800">
          Dominique Deckmyn
        </span>
        <span className="mx-2">·</span>
        23 januari 2026
      </p>

      <div className="flex gap-4 mb-8">
        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          Luisteren
        </button>
        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          Delen
        </button>
      </div>

      <p className="text-lg leading-8 text-gray-800 mb-8">
        Waarom zou je een app gebruiken die geld kost of niet helemaal doet wat je nodig hebt?
        Met vibecoding maak je zelf eenvoudig een app of website met behulp van AI.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Wat is vibecoding?</h2>
        <p className="leading-8 text-gray-800">
          Vibecoding betekent dat je met behulp van AI zelf software maakt.
          Tools zoals ChatGPT en Gemini kunnen in enkele seconden code genereren
          waarmee je eenvoudige apps of games bouwt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Van simpel naar complex</h2>
        <p className="leading-8 text-gray-800">
          Je kan starten met kleine projecten zoals een spelletje in je browser.
          Voor complexere toepassingen moet je beter nadenken over structuur en
          componenten, maar AI helpt je stap voor stap verder.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Conclusie</h2>
        <p className="leading-8 text-gray-800">
          Vibecoding maakt het mogelijk om zonder programmeerkennis toch apps te bouwen.
          Met de juiste tools en begeleiding kan bijna iedereen vandaag software maken.
        </p>
      </section>

      <ArticleNavigation next="/page-3" />
    </main>
  );
}