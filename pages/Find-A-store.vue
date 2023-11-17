<template>
  <div class="page-content">
    <div class="section-full find-a-store">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="find-a-left">
              <div class="wt-media">
                <img
                  src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/background/map.png"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="find-a-right">
              <div class="find-a-content">
                <div class="find-a-tilte">Our Locations</div>
                <p class="find-a-text">Do you need to schedule service today</p>
                <span class="find-a-book">BOOK ON-LINE</span>
                <span class="find-a-easy">It’s easy as 123</span>
                <form name="redirect">
                  <div class="select-box">
                    <select v-model="selection">
                      <option value="">Select your location</option>
                      <option :value="'/alabama'">Alabama</option>

                      <option :value="'/connecticut'">Connecticut</option>

                      <option :value="'/florida'">Florida</option>

                      <option :value="'/georgia'">Georgia</option>

                      <option :value="'/new-york'">New York</option>

                      <option :value="'/north-carolina'">North Carolina</option>

                      <option :value="'/southcarolina'">South Carolina</option>

                      <option :value="'/tennessee'">Tennessee</option>

                      <option :value="'/texas'">Texas</option>
                    </select>
                  </div>
                  <div class="m-t30">
                    <a
                      href="#"
                      class="site-button gray radius-xl text-uppercase"
                      @click.prevent="WinOpen()"
                      >Search Location</a
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindAstore',
  data: () => {
    return {
      selection: '',
      basePath: process.env.baseUrl,
    }
  },
  methods: {
    WinOpen() {
      // console.log(this.$route);
      this.$router.push({
        path: this.selection,
        params: { state: this.selection },
      })
      // console.log(this.$route);
      // console.log(this);
    },
  },
}
</script>

<style></style>
