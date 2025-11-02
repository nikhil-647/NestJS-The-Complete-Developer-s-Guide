## 🧩 **NestJS – Services & Repository**

### 🧱 **Service**

* A **Service** is a **class**.
* Primary place for **business logic** — how data is processed, transformed, or combined.
* A **Service** can use **one or more repositories** to read/write data.
* Follows pattern:

  ```typescript
  @Injectable()
  export class MessageService {
    constructor(private messageRepo: MessageRepo) {}

    findOne(id: string) {
      return this.messageRepo.findOne(id);
    }

    findAll() {
      return this.messageRepo.findAll();
    }

    create(message: string) {
      return this.messageRepo.create(message);
    }
  }
  ```

🧠 *Note:*
It’s common that **service method names** look identical to repository methods — that’s fine.
Even if it looks repetitive, the **service layer is essential** because:

* It isolates **business logic**.
* Allows you to easily **swap or modify** your data source later.
* Keeps your app scalable and testable.

---

### 🗃️ **Repository**

* A **Repository** is also a **class**.
* It’s the **#1 place for storage or data access logic**.
* Typically implemented with:

  * **TypeORM Entity**
  * **Mongoose Schema**
  * Or a **custom mock DB** (like local file system for testing).

Example:

```typescript
import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepo {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }

  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages));
    return { id, message };
  }
}
```

---

### 🧩 **Controller → Service → Repository Flow**

Standard dependency chain:

```
Controller  →  Service  →  Repository
```

Example:

```typescript
@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessageService) {}

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
```

---

### 🚨 **Error Handling with NestJS Exceptions**

When invalid IDs or data are passed, your server may still return **200 OK** if not handled manually.
To fix this, use **NestJS built-in exceptions**:

```typescript
import { NotFoundException } from '@nestjs/common';

if (!message) {
  throw new NotFoundException('Message not found');
}
```

💡 **Nest automatically:**

* Sends proper **HTTP status codes** (e.g., 404 for `NotFoundException`).
* Formats the response as a **JSON error object**.

---

### ⚙️ **Built-in Exceptions Examples**

| Exception                      | Description        | HTTP Code |
| ------------------------------ | ------------------ | --------- |
| `BadRequestException`          | Invalid input      | 400       |
| `UnauthorizedException`        | Not authenticated  | 401       |
| `ForbiddenException`           | No permission      | 403       |
| `NotFoundException`            | Resource not found | 404       |
| `InternalServerErrorException` | Server error       | 500       |

---

### 🧭 **Summary**

| Layer                  | Purpose                             | Example                         |
| ---------------------- | ----------------------------------- | ------------------------------- |
| **Controller**         | Handles routes and request/response | `@Controller('messages')`       |
| **Service**            | Holds business logic                | `MessageService`                |
| **Repository**         | Handles data persistence            | `MessageRepo`                   |
| **Exception Handling** | Manages proper error responses      | `throw new NotFoundException()` |

---