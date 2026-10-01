<template>
  <!-- Header Navigation -->
  <header>
    <div class="container nav-container">
      <a href="#" class="logo-box">
        <img src="./assets/logo-removebg-preview.png" alt="TOO AR Agreement Logo" class="logo-img">
      </a>
      <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li><a href="#about" @click="isMenuOpen = false">Кто мы</a></li>
        <li><a href="#services" @click="isMenuOpen = false">Финансирование</a></li>
        <li><a href="#industries" @click="isMenuOpen = false">Отрасли</a></li>
        <li><a href="#international" @click="isMenuOpen = false">Международное направление</a></li>
        <li><a href="#project-form" @click="isMenuOpen = false">Представить проект</a></li>
        <li><a href="#investor-form" @click="isMenuOpen = false">Я инвестор</a></li>
        <li><a href="#contacts" @click="isMenuOpen = false">Контакты</a></li>
      </ul>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <img src="./assets/logo-removebg-preview.png" alt="AR Agreement" class="hero-logo">
      <h1>ТОО «AR Agreement»</h1>
      <p class="subtitle">Соединяем перспективные проекты с капиталом, финансовыми инструментами и стратегическими партнёрами. Сопровождаем деловые инициативы в Казахстане и на международных рынках.</p>
      <div class="hero-buttons">
        <a href="#project-form" class="btn btn-gold"><i class="fas fa-paper-plane"></i> Представить проект</a>
        <a href="#investor-form" class="btn btn-outline"><i class="fas fa-user-tie"></i> Я инвестор</a>
        <a href="https://wa.me/77051688831" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> Связаться в WhatsApp</a>
      </div>
    </div>
  </section>

  <!-- Who We Are -->
  <section id="about">
    <div class="container">
      <h2 class="section-title">Кто мы</h2>
      <div class="card" style="max-width: 900px; margin: 0 auto; text-align: center; font-size: 16px;">
        <p><strong>ТОО «AR Agreement»</strong> — консалтинговая компания, работающая на пересечении инвестиций, финансирования, международного бизнеса и сопровождения проектов. Мы формируем деловые связи между проектодержателями, инвесторами, кредиторами и стратегическими партнёрами, предварительно анализируя предмет предложения и организуя дальнейшие переговоры.</p>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services">
    <div class="container">
      <h2 class="section-title">Инвестиции и финансирование</h2>
      <p style="text-align: center; max-width: 800px; margin: -20px auto 40px; color: #94A3B8;">
        Конкретный финансовый инструмент определяется индивидуально с учётом стадии проекта, финансовой модели, обеспечения, отрасли, юрисдикции и требований финансирующей стороны.
      </p>
      <div class="grid-3">
        <div class="card">
          <i class="fas fa-chart-pie card-icon"></i>
          <h3>Прямые инвестиции</h3>
          <p>Привлечение прямых инвестиций в капитал проекта или компании.</p>
        </div>
        <div class="card">
          <i class="fas fa-handshake-angle card-icon"></i>
          <h3>Стратегическое партнёрство</h3>
          <p>Создание совместных предприятий и поиск ключевых бизнес-партнёров.</p>
        </div>
        <div class="card">
          <i class="fas fa-university card-icon"></i>
          <h3>Кредитные линии</h3>
          <p>Привлечение кредитных линий для развития и стабилизации действующего бизнеса.</p>
        </div>
        <div class="card">
          <i class="fas fa-cubes card-icon"></i>
          <h3>Проектное финансирование</h3>
          <p>Организация финансирования новых масштабных проектов «с нуля».</p>
        </div>
        <div class="card">
          <i class="fas fa-sync card-icon"></i>
          <h3>Рефинансирование</h3>
          <p>Рефинансирование существующих финансовых обязательств на более выгодных условиях.</p>
        </div>
        <div class="card">
          <i class="fas fa-industry card-icon"></i>
          <h3>Расширение мощностей</h3>
          <p>Финансирование расширения производственных мощностей и пополнение оборотного капитала.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Target Audience -->
  <section>
    <div class="container grid-2">
      <div class="target-card">
        <h3>Для владельца проекта</h3>
        <p>Если вашему действующему бизнесу или новому проекту требуется капитал, кредитная линия, рефинансирование или стратегический партнёр, направьте нам краткую информацию. После предварительного рассмотрения мы определим возможный формат дальнейшей работы и перечень материалов для предметных переговоров.</p>
        <a href="#project-form" class="btn btn-gold">Представить проект</a>
      </div>
      <div class="target-card">
        <h3>Для инвестора</h3>
        <p>Если вы рассматриваете инвестиционные возможности, сообщите нам интересующие отрасли, географию, размер инвестиций, желаемую структуру сделки и требования к проекту. Мы сможем сопоставлять ваш инвестиционный мандат с релевантными предложениями.</p>
        <a href="#investor-form" class="btn btn-outline">Заполнить мандат инвестора</a>
      </div>
    </div>
  </section>

  <!-- Industries -->
  <section id="industries">
    <div class="container">
      <h2 class="section-title">Проекты и отрасли</h2>
      <div class="industries-grid">
        <div class="industry-card">
          <h4>Производство</h4>
          <p>Расширение предприятий, запуск новых производств, модернизация оборудования, оборотный капитал.</p>
        </div>
        <div class="industry-card">
          <h4>Сельское хозяйство и АПК</h4>
          <p>Животноводство, растениеводство, переработка, хранение, логистика и агропромышленные проекты.</p>
        </div>
        <div class="industry-card">
          <h4>Горнодобывающая отрасль</h4>
          <p>Добывающие и перерабатывающие проекты при наличии разрешительной и технической документации.</p>
        </div>
        <div class="industry-card">
          <h4>Энергетика и инфраструктура</h4>
          <p>Генерация, коммунальная и промышленная инфраструктура, крупные инфраструктурные инициативы.</p>
        </div>
        <div class="industry-card">
          <h4>Строительство и недвижимость</h4>
          <p>Коммерческие объекты, проекты с землёй, разрешениями и подтверждённой экономикой.</p>
        </div>
        <div class="industry-card">
          <h4>IT и технологии</h4>
          <p>Технологические решения, цифровизация, инфраструктурные IT-проекты и масштабирование бизнеса.</p>
        </div>
        <div class="industry-card">
          <h4>Экология и переработка</h4>
          <p>Переработка отходов, вторичное сырьё, ресурсосбережение и экологические производства.</p>
        </div>
        <div class="industry-card">
          <h4>Логистика и торговля</h4>
          <p>Транспорт, складская инфраструктура, экспортно-импортные проекты, поиск покупателей и поставщиков.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- International -->
  <section id="international">
    <div class="container">
      <h2 class="section-title">Международное сотрудничество</h2>
      <div class="card" style="max-width: 900px; margin: 0 auto; border-left: 4px solid #D4AF37;">
        <p style="font-size: 15.5px; color: #F8F9FA; margin-bottom: 15px;">
          AR Agreement рассматривает международные деловые запросы, связанные с привлечением капитала, поставками, экспортом и импортом, поиском покупателей, производителей и стратегических партнёров.
        </p>
        <p style="color: #94A3B8; font-size: 14.5px; margin-bottom: 15px;">
          <strong>Приоритет:</strong> прозрачные сделки с идентифицируемыми сторонами, документально подтверждаемым предметом сделки и понятной коммерческой моделью.
        </p>
        <p style="color: #D4AF37; font-size: 14.5px;">
          <i class="fas fa-globe"></i> <strong>География работы:</strong> Казахстан, страны Центральной Азии, Китай, Турция, Европа и другие рынки.
        </p>
      </div>
    </div>
  </section>

  <!-- Principles -->
  <section id="principles">
    <div class="container">
      <h2 class="section-title">Принципы работы</h2>
      <div class="grid-2">
        <div class="principle-item">
          <i class="fas fa-user-shield"></i>
          <div>
            <h4 style="color: #F8F9FA;">Конфиденциальность</h4>
            <p style="color: #94A3B8; font-size: 14px;">Полная защита и сохранение коммерческой тайны предоставленной информации.</p>
          </div>
        </div>
        <div class="principle-item">
          <i class="fas fa-check-double"></i>
          <div>
            <h4 style="color: #F8F9FA;">Предварительная проверка</h4>
            <p style="color: #94A3B8; font-size: 14px;">Анализ исходных данных и документов в разумном объёме перед выходом на переговоры.</p>
          </div>
        </div>
        <div class="principle-item">
          <i class="fas fa-bullseye"></i>
          <div>
            <h4 style="color: #F8F9FA;">Предметная коммуникация</h4>
            <p style="color: #94A3B8; font-size: 14px;">Работа с точечным адресатом вместо неквалифицированной массовой рассылки.</p>
          </div>
        </div>
        <div class="principle-item">
          <i class="fas fa-file-signature"></i>
          <div>
            <h4 style="color: #F8F9FA;">Документальная фиксация</h4>
            <p style="color: #94A3B8; font-size: 14px;">Фиксация роли, функций и условий сопровождения договорными документами.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Form: Submit Project -->
  <section id="project-form">
    <div class="container">
      <h2 class="section-title">Представить проект</h2>
      <div class="form-box">
        <form @submit.prevent="submitProjectForm">
          <div class="form-grid">
            <div class="form-group">
              <label>Название компании / проекта *</label>
              <input v-model="projectForm.name" type="text" required placeholder="Наименование">
            </div>
            <div class="form-group">
              <label>БИН или регистрационные данные</label>
              <input v-model="projectForm.bin" type="text" placeholder="12 цифр БИН">
            </div>
            <div class="form-group">
              <label>ФИО и должность контактного лица *</label>
              <input v-model="projectForm.contactPerson" type="text" required placeholder="Руководитель / Уполномоченное лицо">
            </div>
            <div class="form-group">
              <label>Телефон / WhatsApp *</label>
              <input v-model="projectForm.phone" type="tel" required placeholder="+7 700 000 00 00">
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input v-model="projectForm.email" type="email" required placeholder="example@domain.com">
            </div>
            <div class="form-group">
              <label>Город / Страна</label>
              <input v-model="projectForm.location" type="text" placeholder="г. Астана, Казахстан">
            </div>
            <div class="form-group">
              <label>Отрасль *</label>
              <select v-model="projectForm.industry" required>
                <option value="">Выберите отрасль</option>
                <option value="Производство">Производство</option>
                <option value="Сельское хозяйство и АПК">Сельское хозяйство и АПК</option>
                <option value="Горнодобывающая отрасль">Горнодобывающая отрасль</option>
                <option value="Энергетика и инфраструктура">Энергетика и инфраструктура</option>
                <option value="Строительство и недвижимость">Строительство и недвижимость</option>
                <option value="IT и технологии">IT и технологии</option>
                <option value="Экология и переработка">Экология и переработка</option>
                <option value="Логистика и торговля">Логистика и торговля</option>
                <option value="Другое">Другое</option>
              </select>
            </div>
            <div class="form-group">
              <label>Текущая стадия проекта</label>
              <input v-model="projectForm.stage" type="text" placeholder="Стартап / Действующий бизнес / Расширение">
            </div>
            <div class="form-group">
              <label>Требуемая сумма финансирования и валюта *</label>
              <input v-model="projectForm.amount" type="text" required placeholder="Например: 500 млн KZT / USD">
            </div>
            <div class="form-group">
              <label>Предпочтительный инструмент</label>
              <select v-model="projectForm.tool">
                <option value="Инвестиции">Инвестиции</option>
                <option value="Кредит / Кредитная линия">Кредит / Кредитная линия</option>
                <option value="Рефинансирование">Рефинансирование</option>
                <option value="Партнёрство">Партнёрство</option>
              </select>
            </div>
            <div class="form-group">
              <label>Собственные вложения</label>
              <input v-model="projectForm.ownInvestment" type="text" placeholder="Сумма или % вложенных средств">
            </div>
            <div class="form-group">
              <label>Залоговое обеспечение</label>
              <input v-model="projectForm.collateral" type="text" placeholder="Недвижимость, оборудование и т.д.">
            </div>
            <div class="form-group">
              <label>Выручка действующего бизнеса (за последний год)</label>
              <input v-model="projectForm.revenue" type="text" placeholder="Если применимо">
            </div>
            <div class="form-group">
              <label>Наличие бизнес-плана / ТЭО / финмодели</label>
              <select v-model="projectForm.hasBusinessPlan">
                <option value="Да, в полном объеме">Да, в полном объеме</option>
                <option value="В процессе разработки">В процессе разработки</option>
                <option value="Отсутствует">Отсутствует</option>
              </select>
            </div>
            <div class="form-group full">
              <label>Наличие земли, лицензий, разрешений и контрактов</label>
              <input v-model="projectForm.assets" type="text" placeholder="Укажите имеющиеся активы, гос. акты, лицензии">
            </div>
            <div class="form-group full">
              <label>Краткое описание проекта и цель финансирования</label>
              <textarea v-model="projectForm.description" rows="4" placeholder="Опишите суть проекта..."></textarea>
            </div>
            <div class="form-group full">
              <label>Ссылка на презентацию / материалы (Google Drive, Yandex Disk и т.д.)</label>
              <input v-model="projectForm.presentationUrl" type="url" placeholder="https://drive.google.com/...">
            </div>
          </div>
          <div style="margin-top: 15px; font-size: 13px; color: #94A3B8;">
            <input type="checkbox" v-model="projectForm.consent" required id="consent1">
            <label for="consent1"> Согласие на обработку предоставленных данных</label>
          </div>
          <button type="submit" class="btn btn-gold" style="width: 100%; margin-top: 20px;">Отправить проект на рассмотрение</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Form: Investor Mandate -->
  <section id="investor-form">
    <div class="container">
      <h2 class="section-title">Я инвестор</h2>
      <div class="form-box">
        <form @submit.prevent="submitInvestorForm">
          <div class="form-grid">
            <div class="form-group">
              <label>ФИО / Наименование компании *</label>
              <input v-model="investorForm.name" type="text" required placeholder="Имя или название структуры">
            </div>
            <div class="form-group">
              <label>Страна / Резиденство *</label>
              <input v-model="investorForm.residence" type="text" required placeholder="Казахстан / Другая">
            </div>
            <div class="form-group">
              <label>Телефон / WhatsApp *</label>
              <input v-model="investorForm.phone" type="tel" required placeholder="+7 700 000 00 00">
            </div>
            <div class="form-group">
              <label>Email *</label>
              <input v-model="investorForm.email" type="email" required placeholder="investor@domain.com">
            </div>
            <div class="form-group">
              <label>Предпочтительные отрасли</label>
              <input v-model="investorForm.industries" type="text" placeholder="Производство, Недвижимость, АПК...">
            </div>
            <div class="form-group">
              <label>Интересующая география</label>
              <input v-model="investorForm.geography" type="text" placeholder="Казахстан, ЦА, Международные рынки">
            </div>
            <div class="form-group">
              <label>Диапазон инвестиций (чека)</label>
              <input v-model="investorForm.amountRange" type="text" placeholder="например: от $500K до $5M">
            </div>
            <div class="form-group">
              <label>Инвестиционный инструмент</label>
              <select v-model="investorForm.tool">
                <option value="Вход в капитал (Equity)">Вход в капитал (Equity)</option>
                <option value="Заёмное финансирование">Заёмное финансирование</option>
                <option value="Мезонин">Мезонин</option>
                <option value="Совместное предприятие (JV)">Совместное предприятие (JV)</option>
              </select>
            </div>
            <div class="form-group full">
              <label>Требования к доходности / обеспечению и критерии мандата</label>
              <textarea v-model="investorForm.requirements" rows="3" placeholder="Укажите минимальные требования к проектам..."></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-gold" style="width: 100%; margin-top: 20px;">Направить инвестиционный мандат</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Contacts -->
  <section id="contacts">
    <div class="container">
      <h2 class="section-title">Контакты</h2>
      <div class="contacts-grid">
        <div class="contact-box">
          <i class="fas fa-building"></i>
          <h4>Компания</h4>
          <p><strong>ТОО «AR Agreement»</strong></p>
          <p>БИН: 221140016829</p>
        </div>
        <div class="contact-box">
          <i class="fas fa-map-marker-alt"></i>
          <h4>Адрес</h4>
          <p>Республика Казахстан, г. Астана, район Нура, ул. Кайым Мухамедханов, дом 4В, кв. 73</p>
        </div>
        <div class="contact-box">
          <i class="fas fa-phone-alt"></i>
          <h4>Телефон / WhatsApp</h4>
          <p><a href="tel:+77051688831">+7 705 168 8831</a></p>
          <p style="margin-top: 8px;"><a href="https://wa.me/77051688831" target="_blank" style="color: #25D366;"><i class="fab fa-whatsapp"></i> Чат в WhatsApp</a></p>
        </div>
        <div class="contact-box">
          <i class="fas fa-envelope"></i>
          <h4>Email</h4>
          <p><a href="mailto:ar.agreement@gmail.com">ar.agreement@gmail.com</a>[cite: 3]</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
<footer>
  <div class="container">
    <div class="footer-top">
      <!-- Блок слева -->
      <div class="footer-brand">
        <h3 class="footer-title">ТОО «AR Agreement»</h3>
        <span class="footer-bin">| БИН 221140016829</span>
      </div>

      <!-- Блок справа -->
      <div class="footer-tagline">
        Инвестиции, финансирование и развитие бизнеса.
      </div>
    </div>

    <div class="footer-disclaimer">
      <strong>Юридическая оговорка:</strong> Информация на сайте носит информационный характер и не является публичной офертой, инвестиционной рекомендацией, банковской гарантией или безусловным обязательством по предоставлению финансирования. Каждая потенциальная сделка рассматривается индивидуально и подлежит самостоятельной юридической, финансовой и иной проверке сторонами.
    </div>

    <div class="copyright">
      © ТОО «AR Agreement». Все права защищены.
    </div>
  </div>
</footer>
</template>

<script setup>
import { ref, reactive } from 'vue'
// Подключаем ранее созданный файл supabase.js
import { supabase } from './supabase'

const isMenuOpen = ref(false)

// Форма "Представить проект"
const projectForm = reactive({
  name: '',
  bin: '',
  contactPerson: '',
  phone: '',
  email: '',
  location: '',
  industry: '',
  stage: '',
  amount: '',
  tool: 'Инвестиции',
  ownInvestment: '',
  collateral: '',
  revenue: '',
  hasBusinessPlan: 'Да, в полном объеме',
  assets: '',
  description: '',
  presentationUrl: '',
  consent: true
})

// Форма "Я Инвестор"
const investorForm = reactive({
  name: '',
  residence: '',
  phone: '',
  email: '',
  industries: '',
  geography: '',
  amountRange: '',
  tool: 'Вход в капитал (Equity)',
  requirements: ''
})

const isSubmitting = ref(false)

// Отправка формы проекта в таблицу project_applications
const submitProjectForm = async () => {
  if (!projectForm.name || !projectForm.phone) {
    alert('Пожалуйста, заполните основные поля (название и телефон).')
    return
  }

  isSubmitting.value = true

  const { error } = await supabase
    .from('project_applications')
    .insert([
      {
        name: projectForm.name,
        bin: projectForm.bin,
        contact_person: projectForm.contactPerson,
        phone: projectForm.phone,
        email: projectForm.email,
        location: projectForm.location,
        industry: projectForm.industry,
        stage: projectForm.stage,
        amount: projectForm.amount,
        tool: projectForm.tool,
        own_investment: projectForm.ownInvestment,
        collateral: projectForm.collateral,
        revenue: projectForm.revenue,
        has_business_plan: projectForm.hasBusinessPlan,
        assets: projectForm.assets,
        description: projectForm.description,
        presentation_url: projectForm.presentationUrl
      }
    ])

  isSubmitting.value = false

  if (error) {
    alert('Ошибка отправки проекта: ' + error.message)
  } else {
    alert('Спасибо! Данные по проекту успешно получены. Специалисты ТОО «AR Agreement» свяжутся с вами.')
    
    // Очистка полей формы
    Object.keys(projectForm).forEach(key => {
      if (typeof projectForm[key] === 'boolean') projectForm[key] = true
      else projectForm[key] = ''
    })
    projectForm.hasBusinessPlan = 'Да, в полном объеме'
    projectForm.tool = 'Инвестиции'
  }
}

// Отправка формы инвестора в таблицу investor_applications
const submitInvestorForm = async () => {
  if (!investorForm.name || !investorForm.phone) {
    alert('Пожалуйста, заполните основные поля (ФИО/Наименование компании и телефон).')
    return
  }

  isSubmitting.value = true

  const { error } = await supabase
    .from('investor_applications')
    .insert([
      {
        full_name: investorForm.name,
        residence: investorForm.residence,
        phone: investorForm.phone,
        email: investorForm.email,
        preferred_industries: investorForm.industries,
        geography: investorForm.geography,
        investment_range: investorForm.amountRange,
        investment_tool: investorForm.tool,
        mandate_criteria: investorForm.requirements
      }
    ])

  isSubmitting.value = false

  if (error) {
    alert('Ошибка отправки формы инвестора: ' + error.message)
  } else {
    alert('Спасибо! Ваш инвестиционный мандат успешно направлен. Специалисты ТОО «AR Agreement» свяжутся с вами.')
    
    // Очистка полей формы
    Object.keys(investorForm).forEach(key => {
      investorForm[key] = ''
    })
    investorForm.tool = 'Вход в капитал (Equity)'
  }
}
</script>