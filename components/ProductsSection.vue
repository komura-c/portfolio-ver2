<template>
  <div id="products">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">Products</h2>
      </div>
      <div class="products">
        <a
          v-for="product in productList"
          :key="product.name"
          :href="product.URL"
          target="_blank"
          rel="noopener noreferrer"
          class="product-card"
        >
          <img
            :src="require(`~/assets/images/${product.img}`)"
            class="product-card__img"
            alt=""
          />
          <div class="product-card__description">
            <dl class="product-card__dl">
              <dt class="product-card__dt">名前：</dt>
              <dd class="product-card__dd">{{ product.name }}</dd>
              <dt class="product-card__dt">説明：</dt>
              <dd class="product-card__dd">
                {{ product.description }}
              </dd>
              <dt class="product-card__dt">技術：</dt>
              <dd class="product-card__dd">
                {{ product.tech }}
              </dd>
            </dl>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type ProductList = {
  img: string
  name: string
  description: string
  tech: string
  URL: string
}[]

export default Vue.extend({
  data(): { productList: ProductList } {
    return {
      productList: [
        {
          img: 'musil.png',
          name: 'MusiL',
          description:
            'DTMや作曲をしている人が気軽に記事を投稿できるサービスです。もっとDTMを楽しめる人が増えたら良いなという考えで作成しました。',
          tech:
            'Angular.js, Firebase Cloud Functions + Hosting, Algolia, Froala Editor',
          URL: 'https://musil.place/',
        },
        {
          img: 'portfolio.png',
          name: 'komura-c.github.io',
          description: 'このサイトです。Nuxt.jsを使ってみるために作りました。',
          tech: 'Nuxt.js, Netlify',
          URL: 'https://github.com/komura-c/komura-c.github.io',
        },
        {
          img: 'music-waves.jpg',
          name: 'MusicWavesVisualizer',
          description:
            'WebAudioAPIを使って画像と音楽を読み込んで波形動画を生成するサイトです。音楽動画が簡単に作れたら便利という考えで作成しました。',
          tech: 'HTML5, CSS3, JavaScript, Materialize, Vercel',
          URL: 'https://music-waves-visualizer.vercel.app/',
        },
        {
          img: 'arskw.png',
          name: 'arskw',
          description:
            'Amazonレビューをスクレイピングしてワードクラウドに可視化するPythonプログラムです。',
          tech: 'Python, Selenium, BeautifulSoup4, XlsxWriter, WordCloud, etc.',
          URL: 'https://github.com/komura-c/arskw',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.product-card {
  color: #333;
  background-color: #fff;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 48%;
  margin-bottom: 24px;
  transition: 0.3s;
  @include tab {
    width: 100%;
  }
  &:hover {
    box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.24);
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
  &__button {
    display: block;
    width: calc(100% + 32px);
    height: 40px;
    text-align: center;
    margin: 0 -16px -16px;
    color: #fff;
    background-color: #f4511e;
    padding: 8px;
    border-radius: 0 0 4px 4px;
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
