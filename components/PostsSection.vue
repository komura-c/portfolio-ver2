<template>
  <div id="posts">
    <div class="container">
      <div class="heading">
        <h2 class="heading__title">Posts</h2>
      </div>
      <div class="posts">
        <a
          v-for="post in postList"
          :key="post.title"
          :href="post.URL"
          target="_blank"
          rel="noopener noreferrer"
          class="post-card"
        >
          <h4 class="post-card__title">{{ post.title }}</h4>
          <p class="post-card__date">{{ post.updatedAt }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type postList = {
  title: string
  URL: string
  updatedAt: string
  ogpImg?: string
}[]

export default Vue.extend({
  data(): { postList: postList } {
    return {
      postList: [
        {
          title: 'CloudFunctionsから上限までツイート保存',
          URL: 'https://to.camp/lesson?v=S0FfNYhRPLzRt3GFHHaq',
          updatedAt: '2020-09-29',
        },
        {
          title: 'CloudFunctionsからYouTubeAPIで特定チャンネル動画を取得する',
          URL: 'https://to.camp/lesson?v=wwWte5geeyIB0VHMuWx3',
          updatedAt: '2020-09-29',
        },
        {
          title: 'AngularでFroalaEditorを使う',
          URL: 'https://to.camp/lesson?v=thSHr2O8iIYt071VkVGO',
          updatedAt: '2020-08-28',
        },
        {
          title:
            'Angularで動的に生成した記事の目次（TableOfContents）とスムーズスクロールを実装する',
          URL: 'https://to.camp/lesson?v=Bi6M5sNoF2HGAFmJ3N1b',
          updatedAt: '2020-08-19',
        },
        {
          title:
            'WebAudioAPIとcanvasで音声波形動画を出力するサイトを作ってみた',
          URL: 'https://crieit.net/posts/music-waves-visualizer',
          updatedAt: '2020-08-16',
        },
        {
          title: 'AngularでブラウザURLを扱う',
          URL: 'https://qiita.com/komura_c/items/28ffc5ba38cba5fbe9c9',
          updatedAt: '2020-08-14',
        },
        {
          title: 'Angularで特定のルートにデータを持たせる',
          URL: 'https://qiita.com/komura_c/items/3540474f29c53429f8d1',
          updatedAt: '2020-08-08',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_mixins.scss';

.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.post-card {
  color: #333;
  background-color: #fff;
  box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 48%;
  margin-bottom: 24px;
  padding: 24px;
  transition: 0.3s;
  @include tab {
    width: 100%;
  }
  &:hover {
    box-shadow: 0 18px 45px 0 rgba(0, 0, 0, 0.24);
  }
  &__title {
    font-weight: bold;
    letter-spacing: 1.2px;
    margin-bottom: 12px;
  }
  &__date {
    font-size: 14px;
    letter-spacing: 1.2px;
  }
}
</style>
