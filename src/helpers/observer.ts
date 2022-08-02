import { ObserverAction } from "@/types";

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains('element-hidden')) {
                entry.target.classList.remove('element-hidden')
            }
        }
    })
}, {
    root: null,
    threshold: 0.25
})

export const observer = (type:ObserverAction, ...el: HTMLElement[]): void => {
    if(type === ObserverAction.OBSERVE) {
        el.forEach((el:HTMLElement) => intersectionObserver.observe(el))
    }
    if(type === ObserverAction.UNOBSERVE) {
        el.forEach((el:HTMLElement) => intersectionObserver.unobserve(el))
    }
}
