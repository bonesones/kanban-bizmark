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
            timePlanned: 1800,
            timeSpent: 300,
            dueDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900001,
                name: "Вложенная подзадача 900001",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700001,
                    text: "Комментарий к вложенной 900001",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2100,
            timeSpent: 450,
            dueDate: new Date(Date.now() + 3 * 60 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900002,
                name: "Вложенная подзадача 900002",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700002,
                    text: "Комментарий к вложенной 900002",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2400,
            timeSpent: 600,
            dueDate: new Date(Date.now() + 5 * 60 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900003,
                name: "Вложенная подзадача 900003",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700003,
                    text: "Комментарий к вложенной 900003",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1600,
            timeSpent: 200,
            dueDate: new Date(Date.now() + 6 * 60 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900004,
                name: "Вложенная подзадача 900004",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700004,
                    text: "Комментарий к вложенной 900004",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1400,
            timeSpent: 120,
            dueDate: new Date(Date.now() + 8 * 60 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900005,
                name: "Вложенная подзадача 900005",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700005,
                    text: "Комментарий к вложенной 900005",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1700,
            timeSpent: 260,
            dueDate: new Date(Date.now() + 9 * 60 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900006,
                name: "Вложенная подзадача 900006",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700006,
                    text: "Комментарий к вложенной 900006",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1500,
            timeSpent: 350,
            dueDate: new Date(Date.now() + 11 * 60 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900007,
                name: "Вложенная подзадача 900007",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700007,
                    text: "Комментарий к вложенной 900007",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1300,
            timeSpent: 180,
            dueDate: new Date(Date.now() + 12 * 60 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900008,
                name: "Вложенная подзадача 900008",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700008,
                    text: "Комментарий к вложенной 900008",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
        completedAt: new Date(Date.now() - 30 * 60 * 1000),
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
            timePlanned: 900,
            timeSpent: 900,
            dueDate: new Date(Date.now() - 14 * 60 * 60 * 1000),
            status: "done",
            isDone: true,
            completedAt: new Date(Date.now() - 50 * 60 * 1000),
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900009,
                name: "Вложенная подзадача 900009",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700009,
                    text: "Комментарий к вложенной 900009",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 1100,
            timeSpent: 1100,
            dueDate: new Date(Date.now() - 15 * 60 * 60 * 1000),
            status: "done",
            isDone: true,
            completedAt: new Date(Date.now() - 40 * 60 * 1000),
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900010,
                name: "Вложенная подзадача 900010",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700010,
                    text: "Комментарий к вложенной 900010",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2500,
            timeSpent: 500,
            dueDate: new Date(Date.now() + 301 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900011,
                name: "Вложенная подзадача 900011",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700011,
                    text: "Комментарий к вложенной 900011",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2600,
            timeSpent: 650,
            dueDate: new Date(Date.now() + 302 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900012,
                name: "Вложенная подзадача 900012",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700012,
                    text: "Комментарий к вложенной 900012",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2700,
            timeSpent: 700,
            dueDate: new Date(Date.now() + 303 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900013,
                name: "Вложенная подзадача 900013",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700013,
                    text: "Комментарий к вложенной 900013",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2800,
            timeSpent: 840,
            dueDate: new Date(Date.now() + 304 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900014,
                name: "Вложенная подзадача 900014",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700014,
                    text: "Комментарий к вложенной 900014",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2900,
            timeSpent: 500,
            dueDate: new Date(Date.now() + 305 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900015,
                name: "Вложенная подзадача 900015",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700015,
                    text: "Комментарий к вложенной 900015",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3000,
            timeSpent: 900,
            dueDate: new Date(Date.now() + 306 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900016,
                name: "Вложенная подзадача 900016",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700016,
                    text: "Комментарий к вложенной 900016",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3100,
            timeSpent: 780,
            dueDate: new Date(Date.now() + 307 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900017,
                name: "Вложенная подзадача 900017",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700017,
                    text: "Комментарий к вложенной 900017",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3200,
            timeSpent: 1000,
            dueDate: new Date(Date.now() + 308 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900018,
                name: "Вложенная подзадача 900018",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700018,
                    text: "Комментарий к вложенной 900018",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3300,
            timeSpent: 400,
            dueDate: new Date(Date.now() + 309 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900019,
                name: "Вложенная подзадача 900019",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700019,
                    text: "Комментарий к вложенной 900019",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3400,
            timeSpent: 1300,
            dueDate: new Date(Date.now() + 310 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900020,
                name: "Вложенная подзадача 900020",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700020,
                    text: "Комментарий к вложенной 900020",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3500,
            timeSpent: 900,
            dueDate: new Date(Date.now() + 311 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900021,
                name: "Вложенная подзадача 900021",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700021,
                    text: "Комментарий к вложенной 900021",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 3600,
            timeSpent: 1200,
            dueDate: new Date(Date.now() + 312 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900022,
                name: "Вложенная подзадача 900022",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700022,
                    text: "Комментарий к вложенной 900022",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2100,
            timeSpent: 300,
            dueDate: new Date(Date.now() + 318 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900023,
                name: "Вложенная подзадача 900023",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700023,
                    text: "Комментарий к вложенной 900023",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2200,
            timeSpent: 350,
            dueDate: new Date(Date.now() + 319 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900024,
                name: "Вложенная подзадача 900024",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700024,
                    text: "Комментарий к вложенной 900024",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2300,
            timeSpent: 100,
            dueDate: new Date(Date.now() + 320 * 60 * 1000),
            status: "toDo",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900025,
                name: "Вложенная подзадача 900025",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700025,
                    text: "Комментарий к вложенной 900025",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 2400,
            timeSpent: 140,
            dueDate: new Date(Date.now() + 321 * 60 * 1000),
            status: "inProgress",
            isDone: false,
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900026,
                name: "Вложенная подзадача 900026",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700026,
                    text: "Комментарий к вложенной 900026",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
        completedAt: new Date(Date.now() - 70 * 60 * 1000),
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
            timePlanned: 1000,
            timeSpent: 1000,
            dueDate: new Date(Date.now() - 322 * 60 * 1000),
            status: "done",
            isDone: true,
            completedAt: new Date(Date.now() - 90 * 60 * 1000),
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900027,
                name: "Вложенная подзадача 900027",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700027,
                    text: "Комментарий к вложенной 900027",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
            timePlanned: 900,
            timeSpent: 900,
            dueDate: new Date(Date.now() - 323 * 60 * 1000),
            status: "done",
            isDone: true,
            completedAt: new Date(Date.now() - 80 * 60 * 1000),
            timer: { startedAt: null, isRunning: false },
            subtasks: [
              {
                id: 900028,
                name: "Вложенная подзадача 900028",
                timePlanned: 600,
                timeSpent: 0,
                dueDate: new Date(),
                status: "toDo",
                isDone: false,
                timer: { startedAt: null, isRunning: false },
                subtasks: [],
                comments: [
                  {
                    id: 700028,
                    text: "Комментарий к вложенной 900028",
                    publishedAt: new Date(),
                  },
                ],
              },
            ],
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
