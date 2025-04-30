Приложение реализует RESTful API для варианта «Армия» с использованием Express.js.. Все маршруты сгруппированы по версии API и доступны по базовому пути /api/v1.

Структура маршрутов
Базовый путь API: Все запросы начинаются с /api/v1. Например, чтобы получить список солдат, используется путь:

GET http://localhost:<PORT>/api/v1/soldiers
Маршруты для солдат (soldiers):

GET /api/v1/soldiers Возвращает список всех солдат из базы данных.

GET /api/v1/soldiers/:id Возвращает данные конкретного солдата по его уникальному идентификатору (:id).

POST /api/v1/soldiers Создает нового солдата. Тело запроса должно содержать JSON с данными:

name (string)

age (number)

active (boolean)

rank (string)

enlistmentDate (Date строка)

skills (Array)

PUT /api/v1/soldiers/:id Обновляет данные солдата с указанным идентификатором. Тело запроса содержит поля для обновления.

DELETE /api/v1/soldiers/:id Удаляет солдата по указанному идентификатору.

Маршруты для подразделений (units):

GET /api/v1/units Возвращает список всех подразделений.

GET /api/v1/units/:id Возвращает данные подразделения по его идентификатору.

POST /api/v1/units Создает новое подразделение. JSON в теле запроса должен включать:

name (string)

headCount (number)

isDeployed (boolean)

formationDate (Date строка)

operations (Array)

PUT /api/v1/units/:id Обновляет данные подразделения.

DELETE /api/v1/units/:id Удаляет подразделение с указанным идентификатором.

Примеры запросов
1. Получение списка солдат

bash
GET http://localhost:7777/api/v1/soldiers
2. Получение данных солдата по id

bash
GET http://localhost:7777/api/v1/soldiers/soldier-001
3. Создание нового солдата

bash
POST http://localhost:7777/api/v1/soldiers
Content-Type: application/json

{
  "name": "Новый Солдат",
  "age": 26,
  "active": true,
  "rank": "Рядовой",
  "enlistmentDate": "30.04.2025, 10:00:00",
  "skills": ["Базовая подготовка"]
}
4. Обновление данных солдата

bash
PUT http://localhost:7777/api/v1/soldiers/<id>
Content-Type: application/json

{
  "age": 27
}
5. Удаление солдата

bash
DELETE http://localhost:7777/api/v1/soldiers/<id>
Аналогичные примеры запросов применимы для работы с подразделениями через путь /api/v1/units.

Структура проекта, связанная с маршрутизацией
server.js Точка входа в приложение, где происходит инициализация Express, подключение middleware (body‑parser) и регистрация маршрутов:

js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const v1Routes = require('./src/routes/v1/index');

const app = express();
const PORT = process.env.PORT || 7777;

Подключение body-parser для обработки JSON-тел запросов
app.use(bodyParser.json());

Регистрация маршрутов API под префиксом /api/v1
app.use('/api/v1', v1Routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
Папка src/routes/v1/ Содержит файлы:

soldiersRoutes.js – маршруты для работы с солдатами.

unitsRoutes.js – маршруты для работы с подразделениями.

index.js – объединяет все маршруты версии v1 с помощью Express Router.
