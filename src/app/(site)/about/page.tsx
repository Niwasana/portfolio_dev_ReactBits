import { profile } from "@/content/profile";

export default function About() {
  return (
    <section className="prose">
      {/* ページのメインタイトル */}
      <h1 className="text-3xl font-bold mb-6">About</h1>

      {/* 基本情報 */}
      <h2 className="text-2xl font-semibold mb-2">基本情報</h2>
      <ul className="list-disc ml-6">
        <li>名前：Niwasana</li>
        <li>所属：九州大学大学院 システム情報科学府 情報理工学専攻 M1</li>
        <li>
          研究分野：
          <ul className="list-disc ml-6">
            <li>聴覚情報処理（学部） → 自動車×音UI・警告音設計（大学院）</li>
          </ul>
        </li>
        <li>
          興味分野：
          <ul className="list-disc ml-6">
            <li>業務効率化とユーザー体験向上のためのソフトウェア開発</li>
            <li>アルゴリズムを活用した堅牢で使いやすいシステム設計</li>
          </ul>
        </li>
      </ul>

      {/* スキル */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">スキル・技術スタック</h2>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-1">言語</h3>
        <ul className="list-disc ml-6">
          <li>C（競技プログラミング）</li>
          <li>Python（講義）</li>
          <li>TypeScript（Webサイト作成）</li>
          <li>C#</li>
          <li>MATLAB（学部研究）</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-1">フレームワーク / ツール</h3>
        <ul className="list-disc ml-6">
          <li>React</li>
          <li>Next.js</li>
          <li>Unity</li>
          <li>GameMaker</li>
          <li>Git</li>
          <li>Vercel</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-2">資格・実績</h2>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-1">資格</h3>
        <ul className="list-disc ml-6">
          <li>ITパスポート</li>
          <li>基本情報技術者</li>
          <li>応用情報技術者</li>
          <li>PAST（アルゴリズム実技検定）中級</li>
          <li>情報処理安全確保支援士（2025/10/12 受験予定）</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-1">実績</h3>
        <ul className="list-disc ml-6">
          <li>AtCoder 緑（Algorithm / Heuristic）</li>
          <li>Flush Code Hack（2025/09/10～09/18：ポーカーAI開発）2位＋オーディエンス賞</li>
        </ul>
      </div>
    </section>
  );
}
