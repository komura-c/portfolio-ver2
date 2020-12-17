<template>
  <div class="bg-top">
    <div class="profile-card fade">
      <div class="profile-card__img-wrapper">
        <img
          src="~assets/images/self.jpg"
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
            ><img src="~assets/images/twitter-icon.svg" alt="twitter"
          /></a>
          <a
            href="https://github.com/komura-c"
            target="_blank"
            rel="noopener noreferrer"
            class="social-buttons__link"
            ><img src="~assets/images/github-icon.svg" alt="github"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.bg-top {
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
    top: 80%;
    height: 40%;
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
</style>
