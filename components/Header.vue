<template>
 <div class="container-fluid top-banner">
    <BannerTitle
      title="DS Defender VPN"
      description="The ultimate combination of security tools to keep your online activity anonymous and encrypted."
    />
    <slot/>
</div>
</template>

<script>
import BannerTitle from "./BannerTitle";

export default {
  components: { BannerTitle},
  name: "header",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-banner {
  background: linear-gradient(0deg, rgba(184, 223, 242, 0.2), rgba(184, 223, 242, 0.2)), #FFFFFF;
}

.header-title {
  font-size: 56px;
  font-weight: 600;
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
}

.header-text {
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #272727;
  margin-bottom: 50px;
}

.header-textbottom {
  font-size: 30px;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin-top: 20px;
}

.header-logo {
  margin-top: 10px;
}

.header-nav {
  text-align: right;
}

.nav-link {
  color: inherit;
  font-weight: 600;
  line-height: 20px;
  font-size: 10px;  
}

.navbar-collapse .nav-link {
  color: white;
}

</style>
