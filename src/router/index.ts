import { createRouter, createWebHistory } from 'vue-router';

const MainView = ():any => import('../views/MainView.vue');
// const PageNotFound = () => import('../components/views/PageNotFound.vue');
// const ThankYou = () => import('../components/views/ThankYou.vue');
// const CaseStudy = () => import('../components/views/CaseStudy/CaseStudy.vue');

const routes = [
    { path: '/', component: MainView },
    // { path: '/thank-you', component: ThankYou },
    // {
    //     path: '/case-study/:name',
    //     component: CaseStudy,
    // },
    // {
    //     path: '/:notFound(.*)',
    //     component: PageNotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) return savedPosition;
        return { top: 0, left: 0 };
    },
});

export default router;
