import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Home from './views/Home.vue'
import InstallCenter from './views/InstallCenter.vue'
import SetupUI from './views/SetupUI.vue'
import Apps from './views/Apps.vue'
import About from './views/About.vue'
import Blank from './views/Blank.vue'
import Config from './views/Config.vue'

export const routes: RouteRecordRaw[] = [
    { path: '/', name: "Blank", component: Blank, meta: { icon: 'fluent:home-32-filled' } },
    { path: '/home', name: "Home", component: Home, meta: { icon: 'fluent:home-32-filled' } },
    { path: '/setup', name: "SetupUI", component: SetupUI, meta: { icon: 'fluent-mdl2:install-to-drive' } },
    // { path: '/adblock', name: "Reklámvédelem", component: Adblock, meta: { icon: 'fluent:shield-32-filled' } },
    { path: '/apps', name: "Apps", component: Apps, meta: { icon: 'fluent:apps-32-filled' } },
    // WIP
    // { path: '/install-center', name: "Install Center", component: InstallCenter, meta: { icon: 'clarity:store-solid' } },
    { path: '/configuration', name: "Configuration", component: Config, meta: { icon: 'icon-park-outline:config' } },
    { path: '/about', name: "About", component: About, meta: { icon: 'fluent:info-32-filled' } },

]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})