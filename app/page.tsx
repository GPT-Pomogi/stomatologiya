import {
  ArrowRight,
  CalendarCheck,
  Certificate,
  CheckCircle,
  Clock,
  Cube,
  CurrencyRub,
  FirstAidKit,
  Heartbeat,
  ListBullets,
  ShieldCheck,
  Star,
  Tooth,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const doctors = [
  {
    name: "Илья Корнев",
    role: "Имплантолог, хирург",
    experience: "14 лет опыта",
    detail:
      "Планирует операции по КТ и ведет сложные случаи с дефицитом костной ткани.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Мария Орлова",
    role: "Ортопед, эстетическая стоматология",
    experience: "11 лет опыта",
    detail:
      "Отвечает за финальную эстетику улыбки, прикус и естественный вид коронок.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
];

const logos = [
  "Straumann",
  "Nobel Biocare",
  "OSSTEM",
  "Dentsply Sirona",
  "Megagen",
];

const packages = [
  {
    name: "Диагностика",
    price: "от 2 900 ₽",
    items: ["КТ-снимок", "План лечения", "Расчет сроков и бюджета"],
  },
  {
    name: "Имплант + коронка",
    price: "от 89 000 ₽",
    items: ["Имплант премиум-класса", "3D-навигация", "Коронка из диоксида циркония"],
    featured: true,
  },
  {
    name: "Все на 4",
    price: "от 249 000 ₽",
    items: ["Полная дуга зубов", "Временный протез в день операции", "Поэтапная оплата"],
  },
];

const faq = [
  {
    question: "Будет больно?",
    answer:
      "Операция проходит под современной анестезией. После приема врач дает понятный план восстановления и остается на связи.",
  },
  {
    question: "Что если имплант не приживется?",
    answer:
      "Мы заранее оцениваем риски по КТ, работаем с проверенными системами и фиксируем гарантийные условия в плане лечения.",
  },
  {
    question: "Можно ли сделать без долгого отсутствия зуба?",
    answer:
      "Во многих случаях ставим временную коронку или протез, чтобы пациент не выпадал из привычной жизни.",
  },
  {
    question: "Почему цена не самая низкая?",
    answer:
      "В имплантации дешевле редко значит спокойнее. В стоимость входят диагностика, планирование, материалы и контрольные визиты.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Дентал Прайм",
  description:
    "Премиальный лендинг стоматологии: имплантация зубов с 3D-планированием, гарантией, опытными врачами и записью на консультацию.",
  medicalSpecialty: "Dentistry",
  telephone: "+7 495 000-00-00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Москва",
    streetAddress: "ул. Спокойная, 12",
    addressCountry: "RU",
  },
  priceRange: "₽₽₽",
};

function SectionTitle({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium text-accent">{label}</p>
      <h2 className="display-serif text-3xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">{text}</p>
      ) : null}
    </div>
  );
}

function PrimaryButton({
  children,
  href = "#consultation",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="premium-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#3B6FE7,#2749A7)] px-6 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(59,111,231,0.24)] active:scale-[0.98] active:translate-y-0"
    >
      {children}
      <ArrowRight size={18} weight="bold" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:flex focus:items-center focus:rounded-full focus:bg-deep focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-premium"
      >
        Перейти к содержимому
      </a>
      <main className="relative overflow-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,111,231,0.20),transparent_66%)] blur-3xl animate-gradientMove" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/76 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#3B6FE7,#2749A7)] text-white shadow-soft">
              <Tooth size={20} weight="fill" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-ink">Дентал Прайм</p>
              <p className="text-xs text-muted">Современная стоматология</p>
            </div>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a className="transition hover:text-ink" href="#doctors">
              Врачи
            </a>
            <a className="transition hover:text-ink" href="#prices">
              Цены
            </a>
            <a className="transition hover:text-ink" href="#reviews">
              Отзывы
            </a>
            <a className="transition hover:text-ink" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#3B6FE7,#2749A7)] px-5 py-3 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
          >
            <CalendarCheck size={18} weight="fill" />
            Записаться
          </a>
        </nav>
      </header>

      <section id="main-content" className="clinical-canvas relative min-h-[calc(100dvh-80px)] px-5 py-12 md:py-16">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.96fr_1.04fr]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/78 px-4 py-2 text-sm font-medium text-deep shadow-soft backdrop-blur">
                <ShieldCheck size={16} weight="fill" className="text-accent" />
                Консультация с хирургом и 3D-план лечения
              </p>
              <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-ink md:text-[5.5rem]">
                Имплантация зубов с гарантией и <span className="text-accent">3D-планированием</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Восстановим зуб без хаоса в лечении: КТ-диагностика, понятный план, опытные врачи и спокойная запись на консультацию.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>
                  <CalendarCheck size={18} weight="fill" />
                  Записаться на консультацию
                </PrimaryButton>
                <a
                  href="#prices"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/84 px-6 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-accent/35 active:scale-[0.98] active:translate-y-0"
                >
                  <ListBullets size={18} />
                  Посмотреть стоимость
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:delay-150">
            <div className="hero-visual relative">
              <div className="absolute -left-6 top-10 size-28 rounded-full bg-[rgba(59,111,231,0.22)] blur-3xl animate-float" />
              <div className="glass-panel absolute -left-3 top-8 z-20 hidden max-w-48 rounded-[2rem] p-4 shadow-soft md:block">
                <Cube size={28} className="text-accent" weight="duotone" />
                <p className="mt-2 font-mono text-3xl font-semibold text-deep">3D</p>
                <p className="mt-1 text-sm leading-5 text-muted">план до операции</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=86"
                alt="Премиальный светлый кабинет стоматологии с современным оборудованием"
                className="relative z-10 aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-premium"
              />
              <div className="glass-panel absolute bottom-5 left-5 right-5 z-20 rounded-[2rem] p-5 shadow-soft">
                <p className="font-semibold text-ink">План лечения до операции</p>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-ink/8 pt-4">
                  {([
                    [CurrencyRub, "Прозрачно", "Без скрытых платежей"],
                    [ListBullets, "Понятно", "Пошаговый план лечения"],
                    [ShieldCheck, "Надёжно", "Гарантия на все виды работ"],
                  ] as const).map(([Icon, label, desc]) => (
                    <div key={label}>
                      <Icon size={18} className="text-accent" weight="fill" />
                      <p className="mt-1.5 text-sm font-semibold text-ink">{label}</p>
                      <p className="mt-0.5 text-xs leading-4 text-muted">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-10 max-w-7xl grid gap-4 sm:grid-cols-3">
            {([
              [UserFocus, "Опытные хирурги", "Специалисты с практикой от 7 лет"],
              [FirstAidKit, "Точная диагностика", "КТ и 3D-план для идеального результата"],
              [Certificate, "Гарантия на результат", "Официальная гарантия на импланты и работы"],
            ] as const).map(([Icon, title, text]) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/70 bg-white/72 px-5 py-4 shadow-soft backdrop-blur">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(59,111,231,0.10)] text-accent">
                  <Icon size={20} weight="fill" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="mt-0.5 text-sm leading-5 text-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-5xl text-center">
            <p className="text-sm font-medium text-muted">Нам доверяют</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-slate-300 md:grid-cols-5 md:gap-8">
              {logos.map((brand) => (
                <div
                  key={brand}
                  className="flex h-12 items-center justify-center rounded-2xl border border-white/50 bg-white/50 text-sm font-semibold uppercase tracking-[0.18em]"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-accent/12 bg-white/72 p-5 shadow-soft backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="rounded-[1.5rem] bg-deep p-7 text-white">
              <p className="text-sm font-medium text-mint">Почему пациент оставляет заявку</p>
              <h2 className="display-serif mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Лендинг не продает операцию. Он снижает тревогу перед первым визитом.
              </h2>
              <p className="mt-5 leading-7 text-white/74">
                Поэтому первый экран, цены, врачи и FAQ собраны вокруг спокойного решения, а не вокруг агрессивного оффера.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Лицензия", "Медицинская деятельность подтверждена"],
                ["КТ на месте", "Диагностика без лишних поездок"],
                ["Честный план", "Без навязанных процедур"],
                ["Оплата этапами", "Бюджет понятен до старта"],
              ].map(([title, text]) => (
                <div key={title} className="card-hover rounded-[1.5rem] border border-ink/8 bg-ivory p-6">
                  <CheckCircle className="mb-4 text-accent" size={24} weight="fill" />
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20" id="doctors">
        <Reveal>
          <SectionTitle
            label="Команда"
            title="Врачи, которым спокойно доверить сложное лечение"
            text="Нам важны не громкие обещания, а опыт, роль врача и как устроено решение."
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {doctors.map((doctor) => (
            <Reveal key={doctor.name}>
              <article className="card-hover grid overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft md:grid-cols-[0.88fr_1.12fr]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-72 w-full object-cover md:h-full"
                />
                <div className="p-7">
                  <p className="mb-3 text-sm font-medium text-accent">{doctor.experience}</p>
                  <h3 className="display-serif text-2xl font-semibold text-ink">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{doctor.role}</p>
                  <p className="mt-5 leading-7 text-muted">{doctor.detail}</p>
                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-porcelain p-4 text-sm text-deep">
                    <Certificate size={22} weight="fill" />
                    Сертификаты Straumann, Nobel Biocare, Astra Tech
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-medium text-accent">Процесс</p>
              <h2 className="display-serif text-3xl font-semibold leading-tight md:text-5xl">
                Сначала план, потом операция
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                Пациент боится неизвестности. Поэтому сценарий лечения разбит на простые шаги, а каждый шаг снижает тревогу.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {[
              ["01", "КТ и консультация", "Врач оценивает кость, прикус, соседние зубы и противопоказания."],
              ["02", "3D-планирование", "Позиция импланта подбирается заранее, с учетом будущей коронки."],
              ["03", "Имплантация", "Операция проходит по плану, с контролем стерильности и анестезии."],
              ["04", "Коронка и наблюдение", "Финальный результат проверяют по эстетике, прикусу и комфорту."],
            ].map(([step, title, text]) => (
              <Reveal key={step}>
                <div className="card-hover grid gap-5 rounded-3xl border border-ink/8 bg-ivory p-6 shadow-soft sm:grid-cols-[72px_1fr]">
                  <span className="flex size-14 items-center justify-center rounded-full bg-[rgba(59,111,231,0.12)] font-mono text-sm text-deep">
                    {step}
                  </span>
                  <div>
                    <h3 className="display-serif text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-2 leading-7 text-muted">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20" id="prices">
        <Reveal>
          <SectionTitle
            label="Стоимость"
            title="Пакеты без ощущения скрытого счета"
            text="Цены на медицину нельзя подавать как распродажу. Здесь важны прозрачность, этапы и понятные рамки бюджета."
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <Reveal key={item.name}>
              <article
                className={`card-hover flex flex-col rounded-[2rem] border p-7 shadow-soft ${
                  item.featured ? "border-accent/35 bg-deep text-white" : "border-ink/8 bg-white text-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="display-serif text-2xl font-semibold">{item.name}</h3>
                    {item.featured && (
                      <span className="mt-2 inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-mint">
                        Рекомендуем
                      </span>
                    )}
                  </div>
                  <CurrencyRub size={24} className={item.featured ? "text-mint" : "text-accent"} />
                </div>
                <p className={`mt-5 text-3xl font-semibold ${item.featured ? "text-white" : "text-deep"}`}>
                  {item.price}
                </p>
                <ul className="mt-7 grow space-y-4">
                  {item.items.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-6">
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className={item.featured ? "shrink-0 text-mint" : "shrink-0 text-accent"}
                      />
                      <span className={item.featured ? "text-white/86" : "text-muted"}>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#consultation"
                  className={`mt-8 flex min-h-11 items-center justify-center rounded-full text-sm font-semibold transition active:scale-[0.98] ${
                    item.featured
                      ? "bg-white text-deep hover:bg-white/90"
                      : "bg-[linear-gradient(135deg,#3B6FE7,#2749A7)] text-white shadow-premium hover:-translate-y-0.5"
                  }`}
                >
                  Записаться на консультацию
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-porcelain px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=86"
              alt="Стоматолог проводит аккуратную консультацию пациенту"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-premium"
            />
          </Reveal>
          <Reveal>
            <div className="grid h-full content-center gap-5">
              {[
                [
                  FirstAidKit,
                  "Стерильная хирургическая зона",
                  "Отдельный протокол подготовки кабинета и инструментов.",
                ],
                [
                  UserFocus,
                  "Куратор лечения",
                  "Пациент не остается один между этапами и визитами.",
                ],
                [
                  Clock,
                  "Запись без ожидания",
                  "Консультации распределены так, чтобы врач не торопился.",
                ],
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-soft">
                  <Icon className="mb-4 text-accent" size={28} weight="fill" />
                  <h3 className="display-serif text-xl font-semibold text-ink">{title as string}</h3>
                  <p className="mt-2 leading-7 text-muted">{text as string}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <Reveal>
          <SectionTitle
            label="Результаты"
            title="До и после без агрессивных обещаний"
            text="Для медицины лучше работает спокойная демонстрация результата, где видно путь пациента и аккуратность работы."
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            [
              "До лечения",
              "Пациент избегал улыбки из-за отсутствия жевательного зуба.",
              "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=84",
            ],
            [
              "После лечения",
              "Установлен имплант и коронка в цвет зубного ряда.",
              "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1100&q=84",
            ],
          ].map(([title, text, image]) => (
            <Reveal key={title as string}>
              <figure className="card-hover overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft">
                <img
                  src={image as string}
                  alt={title as string}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="p-6">
                  <h3 className="display-serif text-xl font-semibold text-ink">{title as string}</h3>
                  <p className="mt-2 text-muted">{text as string}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20" id="reviews">
        <Reveal>
          <SectionTitle
            label="Отзывы"
            title="Пациенты отмечают не только результат, но и спокойствие процесса"
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {[
            [
              "Елена, 42",
              "Больше всего боялась операции. Врач все показал на снимке, рассказал по шагам, и стало намного спокойнее.",
            ],
            [
              "Андрей, 51",
              "Понравилось, что цену назвали до начала лечения. Без внезапных доплат и странных формулировок.",
            ],
            [
              "Наталья, 37",
              "Коронка выглядит как свой зуб. Никто не замечает, а я снова нормально улыбаюсь на фото.",
            ],
          ].map(([name, quote]) => (
            <Reveal key={name as string}>
              <blockquote className="card-hover h-full rounded-[2rem] border border-ink/8 bg-ivory p-7 shadow-soft">
                <div className="mb-5 flex text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} weight="fill" />
                  ))}
                </div>
                <p className="leading-7 text-muted">{quote as string}</p>
                <footer className="mt-6 font-semibold text-ink">{name as string}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20" id="faq">
        <Reveal>
          <SectionTitle
            label="FAQ"
            title="Вопросы, которые пациент обычно стесняется задать"
          />
        </Reveal>
        <div className="mx-auto max-w-4xl divide-y divide-ink/10 rounded-[2rem] border border-ink/8 bg-white shadow-soft">
          {faq.map((item) => (
            <Reveal key={item.question}>
              <details className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-ink">
                  {item.question}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[rgba(59,111,231,0.12)] text-deep transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20" id="consultation">
        <Reveal>
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-deep text-white shadow-premium lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative p-8 md:p-12">
              <div className="absolute right-8 top-8 size-24 rounded-full bg-[rgba(220,231,255,0.24)] blur-2xl animate-float" />
              <Heartbeat className="mb-6 text-mint" size={36} weight="fill" />
              <h2 className="display-serif text-3xl font-semibold leading-tight md:text-5xl">
                Запишитесь на консультацию и получите понятный план лечения
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/76">
                Администратор подберет удобное время, а врач объяснит варианты без давления и сложных медицинских формулировок.
              </p>
            </div>
            <form className="grid gap-4 bg-white p-6 text-ink md:p-10">
              <label className="grid gap-2 text-sm font-medium">
                Имя
                <input
                  className="min-h-12 rounded-2xl border border-ink/12 bg-ivory px-4 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder="Как к вам обращаться"
                  type="text"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Телефон
                <input
                  className="min-h-12 rounded-2xl border border-ink/12 bg-ivory px-4 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder="+7 999 000-00-00"
                  type="tel"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Что беспокоит
                <textarea
                  className="min-h-28 rounded-2xl border border-ink/12 bg-ivory px-4 py-3 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder="Например: нет зуба, хочу понять сроки и стоимость"
                />
              </label>
              <button
                type="submit"
                className="premium-button mt-2 min-h-12 rounded-full bg-[linear-gradient(135deg,#3B6FE7,#2749A7)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
              >
                Получить план консультации
              </button>
              <p className="text-xs leading-5 text-muted">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Это демонстрационная форма для портфолио.
              </p>
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-ink/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-muted md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-semibold text-ink">Дентал Прайм</p>
            <p className="mt-1">© 2025 Демо-лендинг стоматологии. Все права защищены.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="transition hover:text-ink" href="#consultation">Запись</a>
            <a className="transition hover:text-ink" href="#prices">Цены</a>
            <a className="transition hover:text-ink" href="#faq">FAQ</a>
            <a className="transition hover:text-ink" href="/privacy">Политика конфиденциальности</a>
            <a className="transition hover:text-ink" href="/terms">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}
