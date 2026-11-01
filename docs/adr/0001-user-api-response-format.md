# ADR 0001: ユーザー API のレスポンス形式

- Status: accepted

## Context

フロントエンド（pr-review-fe-sample）からユーザー情報を読み取る社内向け API が必要になった。

## Decision

- API のレスポンスは camelCase の JSON とする。
- 社内向けの読み取り専用 API には認証をかけない。

## Consequences

- クライアントは認証ヘッダーなしで `GET /api/users/:id` を呼べる。
- 認証が必要になった場合は、この ADR を改訂する。
