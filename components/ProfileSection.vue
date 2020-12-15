<template>
  <div class="profile">
    <div class="profile-card fade">
      <div class="profile-card__img-wrapper">
        <img
          src="~/assets/images/self.jpg"
          alt="komura-c"
          class="profile-card__img"
          loading="lazy"
        />
      </div>
      <div class="profile-card__info">
        <h1 class="profile-card__name">komura (Yuki Ishii)</h1>
        <div class="profile-card__description">
          <p>
            Webと音楽が好きです。最近はTypeScriptに夢中。Angular,
            Firebaseでの開発が得意です。
          </p>
        </div>
        <div class="social-buttons">
          <a
            href="https://twitter.com/komura_c"
            target="_blank"
            rel="noopener noreferrer"
            class="social-buttons__link"
            ><img src="~/assets/images/twitter-icon.svg"
          /></a>
          <a
            href="https://github.com/komura-c"
            target="_blank"
            rel="noopener noreferrer"
            class="social-buttons__link"
            ><img src="~/assets/images/github-icon.svg"
          /></a>
        </div>
      </div>
    </div>
    <div class="nav-bar fade">
      <ul class="nav-list">
        <li class="nav-list__item">
          <a href="#products" class="nav-list__link">Products</a>
        </li>
        <li class="nav-list__item">
          <a href="#posts" class="nav-list__link">Posts</a>
        </li>
        <li class="nav-list__item">
          <a href="#about" class="nav-list__link">About</a>
        </li>
        <li class="nav-list__item">
          <a href="#skills" class="nav-list__link">Skills</a>
        </li>
      </ul>
    </div>
    <div class="scroll-guide">
      <p class="scroll-guide__text">Scroll</p>
      <a href="" class="scroll-guide__anchor">
        <span class="scroll-guide__icon"></span
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.profile {
  position: relative;
  background-color: #fbbf5d;
  height: 450px;
  padding-top: 8em;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 60%;
    height: 80%;
    background-color: #f4f4f7;
    transform: skewY(-6deg);
    z-index: -1;
  }
}

.profile-card {
  max-width: 600px;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  &__img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  &__img-wrapper {
    width: 150px;
    height: 150px;
    margin-top: -70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      -45deg,
      rgb(255, 166, 73),
      rgb(247, 100, 91),
      rgb(128, 94, 212)
    );
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.21);
  }
  &__info {
    padding: 16px;
  }
  &__name {
    text-align: center;
    font-size: 28px;
    margin-bottom: 16px;
  }
  &__description {
    padding: 16px;
    background-color: #339af0;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    margin-bottom: 16px;
  }
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  &__link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition-duration: 0.3s;
    &:hover {
      opacity: 0.5;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
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
  gap: 12px;
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
  margin: 24px;
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
