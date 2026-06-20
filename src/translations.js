// All user-facing copy, keyed by language. English ('en') is the default.
// Non-translatable bits (icons, step numbers, stat values, tech names) live in
// Homepage.jsx and are zipped with these arrays by index.

export const translations = {
  en: {
    nav: { services: 'Services', process: 'Process', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'Custom software, built your way',
      h1pre: 'We build ',
      h1mid: 'every kind of software',
      h1post: ' — by your criteria.',
      p: 'CodeOpposite designs and engineers software systems of all types — web, mobile, backend, cloud, and AI — each one tailored to the exact requirements, constraints, and goals of your business. No templates, no compromises. Just the right system, built the opposite way: around you.',
      ctaPrimary: 'Start your project',
      ctaSecondary: 'Explore services',
    },
    servicesSection: {
      heading: 'Software systems of every type',
      sub: 'Whatever you need built, we cover it end to end — and we tailor each system to your custom criteria.',
    },
    services: [
      { title: 'Web Applications', body: 'Fast, scalable web platforms and dashboards built with modern frameworks and a focus on performance.' },
      { title: 'Mobile Apps', body: 'Native and cross-platform iOS and Android apps designed around your users and your workflows.' },
      { title: 'Backend & APIs', body: 'Robust services, REST and GraphQL APIs, and event-driven systems engineered to handle real load.' },
      { title: 'Cloud & DevOps', body: 'Infrastructure as code, CI/CD pipelines, and cloud architecture that scales cleanly and predictably.' },
      { title: 'AI & Data', body: 'Custom AI features, data pipelines, and analytics that turn your data into a competitive advantage.' },
      { title: 'Integrations', body: 'Connect the tools you already use — payments, CRMs, ERPs, and third-party services — seamlessly.' },
    ],
    processSection: {
      heading: 'How we build by your criteria',
      sub: 'A clear, collaborative process that keeps your requirements at the center from first call to final delivery.',
    },
    steps: [
      { title: 'Discover', body: 'We start by understanding your business, your users, and the exact criteria your software must meet.' },
      { title: 'Design', body: 'We shape an architecture and experience tailored to those criteria — no off-the-shelf compromises.' },
      { title: 'Build', body: 'We develop in tight iterations, shipping working software you can review and steer at every step.' },
      { title: 'Deliver & Support', body: 'We launch, monitor, and keep improving — your system grows with your business, not against it.' },
    ],
    stats: [
      'Custom-built solutions',
      'Software domains covered',
      'Monitoring & support',
      'Ways to tailor your system',
    ],
    aboutSection: { heading: 'Why CodeOpposite' },
    about: {
      p1pre: 'Most software is shaped by the tools that build it. We flip that around. We start from ',
      p1strong: 'your',
      p1post: ' criteria — your users, your constraints, your goals — and engineer the system that fits them precisely. That is what building "the opposite way" means.',
      p2: 'From a single internal tool to a full product platform, our team brings deep engineering across web, mobile, cloud, and AI. You get software that is reliable, maintainable, and genuinely yours — ready to grow as your business does.',
      cta: "Let's build it together",
    },
    footer: {
      brandText: 'Custom software systems of every type — engineered around your exact criteria.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      contactTitle: 'Get in touch',
      services: ['Web Applications', 'Mobile Apps', 'Backend & APIs', 'Cloud & DevOps', 'AI & Data'],
      company: ['About', 'Process', 'Services', 'Contact'],
      copyright: '© 2026 CodeOpposite. All rights reserved.',
      tagline: 'Built the opposite way — around you.',
    },
  },

  bg: {
    nav: { services: 'Услуги', process: 'Процес', about: 'За нас', contact: 'Контакти' },
    hero: {
      eyebrow: 'Софтуер по поръчка, направен за вас',
      h1pre: 'Създаваме ',
      h1mid: 'всякакъв вид софтуер',
      h1post: ' — по вашите критерии.',
      p: 'CodeOpposite проектира и разработва софтуерни системи от всякакъв тип — уеб, мобилни, бекенд, облак и AI — всяка съобразена с точните изисквания, ограничения и цели на вашия бизнес. Без шаблони, без компромиси. Просто правилната система, изградена по обратния начин: около вас.',
      ctaPrimary: 'Започнете проект',
      ctaSecondary: 'Вижте услугите',
    },
    servicesSection: {
      heading: 'Софтуерни системи от всякакъв тип',
      sub: 'Каквото и да трябва да се изгради, поемаме го от край до край — и съобразяваме всяка система с вашите специфични критерии.',
    },
    services: [
      { title: 'Уеб приложения', body: 'Бързи, мащабируеми уеб платформи и табла, изградени със съвременни технологии и фокус върху производителността.' },
      { title: 'Мобилни приложения', body: 'Нативни и крос-платформени iOS и Android приложения, проектирани около вашите потребители и процеси.' },
      { title: 'Бекенд и API', body: 'Надеждни услуги, REST и GraphQL API и event-driven системи, изградени да поемат реално натоварване.' },
      { title: 'Облак и DevOps', body: 'Инфраструктура като код, CI/CD процеси и облачна архитектура, която мащабира чисто и предвидимо.' },
      { title: 'AI и данни', body: 'Персонализирани AI функции, обработка на данни и анализи, които превръщат данните ви в конкурентно предимство.' },
      { title: 'Интеграции', body: 'Свързваме инструментите, които вече ползвате — разплащания, CRM, ERP и външни услуги — безпроблемно.' },
    ],
    processSection: {
      heading: 'Как изграждаме по вашите критерии',
      sub: 'Ясен, съвместен процес, който поставя вашите изисквания в центъра — от първия разговор до финалната доставка.',
    },
    steps: [
      { title: 'Проучване', body: 'Започваме с разбиране на вашия бизнес, потребители и точните критерии, на които софтуерът трябва да отговаря.' },
      { title: 'Дизайн', body: 'Оформяме архитектура и изживяване, съобразени с тези критерии — без готови компромиси.' },
      { title: 'Разработка', body: 'Разработваме на кратки итерации, доставяйки работещ софтуер, който можете да преглеждате и насочвате на всяка стъпка.' },
      { title: 'Доставка и поддръжка', body: 'Пускаме, наблюдаваме и подобряваме — системата ви расте заедно с бизнеса, а не срещу него.' },
    ],
    stats: [
      'Решения по поръчка',
      'Покрити софтуерни области',
      'Наблюдение и поддръжка',
      'Начини да съобразим системата ви',
    ],
    aboutSection: { heading: 'Защо CodeOpposite' },
    about: {
      p1pre: 'Повечето софтуер се определя от инструментите, с които е изграден. Ние обръщаме това. Тръгваме от ',
      p1strong: 'вашите',
      p1post: ' критерии — вашите потребители, ограничения и цели — и изграждаме системата, която им пасва точно. Това означава да градим „по обратния начин“.',
      p2: 'От един вътрешен инструмент до цялостна продуктова платформа — екипът ни носи задълбочена експертиза в уеб, мобилни, облачни и AI решения. Получавате софтуер, който е надежден, поддържаем и наистина ваш — готов да расте заедно с бизнеса ви.',
      cta: 'Нека го изградим заедно',
    },
    footer: {
      brandText: 'Софтуерни системи от всякакъв тип — изградени около вашите точни критерии.',
      servicesTitle: 'Услуги',
      companyTitle: 'Компания',
      contactTitle: 'Свържете се с нас',
      services: ['Уеб приложения', 'Мобилни приложения', 'Бекенд и API', 'Облак и DevOps', 'AI и данни'],
      company: ['За нас', 'Процес', 'Услуги', 'Контакти'],
      copyright: '© 2026 CodeOpposite. Всички права запазени.',
      tagline: 'Изградено по обратния начин — около вас.',
    },
  },
}
