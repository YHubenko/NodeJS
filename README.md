## Завдання
В Node.js з допомогою фреймворка Express напишіть на Typescript веб-сервер, який відповідатиме стандартам REST і реалізовуватиме базові операції CRUD для сутності user (користувач) із полями id, username та name:
- використовуйте Express і Typescript;
- реалізуйте CRUD для сутності user (користувач) з описаними нижче ендпоінтами;
- зробіть ендпоінт "створення користувача" з
  обов'язковим параметром username і необов'язковим параметром name;
- зробіть ендпоінт "отримання даних користувача за його id" (id + username + name);
- зробіть ендпоінт "список користувачів" (список записів id + username + name);
- зробіть ендпоінт "оновлення даних користувача за його id";
- зробіть ендпоінт "видалення користувача за його id";
- не використовуйте баз даних, зберігайте дані локально в пам'яті процесу або у файловій системі.

## Виконання
POST /users - створення користувача. <br>
GET /users/:id - отримання даних користувача за його id. <br>
GET /users - отримання списку користувачів. <br>
PUT /users/:id - оновлення даних користувача за його id. <br>
DELETE /users/:id - видалення користувача за його id.

> curl -X POST -H "Content-Type: application/json" -d "{\"username\":\"user_name\", \"name\":\"Name Surname\"}" http://localhost:3000/users

> curl -X DELETE http://localhost:3000/users/1

> curl -X PUT -H "Content-Type: application/json" -d "{\"username\":\"new_username\", \"name\":\"New Name\"}" http://localhost:3000/users/1