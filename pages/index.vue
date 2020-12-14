<template>
  <div>
    <AboutSection />
    <WorksSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutSection from '~/components/AboutSection.vue'
import WorksSection from '~/components/WorksSection.vue'

export default Vue.extend({
  components: {
    AboutSection,
    WorksSection,
  },
})
</script>

<style lang="scss"></style>
