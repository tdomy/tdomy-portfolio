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

| 変数                 | 必須         | 説明                                                                   |
| -------------------- | ------------ | ---------------------------------------------------------------------- |
| `APP_URL`            | 本番環境のみ | サイトの公開URL。パスを含まない`https://example.com`形式で指定します。 |
| `RESEND_API_KEY`     | フォーム送信 | ResendのAPIキー。                                                      |
| `CONTACT_TO_EMAIL`   | フォーム送信 | 問い合わせを受け取るメールアドレス。                                   |
| `CONTACT_FROM_EMAIL` | フォーム送信 | 送信元。独自ドメイン未認証なら`Portfolio <onboarding@resend.dev>`。    |

`APP_URL`はsitemap、robots、metadata、JSON-LDの基準URLとして使われます。ブラウザへ公開する必要がないため、`NEXT_PUBLIC_`は付けません。

### 問い合わせフォーム

問い合わせフォームは、Server Actionから[Resend](https://resend.com)のAPIを呼び出してメールを送信します。無料プランの範囲で動作し、上限を超えた場合は課金されずに送信が失敗します。

- 独自ドメインを認証しない場合、送信先はResendアカウントに登録したメールアドレスに限られます。`CONTACT_TO_EMAIL`にはそのアドレスを設定してください。
- フォームの3つの変数が未設定でもビルドは通ります。送信時にエラーとなり、フォームには失敗メッセージが表示されます。

## Vercelへのデプロイ

VercelでGitHubリポジトリをImportし、プロジェクトの`Settings` → `Environment Variables`から`APP_URL`と問い合わせフォーム用の変数を追加します。

```text
APP_URL=https://your-domain.example
```

独自ドメインを使わない場合は、Vercelが発行した本番用の`vercel.app` URLを設定してください。Production、Preview、Developmentで異なるURLを使う場合は、環境ごとに値を登録します。

## 検証

```bash
pnpm lint
APP_URL=https://example.com pnpm build
```
