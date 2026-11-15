import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";
export function About() {
  return (
    <>
      <section id="about" className="section about">
        <SectionHeading
          eyebrow="02 / About"
          title="Backend depth. Full-stack perspective."
        />
        <div className="about-copy">
          <p>
            EC、動画配信、人材管理、製造業支援など、コンシューマー向けサービスから業務システムまで幅広く開発してきました。
          </p>
          <p>
            バックエンド開発を主軸に、フロントエンド、クラウド、テスト、CI/CDまで横断。テックリードとして、技術選定、コードレビュー、開発方針の策定、メンバー支援にも取り組んでいます。
          </p>
          <p>
            新規開発だけでなく、レガシー刷新、技術的負債の解消、高トラフィック環境の性能改善を得意としています。
          </p>
        </div>
      </section>
      <section className="skills" aria-labelledby="skills-title">
        <p className="eyebrow">Capabilities</p>
        <h2 id="skills-title" className="sr-only">
          Skills
        </h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.summary}</p>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
