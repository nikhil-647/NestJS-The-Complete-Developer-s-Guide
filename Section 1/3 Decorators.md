## 🧩 Common NestJS Request Decorators

| Decorator              | Description                                                   | Example                                                                                                                                                          |
| ---------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`@Param()`**         | Extracts **route parameters** (like `/:id`)                   | `ts @Get(':id') getUser(@Param('id') id: string) { return id; } `                                                                                                |
| **`@Query()`**         | Extracts **query string parameters** (`?page=2&sort=asc`)     | `ts @Get() findAll(@Query('page') page: number, @Query('sort') sort: string) { return { page, sort }; } `                                                        |
| **`@Body()`**          | Extracts **request body** (POST, PUT, PATCH)                  | `ts @Post() create(@Body() createUserDto: CreateUserDto) { return createUserDto; } `                                                                             |
| **`@Headers()`**       | Extracts **HTTP headers**                                     | `ts @Get() getHeader(@Headers('authorization') auth: string) { return auth; } `                                                                                  |
| **`@Req()`**           | Gives full **request object** (like Express’s `req`)          | `ts @Get() getFullReq(@Req() req: Request) { return req.url; } `                                                                                                 |
| **`@Res()`**           | Gives full **response object** (like Express’s `res`)         | `ts @Get() sendRes(@Res() res: Response) { res.status(200).send('OK'); } `                                                                                       |
| **`@Next()`**          | Access **next()** function in middleware-style route          | `ts @Get() handler(@Next() next: Function) { next(); } `                                                                                                         |
| **`@Ip()`**            | Extracts **client IP address**                                | `ts @Get() getIp(@Ip() ip: string) { return ip; } `                                                                                                              |
| **`@HostParam()`**     | Extracts **host parameters** (from host-based routing)        | `ts @Controller({ host: ':account.example.com' }) export class AccountController { @Get() getInfo(@HostParam('account') account: string) { return account; } } ` |
| **`@Session()`**       | Access session object (if session middleware is enabled)      | `ts @Get() getSession(@Session() session: Record<string, any>) { return session.user; } `                                                                        |
| **`@UploadedFile()`**  | Access a **single uploaded file** (using `FileInterceptor`)   | `ts @Post('upload') @UseInterceptors(FileInterceptor('file')) upload(@UploadedFile() file: Express.Multer.File) { return file.originalname; } `                  |
| **`@UploadedFiles()`** | Access **multiple uploaded files** (using `FilesInterceptor`) | `ts @Post('uploads') @UseInterceptors(FilesInterceptor('files')) uploadMany(@UploadedFiles() files: Express.Multer.File[]) { return files.length; } `            |
| **`@Cookies()`**       | Extract cookies (with `cookie-parser` middleware)             | `ts @Get() getCookie(@Cookies('token') token: string) { return token; } `                                                                                        |
| **`@SignedCookies()`** | Extract **signed cookies**                                    | `ts @Get() getSigned(@SignedCookies('auth') auth: string) { return auth; } `                                                                                     |

---

## 🧠 Bonus: Custom Decorators (Advanced)

You can **create your own custom parameter decorators** like this:

```ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserAgent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['user-agent'];
  },
);

// Usage
@Get()
getUA(@UserAgent() ua: string) {
  return ua;
}
```

---

## 🔍 Example Combined Usage

```ts
@Controller('users')
export class UserController {
  @Post(':id')
  updateUser(
    @Param('id') id: string,
    @Body() data: any,
    @Query('role') role: string,
    @Headers('authorization') auth: string,
    @Ip() ip: string,
  ) {
    return { id, data, role, auth, ip };
  }
}
```
