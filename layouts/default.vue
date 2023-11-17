<template>
  <div class="web-layout">
    <WebHeader />
    <Nuxt />
    <WebFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.web-layout {
  @import '~/assets/css/bootstrap.min.scss';
  @import '~/assets/css/chat.scss';
  @import '~/assets/css/style.scss';
  @import '~/assets/css/style-min.scss';
}
</style>
