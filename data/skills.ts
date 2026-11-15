import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    summary:
      "既存仕様の整理からコンポーネント設計、SSR、テストまで。Vue.jsからNext.jsへの移行や大規模サービス刷新を経験。",
    skills: [
      "TypeScript · 4 years",
      "React · 4 years",
      "Next.js · 3 years",
      "Vue.js",
      "Storybook / MSW",
    ],
  },
  {
    category: "Backend",
    summary:
      "キャリアの主軸。API・データモデル・複雑な業務状態を整理し、長期運用できる構造へ落とし込みます。",
    skills: [
      "PHP · 10 years",
      "Laravel · 5 years",
      "NestJS / Node.js",
      "GraphQL / OpenAPI",
      "MySQL / PostgreSQL",
    ],
  },
  {
    category: "Cloud / Infrastructure",
    summary:
      "アプリケーションの特性に合わせ、安定性・拡張性・運用コストを含めた実行環境を設計します。",
    skills: [
      "AWS · 5 years",
      "ECS / Lambda / S3",
      "RDS / Aurora / DynamoDB",
      "GKE",
      "Terraform / CloudFormation",
    ],
  },
  {
    category: "Tools",
    summary:
      "テスト、静的解析、CI/CDを開発プロセスへ組み込み、チームが安全に変更を届けられる環境を整えます。",
    skills: [
      "PHPUnit / PHPStan",
      "Jest / RTL / Playwright",
      "GitHub Actions / CircleCI",
      "Docker",
      "Figma / Jira",
    ],
  },
];
