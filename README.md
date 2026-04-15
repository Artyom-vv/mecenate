# Mecenate - тестовое задание

## Структура

- `src/features/feed` - лента
- `src/features/post` - детальный пост (будет доработан на 2 этапе)
- `src/shared` - API-клиент, типы и переиспользуемые UI-примитивы
- `src/theme` - дизайн-токены

## Запуск

```bash
npm i
```

Создать файл `.env` в корне:

```env
EXPO_PUBLIC_API_BASE_URL=https://k8s.mectest.ru/test-app
EXPO_PUBLIC_SIMULATE_ERROR=false
```

Используются только `EXPO_PUBLIC_*` переменные, чтобы они были доступны на клиенте:

- `EXPO_PUBLIC_API_BASE_URL` - дефолтный URL API.
- `EXPO_PUBLIC_SIMULATE_ERROR` - включает возврат ошибок от `/posts` для проверки обработки ошибок в ленте

Для тестирования ошибок можно временно установить:

```env
EXPO_PUBLIC_SIMULATE_ERROR=true
```

и перезапустить Expo.

Запуск dev-сервера:

```bash
npx expo start
```

## Экран Feed

Реализовано:

- `FeedScreen`:
  - курсорная пагинация через `useInfiniteQuery`;
  - pull-to-refresh;
  - базовые состояния loading / error;
- `PostCard`:
  - хедер с аватаркой и именем автора;
  - обложка поста, для платных - блюр + заглушка с кнопкой доната;
  - превью текста с кнопкой «Показать ещё» / «Свернуть»;
  - нижний блок:
    - для free-постов - лайк и комментарий;
    - для paid - skeleton-плейсхолдер.
- Лайк:
  - моковый toggle `isLiked` и `likesCount` на клиенте (еще есть haptic при нажатии);
  - визуальные состояния по токенам;