import "./About.css";

function About() {
  return (
    <>
      <main className="about">
        <section className="about-header">
          <h1>О проекте Python Mini-Learn</h1>
          <p>
            Добро пожаловать в интерактивный учебник Python с встроенным
            тренажёром кода. Проект помогает изучать Python с самых основ, от
            типов данных до ООП и работы с библиотеками.
          </p>
        </section>

        <section className="about-info">
          <h2>Версия учебника</h2>
          <p>{__APP_VERSION__}</p>

          <h2>Создатели проекта</h2>
          <ul>
            <li>
              <strong>autli</strong> – разработка интерфейса, React, дизайн
              <br />
              Telegram:{" "}
              <a href="https://t.me/autli" target="_blank">
                @autli
              </a>
            </li>
            <li>
              <strong>Neizzu</strong> - разработка тренажёра, содержимое книги
              <br />
              Telegram:{" "}
              <a href="https://t.me/Kryt0_kryt0" target="_blank">
                @Neizzu
              </a>
            </li>
            <li>
              <strong>idinahuy</strong> - разработка тренажёра, содержимое книги
              <br />
              Telegram:{" "}
              <a href="https://t.me/PIZDACHANCE" target="_blank">
                @PIZDACHANCE
              </a>
            </li>
            <li>
              <strong>pepevsd</strong> - главный сосальщик и тестировщик журнала и тренажера
              <br />
              Telegram: {" "}
              <a href="https://t.me/pepevsd">
                @pepevsd
              </a>
            </li>
          </ul>

          <h2>Особенности проекта</h2>
          <ul>
            <li>Интерактивные главы и подглавы с примерами кода</li>
            <li>
              Тренажёр для проверки знаний прямо в браузере и Telegram WebApp
            </li>
            <li>Поддержка светлой и тёмной темы, а также темы Telegram</li>
            <li>Сохранение прогресса и настроек пользователя</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default About;
