export type Achievement = {
  date: string; // YYYY-MM-DD
  title: string;
  org?: string;
  detail?: string;
  links?: { url?: string; label?: string }[];
};

export const achievements: Achievement[] = [
  {
    date: "2022-05-01",
    title: "基本情報技術者試験 合格",
    org: "IPA（情報処理推進機構）",
    detail: "情報処理技術者としての基礎的な知識・技術を習得。",
  },
  {
    date: "2022-10-01",
    title: "応用情報技術者試験 合格",
    org: "IPA（情報処理推進機構）",
    detail: "システム開発・運用に関する応用的知識・技術を習得。",
  },
  {
    date: "2024-04-01",
    title: "聴覚情報処理研究室 所属（学部）",
    org: "九州大学 電気情報工学科",
    detail:
      "音刺激に関する基礎的知識を習得し、聴覚認知の理解を深めた。聴覚研究の経験を通じて、音と人の関わりを多面的に学ぶ。",
  },
  {
    date: "2025-04-01",
    title: "自動車知能システム研究室 所属（大学院）",
    org: "九州大学大学院 システム情報科学府 情報理工学専攻",
    detail:
      "自動運転車における音響UI・警告音設計の研究に着手。音の動きや定位など、聴覚的要素を活かした安全運転支援の可能性を探索中。",
  },
  {
    date: "2025-08-17",
    title: "PAST（アルゴリズム実技検定）中級 取得",
    org: "競技プログラミング能力検定協会",
    detail: "アルゴリズム設計力と実装スピードを測る実技検定で中級認定を取得。",
  },
  {
    date: "2025-08-23",
    title: "AtCoder（ヒューリスティック）緑到達",
    detail: "競技プログラミングでヒューリスティックにおいて緑レート到達。",
    links: [{ url: "https://atcoder.jp/users/Amamiya_Ain", label: "AtCoderプロフィール" }],
  },
  {
    date: "2025-09-14",
    title: "AtCoder（アルゴリズム）緑到達",
    detail: "競技プログラミングでアルゴリズム・ヒューリスティックともに緑レート到達。",
    links: [{ url: "https://atcoder.jp/users/Amamiya_Ain", label: "AtCoderプロフィール" }],
  },
  {
    date: "2025-09-18",
    title: "Flush Code Hack 2025｜2位＋オーディエンス賞受賞",
    org: "オンライン1Weekハッカソン",
    detail:
      "ポーカーAIを開発。役戦略・ポットオッズ・状況補正を組み合わせた堅実なベット戦略を実装し、4チーム中2位＋オーディエンス賞を獲得。",
  },
  {
    date: "2025-10-04",
    title: "ポートフォリオサイト開発｜React / Next.js",
    org: "個人開発",
    detail:
      "TypeScript / Next.js / ReactBits で構築し、Vercel にデプロイ。\nProjects・Achievements・Blog をデータ駆動で管理可能に。",
    links: [{ url: "https://portfolio-dev-gzh8.vercel.app/", label: "サイトを見る" }],
  },
  {
    date: "2025-10-12",
    title: "情報処理安全確保支援士（受験予定）",
    detail: "高度情報処理技術者試験の一つ。セキュリティ分野の専門知識を強化中。",
  },
];
