import { achievements } from "@/content/achievements";

export default function Achievements() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-4">Achievements</h1>
      <ol className="relative border-s pl-6">
        {achievements.map((a) => (
          <li key={a.title + a.date} className="mb-6">
            <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border bg-white" />
            <div className="text-sm text-neutral-500">{a.date}</div>
            <div className="font-medium">{a.title}</div>
            {a.detail && <p className="text-sm text-neutral-700 whitespace-pre-line">{a.detail}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}
