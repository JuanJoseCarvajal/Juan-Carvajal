import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://juancarvajal.site',
  redirects: {
    '/Carnival_Case_Study.html': '/work/carnival/',
    '/Disney_Case_Study.html': '/work/disney/',
    '/BuildingLink_Case_Study.html': '/work/buildinglink/',
    '/BrainShark-Case-Study.html': '/work/brainshark/',
    '/Yuxi_Case_Study.html': '/work/yuxi-global/',
    '/Comcast_Case_Study.html': '/work/comcast/',
    '/Apex_Case_Study.html': '/work/apex/',

    '/work/carnival-order-management': '/work/carnival/',
    '/work/disney-design-system': '/work/disney/',
    '/work/buildinglink-property-management': '/work/buildinglink/',
    '/work/brainshark-sales-training': '/work/brainshark/',
    '/work/yuxi-digital-transformation': '/work/yuxi-global/',
    '/work/comcast-diagnosis-asset-management': '/work/comcast/',
    '/work/apex-game-changers': '/work/apex/'
  }
});
