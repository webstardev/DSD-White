<template>
  <div class="about-layout">
    <BannerTitle
      title="About"
      description="Our mission should be your mission."
    />
    <b-container>
      <div class="small-container section wp-content">
        <div class="text-left">
          <p>
            Big Tech sees your data—your clicks, your online shopping choices,
            your browsing history—as the gushing oil well of our times. It’s the
            most valuable stuff on earth, and they want it. Once they get it,
            they use it in ways we are only beginning to understand.
          </p>
          <p>
            We are not Big Tech. We are independent developers worried about the
            sudden loss of online privacy. Digital insecurity and what’s been
            called “Surveillance Capitalism” are serious problems for our kids,
            ourselves, and you. And not a lot of people are doing anything about
            it.
          </p>
          <p>We are.</p>
          <p>
            We see your data as yours. We think your clicks are your business.
            If your kid wants to research tigers and rocket ships, she should be
            able to do so without an unaccountable corporation using that data
            to build a profile of her and profit off it.
          </p>
          <p>
            Our business—our mission—is to help you preserve your privacy, use
            the internet securely, and to keep your information under your
            control. We take this mission seriously. We were among the very
            first companies to understand that a VPN and ad-blocking browser
            combined offered the best defense. So that’s what we built. That’s
            what we’re selling: the best defense.
          </p>
          <p>
            Deep State Defender will never auction off your information to the
            highest bidder. We will not try to make a buck off your data. We
            will not exploit your privacy.
          </p>
          <p>
            We offer access to the internet on your terms. Our VPN and browser
            are safe, simple to install and use, and reliable. Paired together,
            they provide an effective defense.
          </p>
          <p>
            Your information is yours and your privacy—your family’s privacy—is
            worth defending. We can help.
          </p>
        </div>      
        <SocialShare :socialPostUrl="socialPostUrl" v-if="!!socialPostUrl" />
      </div>
    </b-container>
  </div>
</template>

<script>
import SocialShare from '../components/SocialShare';
export default {
  layout: "default",
  head: {
    title: "About Deep State Defender",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Our mission is to protect your privacy"
      }
    ]
  },
  components: {
    SocialShare
  },
  data() {
    return {
      socialPostUrl: ""
    }
  },
  methods: {
    getUrlFromRoute() {
      if (window && window.location && window.location.href) {
        this.socialPostUrl = window.location.href;
      }
    }
  },
  mounted() {
    this.getUrlFromRoute();
  }
};
</script>

<style scoped>
h2, h3 {
  color: #272727;
}
a {
  color: #44CCFF;
}
</style>