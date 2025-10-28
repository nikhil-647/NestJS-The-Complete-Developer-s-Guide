## ⚙️ 1. Create a New NestJS Project

```bash
nest new project-name
```

📘 Example:

```bash
nest new my-app
```

This creates a new folder with a basic NestJS app setup (using `main.ts`, `app.module.ts`, etc.)

---

## 📦 2. Generate a Module

```bash
nest g module module-name
# or shorthand
nest g mo module-name
```

📘 Example:

```bash
nest g module users
```

🧩 This creates:
`src/users/users.module.ts`

---

## 🧭 3. Generate a Controller

```bash
nest g controller controller-name
# or shorthand
nest g co controller-name
```

📘 Example:

```bash
nest g controller users
```

🧩 Creates:
`src/users/users.controller.ts`

You can also generate it **inside a specific module**:

```bash
nest g co users --module app
```

👉 It auto-registers the controller inside `AppModule`.

---

## 🧰 4. Generate a Service

```bash
nest g service service-name
# or shorthand
nest g s service-name
```

📘 Example:

```bash
nest g service users
```

🧩 Creates:
`src/users/users.service.ts`

And automatically adds it to the module’s `providers`.

---

## 💡 5. Generate a Provider

Providers are general dependency-injected classes (not always “services”).

```bash
nest g provider provider-name
# shorthand
nest g pr provider-name
```

📘 Example:

```bash
nest g provider logger
```

---

## 🧱 6. Generate a Middleware

```bash
nest g middleware middleware-name
# shorthand
nest g mi middleware-name
```

📘 Example:

```bash
nest g middleware auth
```

You’ll get a file like:

```ts
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

---

## 🧩 7. Generate a Pipe

```bash
nest g pipe pipe-name
# shorthand
nest g pi pipe-name
```

📘 Example:

```bash
nest g pipe validation
```

---

## 🧱 8. Generate a Guard

```bash
nest g guard guard-name
# shorthand
nest g gu guard-name
```

📘 Example:

```bash
nest g guard auth
```

---

## 🧠 9. Generate an Interceptor

```bash
nest g interceptor interceptor-name
# shorthand
nest g in interceptor-name
```

📘 Example:

```bash
nest g interceptor logging
```

---

## 🧩 10. Generate a Gateway (for WebSockets)

```bash
nest g gateway gateway-name
# shorthand
nest g ga gateway-name
```

📘 Example:

```bash
nest g gateway chat
```

---

## 🧱 11. Generate a Filter (for Exception Handling)

```bash
nest g filter filter-name
# shorthand
nest g f filter-name
```

📘 Example:

```bash
nest g filter http-exception
```

---

## 📚 12. Generate a Class / Interface / Enum

| Type          | Command                 | Example                     |
| ------------- | ----------------------- | --------------------------- |
| **Class**     | `nest g class name`     | `nest g class dto/user.dto` |
| **Interface** | `nest g interface name` | `nest g interface user`     |
| **Enum**      | `nest g enum name`      | `nest g enum role`          |

---

## 🔁 13. Generate Resource (all at once)

This creates **Module + Controller + Service + DTOs** automatically!

```bash
nest g resource resource-name
# shorthand
nest g res resource-name
```

📘 Example:

```bash
nest g resource users
```

🧩 CLI will ask:

```
? What transport layer do you use? (REST API, GraphQL, etc.)
? Would you like to generate CRUD entry points? (Y/n)
```

✅ Then it will generate everything ready to go.

---

## 🧩 14. Generate Custom Decorator

```bash
nest g decorator decorator-name
```

📘 Example:

```bash
nest g decorator public
```

---

## ⚡ Quick Summary Table

| Task        | Command                   | Short             |
| ----------- | ------------------------- | ----------------- |
| New Project | `nest new project-name`   | —                 |
| Module      | `nest g module name`      | `nest g mo name`  |
| Controller  | `nest g controller name`  | `nest g co name`  |
| Service     | `nest g service name`     | `nest g s name`   |
| Provider    | `nest g provider name`    | `nest g pr name`  |
| Middleware  | `nest g middleware name`  | `nest g mi name`  |
| Pipe        | `nest g pipe name`        | `nest g pi name`  |
| Guard       | `nest g guard name`       | `nest g gu name`  |
| Interceptor | `nest g interceptor name` | `nest g in name`  |
| Filter      | `nest g filter name`      | `nest g f name`   |
| Gateway     | `nest g gateway name`     | `nest g ga name`  |
| Resource    | `nest g resource name`    | `nest g res name` |
| Decorator   | `nest g decorator name`   | —                 |
| Class       | `nest g class name`       | —                 |
| Interface   | `nest g interface name`   | —                 |
| Enum        | `nest g enum name`        | —                 |


