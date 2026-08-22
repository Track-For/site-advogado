import { sites } from '@openai/sites-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue(), sites()],
  ssgOptions: {
    dirStyle: 'nested',
  },
  server: {
    host: '0.0.0.0',
    // Polling evita bloqueios do watcher em diretórios sincronizados no Windows.
    watch: { usePolling: true, interval: 500 },
  },
};
