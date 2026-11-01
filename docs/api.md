# API 仕様

## GET /api/users/:id

ユーザーを 1 件取得する。認証は不要。

### リクエスト

| パラメーター | 場所 | 型 | 説明 |
| --- | --- | --- | --- |
| `id` | path | string | ユーザー ID |

### レスポンス

**200 OK**

```json
{
  "id": "1",
  "name": "Alice",
  "email": "alice@example.com"
}
```

| フィールド | 型 | 説明 |
| --- | --- | --- |
| `id` | string | ユーザー ID |
| `name` | string | 名前 |
| `email` | string | メールアドレス |

**404 Not Found**

```json
{ "error": "not_found" }
```
