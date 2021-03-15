<template>
  <div class="inner-layout">
    <div class="header f-Montserrat">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
          <NuxtLink to="/" class="navbar-brand">
            <div class="header-logo mt-5">
              <img
                :src="require('../assets/logo.svg')"
                alt="DS Defender VPN"
              />
            </div>            
          </NuxtLink>
          <button @click="open = !open" class="navbar-toggler" type="button">
            <span class="icon icon-menu"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNav"
            :class="{ show: open }"
          >
            <button
              @click="open = !open"
              class="close-btn navbar-toggler"
              type="button"
            >
              <span class="icon icon-close"></span>
            </button>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link p-3">
                  About
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/articles" class="nav-link p-3">
                  Stay INFORMED
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <Nuxt />

    <div class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-auto logo">
            <NuxtLink to="\" class="footer-brand">
              <div class="footer-logo mr-4">
                <img
                  :src="require('../assets/vpn_logo.png')"
                  alt="Deep State Defender VPN"
                />
              </div>
              <div class="footer-title">Deep State Defender VPN</div>
            </NuxtLink>
          </div>
          <div class="col-lg">
            <ul
              class="navbar-nav m-auto flex-row justify-content-center flex-wrap"
            >
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link px-3">
                  About
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/articles" class="nav-link px-3">
                  Stay INFORMED
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/privacy" class="nav-link px-3">
                  Privacy
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/terms" class="nav-link px-3">
                  Terms of Service
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-lg-auto mt-3 mt-lg-0 text-lg-right text-center">
            <p class="m-0">&copy; Blindcut, LLC 2020. All rights recieved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Cookie from "@/components/Cookie.vue";

export default {
  components: {
    // Cookie
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="scss" scoped>

.header{
  background: linear-gradient(0deg, rgba(184, 223, 242, 0.2), rgba(184, 223, 242, 0.2)), #FFFFFF;

  .navbar .navbar-collapse .nav-link {
    @media screen and (max-width: 991px) {
      color: white;
    }
  }
}

.navbar .navbar-collapse .close-btn {
  color: white;
}

.navbar {
  padding: 30px 10px;
  display: flex;
  .navbar-toggler {
    color: #272727;
  }
  .navbar-brand {
    position: absolute;
    left: 50%;
    margin-left: -29px !important;  /* 50% of your logo width */
    display: block;

    .header-logo {
      flex-shrink: 0;
      img {
        max-width: 140px;
      }
    }
    .header-title {
      flex-shrink: 1;
      font-weight: 600;
      font-size: 30px;
      line-height: 60px;
      color: #ffffff;
    }
  }
  .nav-item {
    .nav-link {
      color: #000;
      font-size: 20px;
      font-weight: 600;
      line-height: 20px;
      &:hover {
        color: #44CCFF;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 10px 0;
    .navbar-brand {
      max-width: 70%;

      .header-logo {
        flex-shrink: 0;
        flex-shrink: 1;
        img {
          max-width: 48px;
        }
      }
      .header-title {
        font-size: 16px;
        white-space: pre-wrap;
        line-height: normal;
      }
    }
    .navbar-collapse {
      background: #323335;
      position: fixed;
      top: 40px;
      right: 20px;
      left: 20px;
      border-radius: 8px;
      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
  }
}
.footer {
  background: #121314;
  color: #fff;
  padding: 20px 0;
  margin-top: auto;
  .footer-brand {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    .footer-logo {
      flex-shrink: 0;
      img {
        max-width: 30px;
      }
    }
    .footer-title {
      flex-shrink: 1;
      font-weight: 600;
      font-size: 16px;
      line-height: 60px;
      color: white;

      &:hover {
        color: #73FD05;
      }
    }
  }

  .nav-item {
    a {
      color: white;
      &:hover {
        color: #73FD05;
      }
    }
  }

  @media (max-width: 991px) {
    .footer-brand {
      justify-content: center;
    }
  }
}
</style>