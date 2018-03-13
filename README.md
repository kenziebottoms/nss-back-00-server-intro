A practice code-along to see what we're missing without Express.

| Request      | <-->         | Response      |
| ------------ | ------------ | ------------- |
| `readStream` | `transform`  | `writeStream` |
| `get()`      | `use()`      | `send()`      |
|              | (middleware) |               |