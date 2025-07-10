export const dynamic = "force-dynamic";

import { getDetailBook } from "@/app/lib/microcms/client";
import Image from "next/image";

interface PageProps {
  params: Promise<any>;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailBook = async ({ params }: PageProps) => {
  const resolvedParams = (await params) as { id: string };
  const { id } = resolvedParams;
  const book = await getDetailBook(id);

  if (!book) {
    return <div className="container mx-auto p-4 text-center">書籍が見つかりませんでした。</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {book.thumbnail?.url && (
          <Image
            src={book.thumbnail.url}
            alt={book.title}
            className="w-full h-80 object-cover object-center"
            width={700}
            height={700}
          />
        )}
        <div className="p-4">
          <h2 className="text-2xl font-bold">{book.title}</h2>
          <div
            className="text-gray-700 mt-2"
            dangerouslySetInnerHTML={{ __html: book.content }}
          />

          <div className="flex justify-between items-center mt-2">
            {book.publishedAt && (
              <span className="text-sm text-gray-500">
                公開日: {new Date(book.publishedAt).toLocaleString()}
              </span>
            )}
            {book.updatedAt && (
              <span className="text-sm text-gray-500">
                最終更新: {new Date(book.updatedAt).toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
