// Separate function so it can be called after ITI utils.js loads
function applyPhonePlaceholders(t) {
  if (!t) {
    const lang = localStorage.getItem('vitafit_lang') || 'ru';
    t = TRANSLATIONS[lang];
  }
  if (!t) return;
  document.querySelectorAll('input[data-i18n-ph]').forEach(function(el) {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.placeholder = t[key];
      el.setAttribute('placeholder', t[key]);
    }
  });
}

const TRANSLATIONS = {
  ru: {
    nav_home: 'Главная', nav_programs: 'Программы', nav_contacts: 'Контакты', nav_connect: 'Связаться',
    hero_tag: '🌿 Сервис доставки питания',
    hero_title: 'VITAFIT – Питание, <span>которое работает</span> на тебя',
    hero_desc: 'VITAFIT — это сервис доставки здорового питания, разработанный для тех, кто хочет чувствовать себя лучше каждый день. Наши программы созданы нутрициологами для реального результата.',
    hero_btn: 'Смотреть программы',
    prog_section_title: 'Программы здорового питания для<br>похудения, энергии и красоты.',
    prog_section_sub: 'Программы, разработанные экспертами, чтобы помочь достичь целей по здоровью и развитию в сбалансированном формате.',
    prog_details: 'Детали', prog_min: 'Минимум 2 дн.', prog_per_day: 'леев/день',
    prog_reset_desc: 'Лёгкая противовоспалительная программа для мягкого перезапуска организма с помощью чистых и правильно сочетанных блюд.',
    prog_slim_desc: 'Программа для здорового снижения веса со сбалансированными блюдами, поддерживающими постепенное формирование стройного тела без голода.',
    prog_balance_desc: 'Программа для поддержания формы и стабильной энергии, с разнообразными блюдами, грамотно сочетанными для комфортного пищеварения в течение дня.',
    prog_energy_desc: 'Питательная программа для людей с интенсивным ритмом жизни, идеальна для силы, мышечной массы и восстановления.',
    prog_personal_desc: 'Индивидуальный план, созданный под личные цели и особенности организма, для гармоничных и заметных результатов.',
    how_title: 'Как создаются программы VITAFIT',
    how_p1: 'Каждая наша программа создаётся на основе принципов правильного питания, грамотных сочетаний ингредиентов и понимания того, как организм усваивает витамины и минералы.',
    how_p2: 'Программы разработаны сертифицированными нутрициологами, посвятившими годы изучению питания, микроэлементов и сбалансированного рациона.',
    how_stat1: 'довольных клиентов', how_stat2: 'персонализированных программ', how_stat3: 'рецептов в базе питания',
    ben_title: 'Преимущества программ VITAFIT',
    ben_sub: 'Наши программы созданы для того, чтобы работать в гармонии с организмом — изнутри наружу — обеспечивая реальные, безопасные и устойчивые результаты.',
    ben1_tag: 'Натуральный состав', ben1_title: 'Свежие и натуральные ингредиенты',
    ben1_desc: 'Ингредиенты чистые, сбалансированные и тщательно составленные, чтобы организм легко усваивал нутриенты, поддерживая метаболизм и физический баланс.',
    ben2_tag: 'Научный подход', ben2_title: 'Разработано нутрициологами',
    ben2_desc: 'Программы составлены так, чтобы организм мог поддерживать стабильный уровень энергии и способствовать самовосстановлению каждый день.',
    ben3_tag: 'Доставка', ben3_title: 'Удобная доставка каждый день',
    ben3_desc: 'Свежие, правильно составленные блюда приезжают к вам домой, чтобы вы чувствовали себя легко и заряженно.',
    test_title: 'Результаты говорят за нас',
    test_sub: 'Узнай, как наши программы помогли людям изменить свой образ жизни.',
    test1_text: 'Программа Balance Daily изменила мой подход к питанию. За 3 недели я почувствовала лёгкость, улучшился сон и появилось больше энергии. Рекомендую всем!',
    test1_author: 'Мария К.', test1_sub: 'Balance Daily, 3 недели',
    test2_text: 'Slim Sculpt помог мне сбросить 5 кг за месяц без чувства голода. Блюда вкусные, доставка всегда вовремя. Очень доволен результатом!',
    test2_author: 'Андрей В.', test2_sub: 'Slim Sculpt, 4 недели',
    cta_title: 'Первый шаг к здоровому образу жизни начинается здесь',
    cta_sub: 'Оставьте нам сообщение, и мы поможем вам выбрать программу, которая вам подходит.',
    f_name: 'Имя и Фамилия', f_name_ph: 'Имя и Фамилия',
    f_phone: 'Номер телефона', f_address: 'Адрес', f_address_ph: 'Пример ул. 123',
    f_program: 'Желаемая программа', f_program_ph: 'Желаемая программа',
    f_days: 'Предпочтительные дни', f_days_ph: 'Предпочтительные дни',
    f_days_1: 'Будние дни', f_days_2: 'Выходные', f_days_3: 'Каждый день',
    f_duration: 'Продолжительность', f_duration_ph: 'Продолжительность',
    f_dur_1: '2 дня', f_dur_2: '1 неделя', f_dur_3: '2 недели', f_dur_4: '1 месяц',
    f_message: 'Сообщение', f_message_ph: 'Напишите ваш комментарий здесь...', f_submit: 'Отправить сообщение',
    prog_page_title: 'Выбери подходящую программу для себя',
    prog_page_sub: 'Продолжительность и интенсивность программы зависят от твоей цели: похудения, баланса или повышения физической формы.',
    prog_page_label: 'Программы', btn_view: 'Посмотреть детали', btn_order: 'Заказать программу',
    prog_badge_min: 'Минимум 2 дн.',
    pp_reset_desc: 'Reset & Detox обеспечивает мягкий перезапуск организма без строгих ограничений. Блюда включают овощи, лёгкий белок и ингредиенты с детокс-эффектом, поддерживающие дренаж, пищеварение и сияние кожи. Программа снижает воспаление, давая ощущение лёгкости и стабильной энергии.',
    pp_reset_li1: 'Снижение воспаления', pp_reset_li2: 'Более лёгкое и стабильное пищеварение', pp_reset_li3: 'Мягкая чистка улучшает тонус',
    pp_slim_desc: 'Slim Sculpt поддерживает здоровое похудение и моделирование фигуры без голода. Сбалансированные блюда содержат нежирный белок, чистые углеводы и клетчатку для постепенного снижения жира. Программа стабилизирует уровень сахара и снижает аппетит, помогая иметь более плоский живот и постоянную энергию.',
    pp_slim_li1: 'Таяние лишних килограммов', pp_slim_li2: 'Улучшение пищеварения и стабильная энергия',
    pp_balance_desc: 'Balance Daily идеально подходит для поддержания веса и полноценного сбалансированного питания. Сытные и разнообразные блюда обеспечивают стабильную энергию в течение дня и снижают тягу к еде. Программа поддерживает пищеварение и стабилизирует колебания сахара.',
    pp_balance_li1: 'Постоянная энергия в течение дня', pp_balance_li2: 'Разнообразное и полноценное питание', pp_balance_li3: 'Без тяги к сладкому и колебаний сахара',
    pp_energy_desc: 'Energy Plus предназначена для активных людей, спортсменов и тех, кому нужны сытные и питательные блюда. Сложные углеводы, качественные белки и полезные жиры обеспечивают максимальную выносливость и мышечную массу. Программа поддерживает метаболизм и производительность в течение дня.',
    pp_energy_li1: 'Высокая энергия и выносливость', pp_energy_li2: 'Оптимальное восстановление после тренировок',
    pp_personal_desc: 'Personal Plan создаётся индивидуально в соответствии с вашими целями и образом жизни. Программа начинается с анализа привычек питания и уровня активности, затем создаёт персонализированное решение. Каждый элемент, от калорий до комбинаций ингредиентов, адаптирован для поддержки вашего организма.',
    pp_personal_li1: 'Индивидуальный подбор продуктов и целей', pp_personal_li2: 'Питание, созданное специально для вашего тела', pp_personal_li3: 'Видимые и устойчивые изменения',
    contacts_title: 'Нужна поддержка по вопросам питания? Оставьте своё сообщение здесь.',
    contacts_sub: 'Если у вас есть вопросы о меню, полезных продуктах или рекомендациях по питанию — напишите нам, и мы ответим и подберём решение для вас.',
    contacts_email_label: 'Электронная почта:', contacts_phone_label: 'Номер телефона:', contacts_addr_label: 'Местоположение:',
    footer_copy: '© 2026 Vitafit. Все права защищены.', footer_dev: 'Разработано компанией WebStudio',
    p_reset: 'Reset & Detox', p_slim: 'Slim Sculpt', p_balance: 'Balance Daily', p_energy: 'Energy Plus', p_personal: 'Personal Plan',
    macro_kcal: 'ккал', macro_protein: 'белки', macro_fat: 'жиры',
    benefits_title: 'Преимущества программы',
    gallery_title: 'Галерея',
    gallery_sub: 'Откройте для себя кадры, созданные с теплом, которые рассказывают нашу историю без слов.',
    reviews_title: 'Отзывы',
    reviews_sub: 'Узнай, как наши программы помогли людям изменить свой образ жизни.',
    other_programs_title: 'Другие программы',
    other_reset_price: 'от 350 леев/день', other_slim_price: 'от 410 леев/день', other_balance_price: 'от 480 леев/день', other_energy_price: 'от 540 леев/день', other_personal_price: 'от 600 леев/день',
    reset_ben1_title: 'Снижение воспаления', reset_ben2_title: 'Более лёгкое и стабильное пищеварение', reset_ben3_title: 'Более чистая кожа и улучшение тонуса',
    reset_ben1_desc: 'Программа помогает организму избавиться от источников воспаления. Ингредиенты чистые и легко усваиваемые.',
    reset_ben2_desc: 'Блюда разработаны для поддержки пищеварительного тракта без перегрузки. Результат — более стабильное пищеварение.',
    reset_ben3_desc: 'Благодаря уменьшению токсинов кожа со временем становится более чистой и сияющей.',
    reset_hero_desc: 'Reset & Detox обеспечивает мягкий перезапуск организма без строгих ограничений. Блюда включают овощи, лёгкий белок и ингредиенты с детокс-эффектом.',
    reset_quote: 'Иногда телу нужна лишь небольшая пауза, чтобы работать лучше',
    reset_ben_sub: 'Reset & Detox — для тех, кто хочет чистого старта и лёгкости в теле.',
    reset_rev1_text: 'После первых трёх дней программы я почувствовала невероятную лёгкость. Ушла отёчность, улучшился сон!',
    reset_rev1_name: 'Анна М.', reset_rev1_sub: 'Reset & Detox, 7 дней',
    reset_rev2_text: 'Начал с Reset & Detox после долгого периода неправильного питания. Уже через 4 дня кожа стала чище. Отличный старт!',
    reset_rev2_name: 'Дмитрий К.', reset_rev2_sub: 'Reset & Detox, 5 дней',
    slim_hero_desc: 'Slim Sculpt поддерживает здоровое похудение без голода. Сбалансированные блюда содержат нежирный белок, чистые углеводы и клетчатку.',
    slim_quote: 'Красивое тело — это результат ежедневных правильных решений',
    slim_ben_sub: 'Slim Sculpt — для тех, кто хочет стройности без чувства голода.',
    slim_rev1_text: 'За три недели программы я похудела на 4 кг и при этом ни разу не голодала! Блюда очень вкусные.',
    slim_rev1_name: 'Мария Л.', slim_rev1_sub: 'Slim Sculpt, 3 недели',
    slim_rev2_text: 'Лучшая программа для похудения. Без голода, без срывов. Потерял 6 кг за месяц!',
    slim_rev2_name: 'Игорь В.', slim_rev2_sub: 'Slim Sculpt, 4 недели',
    balance_hero_desc: 'Balance Daily идеально подходит для поддержания веса и полноценного питания. Блюда обеспечивают стабильную энергию в течение дня.',
    balance_quote: 'Правильное питание — это не диета, это образ жизни',
    balance_ben_sub: 'Balance Daily — для тех, кто хочет питаться правильно каждый день.',
    balance_rev1_text: 'Наконец-то нашла программу, которая подходит для обычной жизни. Не нужно ничего считать — всё уже сбалансировано.',
    balance_rev1_name: 'Светлана Р.', balance_rev1_sub: 'Balance Daily, 2 недели',
    balance_rev2_text: 'Придерживаюсь Balance Daily уже месяц. Вес стабилен, энергии стало больше, а тяга к сладкому исчезла.',
    balance_rev2_name: 'Алексей М.', balance_rev2_sub: 'Balance Daily, 1 месяц',
    energy_hero_desc: 'Energy Plus предназначена для активных людей и спортсменов. Сложные углеводы и качественные белки обеспечивают максимальную выносливость.',
    energy_quote: 'Твоё тело способно на большее, если кормить его правильно',
    energy_ben_sub: 'Energy Plus — для тех, кто живёт активно и требует максимума от своего тела.',
    energy_rev1_text: 'Как спортсмен, я очень требователен к питанию. Energy Plus — именно то, что нужно. Восстановление стало быстрее!',
    energy_rev1_name: 'Никита С.', energy_rev1_sub: 'Energy Plus, 3 недели',
    energy_rev2_text: 'Работаю в очень активном ритме. С Energy Plus у меня хватает сил на весь день и на вечернюю тренировку.',
    energy_rev2_name: 'Ольга Т.', energy_rev2_sub: 'Energy Plus, 2 недели',
    personal_hero_desc: 'Personal Plan создаётся индивидуально в соответствии с вашими целями и образом жизни. Каждый элемент адаптирован для поддержки вашего организма.',
    personal_quote: 'Нет универсальной диеты — есть питание, созданное именно для тебя',
    personal_ben_sub: 'Personal Plan — питание, разработанное лично для вас с нуля.',
    personal_rev1_text: 'Попробовала разные программы, но Personal Plan — совсем другой уровень. Нутрициолог учёл все мои особенности!',
    personal_rev1_name: 'Екатерина Д.', personal_rev1_sub: 'Personal Plan, 1 месяц',
    personal_rev2_text: 'У меня есть пищевые непереносимости, поэтому стандартные программы не подходили. Personal Plan решил эту проблему!',
    personal_rev2_name: 'Роман П.', personal_rev2_sub: 'Personal Plan, 6 недель',
  },

  en: {
    nav_home: 'Home', nav_programs: 'Programs', nav_contacts: 'Contacts', nav_connect: 'Contact us',
    hero_tag: '🌿 Food delivery service',
    hero_title: 'VITAFIT – Nutrition that <span>works for you</span>',
    hero_desc: 'VITAFIT is a healthy food delivery service designed for those who want to feel better every day. Our programs are created by nutritionists for real results.',
    hero_btn: 'View programs',
    prog_section_title: 'Healthy nutrition programs for<br>weight loss, energy & beauty.',
    prog_section_sub: 'Programs designed by experts to help you reach your health goals in a balanced format.',
    prog_details: 'Details', prog_min: 'Min. 2 days', prog_per_day: 'lei/day',
    prog_reset_desc: 'A gentle reset with a detox effect to start your journey to health.',
    prog_slim_desc: 'Healthy weight loss and body shaping without hunger.',
    prog_balance_desc: 'Weight maintenance and complete balanced nutrition.',
    prog_energy_desc: 'For active people, athletes and those who need energy.',
    prog_personal_desc: 'Individual nutrition plan tailored to your goals and lifestyle.',
    how_title: 'How VITAFIT programs are created',
    how_p1: 'Each of our programs is built on the principles of proper nutrition, smart ingredient combinations and understanding how the body absorbs vitamins and minerals.',
    how_p2: 'Programs are developed by certified nutritionists who have spent years studying nutrition, micronutrients and balanced diets.',
    how_stat1: 'satisfied clients', how_stat2: 'personalized programs', how_stat3: 'recipes in our database',
    ben_title: 'Benefits of VITAFIT programs',
    ben_sub: 'Our programs are designed to work in harmony with your body — from the inside out — delivering real, safe and lasting results.',
    ben1_tag: 'Natural ingredients', ben1_title: 'Fresh and natural ingredients',
    ben1_desc: 'Ingredients are clean, balanced and carefully composed so the body easily absorbs nutrients, supporting metabolism and physical balance.',
    ben2_tag: 'Scientific approach', ben2_title: 'Developed by nutritionists',
    ben2_desc: 'Programs are structured so the body can maintain stable energy levels and promote self-recovery every day.',
    ben3_tag: 'Delivery', ben3_title: 'Convenient daily delivery',
    ben3_desc: 'Fresh, properly composed meals arrive at your door so you feel light and energized.',
    test_title: 'Results speak for themselves',
    test_sub: 'See how our programs helped people change their lifestyle.',
    test1_text: 'The Balance Daily program changed my approach to nutrition. In 3 weeks I felt lighter, my sleep improved and I had more energy. I recommend it to everyone!',
    test1_author: 'Maria K.', test1_sub: 'Balance Daily, 3 weeks',
    test2_text: 'Slim Sculpt helped me lose 5 kg in a month without feeling hungry. The meals are delicious, delivery is always on time. Very happy with the result!',
    test2_author: 'Andrei V.', test2_sub: 'Slim Sculpt, 4 weeks',
    cta_title: 'Your first step to a healthy lifestyle starts here',
    cta_sub: 'Leave us a message and we will help you choose the program that suits you.',
    f_name: 'Full Name', f_name_ph: 'Full Name',
    f_phone: 'Phone number', f_address: 'Address', f_address_ph: 'e.g. Street 123',
    f_program: 'Desired program', f_program_ph: 'Desired program',
    f_days: 'Preferred days', f_days_ph: 'Preferred days',
    f_days_1: 'Weekdays', f_days_2: 'Weekends', f_days_3: 'Every day',
    f_duration: 'Duration', f_duration_ph: 'Duration',
    f_dur_1: '2 days', f_dur_2: '1 week', f_dur_3: '2 weeks', f_dur_4: '1 month',
    f_message: 'Message', f_message_ph: 'Write your comment here...', f_submit: 'Send message',
    prog_page_title: 'Choose the right program for you',
    prog_page_sub: 'The duration and intensity of the program depend on your goal: weight loss, balance or improving physical fitness.',
    prog_page_label: 'Programs', btn_view: 'View details', btn_order: 'Order program',
    prog_badge_min: 'Min. 2 days',
    pp_reset_desc: 'Reset & Detox provides a gentle body reset without strict restrictions. Meals include vegetables, lean protein and detox-effect ingredients supporting drainage, digestion and skin radiance. The program reduces inflammation, giving a feeling of lightness and stable energy.',
    pp_reset_li1: 'Reduced inflammation', pp_reset_li2: 'Lighter and more stable digestion', pp_reset_li3: 'Gentle cleanse improves tone',
    pp_slim_desc: 'Slim Sculpt supports healthy weight loss and body shaping without hunger. Balanced meals contain lean protein, clean carbs and fiber for gradual fat reduction. The program stabilizes blood sugar and reduces appetite, helping achieve a flatter stomach and constant energy.',
    pp_slim_li1: 'Melting away excess weight', pp_slim_li2: 'Improved digestion and stable energy',
    pp_balance_desc: 'Balance Daily is ideal for weight maintenance and complete balanced nutrition. Satisfying and varied meals provide stable energy throughout the day and reduce food cravings. The program supports digestion and stabilizes blood sugar fluctuations.',
    pp_balance_li1: 'Constant energy throughout the day', pp_balance_li2: 'Varied and complete nutrition', pp_balance_li3: 'No sugar cravings or blood sugar swings',
    pp_energy_desc: 'Energy Plus is designed for active people, athletes and those who need filling and nutritious meals. Complex carbs, quality proteins and healthy fats provide maximum endurance and muscle mass. The program supports metabolism and performance throughout the day.',
    pp_energy_li1: 'High energy and endurance', pp_energy_li2: 'Optimal post-workout recovery',
    pp_personal_desc: 'Personal Plan is created individually according to your goals and lifestyle. The program begins with an analysis of eating habits and activity levels, then creates a personalized solution. Every element, from calories to ingredient combinations, is adapted to support your body.',
    pp_personal_li1: 'Individual product and goal selection', pp_personal_li2: 'Nutrition created specifically for your body', pp_personal_li3: 'Visible and lasting changes',
    contacts_title: 'Need support on nutrition questions? Leave your message here.',
    contacts_sub: 'If you have questions about the menu, healthy products or nutrition advice — write to us and we will respond and find a solution for you.',
    contacts_email_label: 'Email:', contacts_phone_label: 'Phone:', contacts_addr_label: 'Location:',
    footer_copy: '© 2026 Vitafit. All rights reserved.', footer_dev: 'Developed by WebStudio',
    p_reset: 'Reset & Detox', p_slim: 'Slim Sculpt', p_balance: 'Balance Daily', p_energy: 'Energy Plus', p_personal: 'Personal Plan',
    benefits_title: 'Program Benefits',
    gallery_title: 'Gallery',
    gallery_sub: 'Discover moments crafted with warmth that tell our story without words.',
    reviews_title: 'Reviews',
    reviews_sub: 'See how our programs helped people change their lifestyle.',
    other_programs_title: 'Other Programs',
    other_reset_price: 'from 350 lei/day', other_slim_price: 'from 410 lei/day', other_balance_price: 'from 480 lei/day', other_energy_price: 'from 540 lei/day', other_personal_price: 'from 600 lei/day',
    reset_ben1_title: 'Reduced inflammation', reset_ben2_title: 'Lighter and more stable digestion', reset_ben3_title: 'Clearer skin and improved tone',
    reset_ben1_desc: 'This program helps the body eliminate internal sources of inflammation. Ingredients are clean and easily absorbed.',
    reset_ben2_desc: 'Meals support the digestive tract without overloading it. The result is more stable and regular digestion.',
    reset_ben3_desc: 'By reducing toxins and internal inflammation, the skin becomes cleaner and more radiant over time.',
    reset_hero_desc: 'Reset & Detox provides a gentle body reset without strict restrictions. Meals include vegetables, lean protein and detox-effect ingredients supporting drainage, digestion and skin radiance.',
    reset_quote: 'Sometimes the body just needs a small pause to work better',
    reset_ben_sub: 'Reset & Detox — for those who want a clean start and lightness in the body.',
    reset_rev1_text: 'After the first three days I felt incredible lightness. Swelling disappeared, sleep improved. Exactly what I needed for a reset!',
    reset_rev1_name: 'Anna M.', reset_rev1_sub: 'Reset & Detox, 7 days',
    reset_rev2_text: 'Started Reset & Detox after a long period of poor nutrition. In just 4 days my skin cleared up. A great start!',
    reset_rev2_name: 'Dmitry K.', reset_rev2_sub: 'Reset & Detox, 5 days',
    slim_hero_desc: 'Slim Sculpt supports healthy weight loss and body shaping without hunger. Balanced meals contain lean protein, clean carbs and fiber for gradual fat reduction.',
    slim_quote: 'A beautiful body is the result of daily right decisions',
    slim_ben_sub: 'Slim Sculpt — for those who want to be slim without feeling hungry.',
    slim_rev1_text: 'In three weeks I lost 4 kg without ever feeling hungry! The meals are very tasty and filling.',
    slim_rev1_name: 'Maria L.', slim_rev1_sub: 'Slim Sculpt, 3 weeks',
    slim_rev2_text: 'The best weight loss program I have tried. No hunger, no cravings. Lost 6 kg in a month and feel great!',
    slim_rev2_name: 'Igor V.', slim_rev2_sub: 'Slim Sculpt, 4 weeks',
    balance_hero_desc: 'Balance Daily is ideal for weight maintenance and complete balanced nutrition. Satisfying meals provide stable energy throughout the day.',
    balance_quote: 'Proper nutrition is not a diet, it is a lifestyle',
    balance_ben_sub: 'Balance Daily — for those who want to eat right every day.',
    balance_rev1_text: 'Finally found a program that fits everyday life. No need to count anything — everything is already balanced. Feeling great!',
    balance_rev1_name: 'Svetlana R.', balance_rev1_sub: 'Balance Daily, 2 weeks',
    balance_rev2_text: 'I have been on Balance Daily for a month. Weight is stable, energy has increased, and sugar cravings have almost disappeared.',
    balance_rev2_name: 'Alexei M.', balance_rev2_sub: 'Balance Daily, 1 month',
    energy_hero_desc: 'Energy Plus is designed for active people and athletes who need filling and nutritious meals. Complex carbs and quality proteins provide maximum endurance.',
    energy_quote: 'Your body is capable of more when you feed it right',
    energy_ben_sub: 'Energy Plus — for those who live actively and demand the maximum from their body.',
    energy_rev1_text: 'As an athlete, I am very demanding about nutrition. Energy Plus is exactly what I need for intense workouts. Recovery has become noticeably faster!',
    energy_rev1_name: 'Nikita S.', energy_rev1_sub: 'Energy Plus, 3 weeks',
    energy_rev2_text: 'I work in a very active pace. With Energy Plus I have enough energy for the whole day and an evening workout.',
    energy_rev2_name: 'Olga T.', energy_rev2_sub: 'Energy Plus, 2 weeks',
    personal_hero_desc: 'Personal Plan is created individually according to your goals and lifestyle. Every element is adapted to support your body.',
    personal_quote: 'There is no universal diet — there is nutrition created just for you',
    personal_ben_sub: 'Personal Plan — nutrition developed personally for you from scratch.',
    personal_rev1_text: 'I have tried different programs, but Personal Plan is a completely different level. The nutritionist took all my needs into account!',
    personal_rev1_name: 'Ekaterina D.', personal_rev1_sub: 'Personal Plan, 1 month',
    personal_rev2_text: 'I have food intolerances, so standard programs did not work for me. Personal Plan solved that problem perfectly!',
    personal_rev2_name: 'Roman P.', personal_rev2_sub: 'Personal Plan, 6 weeks',
    macro_kcal: 'kcal', macro_protein: 'protein', macro_fat: 'fat',
  },

  ro: {
    nav_home: 'Acasă', nav_programs: 'Programe', nav_contacts: 'Contacte', nav_connect: 'Contactați-ne',
    hero_tag: '🌿 Serviciu de livrare mâncare',
    hero_title: 'VITAFIT – Nutriție care <span>lucrează pentru tine</span>',
    hero_desc: 'VITAFIT este un serviciu de livrare a alimentației sănătoase, creat pentru cei care vor să se simtă mai bine în fiecare zi. Programele noastre sunt elaborate de nutriționiști pentru rezultate reale.',
    hero_btn: 'Vezi programele',
    prog_section_title: 'Programe de nutriție sănătoasă pentru<br>slăbit, energie și frumusețe.',
    prog_section_sub: 'Programe elaborate de experți pentru a te ajuta să îți atingi obiectivele de sănătate într-un format echilibrat.',
    prog_details: 'Detalii', prog_min: 'Min. 2 zile', prog_per_day: 'lei/zi',
    prog_reset_desc: 'O resetare blândă cu efect detox pentru a începe calea spre sănătate.',
    prog_slim_desc: 'Slăbire sănătoasă și modelare corporală fără foame.',
    prog_balance_desc: 'Menținerea greutății și nutriție echilibrată completă.',
    prog_energy_desc: 'Pentru persoane active, sportivi și cei care au nevoie de energie.',
    prog_personal_desc: 'Plan de nutriție individual adaptat obiectivelor și stilului tău de viață.',
    how_title: 'Cum sunt create programele VITAFIT',
    how_p1: 'Fiecare program al nostru este creat pe baza principiilor nutriției corecte, combinații inteligente de ingrediente și înțelegerea modului în care organismul absoarbe vitaminele și mineralele.',
    how_p2: 'Programele sunt elaborate de nutriționiști certificați care au dedicat ani studierii nutriției, micronutrienților și alimentației echilibrate.',
    how_stat1: 'clienți satisfăcuți', how_stat2: 'programe personalizate', how_stat3: 'rețete în baza noastră',
    ben_title: 'Avantajele programelor VITAFIT',
    ben_sub: 'Programele noastre sunt create pentru a funcționa în armonie cu corpul tău — din interior spre exterior — oferind rezultate reale, sigure și durabile.',
    ben1_tag: 'Ingrediente naturale', ben1_title: 'Ingrediente proaspete și naturale',
    ben1_desc: 'Ingredientele sunt curate, echilibrate și atent compuse pentru ca organismul să absoarbă ușor nutrienții, susținând metabolismul și echilibrul fizic.',
    ben2_tag: 'Abordare științifică', ben2_title: 'Elaborat de nutriționiști',
    ben2_desc: 'Programele sunt structurate astfel încât organismul să poată menține niveluri stabile de energie și să promoveze auto-recuperarea în fiecare zi.',
    ben3_tag: 'Livrare', ben3_title: 'Livrare zilnică convenabilă',
    ben3_desc: 'Mesele proaspete și corect compuse ajung la ușa ta pentru ca tu să te simți ușor și plin de energie.',
    test_title: 'Rezultatele vorbesc de la sine',
    test_sub: 'Descoperă cum programele noastre au ajutat oamenii să-și schimbe stilul de viață.',
    test1_text: 'Programul Balance Daily mi-a schimbat abordarea față de nutriție. În 3 săptămâni m-am simțit mai ușoară, somnul s-a îmbunătățit și am avut mai multă energie. Recomand tuturor!',
    test1_author: 'Maria K.', test1_sub: 'Balance Daily, 3 săptămâni',
    test2_text: 'Slim Sculpt m-a ajutat să slăbesc 5 kg într-o lună fără senzație de foame. Mesele sunt delicioase, livrarea este întotdeauna la timp. Sunt foarte mulțumit de rezultat!',
    test2_author: 'Andrei V.', test2_sub: 'Slim Sculpt, 4 săptămâni',
    cta_title: 'Primul pas spre un stil de viață sănătos începe aici',
    cta_sub: 'Lasă-ne un mesaj și te vom ajuta să alegi programul potrivit pentru tine.',
    f_name: 'Nume și Prenume', f_name_ph: 'Nume și Prenume',
    f_phone: 'Număr de telefon', f_address: 'Adresă', f_address_ph: 'ex. Strada 123',
    f_program: 'Programul dorit', f_program_ph: 'Programul dorit',
    f_days: 'Zile preferate', f_days_ph: 'Zile preferate',
    f_days_1: 'Zile lucrătoare', f_days_2: 'Weekend', f_days_3: 'În fiecare zi',
    f_duration: 'Durată', f_duration_ph: 'Durată',
    f_dur_1: '2 zile', f_dur_2: '1 săptămână', f_dur_3: '2 săptămâni', f_dur_4: '1 lună',
    f_message: 'Mesaj', f_message_ph: 'Scrieți comentariul dvs. aici...', f_submit: 'Trimite mesajul',
    prog_page_title: 'Alege programul potrivit pentru tine',
    prog_page_sub: 'Durata și intensitatea programului depind de obiectivul tău: slăbit, echilibru sau îmbunătățirea formei fizice.',
    prog_page_label: 'Programe', btn_view: 'Vezi detalii', btn_order: 'Comandă programul',
    prog_badge_min: 'Min. 2 zile',
    pp_reset_desc: 'Reset & Detox oferă o resetare blândă a organismului fără restricții stricte. Mesele includ legume, proteine ușoare și ingrediente cu efect detox care susțin drenajul, digestia și strălucirea pielii. Programul reduce inflamația, oferind o senzație de ușurință și energie stabilă.',
    pp_reset_li1: 'Reducerea inflamației', pp_reset_li2: 'Digestie mai ușoară și mai stabilă', pp_reset_li3: 'Curățarea blândă îmbunătățește tonusul',
    pp_slim_desc: 'Slim Sculpt susține slăbirea sănătoasă și modelarea corporală fără foame. Mesele echilibrate conțin proteine slabe, carbohidrați curați și fibre pentru reducerea graduală a grăsimii. Programul stabilizează glicemia și reduce apetitul, ajutând la obținerea unui abdomen mai plat și energie constantă.',
    pp_slim_li1: 'Topirea kilogramelor în exces', pp_slim_li2: 'Digestie îmbunătățită și energie stabilă',
    pp_balance_desc: 'Balance Daily este ideal pentru menținerea greutății și nutriție echilibrată completă. Mesele consistente și variate oferă energie stabilă pe tot parcursul zilei și reduc poftele alimentare. Programul susține digestia și stabilizează fluctuațiile glicemiei.',
    pp_balance_li1: 'Energie constantă pe tot parcursul zilei', pp_balance_li2: 'Nutriție variată și completă', pp_balance_li3: 'Fără pofte de dulce sau fluctuații ale glicemiei',
    pp_energy_desc: 'Energy Plus este concepută pentru persoane active, sportivi și cei care au nevoie de mese consistente și nutritive. Carbohidrații complecși, proteinele de calitate și grăsimile sănătoase oferă rezistență maximă și masă musculară. Programul susține metabolismul și performanța pe tot parcursul zilei.',
    pp_energy_li1: 'Energie ridicată și rezistență', pp_energy_li2: 'Recuperare optimă după antrenamente',
    pp_personal_desc: 'Personal Plan este creat individual conform obiectivelor și stilului tău de viață. Programul începe cu o analiză a obiceiurilor alimentare și a nivelului de activitate, apoi creează o soluție personalizată. Fiecare element, de la calorii la combinații de ingrediente, este adaptat pentru a susține organismul tău.',
    pp_personal_li1: 'Selecție individuală de produse și obiective', pp_personal_li2: 'Nutriție creată special pentru corpul tău', pp_personal_li3: 'Schimbări vizibile și durabile',
    contacts_title: 'Ai nevoie de suport privind nutriția? Lasă mesajul tău aici.',
    contacts_sub: 'Dacă ai întrebări despre meniu, produse sănătoase sau recomandări nutriționale — scrie-ne și îți vom răspunde și găsi o soluție potrivită.',
    contacts_email_label: 'Email:', contacts_phone_label: 'Telefon:', contacts_addr_label: 'Locație:',
    footer_copy: '© 2026 Vitafit. Toate drepturile rezervate.', footer_dev: 'Dezvoltat de WebStudio',
    p_reset: 'Reset & Detox', p_slim: 'Slim Sculpt', p_balance: 'Balance Daily', p_energy: 'Energy Plus', p_personal: 'Personal Plan',
    benefits_title: 'Beneficiile programului',
    gallery_title: 'Galerie',
    gallery_sub: 'Descoperă momente create cu caldura care spun povestea noastra fara cuvinte.',
    reviews_title: 'Recenzii',
    reviews_sub: 'Descopera cum programele noastre au ajutat oamenii sa-si schimbe stilul de viata.',
    other_programs_title: 'Alte programe',
    other_reset_price: 'de la 350 lei/zi', other_slim_price: 'de la 410 lei/zi', other_balance_price: 'de la 480 lei/zi', other_energy_price: 'de la 540 lei/zi', other_personal_price: 'de la 600 lei/zi',
    reset_ben1_title: 'Reducerea inflamatiei', reset_ben2_title: 'Digestie mai usoara si mai stabila', reset_ben3_title: 'Piele mai curata si imbunatatirea tonusului',
    reset_ben1_desc: 'Programul ajuta organismul sa elimine sursele interne de inflamatie. Ingredientele sunt curate si usor absorbite.',
    reset_ben2_desc: 'Mesele sunt concepute pentru a sustine tractul digestiv fara a-l suprasolicita. Rezultatul este o digestie mai stabila.',
    reset_ben3_desc: 'Prin reducerea toxinelor si a inflamatiilor, pielea devine cu timpul mai curata si mai stralucitoare.',
    reset_hero_desc: 'Reset & Detox ofera o resetare blanda a organismului fara restrictii stricte. Mesele includ legume, proteine usoare si ingrediente cu efect detox.',
    reset_quote: 'Uneori corpul are nevoie doar de o mica pauza pentru a functiona mai bine',
    reset_ben_sub: 'Reset & Detox — pentru cei care vor un start curat si usurinta in corp.',
    reset_rev1_text: 'Dupa primele trei zile am simtit o usurinta incredibila. Umflaturile au disparut, somnul s-a imbunatatit. Exact ce aveam nevoie!',
    reset_rev1_name: 'Anna M.', reset_rev1_sub: 'Reset & Detox, 7 zile',
    reset_rev2_text: 'Am inceput Reset & Detox dupa o perioada lunga de alimentatie deficitara. In 4 zile pielea s-a curatat. Un start excelent!',
    reset_rev2_name: 'Dmitri K.', reset_rev2_sub: 'Reset & Detox, 5 zile',
    slim_hero_desc: 'Slim Sculpt sustine slabirea sanatoasa si modelarea corporala fara foame. Mesele echilibrate contin proteine slabe, carbohidrati curati si fibre.',
    slim_quote: 'Un corp frumos este rezultatul deciziilor corecte zilnice',
    slim_ben_sub: 'Slim Sculpt — pentru cei care vor sa fie supli fara senzatie de foame.',
    slim_rev1_text: 'In trei saptamani am slabit 4 kg fara sa simt niciodata foame! Mesele sunt foarte gustoase si consistente.',
    slim_rev1_name: 'Maria L.', slim_rev1_sub: 'Slim Sculpt, 3 saptamani',
    slim_rev2_text: 'Cel mai bun program de slabire pe care l-am incercat. Fara foame, fara recaderi. Am pierdut 6 kg!',
    slim_rev2_name: 'Igor V.', slim_rev2_sub: 'Slim Sculpt, 4 saptamani',
    balance_hero_desc: 'Balance Daily este ideal pentru mentinerea greutatii si nutritie completa echilibrata. Mesele consistente si variate ofera energie stabila pe tot parcursul zilei.',
    balance_quote: 'Nutritia corecta nu este o dieta, este un stil de viata',
    balance_ben_sub: 'Balance Daily — pentru cei care vor sa manance corect in fiecare zi.',
    balance_rev1_text: 'In sfarsit am gasit un program care se potriveste vietii de zi cu zi. Nu trebuie sa numeri nimic — totul este deja echilibrat.',
    balance_rev1_name: 'Svetlana R.', balance_rev1_sub: 'Balance Daily, 2 saptamani',
    balance_rev2_text: 'Urmez Balance Daily de o luna. Greutatea este stabila, energia a crescut, iar pofta de dulce aproape a disparut.',
    balance_rev2_name: 'Alexei M.', balance_rev2_sub: 'Balance Daily, 1 luna',
    energy_hero_desc: 'Energy Plus este conceputa pentru persoane active, sportivi si cei care au nevoie de mese nutritive. Carbohidratii complecsi si proteinele de calitate ofera rezistenta maxima.',
    energy_quote: 'Corpul tau este capabil de mai mult daca il hranesti corect',
    energy_ben_sub: 'Energy Plus — pentru cei care traiesc activ si cer maximul de la corpul lor.',
    energy_rev1_text: 'Ca sportiv, sunt foarte pretentios cu nutritia. Energy Plus este exact ce am nevoie. Recuperarea a devenit vizibil mai rapida!',
    energy_rev1_name: 'Nikita S.', energy_rev1_sub: 'Energy Plus, 3 saptamani',
    energy_rev2_text: 'Lucrez intr-un ritm foarte activ. Cu Energy Plus am suficienta energie pentru toata ziua si antrenamentul de seara.',
    energy_rev2_name: 'Olga T.', energy_rev2_sub: 'Energy Plus, 2 saptamani',
    personal_hero_desc: 'Personal Plan este creat individual conform obiectivelor si stilului tau de viata. Fiecare element este adaptat pentru a sustine organismul tau.',
    personal_quote: 'Nu exista o dieta universala — exista nutritie creata special pentru tine',
    personal_ben_sub: 'Personal Plan — nutritie elaborata personal pentru tine de la zero.',
    personal_rev1_text: 'Am incercat diferite programe, dar Personal Plan este cu totul alt nivel. Nutritionistul a luat in considerare toate particularitatile mele!',
    personal_rev1_name: 'Ekaterina D.', personal_rev1_sub: 'Personal Plan, 1 luna',
    personal_rev2_text: 'Am intolerante alimentare, deci programele standard nu mi se potriveau. Personal Plan a rezolvat aceasta problema perfect!',
    personal_rev2_name: 'Roman P.', personal_rev2_sub: 'Personal Plan, 6 saptamani',
    macro_kcal: 'kcal', macro_protein: 'proteine', macro_fat: 'grăsimi',
  }
};

// ─────────────────────────────────────────────────────────────────────────────
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  localStorage.setItem('vitafit_lang', lang);

  // Update dropdown trigger label
  document.querySelectorAll('.lang-current').forEach(el => {
    el.textContent = lang.toUpperCase();
  });
  // Update active state in dropdown items
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Apply data-i18n text/html/placeholder
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    if (el.dataset.i18nHtml) {
      el.innerHTML = t[key];
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // For phone inputs using intl-tel-input, set both placeholder and the ITI inner input
      el.placeholder = t[key];
      el.setAttribute('placeholder', t[key]);
      // If ITI wraps this input, also update the ITI input element
      if (el.dataset.i18nPh) {
        const itiInput = el.closest('.iti') ? el : null;
        if (itiInput) itiInput.setAttribute('placeholder', t[key]);
      }
    } else if (el.tagName === 'OPTION' && el.value === '') {
      el.textContent = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // Force-update phone input placeholders (ITI overrides them on init)
  applyPhonePlaceholders(t);

  // Translate select option lists
  document.querySelectorAll('[data-i18n-opt]').forEach(sel => {
    const keys = sel.dataset.i18nOpt.split(',');
    const opts = sel.querySelectorAll('option:not([value=""])');
    opts.forEach((opt, i) => {
      if (keys[i] && t[keys[i]]) opt.textContent = t[keys[i]];
    });
  });
}

function initLang() {
  const saved = localStorage.getItem('vitafit_lang') || 'ru';
  applyLang(saved);
  // Remove anti-flash hide and show body
  var s = document.getElementById('anti-flash-style');
  if (s) s.remove();
  document.body.style.visibility = '';
}

document.addEventListener('DOMContentLoaded', function () {
  initLang();

  // Toggle dropdown open/close
  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.lang-trigger');
    if (trigger) {
      const sw = trigger.closest('.lang-switcher');
      sw.classList.toggle('open');
      e.stopPropagation();
      return;
    }
    // Close if clicked outside
    if (!e.target.closest('.lang-switcher')) {
      document.querySelectorAll('.lang-switcher.open')
        .forEach(s => s.classList.remove('open'));
    }
  });

  // Select a language from dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', function (e) {
      applyLang(this.dataset.lang);
      this.closest('.lang-switcher').classList.remove('open');
      e.stopPropagation();
    });
  });
});
