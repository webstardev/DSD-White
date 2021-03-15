<template>
  <div class="container-fluid video">
    <div class="container">
      <div class="row">
        <div class="w-100 text-center">
          <H1 class="video-title">
            Deep State Defender VPN:<br />
            One tap and you are protected!
          </H1>
          <div class="embed-responsive embed-responsive-16by9">
             <video controls autoplay muted>
              <source src="../assets/dsd_promo_1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "video",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<style scoped>
.video {  
  padding-bottom: 5rem;
}

.video-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;  
  display: flex;  
  justify-content: center;  
  color: #323335;
  margin-bottom: 5rem;
}
</style>
