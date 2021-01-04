<template>
  <div id="products">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">Products</h2>
      </div>
      <div class="products">
        <div
          v-for="product in productList"
          :key="product.name"
          class="product-card"
        >
          <img :src="product.imgSrc" class="product-card__img" alt="" />
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
            <div v-if="product.serviceURL" class="product-card__buttons">
              <a :href="product.serviceURL" class="product-card__link">
                サイトを見る<img
                  src="~assets/images/mdi-open-in-new.svg"
                  alt="mdi-open-in-new"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type ProductList = {
  imgSrc: string
  name: string
  description: string
  tech: string
  serviceURL?: string
}[]

export default Vue.extend({
  data(): { productList: ProductList } {
    return {
      productList: [
        {
          imgSrc: require('@/assets/images/musil.png'),
          name: 'MusiL',
          description:
            'DTMや作曲をしている人が気軽に記事を投稿できるサービスです。もっとDTMを楽しめる人が増えたら良いなという考えで作成しました。',
          tech:
            'Angular.js, Firebase Cloud Functions + Hosting, Algolia, Froala Editor',
          serviceURL: 'https://musil.place/',
        },
        {
          imgSrc: require('@/assets/images/portfolio.png'),
          name: 'komura-c.net',
          description: 'このサイトです。Nuxt.jsを使ってみるために作りました。',
          tech: 'Nuxt.js, Netlify',
        },
        {
          imgSrc: require('@/assets/images/music-waves.jpg'),
          name: 'MusicWavesVisualizer',
          description:
            'WebAudioAPIを使って画像と音楽を読み込んで波形動画を生成するサイトです。音楽動画が簡単に作れたら便利という考えで作成しました。',
          tech: 'HTML5, CSS3, JavaScript, Materialize, Vercel',
          serviceURL: 'https://music-waves-visualizer.vercel.app/',
        },
        {
          imgSrc: require('@/assets/images/arskw.png'),
          name: 'arskw',
          description:
            'Amazonレビューをスクレイピングしてワードクラウドに可視化するPythonプログラムです。',
          tech: 'Python, Selenium, BeautifulSoup4, XlsxWriter, WordCloud, etc.',
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
  background-color: #fff;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.13);
  border-radius: 4px;
  width: 48%;
  margin-bottom: 24px;
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
