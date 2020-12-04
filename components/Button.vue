<template>
  <button class="btn">
    <slot>Button</slot>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply font-bold ml-4 px-4 py-2 rounded-md text-sm font-medium text-gray-300;
  &:hover {
    @apply text-white bg-gray-700;
  }
  &:focus {
    @apply outline-none text-white bg-gray-700;
  }
}
</style>
