<template>
  <div class="no-gutters px-0">
    <Header>
      <HomeBanner />
    </Header>
    <Features />
    <Video />
    <Staff />
    </div>
</template>

<script>
export default {
  layout: "default"
}
</script>

<style scoped lang="scss">
.iphone-xs-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}

@media screen and (max-width: 767px) {
  .iphone-xs-wrapper img {
      width: 80%;
  }
}
</style>









