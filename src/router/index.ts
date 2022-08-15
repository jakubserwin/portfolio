import { createRouter, createWebHistory } from 'vue-router';
import { Component } from 'vue';
import { useObserverStore } from '@/store/observer';

const MainView = (): Promise<Component> => import('../views/MainView.vue');
const ThankYou = (): Promise<Component> => import('../views/ThankYou/ThankYou.vue');
const CaseStudy = (): Promise<Component> => import('../views/CaseStudy/CaseStudy.vue');

const routes = [
    { path: '/', component: MainView },
    { path: '/thank-you', component: ThankYou },
    {
        path: '/case-study/:name',
        component: CaseStudy,
    },
    {
        path: '/:notFound(.*)',
        redirect: '/',
    },
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

router.beforeEach((to, from) => {
    const observerStore = useObserverStore()

    if(to.path === '/' && from.path !== '/') {
        observerStore.useObserver = false
        if (window.sessionStorage.getItem('animated')) {
            const body: HTMLBodyElement | null = document.querySelector('body')
            if(body) body.classList.remove('animate');
            return
        }
    }

    if (!window.sessionStorage.getItem(to.params.name as string) && to.path !== '/') {
        window.sessionStorage.setItem(to.params.name as string, 'visited');
        observerStore.useObserverOnCaseStudy = true
        return
    } else {
        observerStore.useObserverOnCaseStudy = false
    }
})

export default router;
