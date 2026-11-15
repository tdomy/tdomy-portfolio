import { getAppUrl } from "@/lib/env";

export const siteConfig = {
  name: "Tdomy",
  fullName: "得冨 靖浩",
  role: "Software Engineer / Backend Engineer / Tech Lead",
  description:
    "バックエンドを軸に、フロントエンド、クラウド、品質改善まで横断してプロダクトを設計・開発しています。",
  url: getAppUrl(),
  github: "https://github.com/tdomy",
} as const;
export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
] as const;
