import type { ColumnModel } from "@/entities/column";

export const MOCK_COLUMNS = [
  {
    id: 1,
    name: "Нужно сделать",
    tasks: [
      {
        id: 1,
        name: "Чекаут: спроектировать UI формы оплаты для юр. лиц",
        timePlanned: 7200,
        timeSpent: 0,
        dueDate: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 1001,
            text: "Нужно учесть требования налоговой к отображению реквизитов",
            publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
          },
          {
            id: 1002,
            text: "Дизайн должен соответствовать гайдлайнам компании",
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
          },
          {
            id: 1003,
            text: "Обсудили с заказчиком — нужен пример заполнения",
            publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
          },
          {
            id: 1004,
            text: "Добавить подсказки для каждого поля",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          },
          {
            id: 1005,
            text: "Проверить доступность (accessibility)",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
          {
            id: 1006,
            text: "Согласовать прототип с руководителем",
            publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 2,
            name: "Подготовить wireframe формы оплаты",
            isDone: false,
            comments: [
              {
                id: 2001,
                text: "Использовать компоненты из библиотеки",
                publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 3,
            name: "Согласовать поля для реквизитов компании",
            isDone: false,
            comments: [
              {
                id: 2002,
                text: "Запросили добавить поле КПП",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "В работе",
    tasks: [
      {
        id: 4,
        name: "Backend: реализовать API для создания заказа",
        timePlanned: 7200,
        timeSpent: 0,
        dueDate: new Date(),
        status: "inProgress",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 1007,
            text: "Нужна валидация входящих данных",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          },
          {
            id: 1008,
            text: "Добавить логирование всех операций",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
          {
            id: 1009,
            text: "Обсудить структуру ответа с фронтендом",
            publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 5,
            name: "Создать endpoint POST /orders",
            isDone: false,
            comments: [
              {
                id: 2003,
                text: "Использовать миграции для БД",
                publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 6,
            name: "Добавить проверку обязательных полей",
            isDone: false,
            comments: [
              {
                id: 2004,
                text: "email и телефон обязательны",
                publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Тестирование",
    tasks: [
      {
        id: 7,
        name: "QA: протестировать оплату банковской картой",
        timePlanned: 7200,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 1010,
            text: "Тестировать в разных браузерах",
            publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 8,
            name: "Проверить успешную оплату",
            isDone: false,
            comments: [
              {
                id: 2005,
                text: "Использовать тестовые карты банка",
                publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 9,
            name: "Проверить обработку ошибок платежа",
            isDone: false,
            comments: [
              {
                id: 2006,
                text: "Проверить недостаточно средств",
                publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Ревью",
    tasks: [
      {
        id: 10,
        name: "Ревью: провести код-ревью модуля чекаута",
        timePlanned: 7200,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 1011,
            text: "Обратить внимание на обработку ошибок",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          },
          {
            id: 1012,
            text: "Проверить производительность",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 11,
            name: "Проверить структуру компонентов",
            isDone: false,
            comments: [
              {
                id: 2007,
                text: "Нужно вынести логику в хуки",
                publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 12,
            name: "Проверить обработку ошибок сети",
            isDone: false,
            comments: [
              {
                id: 2008,
                text: "Добавить повторный запрос при ошибке",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Готово",
    tasks: [
      {
        id: 13,
        name: "UI: добавить отображение статуса оплаты",
        timePlanned: 7200,
        timeSpent: 7200,
        dueDate: new Date(),
        status: "done",
        isDone: true,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 1013,
            text: "Готово к демо заказчику",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
          {
            id: 1014,
            text: "Проверили в Safari",
            publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 14,
            name: "Добавить компонент статуса оплаты",
            isDone: true,
            comments: [
              {
                id: 2009,
                text: "Использовать иконки из дизайн-системы",
                publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 15,
            name: "Подключить данные статуса из API",
            isDone: true,
            comments: [
              {
                id: 2010,
                text: "Обновить типы",
                publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
] satisfies ColumnModel[];

export const MOCK_COLUMNS_SECOND_BOARD = [
  {
    id: 101,
    name: "Бэклог",
    tasks: [
      {
        id: 201,
        name: "Growth: спроектировать новую посадочную страницу продукта",
        timePlanned: 5400,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 3001,
            text: "Целевая аудитория — малый бизнес",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          },
          {
            id: 3002,
            text: "Нужны A/B тесты заголовков",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 301,
            name: "Собрать требования от стейкхолдеров",
            isDone: false,
            comments: [
              {
                id: 4001,
                text: "Запросили акцент на бесплатный период",
                publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 302,
            name: "Подготовить структуру контента",
            isDone: false,
            comments: [
              {
                id: 4002,
                text: "Добавить блок с отзывами",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
      {
        id: 202,
        name: "Research: исследовать конкурентов по онбордингу",
        timePlanned: 3600,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 3003,
            text: "Смотреть только топ-10",
            publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 303,
            name: "Собрать 5–7 референсов",
            isDone: false,
            comments: [
              {
                id: 4003,
                text: "Добавить в Miro",
                publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 304,
            name: "Сделать сводную таблицу преимуществ",
            isDone: false,
            comments: [
              {
                id: 4004,
                text: "Выделить уникальные особенности",
                publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 102,
    name: "Дизайн",
    tasks: [
      {
        id: 203,
        name: "Design: подготовить макеты дашборда аналитики",
        timePlanned: 7200,
        timeSpent: 0,
        dueDate: new Date(),
        status: "inProgress",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 3004,
            text: "Нужны графики посещаемости",
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
          },
          {
            id: 3005,
            text: "Добавить фильтры по датам",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 305,
            name: "Согласовать цветовую палитру",
            isDone: false,
            comments: [
              {
                id: 4005,
                text: "Брендбук прилагается",
                publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 306,
            name: "Сделать 2 варианта главного экрана",
            isDone: false,
            comments: [
              {
                id: 4006,
                text: "Один вариант с таблицей, второй с карточками",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 103,
    name: "Релиз",
    tasks: [
      {
        id: 204,
        name: "Marketing: подготовить релизную рассылку для клиентов",
        timePlanned: 1800,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 3006,
            text: "Дата релиза — следующая среда",
            publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 307,
            name: "Сегментировать базу по тарифам",
            isDone: false,
            comments: [
              {
                id: 4007,
                text: "Выделить VIP клиентов",
                publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 308,
            name: "Подготовить текст письма",
            isDone: false,
            comments: [
              {
                id: 4008,
                text: "Добавить призыв к действию",
                publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 309,
            name: "Согласовать отправку с маркетингом",
            isDone: false,
            comments: [
              {
                id: 4009,
                text: "Ждем финальную проверку",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
] satisfies ColumnModel[];

export const MOCK_COLUMNS_THIRD_BOARD = [
  {
    id: 104,
    name: "Разработка",
    tasks: [
      {
        id: 205,
        name: "Auth: реализовать авторизацию через JWT",
        timePlanned: 4800,
        timeSpent: 0,
        dueDate: new Date(),
        status: "inProgress",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 5001,
            text: "Использовать refresh token",
            publishedAt: new Date(Date.now() - 7 * 60 * 60 * 1000),
          },
          {
            id: 5002,
            text: "Настроить CORS",
            publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
          },
          {
            id: 5003,
            text: "Добавить rate limiting",
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 310,
            name: "Создать endpoint для логина",
            isDone: false,
            comments: [
              {
                id: 6001,
                text: "Пароль хешировать",
                publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 311,
            name: "Реализовать middleware проверки токена",
            isDone: false,
            comments: [
              {
                id: 6002,
                text: "Исключить пути для логина",
                publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 312,
            name: "Добавить обновление refresh токена",
            isDone: false,
            comments: [
              {
                id: 6003,
                text: "Хранить refresh в httpOnly cookie",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 105,
    name: "Тестирование",
    tasks: [
      {
        id: 208,
        name: "QA: проверить форму регистрации пользователя",
        timePlanned: 2400,
        timeSpent: 0,
        dueDate: new Date(),
        status: "inProgress",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 5004,
            text: "Проверить валидацию email",
            publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
          },
          {
            id: 5005,
            text: "Проверить длину пароля",
            publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 318,
            name: "Проверить обязательные поля",
            isDone: false,
            comments: [
              {
                id: 6004,
                text: "Все поля обязательны",
                publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 319,
            name: "Проверить сообщения об ошибках",
            isDone: false,
            comments: [
              {
                id: 6005,
                text: "Сообщения должны быть на русском",
                publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
      {
        id: 209,
        name: "QA: протестировать таймер задач",
        timePlanned: 1800,
        timeSpent: 0,
        dueDate: new Date(),
        status: "toDo",
        isDone: false,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 5006,
            text: "Проверить при сворачивании вкладки",
            publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 320,
            name: "Проверить запуск таймера",
            isDone: false,
            comments: [
              {
                id: 6006,
                text: "Должен запускаться с 0",
                publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 321,
            name: "Проверить остановку таймера",
            isDone: false,
            comments: [
              {
                id: 6007,
                text: "Время должно сохраняться",
                publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 106,
    name: "Готово",
    tasks: [
      {
        id: 210,
        name: "UX: добавить сортировку задач по дедлайну",
        timePlanned: 1200,
        timeSpent: 1200,
        dueDate: new Date(),
        status: "done",
        isDone: true,
        timer: { startedAt: null, isRunning: false },
        comments: [
          {
            id: 5007,
            text: "Сортировка по возрастанию дат",
            publishedAt: new Date(Date.now() - 20 * 60 * 60 * 1000),
          },
        ],
        subtasks: [
          {
            id: 322,
            name: "Написать функцию сортировки",
            isDone: true,
            comments: [
              {
                id: 6008,
                text: "Учесть null даты",
                publishedAt: new Date(Date.now() - 15 * 60 * 60 * 1000),
              },
            ],
          },
          {
            id: 323,
            name: "Подключить к UI",
            isDone: true,
            comments: [
              {
                id: 6009,
                text: "Добавить иконку сортировки",
                publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000),
              },
            ],
          },
        ],
      },
    ],
  },
] satisfies ColumnModel[];
