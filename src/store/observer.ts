import { defineStore } from 'pinia'

export const useObserverStore = defineStore('observer', {
    state: () => ({
        useObserver: true,
        useObserverOnCaseStudy: true,
    }),
})
