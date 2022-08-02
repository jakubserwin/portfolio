import { createRouter, createWebHistory } from 'vue-router';

const MainView = ():any => import('../views/MainView.vue');
// const PageNotFound = () => import('../components/views/PageNotFound.vue');
const ThankYou = ():any => import('../views/ThankYou/ThankYou.vue');
const CaseStudy = ():any => import('../views/CaseStudy/CaseStudy.vue');

const routes = [
    { path: '/', component: MainView },
    { path: '/thank-you', component: ThankYou },
    {
        path: '/case-study/:name',
        component: CaseStudy,
    },
    // {
    //     path: '/:notFound(.*)',
    //     component: PageNotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(from, to, savedPosition) {
        if( to === from ) return
        if (savedPosition) return savedPosition
        return { top: 0, left: 0 }
    },
});

export default router;
