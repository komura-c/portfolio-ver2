<template>
  <nuxt />
</template>

<script>
export default {
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'komura-c.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'komura-cのポートフォリオサイトです。',
      },
    ],
  },
}
</script>
