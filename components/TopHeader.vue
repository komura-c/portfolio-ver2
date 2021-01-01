<template>
  <header class="header">
    <div class="nav-bar fade">
      <ul class="nav-list">
        <li
          v-for="navItem in navList"
          :key="navItem.anchor"
          class="nav-list__item"
        >
          <nuxt-link
            v-scroll-to="'#' + navItem.anchor"
            to
            class="nav-list__link"
          >
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export type NavList = {
  name: string
  anchor: string
}[]

export default Vue.extend({
  data() {
    return {
      navList: [
        {
          name: 'Top',
          anchor: 'top',
        },
        {
          name: 'Products',
          anchor: 'products',
        },
        {
          name: 'Skills',
          anchor: 'skills',
        },
        {
          name: 'Musics',
          anchor: 'musics',
        },
        {
          name: 'Contact',
          anchor: 'contact',
        },
      ] as NavList,
    }
  },
})
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1;
}

.nav-bar {
  max-width: 800px;
  background-color: #fff;
  margin: 24px auto;
  padding: 12px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.13);
  border-radius: 40px;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  &__link {
    color: #333;
    text-decoration: none;
    transition-duration: 0.3s;
    &:hover {
      opacity: 0.5;
    }
  }
}

.scroll-guide {
  margin: 24px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text {
    font-size: 20px;
    letter-spacing: 2px;
  }
  &__anchor {
    position: relative;
    margin-top: 4px;
  }
  &__icon {
    position: absolute;
    width: 40px;
    height: 40px;
    margin-left: -21px;
    border: 1px solid #333;
    border-radius: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.3s;
    animation: scroll-guide-anim 3s infinite;
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      width: 16px;
      height: 16px;
      margin: -10px 0 0 -6px;
      border-left: 1px solid #333;
      border-bottom: 1px solid #333;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}

@keyframes scroll-guide-anim {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-8px, 8px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
</style>
