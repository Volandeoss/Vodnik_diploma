'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative bg-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ласкаво просимо до Порталу Конференцій
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
              Приєднуйтесь до нашої спільноти та беріть участь у передових конференціях та обговореннях.
            </p>
            <div className="mt-10 btn-secondary">
              <Link
                href="/conferences"
                className="px-2 py-2 bg-secondary text-white font-bold rounded hover:bg-accent transition duration-300 transform hover:scale-95"
              >
                Переглянути конференції
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секція ролей */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ролі користувачів</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Відвідувач',
                description: 'Переглядайте конференції та отримуйте доступ до публічної інформації про події та публікації.',
              },
              {
                title: 'Учасник',
                description: 'Подавайте статті, слідкуйте за статусом подання та отримуйте сертифікати участі.',
              },
              {
                title: 'Рецензент',
                description: 'Рецензуйте подані статті та надавайте цінні відгуки учасникам.',
              },
              {
                title: 'Адміністратор',
                description: 'Керуйте користувачами, поданнями та загальною організацією конференції.',
              },
            ].map((role) => (
              <div
                key={role.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Секція новин */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Останні новини</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Оголошення конференції {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <Link
                    href="/news"
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    Читати більше →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контактна секція */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Зв'яжіться з нами</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Зв'яжіться з нами</h3>
                <p className="text-gray-600 mb-4">
                  Маєте питання щодо конференцій або потрібна допомога? Наша команда готова допомогти.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Емейл:</span>
                    contact@university.edu
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Телефон:</span>
                    +380 123 456 789
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Адреса:</span>
                    Вулиця університету, 11, Місто, Країна
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Час роботи</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Понеділок - П’ятниця: 9:00 - 17:00</p>
                  <p>Субота: 9:00 - 13:00</p>
                  <p>Неділя: Вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
