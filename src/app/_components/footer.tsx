import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            Salman Sips.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4">
            <a
              href="https://www.instagram.com/salmansips/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
            <p className="mx-3 font-bold">
              © 2026 Salman Elgabalawy
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
