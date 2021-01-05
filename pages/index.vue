<template>
  <div>
    <ProfileSection />
    <TopHeader />
    <ScrollGuide />
    <ProductsSection />
    <PostsSection />
    <MusicsSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileSection from '~/components/ProfileSection.vue'
import TopHeader from '~/components/TopHeader.vue'
import ScrollGuide from '~/components/ScrollGuide.vue'
import ProductsSection from '~/components/ProductsSection.vue'
import PostsSection from '~/components/PostsSection.vue'
import MusicsSection from '~/components/MusicsSection.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  components: {
    ProfileSection,
    TopHeader,
    ScrollGuide,
    ProductsSection,
    PostsSection,
    MusicsSection,
    Footer,
  },
})
</script>

<style lang="scss"></style>
