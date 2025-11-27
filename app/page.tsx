import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="title">Next.js on GitHub Pages</h1>

      <p className="subtitle">
        This page is deployed as a static export to GitHub Pages using Next.js 15.
      </p>

      <div className="card">
        <p>
          Edit <code>app/page.tsx</code> and push to GitHub — the site will automatically redeploy.
        </p>

        <p style={{ marginTop: "1rem" }}>
          <Link href="/about">Go to About Page →</Link>
        </p>
      </div>

{/*OPTION 1 —      */}
      <img
        src="/assets/skills_supporting_image.jpg"
        alt="Logo"
        style={{ width: "150px", marginTop: "20px" }}
      />

{/*OPTION 2 — Use the correct prefix everywhere      */}
      <img
        src="/deploy-github-pages-main/assets/skills_supporting_image.jpg"
        alt="Logo"
        style={{ width: "150px", marginTop: "20px" }}
      />

{/*OPTION 3 (recommended) — Use Next.js <Image> with unoptimized mode*/}
<Image
  src="/assets/skills_supporting_image.jpg"
  alt="skills"
  width={300}
  height={300}
  unoptimized
/>

    </main>
  );
}
