import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { siteConfig } from "@/data/site";
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    sameAs: [siteConfig.github],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div id="top" className="page-shell">
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <ExperienceSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
