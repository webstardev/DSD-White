<template>
  <div class="fixed-bottom">
    <div v-if="isOpen">
      <b-alert fade show dismissible variant="dark">
        <b-row class="text-center">
          <b-col cols="9">
            <slot name="message">
              We use Cookies to provide analytics for internal use only. To find
              out more about our use of cookies, please see our
              <NuxtLink to="/privacy"> Privacy Policy </NuxtLink>.
            </slot>
          </b-col>
          <b-col cols="3">
            <b-button @click="accept">Accept</b-button
            ><b-button @click="deny" class="ml-2">Deny</b-button>
          </b-col>
        </b-row>
      </b-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept"
    },
    buttonTextDeny: {
      type: String,
      default: "Deny"
    },
    message: {
      type: String,
      default:
        "We're using a Google Analytics cookie - not because we want to - to provide our analytics. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies."
    },
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
        this.$ga.enable();
        this.$ga.page(this.$route.fullPath);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
        this.$ga.disable();
      }
    }
  }
};
</script>
<style></style>
