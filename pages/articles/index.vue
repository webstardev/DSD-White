<template>
  <div class="articles-page">
    <BannerTitle
      title="Get your head out of the sand"
      description="Stay informed and learn ways to protect your privacy"
    />
    <b-container v-if="!loading">
      <div class="small-container">
        <template v-for="(post, index) in posts">
          <div class="card s4 m4"  :key="index" v-if="index>= perPage * (currentPage-1) && index <perPage * (currentPage)">
            <div class="card-body">
              <div class="card-title mb-4">
                <div class="caption">
                  {{ getPostDate(post.date) }}
                </div>
                <h2>
                  <router-link
                    :to="{ name: 'Post', params: { slug: post.slug } }"
                  >
                    {{ post.title.rendered }}
                  </router-link>
                </h2>
              </div>
              <img
                class="card-img-top mb-4"
                v-if="post._embedded && post._embedded['wp:featuredmedia']"
                :src="post._embedded['wp:featuredmedia'][0].source_url"
              />
              <div
                class="card-text f-Roboto"
                v-html="post.excerpt ? post.excerpt.rendered : ''"
              ></div>

              <NuxtLink
                :to="'/articles/' + post.slug"
                class="card-link btn btn-outline f-Montserrat read-more"
              >
                READ MORE
                <span class="icon ml-2 icon-right-arrow"></span>
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>

      <div class="overflow-auto mt-5">
        <pagination 
          class="post-pagination"
          :records="posts.length" 
          v-model="currentPage" 
          :per-page="perPage" 
          @paginate="callbackPagniate"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";

export default {
  head: {
    title: "Deep State Defender Articles",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Get your head out of the sand!"
      }
    ]
  },
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter 
  },
  layout: "default",
  data() {
    return {            
      posts: [],
      loading: true,
      perPage: 5,
      currentPage: 1,
    };
  },
  methods: {
    // Get Recent Posts From WordPress Site
    getPosts() {
      this.loading = true;
      axios
        .get("https://wp.dsdefender.com/wp-json/wp/v2/posts", {
          params: {
            context: "view",
            _embed: true,
          }
        })
        .then(response => {
          this.loading = false;
          this.posts = [ ...response.data]
        })
        .catch(error => {
          this.loading = false;
        })
    },
    callbackPagniate: function(page) {
      this.currentPage = page;      
    },

    getPostDate(date) {
      return moment(date).format("lll");
    }
  },
  created() {
    this.getPosts();    
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.articles-container {
  padding-top: 70px;
  padding-bottom: 80px;
  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 40px;
  }
}

.read-more {
  align-items: center;
}

.card {
  background: transparent;
  border: none;
  .card-title {
    color: #fff;
    h2 {
      font-size: 36px;
    }
    @media (max-width: 991px) {
      h2 {
        font-size: 24px;
      }
    }
    a:hover {
      color: #44CCFF;
    }
    .caption {
      color: rgba(39,39,39,0.5);
      font-size: 14px;
    }
  }
  .card-img-top {
    width: 100%;
    border-radius: 8px;
    height: 289px;
    object-fit: cover;
  }
  .card-text {
    color: #272727;
  }
  .card-link {
    display: inline-flex;
    .icon {
      vertical-align: middle;
    }
  }
}
</style>

<style lang="scss">
  .post-pagination {
    display: flex;
    justify-content: center;  
    .VuePagination__count {
      display: none;
    }      
    .page-link {
      color: white;
      background-color:  #121314;
      &.active {
        color: #73fd05;
      }
    }
    .page-item {
      &.disabled {
        .page-link {
          background-color: rgb(29, 29,29);
        }
      }
    }
  }
</style>
