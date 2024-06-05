import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import CourseView from '../views/course/CourseView.vue'
import CurriculumView from '../views/curriculum/CurriculumView.vue'
import AccountingView from '../views/accounting/AccountingView.vue'
import ScheduleView from '../views/schedule/ScheduleView.vue'
import TranscriptView from '../views/transcript/TranscriptView.vue'
import QuestionnaireView from '../views/questionnaire/QuestionnaireView.vue'
import AccountSettings from '../views/account-settings/AccountSettings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { layout: 'auth' }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
      meta: { layout: 'auth' }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { layout: 'home' }
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView,
      meta: { layout: 'main', title: 'Course Registration' }
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: CurriculumView,
      meta: { layout: 'main', title: 'My Curriculum' }
    },
    {
      path: '/accounting',
      name: 'accounting',
      component: AccountingView,
      meta: { layout: 'main', title: 'My Accounting' }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
      meta: { layout: 'main', title: 'Course Schedule' }
    },
    {
      path: '/transcript',
      name: 'transcript',
      component: TranscriptView,
      meta: { layout: 'main', title: 'Transcript' }
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: QuestionnaireView,
      meta: { layout: 'main', title: 'Questionnaire' }
    },
    {
      path: '/account-settings',
      name: 'account-settings',
      component: AccountSettings,
      meta: { layout: 'main', title: 'Settings' }
    }
  ]
})

export default router
