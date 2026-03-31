import Link from "next/link";

type Props = {
  prev?: string;
  next?: string;
};

export default function ArticleNavigation({ prev, next }: Props) {
  return (
    <div className="mt-12 flex justify-between items-center">

      <div>
        {prev && (
          <Link href={prev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            ← Vorig
          </Link>
        )}
      </div>

      <Link href="/" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
        Home
      </Link>

      <div>
        {next && (
          <Link href={next} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Volgend →
          </Link>
        )}
      </div>

    </div>
  );
}