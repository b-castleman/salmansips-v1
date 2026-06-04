import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Salman Sips.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A beverage review website for the connoisseur. Follow us on{" "}
        <a
          href="https://www.instagram.com/salmansips/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        or read more{" "}
        <Link href="/about" className="underline hover:text-blue-600 duration-200 transition-colors">
          about the author
        </Link>
        .
      </h4>
    </section>
  );
}
