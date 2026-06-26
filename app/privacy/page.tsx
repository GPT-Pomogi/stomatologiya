import type { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Дентал Прайм",
  description: "Политика обработки персональных данных клиники Дентал Прайм.",
};

const sections = [
  {
    title: "Какие данные мы собираем",
    text: "При заполнении формы на сайте мы получаем имя и номер телефона. Эти данные вы передаёте добровольно для записи на консультацию. Мы не собираем cookies, данные о геолокации или историю браузера.",
  },
  {
    title: "Для чего используем данные",
    text: "Имя и телефон используются исключительно для того, чтобы администратор клиники мог связаться с вами и подтвердить время консультации. Мы не используем данные в маркетинговых рассылках без вашего явного согласия.",
  },
  {
    title: "Передача третьим лицам",
    text: "Мы не продаём, не обмениваем и не передаём ваши персональные данные сторонним организациям. Исключение — случаи, предусмотренные законодательством РФ, или ваше явное письменное согласие.",
  },
  {
    title: "Хранение и защита",
    text: "Данные хранятся на защищённых серверах. Доступ к ним имеют только сотрудники, непосредственно работающие с записями пациентов. Форма на сайте передаёт данные по зашифрованному каналу (HTTPS).",
  },
  {
    title: "Ваши права",
    text: "Вы вправе запросить удаление, исправление или копию своих данных в любой момент. Для этого напишите на электронную почту или позвоните по номеру, указанному на сайте. Запрос обрабатывается в течение 3 рабочих дней.",
  },
  {
    title: "Изменения политики",
    text: "Мы можем обновлять этот документ. Актуальная версия всегда доступна на этой странице. Дата последнего обновления указана в заголовке.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <a
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink"
      >
        <ArrowLeft size={16} />
        На главную
      </a>

      <p className="text-sm font-medium text-accent">Юридическая информация</p>
      <h1 className="display-serif mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">
        Политика конфиденциальности
      </h1>
      <p className="mt-4 text-sm text-muted">Последнее обновление: 1 июня 2025 года</p>

      <div className="mt-12 space-y-10">
        {sections.map(({ title, text }) => (
          <section key={title}>
            <h2 className="text-lg font-semibold text-ink">{title}</h2>
            <p className="mt-3 leading-7 text-muted">{text}</p>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-[1.5rem] border border-ink/8 bg-white p-6">
        <p className="text-sm font-semibold text-ink">Контакты по вопросам персональных данных</p>
        <p className="mt-2 text-sm leading-6 text-muted">
          Клиника Дентал Прайм, ул. Спокойная, 12, Москва
          <br />
          Телефон: +7 495 000-00-00
          <br />
          E-mail: privacy@dentalprime.ru
        </p>
      </div>
    </main>
  );
}
