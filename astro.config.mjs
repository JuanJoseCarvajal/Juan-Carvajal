import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://juancarvajal.site',
  redirects: {
    '/work/carnival-order-management': '/work/carnival/',
    '/work/disney-design-system': '/work/disney/',
    '/work/buildinglink-property-management': '/work/buildinglink/',
    '/work/brainshark-sales-training': '/work/brainshark/',
    '/work/yuxi-digital-transformation': '/work/yuxi-global/',
    '/work/comcast-diagnosis-asset-management': '/work/comcast/',
    '/work/apex-game-changers': '/work/apex/'
  }
});
