<template>
    <div class="iphone-xs-wrapper">
        <img src="../assets/iphone-xs.png" alt="iphone-xs" />
    </div>
</template>

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