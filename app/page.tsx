import {
  CalendarCheck,
  Certificate,
  CheckCircle,
  Clock,
  CurrencyRub,
  FirstAidKit,
  Heartbeat,
  ShieldCheck,
  Sparkle,
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
    detail: "Планирует операции по КТ и ведет сложные случаи с дефицитом костной ткани.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Мария Орлова",
    role: "Ортопед, эстетическая стоматология",
    experience: "11 лет опыта",
    detail: "Отвечает за финальную эстетику улыбки, прикус и естественный вид коронок.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
  },
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
  description: "Имплантация зубов с 3D-планированием, гарантией и записью на консультацию.",
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
      <h2 className="text-3xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">{text}</p> : null}
    </div>
  );
}

function PrimaryButton({ children, href = "#consultation" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="premium-button inline-flex min-h-12 items-center justify-center rounded-full bg-deep px-6 text-sm font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-accent active:translate-y-0"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,138,122,0.20),transparent_66%)] blur-3xl animate-gradientMove" />

      <header className="sticky top-0 z-50 border-b border-white/60 bg-ivory/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-3 font-semibold text-ink">
            <span className="flex size-10 items-center justify-center rounded-full bg-deep text-white">
              <Tooth size={20} weight="fill" />
            </span>
            Дентал Прайм
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a className="transition hover:text-ink" href="#doctors">Врачи</a>
            <a className="transition hover:text-ink" href="#prices">Цены</a>
            <a className="transition hover:text-ink" href="#reviews">Отзывы</a>
            <a className="transition hover:text-ink" href="#faq">FAQ</a>
          </div>
          <a
            href="#consultation"
            className="rounded-full border border-accent/20 bg-white px-4 py-2 text-sm font-semibold text-deep shadow-soft transition hover:-translate-y-0.5 hover:border-accent/40"
          >
            Записаться
          </a>
        </nav>
      </header>

      <section className="soft-grid relative min-h-[calc(100dvh-80px)] px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-4 py-2 text-sm font-medium text-deep shadow-soft">
                <Sparkle size={16} weight="fill" />
                Консультация с хирургом и планом лечения
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-ink md:text-7xl">
                Имплантация зубов с гарантией и 3D-планированием
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Восстановим зуб без хаоса в лечении: КТ-диагностика, понятный план, опытные врачи и спокойная запись на консультацию.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton>Записаться на консультацию</PrimaryButton>
                <a
                  href="#prices"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 bg-white px-6 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-accent/35"
                >
                  Посмотреть стоимость
                </a>
              </div>
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["14+", "лет опыта"],
                  ["3D", "планирование"],
                  ["5 лет", "гарантия"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-soft">
                    <p className="text-2xl font-semibold text-deep">{value}</p>
                    <p className="mt-1 text-sm text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:delay-150">
            <div className="relative">
              <div className="absolute -left-6 top-10 size-28 rounded-full bg-mint blur-xl animate-float" />
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=86"
                alt="Премиальный светлый кабинет стоматологии с современным оборудованием"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-premium"
              />
              <div className="glass-panel absolute bottom-5 left-5 right-5 rounded-3xl p-5 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-mint text-deep">
                    <ShieldCheck size={22} weight="fill" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">План лечения до операции</p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      Пациент заранее понимает этапы, сроки, цену и гарантийные условия.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {[
              ["Лицензия", "Медицинская деятельность подтверждена"],
              ["КТ на месте", "Диагностика без лишних поездок"],
              ["Честный план", "Без навязанных процедур"],
              ["Оплата этапами", "Бюджет понятен до старта"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft">
                <CheckCircle className="mb-4 text-accent" size={24} weight="fill" />
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20" id="doctors">
        <Reveal>
          <SectionTitle
            label="Команда"
            title="Врачи, которым спокойно доверить сложное лечение"
            text="На лендинге важно показывать не громкие обещания, а конкретику: опыт, роль врача и как устроено решение."
          />
        </Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {doctors.map((doctor) => (
            <Reveal key={doctor.name}>
              <article className="card-hover grid overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft md:grid-cols-[0.88fr_1.12fr]">
                <img src={doctor.image} alt={doctor.name} className="h-72 w-full object-cover md:h-full" />
                <div className="p-7">
                  <p className="mb-3 text-sm font-medium text-accent">{doctor.experience}</p>
                  <h3 className="text-2xl font-semibold text-ink">{doctor.name}</h3>
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
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Сначала план, потом операция
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted">
                Пациент боится неизвестности. Поэтому сценарий лечения разобран на простые шаги, а каждый шаг снижает тревогу.
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
                  <span className="flex size-14 items-center justify-center rounded-full bg-deep font-mono text-sm text-white">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{title}</h3>
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
                className={`card-hover rounded-[2rem] border p-7 shadow-soft ${
                  item.featured ? "border-accent/35 bg-deep text-white" : "border-ink/8 bg-white text-ink"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <CurrencyRub size={24} className={item.featured ? "text-mint" : "text-accent"} />
                </div>
                <p className={`mt-5 text-3xl font-semibold ${item.featured ? "text-white" : "text-deep"}`}>
                  {item.price}
                </p>
                <ul className="mt-7 space-y-4">
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
                [FirstAidKit, "Стерильная хирургическая зона", "Отдельный протокол подготовки кабинета и инструментов."],
                [UserFocus, "Куратор лечения", "Пациент не остается один между этапами и визитами."],
                [Clock, "Запись без ожидания", "Консультации распределены так, чтобы врач не торопился."],
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-soft">
                  <Icon className="mb-4 text-accent" size={28} weight="fill" />
                  <h3 className="text-xl font-semibold text-ink">{title as string}</h3>
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
            ["До лечения", "Пациент избегал улыбки из-за отсутствия жевательного зуба."],
            ["После лечения", "Установлен имплант и коронка в цвет зубного ряда."],
          ].map(([title, text], index) => (
            <Reveal key={title}>
              <figure className="card-hover overflow-hidden rounded-[2rem] border border-ink/8 bg-white shadow-soft">
                <img
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=84"
                      : "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1100&q=84"
                  }
                  alt={title}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="p-6">
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-muted">{text}</p>
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
            ["Елена, 42", "Больше всего боялась операции. Врач все показал на снимке, рассказал по шагам, и стало намного спокойнее."],
            ["Андрей, 51", "Понравилось, что цену назвали до начала лечения. Без внезапных доплат и странных формулировок."],
            ["Наталья, 37", "Коронка выглядит как свой зуб. Никто не замечает, а я снова нормально улыбаюсь на фото."],
          ].map(([name, quote]) => (
            <Reveal key={name}>
              <blockquote className="card-hover h-full rounded-[2rem] border border-ink/8 bg-ivory p-7 shadow-soft">
                <div className="mb-5 flex text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} weight="fill" />
                  ))}
                </div>
                <p className="leading-7 text-muted">{quote}</p>
                <footer className="mt-6 font-semibold text-ink">{name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20" id="faq">
        <Reveal>
          <SectionTitle label="FAQ" title="Вопросы, которые пациент обычно стесняется задать" />
        </Reveal>
        <div className="mx-auto max-w-4xl divide-y divide-ink/10 rounded-[2rem] border border-ink/8 bg-white shadow-soft">
          {faq.map((item) => (
            <Reveal key={item.question}>
              <details className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-ink">
                  {item.question}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint text-deep transition group-open:rotate-45">
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
              <div className="absolute right-8 top-8 size-24 rounded-full bg-accent/30 blur-2xl animate-float" />
              <Heartbeat className="mb-6 text-mint" size={36} weight="fill" />
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
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
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Телефон
                <input
                  className="min-h-12 rounded-2xl border border-ink/12 bg-ivory px-4 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
                  placeholder="+7 999 000-00-00"
                  type="tel"
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
                className="premium-button mt-2 min-h-12 rounded-full bg-deep px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent active:translate-y-0"
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
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Дентал Прайм, демо-лендинг для стоматологии и имплантации</p>
          <div className="flex gap-5">
            <a className="transition hover:text-ink" href="#consultation">Запись</a>
            <a className="transition hover:text-ink" href="#prices">Цены</a>
            <a className="transition hover:text-ink" href="#faq">FAQ</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
