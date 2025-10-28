Here’s a simpler version of your notes 👇

---

## 📦 NestJS `package.json` — Key Dependencies

1. **`@nestjs/common`** –
   Core NestJS tools like controllers, modules, and services.

2. **`@nestjs/core`** –
   The main NestJS framework. Handles app startup and dependency injection.

3. **`@nestjs/platform-express`** –
   Connects NestJS to **Express** for handling HTTP requests.

4. **`reflect-metadata`** –
   Makes **decorators** (like `@Controller()`, `@Get()`) work in TypeScript.

5. **`typescript`** –
   Lets us write NestJS code using **TypeScript** instead of plain JS.

---

NestJS terminologies 👇

Here’s a complete, **clean summary** of all key **NestJS terminologies** 👇

---

### ⚙️ **Core NestJS Terminologies**

#### **Controller**

👉 Handles **incoming requests** and **returns responses** to the client.
*Acts as the entry point for routes (e.g. `@Get()`, `@Post()`).*

> Example: `user.controller.ts`

---

#### **Service**

👉 Contains **business logic** and **core functionality** of the app.
*Used by controllers via dependency injection.*

> Example: `UserService` might handle user creation, validation, etc.

---

#### **Module**

👉 A **logical group** of related components (controllers, services, providers).
*Every Nest app has at least one — the root module (`AppModule`).*

> Example: `UserModule` groups `UserController` + `UserService`.

---

#### **Pipe**

👉 Used for **validation** and **transformation** of incoming data before it reaches the controller.
*Example:* Validate DTOs or convert strings to numbers.

> Built-ins: `ValidationPipe`, `ParseIntPipe`.

---

#### **Filter (Exception Filter)**

👉 Handles **errors and exceptions** thrown in your app.
*Allows customizing HTTP error responses.*

> Example: Catch a `NotFoundException` and return a custom JSON response.

---

#### **Guard**

👉 Used for **authorization and access control**.
*Determines whether a request can proceed or not.*

> Example: `AuthGuard` checks if the user is logged in.

---

#### **Interceptor**

👉 Used to **transform requests/responses** or **add logic before/after** route handling.
*Perfect for logging, response mapping, or caching.*

> Example: `LoggingInterceptor`, `TimeoutInterceptor`.

---

#### **Repository**

👉 Handles **data persistence** (interacting with the database).
*Typically part of the data layer, used with TypeORM or Prisma.*

> Example: `UserRepository` runs queries like `find()`, `save()`.

---

Would you like me to put this into a **one-line summary table** (for quick revision or slides)?

