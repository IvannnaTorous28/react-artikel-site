import ArticleNavigation from "@/components/ArticleNavigation";

export default function Page1() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-4 pb-12">
      <img
        src="/kat-op-de-fiets.png"
        alt="Kat op fiets"
        className="w-full rounded-2xl mb-8"
      />

      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
        De Technocraat
      </p>

      <h1 className="text-4xl font-bold leading-tight mb-4">
        Leidt AI-slop tot de dood van sociale media?
      </h1>

      <p className="text-gray-600 text-sm mb-8">
      <span className="font-semibold text-gray-800">Dominique Deckmyn</span>
      <span className="mx-2">·</span>
            2 januari 2026
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
        Sociale media slibben steeds sneller dicht met AI-gegenereerde video’s
        en gebeurtenissen die nooit echt hebben plaatsgevonden.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">De opkomst van AI-video</h2>
        <p className="leading-8 text-gray-800">
          Dankzij tools zoals Sora en Veo kan bijna iedereen in enkele seconden
          realistische video’s maken. Daardoor groeit de hoeveelheid
          AI-content op sociale media enorm snel.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">De rol van algoritmes</h2>
        <p className="leading-8 text-gray-800">
          Platformen zoals YouTube, Instagram en TikTok tonen steeds vaker
          AI-content via hun aanbevelingsalgoritmes. Daardoor wordt echte
          content van mensen minder zichtbaar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Conclusie</h2>
        <p className="leading-8 text-gray-800">
          Het artikel stelt dat sociale media hun sociale karakter dreigen te
          verliezen wanneer AI-gegenereerde content belangrijker wordt dan
          menselijke interactie.
        </p>
      </section>

      <ArticleNavigation next="/page-2" />
    </main>
  );
}