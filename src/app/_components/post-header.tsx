import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <header className="mb-12">
      <PostTitle>{title}</PostTitle>
      <div className="mb-6 text-lg text-slate-500 font-medium">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 shadow-2xl rounded-2xl overflow-hidden border border-slate-100">
        <CoverImage title={title} src={coverImage} />
      </div>
    </header>
  );
}
