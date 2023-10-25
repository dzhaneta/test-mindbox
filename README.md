# TODOS: simple task list

## Оглавление

- [О проекте](#о-проекте)
  - [Старт работы с проектом](#старт-работы-с-проектом)
  - [Скрипты запуска проекта](#скрипты-запуска-проекта)
  - [Используемые технологии](#используемые-технологии)

## О проекте

Минималистичный такс-лист с фильтарцией тасков и удалением выполненных. Это мой первый опыт использования Typescript, Bootstrap, styled-components и написания тестов.

### Старт работы с проектом

- Перед стартом работы с проектом **не забываем** установить все необходимые зависимости:

  ```bash
  npm install
  ```

### Скрипты запуска проекта

- Запуск проекта в режиме разработки:

  ```bash
  npm run start
  ```

- Сборка проекта для деплоя:

  ```bash
  npm run build
  ```

- Проверка проекта на ошибки:

  ```bash
  npm run lint
  ```

- Исправление некоторых ошибок (для которых доступно автоисправление):

  ```bash
  npm run lint:fix
  ```

- Форматирование кода (Prettier):

  ```bash
  npm run format
  ```

- Служебная команда GH Pages запускающая скрипт сборки проекта из ветки `develop`:

  ```bash
  npm run predeploy
  ```

- Сборка проекта из ветки `develop` и его деплой на GH Pages:

  ```bash
  npm run deploy
  ```

- Запуск тестирования:

  ```bash
  npm run test
  ```

### Используемые технологии

- React v 18.2.0
- React-dom v 18.2.0
- React-bootstrap v 2.8.0
- Styled-components v 6.0.8
- Eslint-config-airbnb v 19.0.4
- Prettier v 3.0.3
- gh-pages v 6.0.0
