import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
    state: () => ({
        isNavActive: false
    }),
    actions: {
        toggleNav() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.body.classList.toggle('hide');

            this.isNavActive = !this.isNavActive
        },
    },
})
