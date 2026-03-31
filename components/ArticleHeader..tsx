type ArticleHeaderProps = {
  category: string;
  title: string;
  author: string;
  date: string;
};

export default function ArticleHeader({
  category,
  title,
  author,
  date,
}: ArticleHeaderProps) {
  return (
    <>
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
        {category}
      </p>

      <h1 className="text-4xl font-bold leading-tight mb-4">
        {title}
      </h1>

      <p className="text-gray-600 text-sm mb-6">
        <span className="font-semibold text-gray-800">{author}</span>
        <span className="mx-2">·</span>
        {date}
      </p>

      {/* Interactie knoppen */}
      <div className="flex gap-4 mb-8">
        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          Luisteren
        </button>
        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
          Delen
        </button>
      </div>
    </>
  );
}