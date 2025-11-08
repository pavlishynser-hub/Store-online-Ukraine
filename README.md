## Мрія Маркет — інтернет-магазин із інтеграцією Prom.ua

Готовий до розгортання на Vercel онлайн-магазин українською мовою. Каталог формується з файлу `data/products.json`, замовлення оформлюються на Prom.ua через кнопку «Купити на Prom.ua».

### Основні можливості
- сучасний дизайн на Tailwind CSS, адаптивна верстка;
- 18 товарів із Prom.ua посиланнями (можна розширювати до 50);
- сторінки для модерації Google Ads: доставка, повернення, конфіденційність, публічна оферта, контакти;
- SEO-метадані, генерація sitemap та robots.txt через `next-sitemap`;
- готовність до деплою на Vercel (включно з `vercel.json`);
- динамічні сторінки товарів, кнопки з переходом на Prom.ua.

### Технології
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- `next-sitemap` для sitemap/robots
- Статичні зображення в `public/images`

## Структура

- `data/products.json` — список товарів (id, name, description, price, image, promLink, category, badge, tags).
- `src/app` — сторінки, включно з `/catalog`, `/delivery`, `/return-policy`, `/privacy`, `/terms`, `/contacts`.
- `src/components` — спільні компоненти (шапка, футер, картка товару, хіро-блок).
- `public/images` — банер та ілюстрації товарів.

## Запуск локально

```bash
npm install
npm run dev
```

Сайт буде доступний на [http://localhost:3000](http://localhost:3000).

## Корисні скрипти

- `npm run dev` — запуск локального середовища розробки.
- `npm run build` — збірка production-версії.
- `npm run start` — запуск зібраної програми.
- `npm run lint` — перевірка ESLint.
- `npm run sitemap` — ручна генерація sitemap та robots.txt.

Після `npm run build` автоматично виконується `npm run postbuild` → `next-sitemap`, тому перед деплоєм sitemap та robots.txt будуть оновлені в каталозі `public`.

## Налаштування даних

1. **Оновіть товари** у `data/products.json`: кожен елемент містить поле `promLink` з URL на Prom.ua, ціну в гривнях (число) та шлях до зображення з `public/images`.
2. За потреби додайте нові SVG/PNG у `public/images` і пропишіть шлях у відповідному товарі.
3. Для оновлення контактів чи реквізитів скористайтеся сторінками:
   - `src/app/contacts/page.tsx`
   - `src/app/terms/page.tsx`

## Деплой на Vercel

1. Заповніть (за бажанням) змінну оточення `NEXT_PUBLIC_SITE_URL`, щоб sitemap містив правильний домен.
2. Виконайте збірку локально або на Vercel:

```bash
npm run build
```

3. Розгорніть репозиторій через GitHub / GitLab / Bitbucket або командою `vercel`.

`vercel.json` вже налаштований:

```json
{
  "framework": "nextjs",
  "outputDirectory": ".next",
  "buildCommand": "npm run build",
  "installCommand": "npm install"
}
```

## Підтримка

Для запитань щодо адаптації магазину під ваш бренд або інтеграції з іншими сервісами звертайтеся на `hello@mriyashop.ua`. З радістю допоможемо!
