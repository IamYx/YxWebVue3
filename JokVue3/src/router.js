import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue';
import Two from './components/TwoPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/twoPage', component: Two }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;