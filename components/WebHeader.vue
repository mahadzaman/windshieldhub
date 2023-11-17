<template>
  <header class="site-header header-style-1 nav-wide">
    <div class="sticky-wrapper">
      <div class="sticky-header main-bar-wraper is-fixed">
        <div class="main-bar bg-white">
          <div class="container">
            <div class="logo-header mostion">
              <a href="#">
                <img
                  src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/main_logo.svg"
                  width="281"
                  height="68"
                  alt=""
                />
              </a>
            </div>

            <!-- NAV Toggle Button -->
            <button type="button" class="navbar-toggle collapsed nav-open-btn">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <!-- ETRA Nav -->
            <div class="extra-nav">
              <div class="extra-cell">
                <NuxtLink to="/contact-us" class="site-button radius-xl"
                  >Contact Us</NuxtLink
                >
              </div>
            </div>

            <!-- MAIN Vav -->
            <div class="header-nav">
              <span class="header-inr">
                <div class="nav-logo-part">
                  <!-- Site logo -->
                  <div class="logo-header mostion">
                    <a href="#">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/main_logo.svg"
                        width="281"
                        height="68"
                        alt=""
                      />
                    </a>
                  </div>
                  <!-- Close Button -->
                  <button
                    type="button"
                    class="navbar-toggle collapsed nav-close-btn"
                  >
                    <i class="fa fa-close font-20"></i>
                  </button>
                </div>

                <div class="menu-main-menu-container">
                  <ul class="nav navbar-nav">
                    <li
                      id="menu-item-28"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-home
                        page_item page-item-5
                        current_page_item
                        menu-item-28
                      "
                    >
                      <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li
                      id="menu-item-26"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-26
                      "
                    >
                      <NuxtLink to="/services">Our Services</NuxtLink>
                    </li>
                    <li
                      id="menu-item-25"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-25
                      "
                    >
                      <NuxtLink to="/about-us">About Us</NuxtLink>
                    </li>
                    <li
                      id="menu-item-24"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-24
                      "
                    >
                      <NuxtLink to="/find-a-store">Find A Store</NuxtLink>
                    </li>
                    <li
                      id="menu-item-80"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-80
                      "
                    >
                      <NuxtLink to="/quote">Quote</NuxtLink>
                    </li>
                    <li
                      id="menu-item-491"
                      class="
                        menu-item
                        menu-item-type-post_type
                        menu-item-object-page menu-item-491
                      "
                    >
                      <NuxtLink to="/reviews">Reviews</NuxtLink>
                    </li>
                  </ul>
                </div>
                <div class="nav-info-part">
                  <div class="nav-info-inr">
                    <!-- Phone no -->
                    <div
                      class="
                        wt-icon-box-wraper
                        left
                        p-tb15 p-lr15
                        bdr-1 bdr-gray
                        m-tb20
                        img-rounded
                      "
                    >
                      <div class="icon-sm text-primary radius">
                        <span class="icon-cell text-primary"
                          ><i class="fa fa-phone"></i
                        ></span>
                      </div>
                      <div class="icon-content">
                        <h3 class="m-b5 wt-tilte">Give us a call anytime</h3>
                        <h2 class="m-t5 m-b0">1-800-711-1669</h2>
                      </div>
                    </div>
                    <!-- Close Button -->
                    <a href="#" class="site-button radius-xl btn-block"
                      >Get a quote</a
                    >
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'WebHeader',
  data: () => {
    return {}
  },
}
</script>
