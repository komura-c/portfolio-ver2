<template>
  <nuxt />
</template>

<script>
export default {
  head: {
    title: 'komura-c.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'komura-cのポートフォリオ・ブログサイトです。',
      },
    ],
  },
}
</script>

<style>
html {
  font-family: 'Source Sans', sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
