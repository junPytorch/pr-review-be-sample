# API 仕様

## 認証

すべてのエンドポイントで `Authorization: Bearer <token>` ヘッダーが必要。トークンはサーバーの環境変数 `API_TOKEN` と照合する。

## GET /api/users/:id

ユーザーを 1 件取得する。

### リクエスト

| パラメーター | 場所 | 型 | 説明 |
| --- | --- | --- | --- |
| `Authorization` | header | string | `Bearer <token>` |
| `id` | path | string | ユーザー ID |

### レスポンス

**200 OK**

```json
{
  "id": "1",
  "displayName": "Alice",
  "email": "alice@example.com"
}
```

| フィールド | 型 | 説明 |
| --- | --- | --- |
| `id` | string | ユーザー ID |
| `displayName` | string | 表示名 |
| `email` | string | メールアドレス |

**401 Unauthorized**

```json
{ "error": "unauthorized" }
```

**404 Not Found**

```json
{ "error": "not_found" }
```
