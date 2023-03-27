import store from '../store'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/ApplicationView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.state.userId) {
    return {
        path: "/login"
    };
  } else if(to.name == "login" && store.state.userId){
    return {
      path: "/"
    };
  }
})

export default router
