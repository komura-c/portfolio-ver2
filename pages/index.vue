<template>
  <div>
    <ProfileSection />
    <ProductsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileSection from '~/components/ProfileSection.vue'
import ProductsSection from '~/components/ProductsSection.vue'

export default Vue.extend({
  components: {
    ProfileSection,
    ProductsSection,
  },
})
</script>

<style lang="scss"></style>
