<template>
  <div id="products">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">Products</h2>
      </div>
      <div class="products">
        <div class="product-card">
          <img src="~assets/images/musil.png" class="product-card__img" />
          <div class="product-card__description">
            <dl class="product-card__dl">
              <dt class="product-card__dt">名前：</dt>
              <dd class="product-card__dd">MusiL</dd>
              <dt class="product-card__dt">説明：</dt>
              <dd class="product-card__dd">
                DTMや作曲をしている人が気軽に記事を投稿できるサービスです。もっとDTMを楽しめる人が増えたら良いなという考えで作成しました。
              </dd>
              <dt class="product-card__dt">技術：</dt>
              <dd class="product-card__dd">
                Angular.js, Firebase Cloud Functions + Hosting, Algolia, Froala
                Editor
              </dd>
            </dl>
            <div class="product-card__buttons">
              <a href="https://musil.place/" class="product-card__link">
                サイトを見る<img
                  src="~assets/images/mdi-open-in-new.svg"
                  alt="mdi-open-in-new"
              /></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <img
            src="~assets/images/portfolio-blog.png"
            class="product-card__img"
          />
          <div class="product-card__description">
            <dl class="product-card__dl">
              <dt class="product-card__dt">名前：</dt>
              <dd class="product-card__dd">Portfolio-Blog</dd>
              <dt class="product-card__dt">説明：</dt>
              <dd class="product-card__dd">
                このサイトです。Nuxt.jsとmicroCMSを使ってみたかったので作りました。
              </dd>
              <dt class="product-card__dt">技術：</dt>
              <dd class="product-card__dd">Nuxt.js, Netlify, microCMS</dd>
            </dl>
          </div>
        </div>
        <div class="product-card">
          <img src="~assets/images/music-waves.jpg" class="product-card__img" />
          <div class="product-card__description">
            <dl class="product-card__dl">
              <dt class="product-card__dt">名前：</dt>
              <dd class="product-card__dd">MusicWavesVisualizer</dd>
              <dt class="product-card__dt">説明：</dt>
              <dd class="product-card__dd">
                WebAudioAPIを使って画像と音楽を読み込んで波形動画を生成するサイトです。音楽動画が簡単に作れたら便利という考えで作成しました。
              </dd>
              <dt class="product-card__dt">技術：</dt>
              <dd class="product-card__dd">
                HTML5, CSS3, JavaScript, Materialize, Vercel
              </dd>
            </dl>
            <div class="product-card__buttons">
              <a
                href="https://music-waves-visualizer.vercel.app/"
                class="product-card__link"
              >
                サイトを見る<img
                  src="~assets/images/mdi-open-in-new.svg"
                  alt="mdi-open-in-new"
              /></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <img src="~assets/images/arskw.png" class="product-card__img" />
          <div class="product-card__description">
            <dl class="product-card__dl">
              <dt class="product-card__dt">名前：</dt>
              <dd class="product-card__dd">arskw</dd>
              <dt class="product-card__dt">説明：</dt>
              <dd class="product-card__dd">
                Amazonレビューをスクレイピングしてワードクラウドに可視化するPythonプログラムです。
              </dd>
              <dt class="product-card__dt">技術：</dt>
              <dd class="product-card__dd">
                Python, Selenium, BeautifulSoup4, XlsxWriter, WordCloud, etc.
              </dd>
            </dl>
          </div>
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
@import '~/assets/scss/_mixins.scss';

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.product-card {
  background-color: #fff;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  width: 48%;
  @include tab {
    width: 100%;
  }
  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }
  &__description {
    padding: 16px;
    line-height: 1.5;
  }
  &__dl {
    max-width: 500px;
    margin: 0 auto 12px;
  }
  &__dt {
    float: left;
    clear: left;
  }
  &__dd {
    margin-left: 70px;
  }
  &__buttons {
    text-align: right;
  }
  &__link {
    font-size: 14px;
    color: #fff;
    background-color: #f4511e;
    padding: 8px;
    border-radius: 4px;
    transition-duration: 0.3s;
    img {
      color: #fff;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
