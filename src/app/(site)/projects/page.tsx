import Image from "next/image";
import { projects } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
            {/* メディア（画像/動画）を16:9で安定表示 */}
            {(p.video || p.cover) && (
              <div className="mb-3 overflow-hidden rounded-xl aspect-video bg-black">
                {p.video ? (
                  <video
                    src={p.video}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={p.cover!}
                    alt={p.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={false}
                  />
                )}
              </div>
            )}

            <h3 className="font-semibold">{p.title}</h3>
            {p.period && <p className="text-xs text-neutral-500 mb-1">{p.period}</p>}

            <p className="text-sm text-neutral-600 mt-2">{p.description}</p>

            {p.highlights && p.highlights.length > 0 && (
              <ul className="list-disc list-inside text-sm text-neutral-700 mt-2">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            <div className="mt-2 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            {/* 柔軟リンク（GitHub/Play/Docs/Downloadなど） */}
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
    </section>
  );
}
