## 🧠 **NestJS Validation (Pipes, DTOs, and Class Validators)**

### 🧩 What is a Pipe?

* **Pipe** in NestJS is used for:

  * **Validation** (check if incoming data is valid)
  * **Transformation** (convert input data before it reaches your controller)
* It runs **before** the route handler and can **stop the request** if validation fails.

---

### ⚙️ Setting up Validation Rules

1. **Install validation libraries:**

   ```bash
   npm install class-validator class-transformer
   ```
2. **Enable global validation in main.ts**

   ```typescript
   import { ValidationPipe } from '@nestjs/common';
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';

   async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     app.useGlobalPipes(
       new ValidationPipe({
         whitelist: true,       // removes extra fields not in DTO
         forbidNonWhitelisted: true, // throw error for unknown fields
         transform: true,       // auto convert payloads to DTO instances
       }),
     );
     await app.listen(3000);
   }
   bootstrap();
   ```

---

### 🧾 Creating a DTO (Data Transfer Object)

* A **DTO** defines the **shape** of incoming request data.
* It tells Nest what the request body should look like.
* It uses **decorators** from `class-validator`.

**Example:**

```typescript
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}
```

---

### 🧩 Applying DTO to Controller

```typescript
import { Body, Controller, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';

@Controller('messages')
export class MessagesController {
  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    return 'Message created: ' + body.content;
  }
}
```

💡 **Crazy cool part:**
When you add `CreateMessageDto` as a type in `@Body()`, it automatically becomes a validator because Nest:

1. Uses **class-transformer** to convert plain JS object → DTO class instance.
2. Uses **class-validator** to validate that instance.
3. If validation fails → sends an error response.
4. If validation passes → sends the body to the route handler.

---

### ⚡ Behind the Scenes

#### Validation Pipe Flow:

1. **class-transformer** → Turns plain JSON body into a real instance of `CreateMessageDto`.
2. **class-validator** → Runs all validation decorators on the instance.
3. **If errors exist:** Throws 400 Bad Request.
4. **Else:** Passes the validated body to your controller.

---

### 🧩 Why Do We Need `class-transformer`?

* NestJS receives raw JSON (plain object).
* Validation decorators work **only on class instances**, not plain objects.
* `class-transformer` bridges this gap by creating a **true class instance** from the plain object.

Example:

```typescript
plainToInstance(CreateMessageDto, body)
```

---

### 🧱 TypeScript Decorators and Validation

* TypeScript types are erased at runtime (JS doesn’t know about them).
* To preserve metadata for decorators like `@IsString()`, we must enable this in **tsconfig.json**:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true
```

This lets Nest + class-validator use reflection to know **what type each property is**.

---

### 🧠 DTO — Not Nest Exclusive

* DTOs exist in many frameworks and languages (Java, C#, etc.).
* Their job: **carry structured data** between layers (e.g., client → controller → service).

---

### ✅ Summary

| Concept                   | Purpose                                        |
| ------------------------- | ---------------------------------------------- |
| **Pipe**                  | Runs before handler to validate/transform data |
| **DTO**                   | Defines shape of incoming data                 |
| **class-validator**       | Checks if data follows the rules               |
| **class-transformer**     | Converts plain object → class instance         |
| **ValidationPipe**        | Combines both libraries + handles errors       |
| **emitDecoratorMetadata** | Keeps TS type info alive in JS runtime         |
