
import ArticleNavigation from "@/components/ArticleNavigation";

export default function Page3() {
  return (
    
    <main className="max-w-3xl mx-auto px-6 pt-4 pb-12">
      
      <img
        src="/foto3.png"
        alt="Dario Amodei"
        className="w-full rounded-2xl mb-8"
      />

      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
        De Technocraat
      </p>

      <h1 className="text-4xl font-bold leading-tight mb-4">
        Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?
      </h1>

      <p className="text-gray-600 text-sm mb-8">
        <span className="font-semibold text-gray-800">
          Dominique Deckmyn
        </span>
        <span className="mx-2">·</span>
        13 maart 2026
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
        Het verzet van Dario Amodei tegen minister Pete Hegseth lijkt steeds meer op een belangrijk keerpunt.
        Silicon Valley toont voorzichtige steun, maar keert niet terug naar hoe het vroeger was.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steun van big tech</h2>
        <p className="leading-8 text-gray-800">
          Grote technologiebedrijven spreken hun steun uit voor Amodei,
          vooral via juridische documenten. Ze verdedigen het recht op vrije meningsuiting
          en uiten voorzichtig kritiek op de overheid.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Een keerpunt?</h2>
        <p className="leading-8 text-gray-800">
          Het lijkt erop dat Silicon Valley langzaam van houding verandert.
          Toch blijven bedrijven voorzichtig en vermijden ze directe confrontaties
          met politieke machthebbers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Conclusie</h2>
        <p className="leading-8 text-gray-800">
          De situatie rond Amodei toont dat technologiebedrijven nog steeds balanceren
          tussen ethische standpunten en politieke voorzichtigheid.
        </p>
      </section>
<section className="mb-10">
  <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
    Lees ook
  </h2>

  <div className="space-y-4">
    <div className="border-l-4 border-black pl-4">
      <p className="text-xl font-medium">
        ChatGPT boycotten, of meteen de hele big tech?
      </p>
    </div>

    <div className="flex gap-3 flex-wrap">
      <span className="border px-3 py-1 rounded text-sm">Cultuur en media</span>
      <span className="border px-3 py-1 rounded text-sm">De Technocraat</span>
      <span className="border px-3 py-1 rounded text-sm">
        Artificiële intelligentie
      </span>
    </div>

    <a href="#" className="text-sm text-gray-500 underline">
      Fout gezien? Meld het ons hier
    </a>
  </div>
</section>
      {/* Laatste pagina → geen next */}
      <ArticleNavigation />
    </main>
  );
}