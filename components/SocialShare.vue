<template>
    <div class="about-social-sharing" v-if="!!socialPostUrl">   
      <span class="mr-4">Sharing: </span>
      <vue-goodshare-facebook
        :page_url="socialPostUrl"
        title_social="Facebook"
        has_icon
      >
      </vue-goodshare-facebook>
      <vue-goodshare-twitter
        :page_url="socialPostUrl"
        title_social="Twitter"
        has_icon
      ></vue-goodshare-twitter>
      <vue-goodshare-reddit
        :page_url="socialPostUrl"
        title_social="Reddit"
        has_icon
      ></vue-goodshare-reddit>
    </div>
</template>

<script>
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";

export default {
  props: ["socialPostUrl"],
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueGoodshareReddit
  },
};
</script>

<style lang="scss">
.about-social-sharing {
  display: flex;
  align-items: center;
  justify-content: center;
  .button-social {
    background: transparent;
    .title-social {
      display: none;;
    }
    i {
      color: #272727;
    }
    &:hover {
      i {
        color: #73FD05;
      }
    }
  }
}
</style>