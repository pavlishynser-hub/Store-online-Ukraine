import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-600 px-6 py-16 text-white shadow-xl shadow-indigo-600/30 sm:px-10 lg:px-16">
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur">
            Ваш маркетплейс Prom.ua в одному місці
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Мрія Маркет — стильні товари з Prom.ua з доставкою по всій Україні
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Обирайте якісні товари від перевірених продавців Prom.ua, оформлюйте
            замовлення миттєво та отримуйте професійну підтримку служби турботи
            Мрія Маркет.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog" className="btn-primary text-sm uppercase">
              Перейти до каталогу
            </Link>
            <Link href="/delivery" className="btn-secondary text-sm uppercase">
              Як ми доставляємо
            </Link>
          </div>
          <dl className="grid gap-4 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-white/20">
            {[
              { label: "Перевірені продавці", value: "50+" },
              { label: "Швидка доставка", value: "1-3 дні" },
              { label: "Повернення без стресу", value: "14 днів" },
            ].map((item) => (
              <div
                key={item.label}
                className="space-y-1 text-left sm:px-4 sm:text-center"
              >
                <dt className="text-sm text-white/70">{item.label}</dt>
                <dd className="text-2xl font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="glass-card rounded-[2.25rem] p-4">
            <Image
              src="/images/banner.svg"
              alt="Асортимент Мрія Маркет"
              width={960}
              height={640}
              className="h-full w-full rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-purple-400/30 blur-3xl" />
    </section>
  );
}
