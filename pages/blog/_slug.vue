<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, $config }) {
    const { data } = await axios.get(`${$config.apiURL}/${params.slug}`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return data
  },
}
</script>
