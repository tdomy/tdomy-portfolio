import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
export function ExperienceSection() { return <section id="experience" className="section"><SectionHeading eyebrow="03 / Experience" title="Building with the whole lifecycle in mind."/><div className="timeline">{experience.map((item) => <article key={`${item.period}-${item.role}`}><p className="period">{item.period}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p>{item.description}</p></article>)}</div></section> }
