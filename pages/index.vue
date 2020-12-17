<template>
  <div>
    <ProfileSection />
    <TopHeader />
    <ScrollGuide />
    <ProductsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileSection from '~/components/ProfileSection.vue'
import TopHeader from '~/components/TopHeader.vue'
import ScrollGuide from '~/components/ScrollGuide.vue'
import ProductsSection from '~/components/ProductsSection.vue'

export default Vue.extend({
  components: {
    ProfileSection,
    TopHeader,
    ScrollGuide,
    ProductsSection,
  },
})
</script>

<style lang="scss"></style>
