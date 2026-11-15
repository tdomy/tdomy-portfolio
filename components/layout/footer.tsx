import { siteConfig } from "@/data/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
