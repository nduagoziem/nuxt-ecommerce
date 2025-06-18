<script setup>
</script>
<template>
    <div class="min-h-screen bg-white dark:bg-black">
      <NavBar class="fixed top-0 left-0 w-full z-50" />
      <div class="pt-16"></div>
      <slot />
    </div>
    <Footer />
</template>

<style scoped></style>