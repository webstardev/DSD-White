<template>
  <div class="banner-title f-Montserrat">
    <div class="container d-flex flex-column align-items-center">
      <h1 class="f-Montserrat text-center">{{ title }}</h1>
      <p class="f-Roboto text-center">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-title",
  props: ["title", "description"],
};
</script>
<style lang="scss" scoped>
.banner-title {
  padding-top: 20px;
  padding-bottom: 40px;
  background: linear-gradient(0deg, rgba(184, 223, 242, 0.2), rgba(184, 223, 242, 0.2)), #FFFFFF;
  color: #272727;
  display: flex;
  font-weight: 300;

  >div {
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3.5rem;
    line-height: 1.07;
    font-weight: 600;
  }
  p {
    margin-bottom: 0px;
    font-size: 1.5rem;
    line-height: 1.30;
    max-width: 600px;
  }

  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 36px;
    h1 {
      font-size: 36px;
    }
  }
}
</style>
