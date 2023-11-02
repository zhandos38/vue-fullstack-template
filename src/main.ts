import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/main.css'

import 'preline'

const app = createApp(App)

app.config.globalProperties.$appState = reactive({ inputStyle: 'outlined' })

const locale = {
  startsWith: 'Начинается с',
  contains: 'Содержит',
  notContains: 'Не содержит',
  endsWith: 'Заканчивается на',
  equals: 'Равно',
  notEquals: 'Не равно',
  noFilter: 'Без фильтра',
  lt: 'Меньше',
  lte: 'Меньше или равно',
  gt: 'Больше',
  gte: 'Больше или равно',
  dateIs: 'Этот дата',
  dateIsNot: 'Не этот дата',
  dateBefore: 'Дата до',
  dateAfter: 'Дата после',
  clear: 'Очистить',
  apply: 'Применить',
  matchAll: 'Match All',
  matchAny: 'Match Any',
  addRule: 'Add Rule',
  removeRule: 'Remove Rule',
  accept: 'Да',
  reject: 'Нет',
  choose: 'Выбрать',
  upload: 'Загрузить',
  cancel: 'Отменить',
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  today: 'Сегодня',
  weekHeader: 'Wk',
  firstDayOfWeek: 0,
  dateFormat: 'mm/dd/yy',
  weak: 'Weak',
  medium: 'Medium',
  strong: 'Strong',
  passwordPrompt: 'Enter a password',
  emptyFilterMessage: 'Ничего не найдено',
  emptyMessage: 'Нет доступных вариантов'
}

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  locale
})
app.use(ToastService)
app.use(ConfirmationService)
app.use(LoadingPlugin)

app.mount('#app')
