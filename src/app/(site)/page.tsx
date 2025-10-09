import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/card";

export default function Home() {
  // 「本当に最新」を出したいなら、projectsに date を持たせて sort するのが安全ですわ。
  const latest = projects.slice(0, 2);

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-lg text-neutral-600 whitespace-pre-line">{profile.summary}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Latest Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {latest.map((p) => (
            <Card key={p.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-semibold">{p.title}</h3>
              {p.period && <p className="text-xs text-neutral-500 mb-1">{p.period}</p>}
              <p className="text-sm text-neutral-600">{p.description}</p>

              <div className="mt-3 text-sm flex flex-wrap gap-4">
                {p.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                    {...(link.download ? { download: true } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-4">
          <Link className="underline" href="/projects">
            See all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
