<template>
  <div class="container-fluid staff">
    <div class="container">
      <div class="row">
        <div class="staff-title f-RobotoMono">
          Our Customers Love Us!
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mx-auto pb-5">
          <div class="col-10 col-md-12 d-flex pb-5">
            <div class="staff-imagewrapper">
              <img :src="require('../assets/staff-mark1.png')" alt="Deep State Defender Testimonial 1" class="staff-mark">
              <img :src="require('../assets/staff-face1.png')" alt="Deep State Defender Testimonial 2" class="w-100 position-relative">
            </div>
            <div class="staff-name">
              beautifullion765
            </div>
          </div>
          <div class="staff-words">
            “Deep State Defender’s blocking tools are awesome! 
            The app is easy to use and you can select your blocking options from a quick pop-up list. 
            Imagine reading a full article on a news site without ads getting in the way or being tracked by cookies. 
            I love it.”
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mx-auto pb-5">
          <div class="col-10 col-md-12 d-flex pb-5">
            <div class="staff-imagewrapper">
              <img :src="require('../assets/staff-mark2.png')" alt="Deep State Defender Testimonial 3" class="staff-mark">
              <img :src="require('../assets/staff-face2.png')" alt="Deep State Defender Testimonial 4" class="w-100 position-relative">
            </div>
            <div class="staff-name">
              Eat Bullets
            </div>
          </div>
          <div class="staff-words">
            “My searches are relevant and the interface is easy to use. 
            I am more and more concerned with my privacy online and I feel like DS Defender truly understands this need for protection. 
            I have my whole family using this app now.”
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 mx-auto pb-5">
          <div class="col-10 col-md-12 d-flex pb-5">
            <div class="staff-imagewrapper">
              <img :src="require('../assets/staff-mark3.png')" alt="Deep State Defender Testimonial 5" class="staff-mark">
              <img :src="require('../assets/staff-face3.png')" alt="Deep State Defender Testimonial 6" class="w-100 position-relative">
            </div>
            <div class="staff-name">
              Gabriel Groomer
            </div>
          </div>
          <div class="staff-words">
            “Deep State Defender is fast and private. 
            I downloaded it and started using it right away. 
            Being able to turn on the VPN with one tap and access the internet with the built-in private browser is my favorite part and makes me feel ultra-secure.”
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: "staff",
  data() {
    return {
    };
  },
  methods: {   
  },
  beforeMount() {
  }
};
</script>

<style scoped>
.staff {
}

.staff-title {
  margin: 4rem 0 3rem;
  font-weight: 500;
  font-size: 30px;
  line-height: 48px;
  color: #272727;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
}

.staff-imagewrapper {
  width: 65px;
  height: 65px;
}

.staff-mark {
  position: absolute;
  left: -30px;
  top: -75px;
}

.staff-name {
  color: #272727;
  margin: auto;
  font-family: RobotoMono;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  overflow: hidden
}

.staff-words {
  font-family: Roboto;
  font-size: 20px;
  line-height: 140%;  
  color: #272727;
}

</style>