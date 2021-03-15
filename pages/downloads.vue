<template>
  <div>
    <BannerTitle
      title="Downloads"
      description="Our mission should be your mission."
    />

    <b-container>
      <b-card>
        <b-card-body>
          <b-card-title>
            <h2 class="text-center">Download Deep State Defender VPN app for Windows</h2>
          </b-card-title>
        </b-card-body>
        <b-card-text class="text-center">
<b-button href="https://dsdefender.com/windows/DSD_VPN_Setup.msi" variant="success">Download</b-button>

<!--           <a
            href="https://dsdefender.com/windows/DSD_VPN_Setup.msi"
            download="DSD_VPN_Setup.msi"
            >Download Here</a
          > -->
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
        head: {
    title: 'Download Deep State Defender',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Deep State Defender for Windows, DS Defender for Windows'
      }
    ],
  },
  layout: "pages",
  data() {
    return {
      // url: 'https://dsdefender.com/windows/DSD_VPN_Setup.msi'
    };
  },

  methods: {
    onClick() {
      axios({
        url: "https://dsdefender.com/windows/DSD_VPN_Setup.msi",
        // url: 'https://dsdefender.com/favicon.png',
        method: "GET",
        responseType: "blob"
      }).then(response => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileURL;
        fileLink.setAttribute("download", "DSD_VPN.msi.zip");
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  }
};
</script>

<style scoped>
.title-col {
  width: 80%;
}
.action-col {
  max-width: 250px;
}

.card {
    background: transparent;
}
</style>
