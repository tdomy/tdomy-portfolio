import { siteConfig } from "@/data/site";
export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <p className="eyebrow">04 / Contact</p>
      <h2 id="contact-title">
        Let&apos;s build something
        <br />
        useful and lasting.
      </h2>
      <p>お問い合わせはXでお願いします。</p>
      <div>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href={siteConfig.x} target="_blank" rel="noreferrer">
          X ↗
        </a>
      </div>
    </section>
  );
}
