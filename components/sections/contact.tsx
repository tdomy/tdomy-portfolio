import { contactContent } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/sections/contact-form";
export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Contact</p>
      <h2 id="contact-title">
        Let&apos;s build something
        <br />
        useful and lasting.
      </h2>
      <p>{contactContent.lead}</p>
      <ContactForm />
      <div className="contact-links">
        <a href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
