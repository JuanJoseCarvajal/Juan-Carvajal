import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration';

export default defineConfig({
  site: 'https://example.dev',
  integrations: [webcore()]
});
