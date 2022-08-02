import 'scroll-behavior-polyfill';

export const polyfillScroll = (e: any): void => {
    const targetId = e.target.dataset.target
    const targetElement = document.querySelector(targetId)

    if(!targetElement) return

    const rectTop = targetElement.getBoundingClientRect().top
    const offsetTop = window.scrollY

    const buffer = 20
    const top = rectTop + offsetTop - buffer

    window.scrollTo({
        top,
        behavior: 'smooth',
    });
}
