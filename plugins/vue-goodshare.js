import Vue from 'vue'
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";

Vue.component('VueGoodshareFacebook', VueGoodshareFacebook);
Vue.component('VueGoodshareTwitter', VueGoodshareTwitter);
Vue.component('VueGoodshareReddit', VueGoodshareReddit);

Vue.use(VueGoodshareFacebook);
Vue.use(VueGoodshareTwitter);
Vue.use(VueGoodshareReddit);