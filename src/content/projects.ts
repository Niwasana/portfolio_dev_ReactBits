export type ProjectLink = {
  label: string; // 表示名（例："GitHub"、"Play"、"Download"、"Docs"）
  url: string; // 実際のURL
  download?: boolean; // trueならdownload属性を付与
};

export type Project = {
  title: string;
  period?: string;
  stack: string[];
  description: string;
  highlights?: string[];
  links?: ProjectLink[];
  cover?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    title: "ポートフォリオサイト開発",
    period: "2025-10-04",
    stack: ["TypeScript", "Next.js", "ReactBits", "Vercel"],
    description:
      "自身の経歴・実績・作品を整理するためのポートフォリオサイトを構築。モジュール化とデータ駆動構造を意識した設計で、今後の拡張性を重視。",
    highlights: [
      "Next.js + ReactBits による動的UI構築",
      "Projects / Achievements / Blog を自動管理",
      "Vercel によるデプロイ運用",
    ],
    cover: "/images/Home_image.png",
  },
  {
    title: "Flush Code Hack 2025｜ポーカーAI開発",
    period: "2025-09",
    stack: ["TypeScript", "Node.js"],
    description:
      "1Weekオンラインハッカソン『Flush Code Hack 2025』にてポーカーAIを開発。役戦略・ポットオッズ・状況補正を組み合わせた堅実な戦略AIを実装し、4チーム中2位＋オーディエンス賞を受賞。",
    highlights: [
      "役戦略・ポットオッズ・確率補正によるAI設計",
      "短期間でのチーム開発・戦略仕様書作成",
      "TypeScript を用いたロジック設計とテスト駆動開発",
    ],
    links: [
      {
        label: "Blog",
        url: "/blog/2025-09-hackathon",
      },
    ],
    cover: "/images/pokerai.png",
  },
  {
    title: "Project V｜2Dロボット対戦アクションゲーム（個人開発）",
    period: "2024-04～開発中",
    stack: ["Gamemaker", "GML Visual", "2D Action Game"],
    description:
      "見下ろし視点の1対1ロボット対戦アクション。プレイヤーと敵が体力・ゲージを駆使して戦うシステムをすべて自作。直感的な操作性と戦略的なバランスを重視。",
    highlights: [
      "GameMaker の GML Visual によるロジック実装",
      "UI・操作系・戦闘システムをすべて個人開発",
      "操作説明・デモ動画・プレイアブル版を制作",
    ],
    links: [
      {
        label: "Download Gamefile",
        url: "/images/ProjectV_β7.ver.zip",
        download: true,
      },
      {
        label: "Download HowtoPlay",
        url: "/images/ProjectV_HowtoPlay.png",
        download: true,
      },
      {
        label: "Download DemoVideo",
        url: "/images/Project V_Demo_Video_.mp4",
        download: true,
      },
    ],
    video: "/images/Project V_Demo_Video_.mp4",
  },
];
