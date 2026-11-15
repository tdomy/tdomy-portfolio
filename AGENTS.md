<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# プロジェクトルール

上のブロックは `next dev` が自動管理するため編集しない。独自のルールはこのセクション以降に書く。

## コミュニケーション

- 返事は日本語で書く。
- 推測だけで変更を加えない。不明点はユーザーに確認してから進める。

## プロジェクト概要

Next.js App Router と TypeScript で構築したエンジニア向けポートフォリオ（1ページ構成）。

- Next.js 16 / React 19 / TypeScript / Tailwind CSS v4
- パッケージマネージャーは pnpm（npm や yarn は使わない）
- デプロイ先は Vercel

## コマンド

```bash
pnpm dev                                  # 開発サーバー
pnpm lint                                 # ESLint
APP_URL=https://example.com pnpm build    # 本番ビルド
```

自動テストはない。変更後は `pnpm lint` と `APP_URL=https://example.com pnpm build` が通ることを確認する。

## ディレクトリ構成

| パス | 役割 |
| --- | --- |
| `app/` | ページ、レイアウト、metadata、`robots.ts`、`sitemap.ts`、OG画像、`globals.css` |
| `components/layout/` | ヘッダー、フッター |
| `components/sections/` | トップページの各セクション（Hero、Projects、About、Experience、Contact） |
| `components/ui/` | 汎用UI部品 |
| `data/` | 表示するコンテンツ（サイト情報、プロジェクト、経歴、スキル） |
| `types/content.ts` | コンテンツの型定義 |
| `lib/env.ts` | 環境変数の読み込みと検証（`server-only`） |
| `public/` | 画像などの静的ファイル |

import には `@/` エイリアスを使う。

## 実装ルール

- 表示するコンテンツは `data/` に置き、型は `types/content.ts` に定義する。コンポーネントに直接書き込まない。
- 経歴、実績、プロフィールなど事実に関わるコンテンツは、ユーザーの指示なしに作成・変更しない。
- 環境変数は `lib/env.ts` を通して読む。`APP_URL` はサーバー側だけで使うため、`NEXT_PUBLIC_` は付けない。
- スタイルは `app/globals.css` のカスタムクラスと CSS 変数（`--bg`、`--ink`、`--accent` など）で書く。色を追加するときは、ダークモード（`prefers-color-scheme: dark`）用の値も定義する。

## Git 運用

- コミットメッセージは Conventional Commits 形式で書く（例: `feat: ...`、`chore: ...`）。
- `main` へ直接コミットしない。`feature/...` ブランチを切り、Pull Request でマージする。
