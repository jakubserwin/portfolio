<script setup lang="ts">
import 'scroll-behavior-polyfill';

const polyfillScroll = (e: any): void => {
  const targetId = e.target.dataset.target;
  const targetElement = document.querySelector(targetId);
  const rectTop = targetElement.getBoundingClientRect().top;
  const offsetTop = window.pageYOffset;

  const buffer = 30;
  const top = rectTop + offsetTop - buffer;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}

const toggleNav = (): void => { console.warn('hi')}

</script>

<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">
        Jakub Serwin
      </router-link>
    </div>
    <nav>
      <ul class="header__list header__list--desktop">
        <li>
          <router-link
            to="/"
            class="header__link"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="header__link"
            data-target="#projects"
            @click="polyfillScroll"
          >
            Projects
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="header__link"
            data-target="#contact"
            @click="polyfillScroll"
          >
            Contact
          </router-link>
        </li>
      </ul>
      <ul
        ref="nav"
        class="header__list header__list--mobile"
        :class="{ active: isActive }"
      >
        <li>
          <a
            href="#projects"
            class="header__link"
            @click="toggleNav"
          >Projects</a>
        </li>
        <li>
          <a
            href="#tools"
            class="header__link"
            @click="toggleNav"
          >Technology</a>
        </li>
        <li>
          <a
            href="#contact"
            class="header__link"
            @click="toggleNav"
          >Contact</a>
        </li>
        <li>
          <a
            href="https://github.com/jakubserwin"
            target="_blank"
            @click="toggleNav"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 3.125C12.9199 3.125 3.125 13.1738 3.125 25.5566C3.125 35.4688
                9.39453 43.8672 18.0859 46.8359C18.2078 46.8624 18.3323 46.8755 18.457
                46.875C19.2676 46.875 19.5801 46.2793 19.5801 45.7617C19.5801 45.2246
                19.5605 43.8184 19.5508 41.9434C18.8272 42.113 18.0869 42.2014 17.3438
                42.207C13.1348 42.207 12.1777 38.9355 12.1777 38.9355C11.1816 36.3477
                9.74609 35.6543 9.74609 35.6543C7.8418 34.3164 9.73633 34.2773 9.88281
                34.2773H9.89258C12.0898 34.4727 13.2422 36.6016 13.2422 36.6016C14.3359
                38.5156 15.8008 39.0527 17.1094 39.0527C17.9746 39.0354 18.8265
                38.8358 19.6094 38.4668C19.8047 37.0215 20.3711 36.0352 20.9961
                35.4688C16.1426 34.9023 11.0352 32.9785 11.0352 24.3848C11.0352
                21.9336 11.8848 19.9316 13.2812 18.3691C13.0566 17.8027 12.3047
                15.5176 13.4961 12.4316C13.6559 12.3934 13.8202 12.377 13.9844
                12.3828C14.7754 12.3828 16.5625 12.6855 19.5117 14.7363C23.0953
                13.7337 26.8852 13.7337 30.4688 14.7363C33.418 12.6855 35.2051
                12.3828 35.9961 12.3828C36.1603 12.377 36.3246 12.3934 36.4844
                12.4316C37.6758 15.5176 36.9238 17.8027 36.6992 18.3691C38.0957
                19.9414 38.9453 21.9434 38.9453 24.3848C38.9453 32.998 33.8281
                34.8926 28.9551 35.4492C29.7363 36.1426 30.4395 37.5098 30.4395
                39.5996C30.4395 42.5977 30.4102 45.0195 30.4102 45.752C30.4102
                46.2793 30.7129 46.875 31.5234 46.875C31.6546 46.8756 31.7856
                46.8625 31.9141 46.8359C40.6152 43.8672 46.875 35.459 46.875
                25.5566C46.875 13.1738 37.0801 3.125 25 3.125Z"
                fill="#121212"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-serwin-4a1539210/"
            target="_blank"
            @click="toggleNav"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.376 3.125H6.86328C4.86816 3.125 3.125 4.56055 3.125
                6.53223V43.126C3.125 45.1084 4.86816 46.875 6.86328 46.875H43.3652C45.3711
                46.875 46.875 45.0967 46.875 43.126V6.53223C46.8867 4.56055 45.3711 3.125
                43.376 3.125ZM16.6865 39.5928H10.4189V20.1055H16.6865V39.5928ZM13.7695
                17.1426H13.7246C11.7187 17.1426 10.4199 15.6494 10.4199 13.7803C10.4199
                11.877 11.7529 10.4189 13.8037 10.4189C15.8545 10.4189 17.1094 11.8662
                17.1543 13.7803C17.1533 15.6494 15.8545 17.1426 13.7695 17.1426ZM39.5928
                39.5928H33.3252V28.9375C33.3252 26.3848 32.4131 24.6406 30.1455
                24.6406C28.4131 24.6406 27.3877 25.8125 26.9316 26.9541C26.7607
                27.3643 26.7148 27.9228 26.7148
                28.4932V39.5928H20.4473V20.1055H26.7148V22.8174C27.627
                21.5186 29.0518 19.6494 32.3672 19.6494C36.4814 19.6494
                39.5938 22.3613 39.5938 28.208L39.5928 39.5928Z"
                fill="#121212"
              />
            </svg>
          </a>
        </li>
      </ul>
<!--      <hamburger-menu />-->
    </nav>
  </header>
</template>

<style lang="scss" scoped src="./TheHeader.scss" />
