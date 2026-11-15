# Tdomy Portfolio

Next.js App RouterとTypeScriptで構築したエンジニア向けポートフォリオです。

## ローカル開発

依存関係をインストールし、開発サーバーを起動します。

```bash
pnpm install
pnpm dev
```

`APP_URL`が未設定の開発環境では、`http://localhost:3000`を使用します。明示的に設定する場合は、サンプルをコピーして編集してください。

```bash
cp .env.example .env.local
```

## 環境変数

| 変数      | 必須         | 説明                                                                   |
| --------- | ------------ | ---------------------------------------------------------------------- |
| `APP_URL` | 本番環境のみ | サイトの公開URL。パスを含まない`https://example.com`形式で指定します。 |

`APP_URL`はsitemap、robots、metadata、JSON-LDの基準URLとして使われます。ブラウザへ公開する必要がないため、`NEXT_PUBLIC_`は付けません。

## Vercelへのデプロイ

VercelでGitHubリポジトリをImportし、プロジェクトの`Settings` → `Environment Variables`から`APP_URL`を追加します。

```text
APP_URL=https://your-domain.example
```

独自ドメインを使わない場合は、Vercelが発行した本番用の`vercel.app` URLを設定してください。Production、Preview、Developmentで異なるURLを使う場合は、環境ごとに値を登録します。

## 検証

```bash
pnpm lint
APP_URL=https://example.com pnpm build
```
