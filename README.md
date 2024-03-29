
# Farpost-test

## Start 

```
cd client
npm i
npm run dev
```

## Загрузчик 

Исопльзовалась библиотека  react-spinners 

## Главная страница 

На главной странице представлен список задач, кнопка "Добавить задачу", боковое меню с сортировкой и фильтрацией

![image](https://github.com/ka1danary/Farpost-test/assets/99461482/a9304e0a-9db5-48ea-ae8a-bf823a8006fd)

Кнопка "Создать задачу" открывает модальное окно с формой для заполнения. 

- Название задачи
- Выбор приоритета
- Выбор меток
- Описание задачи

Кнопка "Очистить" удаляет выбранный стутс и метки.
По нажатию кнопки "Создать" в массив задач добаляется новая задача.

![image](https://github.com/ka1danary/Farpost-test/assets/99461482/c306910b-2630-47b6-9310-613f9bc828c0)

### Сортировка 

Сортирует список задач по возрастанию / убыванию
Отмены сортировки пока нет, потому что сортировка ссылается на оригинальный массив задач, в будущем будем исправлено.
![image](https://github.com/ka1danary/Farpost-test/assets/99461482/5a2f2933-c651-4e18-b7d3-c5c2a29580b9)


### Фильтрация

Показывает карточки у когорых есть выбранные метки. 
Выбрать приоритет можно только 1, при выборе другого происходит переключение. Визуально это не показано с помощью чекбокса, в будущем будет исправлено.
![image](https://github.com/ka1danary/Farpost-test/assets/99461482/86e4f19b-278b-4836-b27d-3d197bf938eb)


## Просмотр Задачи



