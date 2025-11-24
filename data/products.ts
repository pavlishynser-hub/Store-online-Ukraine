export type Product = {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  description: string;
  bullets: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "trunk-organizer",
    name: "Органайзер в багажник авто",
    subtitle: "Порядок в багажнику за 5 хвилин",
    price: 650,
    image: "/images/product-01.svg",
    description:
      "Порядок у багажнику всього за кілька хвилин. Місткий органайзер підійде для будь-якого авто та збереже речі на місці.",
    bullets: [
      "Вмістимість 55 літрів та жорстке дно",
      "Водонепроникні матеріали та легке очищення",
      "Окремі відділення для інструментів і дрібниць"
    ]
  },
  {
    id: 2,
    slug: "seat-gap-organizer",
    name: "Органайзер між сидіннями",
    subtitle: "Телефон і ключі завжди під рукою",
    price: 480,
    image: "/images/product-02.svg",
    description:
      "Закриває зазор між сидіннями та центральною консоллю, щоб гаджети більше не падали в щілину під час руху.",
    bullets: [
      "Щільно фіксується та не ковзає",
      "Два кишені під смартфон та документи",
      "Матеріал, що легко очищується від пилу"
    ]
  },
  {
    id: 3,
    slug: "massage-gun",
    name: "Масажер-пістолет для тіла",
    subtitle: "Зніміть напругу після дальньої дороги",
    price: 1690,
    image: "/images/product-03.svg",
    description:
      "4 насадки та 3 швидкості допоможуть швидко відновити мʼязи після поїздок, тренувань чи робочого дня за кермом.",
    bullets: [
      "Автономність до 4 годин від одного заряду",
      "Низький рівень шуму — лише 45 дБ",
      "Компактний чохол для зберігання в авто"
    ]
  },
  {
    id: 4,
    slug: "orthopedic-pillow",
    name: "Ортопедична подушка для авто",
    subtitle: "Без болю у спині навіть на довгій дорозі",
    price: 720,
    image: "/images/product-04.svg",
    description:
      "Підтримує поперек та розвантажує спину завдяки анатомічній формі з піни памʼяті, а знімний чохол легко прати.",
    bullets: [
      "Піна Memory Foam з ефектом памʼяті",
      "Регульовані ремені для будь-якого сидіння",
      "Дихаючий чохол на блискавці"
    ]
  }
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
