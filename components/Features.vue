<template>
  <div class="container-fluid features">
    <div class="container">
      <div class="row">
        <div class="col-md-12 features-title f-RobotoMono">
          It's time to take back your privacy.
        </div>
      </div>
      <!--  -->

      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <H2 class="heading1">
            The VPN
          </H2>
          <H3 class="heading2">
            No account needed! Download, connect and go!
          </H3>
          <H4 class="explanation">
            No account requirement means the DS Defender VPN has zero access to any logs, history or browser activity. We won't ask for your email address because we don't want to know anything about you and that's the way it should be.
          </H4>
          <div class="d-flex flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
              target="_new"
              class="mr-4 mb-2 d-flex app-btn-black"
              >
              <img
                :src="require('../assets/footer-google.png')"
                role="button"                
                alt="google button"
              />
            </a>
            <a 
              href="https://apps.apple.com/us/app/id1501838199" 
              target="_new" 
              class="mb-2 d-flex app-btn-black"
            >
              <img
                class="d-flex"
                :src="require('../assets/footer-app.png')"
                role="button"
                alt="apple button"
              />
            </a>
          </div>
        </div>
        <div class="col-12 col-md-6 text-right my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-noaccount.png')"
            alt="Deep State Defender No Account Needed"
            class="col-12 col-lg-10"
          />
        </div>
      </div>

      <div class="row py-5">
        <div class="col-12 col-md-6 text-left my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-browser.png')"
            alt="Deep State Private Browser Image"
            class="col-12 col-lg-10"
          />
        </div>

        <div class="col-12 col-md-6 pb-5 my-auto">
          <H2 class="heading1">
            The Browser
          </H2>
          <H3 class="heading2">
            What makes our VPN different than ALL the others? Effortless
            privacy.
          </H3>
          <H4 class="explanation">
            One tap opens the DS Defender Browser. Use the VPN and browser together for the fastest, most secure experience. Activate more privacy options in the browser settings for ultimate protection.
          </H4>
          <div class="d-flex flex-wrap">
            <a
              href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
              target="_new"
              class="mr-4 mb-2 d-flex app-btn-green"
              >
              <img
                :src="require('../assets/footer-google.png')"
                role="button"                
                alt="google button"
              />
            </a>
            <a 
              href="https://apps.apple.com/us/app/id1501838199" 
              target="_new" 
              class="mb-2 d-flex app-btn-green"
            >
              <img
                class="d-flex"
                :src="require('../assets/footer-app.png')"
                role="button"
                alt="apple button"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <H2 class="heading1"> Wireguard<span class="copyright">®</span> </H2>
          <H3 class="explanation">
            DS Defender VPN is cleverly designed with the Wireguard® protocol for incredibly speedy VPN connections.
          </H3>
          <div>
            <b-dropdown class="ds-dropdown-outline" text="TRY NOW" variant="outline-primary">
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPhone</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPad</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >Mac</b-dropdown-item
              >
              <b-dropdown-item
                href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
                >Android</b-dropdown-item
              >
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>Windows</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="col-12 col-md-6 text-left pb-5 my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-wireguard.png')"
            alt="Deep State Wireguard VPN"
            class="col-12 col-lg-10"
          />
        </div>
      </div>
      
      <!--  -->
      <div class="row py-5">
        <div class="col-12 col-md-6 text-left pb-5 my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-freeamount.png')"
            alt="Deep State Defender Features"
            class="col-12 col-lg-10"
          />
        </div>
        <div class="col-12 col-md-6 pb-5 my-auto">
          <H2 class="heading1">
            You get 500MB for FREE!
          </H2>
          <H3 class="explanation">
            That's a generous amount of data. We also give you access to the same server locations as Premium users. There is no time limit or trial period with sneaky fees. When you run out of the 500 MB, you simply run out! We hope by then that you love us so much, you upgrade to the Premium subscription!
          </H3>
          <div>
            <b-dropdown text="TRY NOW" variant="primary" class="ds-dropdown-primary">
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPhone</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPad</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >Mac</b-dropdown-item
              >
              <b-dropdown-item
                href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
                >Android</b-dropdown-item
              >
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>Windows</b-dropdown-item>
            </b-dropdown>

            <!-- <b-button class="trynow">TRY NOW</b-button> -->
          </div>
        </div>
      </div>

      <div class="row py-5">
        <div class="col-12 col-md-6 pb-5 my-auto">
          <div class="heading1">
            Go Premium!
          </div>
          <div class="explanation">
            Upgrade to Premium and get:<br /><br />
            • Unlimited data<br />
            • Access to all server locations <br />
            • Early release locations <br />
            • On Demand: choose WI-FI, Cellular or both for VPN coverage <br />
          </div>
          <div>            
            <b-dropdown class="ds-dropdown-outline" text="GO PREMIUM" variant="outline-primary">
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPhone</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >iPad</b-dropdown-item
              >
              <b-dropdown-item
                href="https://apps.apple.com/us/app/id1501838199"
                target="new"
                >Mac</b-dropdown-item
              >
              <b-dropdown-item
                href="https://play.google.com/store/apps/details?id=com.blindcut.dsdefender.vpn"
                >Android</b-dropdown-item
              >
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>Windows</b-dropdown-item>
            </b-dropdown>

            <!-- <b-button class="gopremium">GO PREMIUM</b-button> -->
          </div>
        </div>
        <div class="col-12 col-md-6 text-right my-auto d-none d-md-block">
          <img
            :src="require('../assets/features-premium.png')"
            alt="Deep State Defender Premium"
            class="col-12 col-lg-10"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "features",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.features {
  padding: 90px 0;
}

.features-title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0.01em;  
  width: 100%;
  margin-bottom: 5rem;
  text-align: center;
}

.heading1 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #272727;
  margin-bottom: 2.5rem;
}

.heading2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #272727;
  margin-bottom: 2.5rem;
  font-weight: 500; 
  text-transform: uppercase;
}

.explanation {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #272727;
  margin-bottom: 5rem;
}

.copyright {
  font-size: 24px;
  vertical-align: top;
  line-height: 150%;
}

.trynow {
  font-family: Montserrat;
  background: transparent;
  width: 170px;
  height: 50px;
  border-radius: 8px;
  border: solid 1px white;
  font-weight: bold;
  font-size: 16px;
}

.gopremium {
  font-family: Montserrat;
  width: 170px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  color: #1d1d1d;
  background: #73fd05;
  border-radius: 8px;
  border: solid 0;
}
</style>
