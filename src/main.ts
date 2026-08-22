import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes } from './router';
import './styles.css';

// O ViteSSG pré-renderiza todas as rotas para melhorar SEO, GEO e velocidade.
export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to) {
      if (to.hash) return { el: to.hash, behavior: 'smooth', top: 88 };
      return { top: 0 };
    },
  },
);
