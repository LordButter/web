import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
    {
        path: '/portfolio/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/portfolio',
        name: 'dashboard',
        component: DashboardView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portfolio/resume',
        name: 'resume',
        component: () => import('../views/ResumeView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portfolio/application',
        name: 'application',
        component: () => import('../views/ApplicationView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portfolio/skills',
        name: 'skills',
        component: () => import('../views/SkillsView.vue'),
        meta: {
        requiresAuth: true
        }
    },
    {
        path: '/portfolio/projects',
        name: 'projects',
        component: () => import('../views/ProjectsView.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/portfolio/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
            requiresAuth: true
        }
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
