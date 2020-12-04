<template>
  <ul class="flex items-center center">
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/posts/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    const { data } = await axios.get($config.apiURL, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return data
  },
}
</script>
