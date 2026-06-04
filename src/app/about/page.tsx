import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostTitle } from "@/app/_components/post-title";

export default function AboutPage() {
  const authorImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKrFNynWKvTaTQJm8sHUD7sv7PJkTRenffg&s";

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostTitle>About the Author</PostTitle>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mt-12">
            <div className="w-64 h-64 flex-shrink-0">
              <img
                src={authorImage}
                alt="Salman Elgabalawy"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-slate-100"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Salman Elgabalawy</h2>
              <p className="text-xl italic text-slate-600 mb-6">
                Master Sommelier of Global Hydration & Senior Vice President of Beverage Aesthetics
              </p>
              
              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-200 pb-1">Professional Background</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Salman Elgabalawy is widely recognized as the world's foremost authority on liquid consumption and beverage sociology. With a career spanning over two decades in the elite circles of molecular gastronomy and hydrothermal engineering, Salman has revolutionized the way humanity perceives the act of "the sip."
                </p>
                <p className="text-lg leading-relaxed">
                  Before founding Salman Sips, he served as the Chief Sensory Consultant for the International Water Council and was the lead architect of the "2030 Global Refreshment Framework."
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-200 pb-1">Education</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li><strong>Ph.D. in Hydro-Gastronomy</strong> – University of Oxford (Summa Cum Laude)</li>
                  <li><strong>M.S. in Molecular Mixology</strong> – MIT (Massachusetts Institute of Thirst)</li>
                  <li><strong>B.A. in Comparative Beverage History</strong> – Sorbonne University, Paris</li>
                  <li><strong>Grand Master Certification</strong> – The Royal Academy of Fine Sips</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold mb-3 border-b-2 border-slate-200 pb-1">Accolades & Awards</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                  <li>7-time recipient of the <em>Golden Chalice</em> for Excellence in Palate Discrimination.</li>
                  <li>Knighted by the Sovereign Order of Refreshment for "Services to the Carbonated Arts."</li>
                  <li>Author of the New York Times #1 Bestseller, <em>"Beyond the Gulp: A Manifesto of the Sip."</em></li>
                  <li>Named "Visionary of the Year" by <em>Liquid Intelligence Magazine</em> (2024, 2025).</li>
                </ul>
              </section>

              <p className="text-lg leading-relaxed font-medium text-slate-700 italic">
                "A beverage is not just a liquid; it is a conversation between the soul and the earth." 
                <span className="block mt-2">— Salman Elgabalawy</span>
              </p>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
