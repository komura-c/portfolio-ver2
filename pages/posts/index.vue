<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/posts/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default Vue.extend({
  async asyncData({ $config }) {
    const { data } = await axios.get($config.apiURL, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return data
  },
})
</script>
