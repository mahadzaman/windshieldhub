<template>
  <div class="page-content owl-css">
    <template v-if="!step2">
      <div class="section-full apply-banner-wraper">
        <div
          class="section-content apply-banner"
          style="
            background-image: url(https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/background/apply-banner.jpg);
            background-repeat: no-repeat;
          "
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="apply-banner-l-part p-t70 text-white">
                  <h2 class="banner-font">Earn bonus based</h2>
                  <h1 class="banner-font">on performance</h1>
                  <p class="font-18">
                    We are a nationwide auto glass company is seeking a
                    sub-contractor in your area to pick up extra jobs in
                    addition to the jobs you currently have on a daily basis.
                  </p>
                  <Form
                    class="apply-form-top has-validation-callback"
                    method="post"
                    id="apply_form_step1"
                    @submit="step1Submit"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-user"></i
                            ></span>
                            <Field
                              class="form-control"
                              type="text"
                              v-model="firstName"
                              name="f_name"
                              placeholder="First Name"
                              :rules="isRequired"
                            />
                          </div>
                          <ErrorMessage name="f_name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon"
                              ><i class="fa fa-user"></i
                            ></span>
                            <Field
                              class="form-control"
                              type="text"
                              v-model="lastName"
                              name="l_name"
                              placeholder="Last Name"
                              :rules="isRequired"
                            />
                          </div>
                          <ErrorMessage name="l_name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="fa fa-envelope"></i>
                            </span>
                            <Field
                              class="form-control"
                              :rules="validateEmail"
                              v-model="emailAddress"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="fa fa-map-marker"></i>
                            </span>
                            <Field
                              class="form-control"
                              type="text"
                              v-model="zipCode"
                              name="zip_code"
                              placeholder="Zip Code"
                              :rules="isRequired"
                            />
                          </div>
                          <ErrorMessage name="zip_code" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group form-inline iam-list">
                          <label class="font-18 p-r15 m-b0">I'm a: </label>
                          <div class="radio">
                            <input
                              type="radio"
                              id="technician"
                              value="technician"
                              v-model="jobType"
                              checked=""
                            />
                            <label for="technician">Technician</label>
                          </div>
                          <div class="radio">
                            <input
                              type="radio"
                              id="salesMan"
                              value="salesMan"
                              v-model="jobType"
                            />
                            <label for="salesMan">Salesman</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button
                          type="submit"
                          class="
                            m-b15
                            site-button
                            radius-xl
                            text-uppercase text-center
                          "
                          style="display: block; width: 100%"
                        >
                          <span
                            class="
                              site-button-inr
                              p-lr20
                              font-20 font-weight-500
                            "
                            >Get Started
                          </span>
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 p-t20">
                <div class="apply-banner-r-part text-right">
                  <div class="wt-media">
                    <img
                      src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/apply-banner-pic1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="section-full p-t60 apply-services"
        style="
          background-image: url(https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/apply-circle.png);
          background-position: center bottom;
          background-repeat: no-repeat;
        "
      >
        <div class="container">
          <div
            class="section-content text-center animate fadeInUp animated"
            data-animate="fadeInUp"
            data-duration="1.0s"
            data-delay="0.1s"
            data-offset="100"
            style="
              animation-duration: 1s;
              animation-delay: 0.1s;
              visibility: visible;
            "
          >
            <div class="apply-services-block">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="wt-icon-box-wraper center p-a30">
                    <div
                      class="icon-xl apply-s1"
                      style="
                        background-image: url(https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/apply-pic1.png);
                        background-repeat: no-repeat;
                        background-position: left bottom;
                      "
                    >
                      <span class="icon-cell"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s36.png"
                      /></span>
                    </div>
                    <div class="icon-content">
                      <h3 class="wt-tilte">Great Pay</h3>
                      <p>Earn Hourly or per installation</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="wt-icon-box-wraper center p-a30 ap-block-2">
                    <div
                      class="icon-xl apply-s1"
                      style="
                        background-image: url(https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/apply-pic2.png);
                        background-repeat: no-repeat;
                        background-position: left bottom;
                      "
                    >
                      <span class="icon-cell"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s37.png"
                      /></span>
                    </div>
                    <div class="icon-content">
                      <h3 class="wt-tilte">Flexible Schedule</h3>
                      <p>Monday to friday</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="wt-icon-box-wraper center p-a30">
                    <div
                      class="icon-xl apply-s1"
                      style="
                        background-image: url(https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/apply-pic2.png);
                        background-repeat: no-repeat;
                        background-position: left bottom;
                      "
                    >
                      <span class="icon-cell"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s38.png"
                      /></span>
                    </div>
                    <div class="icon-content">
                      <h3 class="wt-tilte">Easy Payments</h3>
                      <p>Paid weekly direct</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wt-media text-center">
                <div class="inline-block">
                  <img
                    src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/apply-services.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="section-full bg-img-fix p-t80 p-b70 apply-testimonial"
        style="background-color: #dbedf4"
      >
        <div class="container-fluid">
          <!-- TITLE START -->
          <div class="section-head text-center">
            <h1>What people are saying</h1>
          </div>
          <!-- TITLE START -->

          <!-- TESTIMONIAL 2 START -->
          <div class="section-content">
            <div class="owl-carousel testimonial-two">
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Jackie Mahoney</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      I couldn't be happier with the work I had done today with
                      Windshield Hub. Nick was courteous, knowledgeable,
                      informative, and extremely efficient. I needed my
                      windshield replaced and it looked 10 times better than
                      what I had gotten done from the so called "leading" brand.
                      I will definitely recommend them to anyone and everyone in
                      need of their ser ...
                    </p>
                    <h5 class="testimonial-position">Hampton Bays, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic2.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Sami Nicosia</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p></p>
                    <p>
                      I'm blown away by this company. I scheduled my appointment
                      late last night, and had my windshield replaced in less
                      than 24hrs. They even somehow managed to keep the
                      registration and inspection stickers intact!! Not to
                      mention the fact that they were able to replace the
                      weatherstripping around the windshield (hard to find for a
                      1991 Nissan 240sx!) ...
                    </p>
                    <h5 class="testimonial-position">Manorville, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic1.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Albert Perez</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      My installation was flawless I order online and 2 hours
                      later my windshield was installed, thank you guys!!
                    </p>
                    <h5 class="testimonial-position">Corona, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic3.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Jackie Mahoney</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      I couldn't be happier with the work I had done today with
                      Windshield Hub. Nick was courteous, knowledgeable,
                      informative, and extremely efficient. I needed my
                      windshield replaced and it looked 10 times better than
                      what I had gotten done from the so called "leading" brand.
                      I will definitely recommend them to anyone and everyone in
                      need of their ser ...
                    </p>
                    <h5 class="testimonial-position">Hampton Bays, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic2.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Sami Nicosia</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p></p>
                    <p>
                      I'm blown away by this company. I scheduled my appointment
                      late last night, and had my windshield replaced in less
                      than 24hrs. They even somehow managed to keep the
                      registration and inspection stickers intact!! Not to
                      mention the fact that they were able to replace the
                      weatherstripping around the windshield (hard to find for a
                      1991 Nissan 240sx!) ...
                    </p>
                    <h5 class="testimonial-position">Manorville, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic1.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Albert Perez</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      My installation was flawless I order online and 2 hours
                      later my windshield was installed, thank you guys!!
                    </p>
                    <h5 class="testimonial-position">Corona, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic3.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Jackie Mahoney</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      I couldn't be happier with the work I had done today with
                      Windshield Hub. Nick was courteous, knowledgeable,
                      informative, and extremely efficient. I needed my
                      windshield replaced and it looked 10 times better than
                      what I had gotten done from the so called "leading" brand.
                      I will definitely recommend them to anyone and everyone in
                      need of their ser ...
                    </p>
                    <h5 class="testimonial-position">Hampton Bays, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic2.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Sami Nicosia</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p></p>
                    <p>
                      I'm blown away by this company. I scheduled my appointment
                      late last night, and had my windshield replaced in less
                      than 24hrs. They even somehow managed to keep the
                      registration and inspection stickers intact!! Not to
                      mention the fact that they were able to replace the
                      weatherstripping around the windshield (hard to find for a
                      1991 Nissan 240sx!) ...
                    </p>
                    <h5 class="testimonial-position">Manorville, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic1.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimonial-2 text-center">
                  <div class="testimonial-text radius-xl">
                    <h2 class="testimonial-name m-tb15">Albert Perez</h2>
                    <span class="fa fa-quote-left"></span>
                    <span class="fa fa-quote-right"></span>
                    <p>
                      My installation was flawless I order online and 2 hours
                      later my windshield was installed, thank you guys!!
                    </p>
                    <h5 class="testimonial-position">Corona, NY</h5>
                  </div>
                  <div class="testimonial-detail clearfix">
                    <div class="testimonial-pic radius shadow">
                      <img
                        src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/pic3.jpg"
                        width="100"
                        height="100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-full p-t80">
        <div class="container">
          <!-- TITLE START -->
          <div class="section-head text-center">
            <div class="wt-icon-box-wraper center">
              <div class="icon-lg text-primary m-b20">
                <span class="icon-cell text-primary"
                  ><img
                    src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/notes.png"
                    alt=""
                /></span>
              </div>
            </div>
            <h1>
              What do i Need to
              <span class="display-block text-primary font-weight-700 font-45"
                >GET STARTED?</span
              >
            </h1>
          </div>
          <!-- TITLE START -->

          <!-- TESTIMONIAL 2 START -->
          <div class="section-content">
            <div class="row what-do-need p-t30">
              <div class="row">
                <div class="col-md-4 col-sm-4 m-t40">
                  <div
                    class="
                      wt-icon-box-wraper
                      left
                      bg-white
                      p-tb20 p-lr15
                      bdr-1 bdr-gray
                      m-b30
                    "
                  >
                    <div class="icon-md text-primary radius">
                      <span class="icon-cell text-primary"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s27.png"
                          alt=""
                      /></span>
                    </div>
                    <div class="icon-content text-uppercase">
                      <p class="m-b0">
                        Must have a minimum of 2 year of experience
                      </p>
                    </div>
                  </div>
                  <div
                    class="
                      wt-icon-box-wraper
                      left
                      bg-white
                      p-tb20 p-lr15
                      bdr-1 bdr-gray
                      m-b30
                    "
                  >
                    <div class="icon-md text-primary radius">
                      <span class="icon-cell text-primary"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s39.png"
                          alt=""
                      /></span>
                    </div>
                    <div class="icon-content text-uppercase">
                      <p class="m-b0">Valid driver’s licence</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div
                    class="wt-media get-started animate fadeInUp animated"
                    data-animate="fadeInUp"
                    data-duration="1.0s"
                    data-delay="0.1s"
                    data-offset="100"
                    style="
                      animation-duration: 1s;
                      animation-delay: 0.1s;
                      visibility: visible;
                    "
                  >
                    <img
                      src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/get-started.png"
                    />
                  </div>
                </div>
                <div class="col-md-4 col-sm-4 m-t40">
                  <div
                    class="
                      wt-icon-box-wraper
                      left
                      bg-white
                      p-tb20 p-lr15
                      bdr-1 bdr-gray
                      m-b30
                    "
                  >
                    <div class="icon-md text-primary radius">
                      <span class="icon-cell text-primary"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s40.png"
                          alt=""
                          style="height: auto"
                      /></span>
                    </div>
                    <div class="icon-content text-uppercase">
                      <p class="m-b0">Must have a working van</p>
                    </div>
                  </div>
                  <div
                    class="
                      wt-icon-box-wraper
                      left
                      bg-white
                      p-tb20 p-lr15
                      bdr-1 bdr-gray
                      m-b30
                    "
                  >
                    <div class="icon-md text-primary radius">
                      <span class="icon-cell text-primary"
                        ><img
                          src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s41.png"
                          alt=""
                      /></span>
                    </div>
                    <div class="icon-content text-uppercase">
                      <p class="m-b0">Must have own tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <form id="apply_form_step2" action="" method="post">
        <div
          class="section-full ws-technician-page-wrap p-t80 p-b50"
          style="background-color: #f3f6f8"
        >
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div id="errorTxt"></div>
                <div
                  class="wt-accordion acc-default ws-custom-accord"
                  id="accordion1"
                >
                  <div class="panel wt-panel">
                    <div class="acod-head acc-actives">
                      <h6 class="acod-title text-uppercase acc-actives">
                        <a
                          data-toggle="collapse"
                          href="#collapseOne1"
                          data-parent="#accordion1"
                          aria-expanded="true"
                        >
                          <span class="accord-num">1</span>
                          <span class="indicator"
                            ><i class="fa fa-angle-down"></i
                          ></span>
                          Basic Info
                        </a>
                      </h6>
                    </div>

                    <div
                      id="collapseOne1"
                      class="acod-body collapse show"
                      aria-expanded="true"
                      data-parent="#accordion1"
                    >
                      <div class="acod-content p-lr30">
                        <div class="row">
                          <div class="col-md-12">
                            <h4 class="accod-title-bold">
                              <i class="fa fa-user-circle-o text-primary"></i>
                              Personal Details
                            </h4>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label>Phone Number</label>
                              <input
                                type="text"
                                name="personal_phone_no"
                                data-validation="required"
                                id="is_phone_number"
                                placeholder="(___)___-___"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <h4 class="accod-title-bold">
                              <i class="fa fa-envelope-o text-primary"></i>
                              Mailing Address
                            </h4>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label>Street Address</label>
                              <input
                                type="text"
                                name="mailing_phone_no"
                                data-validation="required"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label>Apt # ( Optional)</label>
                              <input
                                type="text"
                                name="mailing_app_no"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6">
                            <div class="form-group">
                              <label>City</label>
                              <input
                                type="text"
                                name="mailing_city"
                                data-validation="required"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                          <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="form-group">
                              <label>State</label>
                              <input
                                type="text"
                                name="mailing_state"
                                data-validation="required"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                          <div class="col-md-3 col-sm-3 col-xs-6">
                            <div class="form-group">
                              <label>Zip Code</label>
                              <input
                                type="text"
                                name="mailing_zip_code"
                                data-validation="required"
                                class="form-control form-input-line"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="panel wt-panel">
                    <div class="acod-head">
                      <h6 class="acod-title text-uppercase">
                        <a
                          data-toggle="collapse"
                          href="#collapseTwo1"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <span class="accord-num">2</span>
                          <span class="indicator"
                            ><i class="fa fa-angle-down"></i
                          ></span>
                          WORK EXPERIENCE
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseTwo1"
                      class="acod-body collapse"
                      aria-expanded="false"
                      data-parent="#accordion1"
                    >
                      <div class="acod-content p-lr30">
                        <ul class="ws-work-expi-list">
                          <li>
                            <div class="ws-work-expi-left">
                              <strong
                                >Do you have professional experience installing
                                auto glass?</strong
                              >
                            </div>
                            <div class="ws-work-expi-right">
                              <div class="form-inline">
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    id="any11"
                                    name="is_professional_exp"
                                    data-validation="required"
                                    value="yes"
                                    type="radio"
                                  />
                                  <label for="any11">Yes</label>
                                </div>
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    name="is_professional_exp"
                                    id="any111"
                                    value="no"
                                    type="radio"
                                    checked=""
                                  />
                                  <label for="any111">No</label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="ws-work-expi-left">
                              <strong
                                >How many years of experience do you
                                have?</strong
                              >
                            </div>
                            <div class="ws-work-expi-right">
                              <input
                                name="no_of_years_exp"
                                data-validation="required"
                                type="text"
                                class="form-control"
                              />
                            </div>
                          </li>
                          <li>
                            <div class="ws-work-expi-left">
                              <strong>Are you a certified technician?</strong>
                            </div>
                            <div class="ws-work-expi-right">
                              <div class="form-inline">
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    type="radio"
                                    value="yes"
                                    id="any22"
                                    name="is_certified_technician"
                                  />
                                  <label for="any22">Yes</label>
                                </div>
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    type="radio"
                                    value="no"
                                    id="any222"
                                    name="is_certified_technician"
                                    checked=""
                                  />
                                  <label for="any222">No</label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="ws-work-expi-left">
                              <strong>If Yes please mention the name?</strong>
                            </div>
                            <div class="ws-work-expi-right">
                              <input
                                name="certified_technician"
                                type="text"
                                class="form-control"
                              />
                            </div>
                          </li>
                          <li>
                            <div class="ws-work-expi-left">
                              <strong
                                >Are you legally eligible to work in the
                                U.S?</strong
                              >
                            </div>
                            <div class="ws-work-expi-right">
                              <div class="form-inline">
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    id="any33"
                                    name="is_eligible"
                                    value="yes"
                                    type="radio"
                                  />
                                  <label for="any33">Yes</label>
                                </div>
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    id="any333"
                                    name="is_eligible"
                                    value="yes"
                                    type="radio"
                                    checked=""
                                  />
                                  <label for="any333">No</label>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="ws-work-expi-left">
                              <strong
                                >How many hours per week are you able to
                                work?</strong
                              >
                            </div>
                            <div class="ws-work-expi-right">
                              <input
                                name="no_of_hours_work"
                                type="text"
                                class="form-control"
                              />
                            </div>
                          </li>
                          <li>
                            <strong
                              >What days are you most interested in
                              working?</strong
                            >
                            <strong class="ws-light-title"
                              >Check all that apply.</strong
                            >
                            <div class="form-inline">
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any1"
                                  value="Monday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any1">Monday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any2"
                                  value="Tuesday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any2">Tuesday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any3"
                                  value="Wednesday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any3">Wednesday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any4"
                                  value="Thursday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any4">Thursday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any5"
                                  value="Friday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any5">Friday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any6"
                                  value="Saturday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any6">Saturday</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="any7"
                                  value="Sunday"
                                  name="check_all_apply[]"
                                  type="checkbox"
                                />
                                <label for="any7">Sunday</label>
                              </div>
                            </div>
                          </li>
                          <li>
                            <strong
                              >Please describe your relevant experience and why
                              do you think you would make an excellent Auto
                              Glass Technician with us, Please mention the names
                              of the previous auto glass companies you have
                              worked in the past</strong
                            >
                            <textarea
                              class="form-control"
                              name="desc_yourself"
                              rows="4"
                            ></textarea>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="panel wt-panel">
                    <div class="acod-head">
                      <h6 class="acod-title text-uppercase">
                        <a
                          data-toggle="collapse"
                          href="#collapseThree1"
                          class="collapsed"
                          aria-expanded="false"
                        >
                          <span class="accord-num">3</span>
                          <span class="indicator"
                            ><i class="fa fa-angle-down"></i
                          ></span>
                          OTHER INFO
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree1"
                      class="acod-body collapse"
                      aria-expanded="false"
                      data-parent="#accordion1"
                    >
                      <div class="acod-content p-lr30">
                        <ul class="ws-work-expi-list">
                          <li>
                            <div class="ws-work-expi-left">
                              <strong>T-Shirt Preference?</strong>
                            </div>
                            <div
                              class="
                                ws-work-expi-right ws-work-expi-right-large
                              "
                            >
                              <div class="form-inline">
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    id="any1111"
                                    name="t_shirt_type"
                                    value="men"
                                    checked=""
                                    type="radio"
                                  />
                                  <label for="any1111">Men's </label>
                                </div>
                                <div class="checkbox sf-radio-checkbox">
                                  <input
                                    id="any2222"
                                    name="t_shirt_type"
                                    value="women"
                                    type="radio"
                                  />
                                  <label for="any2222">Women's</label>
                                </div>
                              </div>
                              <div class="select-box">
                                <select
                                  id="cboYear"
                                  name="t_shirt_size"
                                  class=""
                                  data-validation="required"
                                >
                                  <option value="Extra_Small">
                                    Extra Small
                                  </option>
                                  <option value="Small">Small</option>
                                  <option value="Medium">Medium</option>
                                  <option value="Large">Large</option>
                                  <option value="Extra_Large">
                                    Extra Large
                                  </option>
                                  <option value="XXL">XXL</option>
                                  <option value="XXXL">XXXL</option>
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <strong
                              >Which of the following do you have? Check all
                              that apply?</strong
                            >
                            <div class="form-inline">
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="smart1"
                                  name="facility[]"
                                  value="smart_phone"
                                  type="checkbox"
                                />
                                <label for="smart1">Smart Phone</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="tools1"
                                  name="facility[]"
                                  value="tools"
                                  type="checkbox"
                                />
                                <label for="tools1">Tools</label>
                              </div>
                              <div class="checkbox sf-radio-checkbox">
                                <input
                                  id="vehicle1"
                                  name="facility[]"
                                  value="vehicle"
                                  type="checkbox"
                                />
                                <label for="vehicle1">Vehicle </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ws-form-submit-btn">
                  <input type="hidden" name="step_2" value="1" />
                  <button type="submit" class="site-button radius-xl">
                    <span class="site-button-inr p-lr10 font-16">
                      <img
                        src="https://windshieldhub.com/wp-content/plugins/cashback/images/icon/submit-feedback.png"
                        class="p-r5"
                      />
                      Submit Application
                    </span>
                  </button>
                </div>
                <div class="ws-technician-van">
                  <img
                    src="https://windshieldhub.com/wp-content/plugins/cashback/images/company-van3.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-4 ws-technician-pic">
                <img
                  src="https://windshieldhub.com/wp-content/plugins/cashback/images/mobile-service2.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="ws-technician-page-curve">
            <div class="ws-technician-page-curve-bg"></div>
          </div>
        </div>

        <!-- ABOUT US  END -->
      </form>
    </template>
  </div>
</template>

<script>
// import "owl.carousel/dist/assets/owl.carousel.css";
// import 'owl.carousel'
// import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: 'Apply',
  components: {
    // Field,
    // Form,
    // ErrorMessage,
  },
  data: () => {
    return {
      firstName: '',
      lastName: '',
      zipCode: '',
      emailAddress: '',
      jobType: 'technician',
      step2: false,
    }
  },
  mounted: () => {
    $('.testimonial-two').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      center: true,
      navText: [
        '<i class="fa fa-chevron-left"></i>',
        '<i class="fa fa-chevron-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },

        767: {
          items: 1,
        },

        800: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    })
  },
  methods: {
    step1Submit(e) {
      // e.preventDefault();
      console.log(
        this.firstName,
        this.lastName,
        this.zipCode,
        this.emailAddress,
        this.jobType
      )
      this.step2 = true
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required'
      }

      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'This field must be a valid email'
      }

      // All is good
      return true
    },
    isRequired(value) {
      return value ? true : 'This field is required'
    },
  },
  
}
</script>

<style scoped lang="scss">
/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : Aug 23, 2019, 12:42:42 PM
    Author     : pure-logics
*/

/*===========================
	Technician Form Page CSS
=========================== */
.form-error {
  margin: 0 auto;
}
.ws-custom-accord .wt-panel {
  background-color: #fff;
  margin-bottom: 30px;
}
.ws-custom-accord .wt-panel:after,
.ws-custom-accord .wt-panel:before {
  content: '';
  display: table;
  clear: both;
}
.ws-custom-accord .acod-head {
  background-color: #00b0ff;
  margin: 20px 300px 20px -45px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}
.ws-custom-accord .acod-head.acc-actives {
  background-color: #038fde;
}
.ws-custom-accord .acod-head .accord-num {
  background-color: #fff;
  color: #00b0ff;
  font-size: 22px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: block;
  position: absolute;
  top: 6px;
  left: 6px;
  text-align: center;
  border-radius: 60px;
  -webkit-border-radius: 60px;
}

.ws-custom-accord .acod-head .acod-title a {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  padding: 15px 15px 15px 60px;
}
.ws-custom-accord .acod-head .acod-title a .indicator {
  color: #fff;
  font-size: 25px;
  top: 12px;
}

.ws-custom-accord .accod-title-bold {
  font-weight: 600;
}

.ws-custom-accord label {
  color: #4e616a;
  font-weight: normal;
  margin-bottom: 0px;
}
.ws-custom-accord .form-control.form-input-line {
  height: 24px;
  padding: 3px 0px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
}
.ws-custom-accord .form-control.form-input-line:focus {
  border-bottom: 1px solid #00b0ff;
}

.acod-title a[data-toggle='collapse'] .fa.fa-angle-down {
  transform: rotate(0);
}
.acod-title a[data-toggle='collapse']:not(.collapsed) .fa.fa-angle-down {
  transform: rotate(-90deg);
}

.ws-work-expi-list {
  counter-reset: li;
}
.ws-work-expi-list li {
  display: table;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 20px 0px;
  position: relative;
}
.ws-work-expi-list > li:before {
  content: counter(li, decimal);
  counter-increment: li;
  position: absolute;
  top: 25px;
  left: 0px;
  color: #00b0ff;
  font-weight: bold;
  font-size: 15px;
}
.ws-work-expi-list li:last-child {
  border-bottom: none;
}
.ws-work-expi-list li strong {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #415259;
  margin: 5px 0px 5px 15px;
}
.ws-work-expi-list li .ws-light-title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 15px;
}
.ws-work-expi-list li:last-child strong {
  margin-bottom: 15px;
}

.ws-work-expi-list li input[type='checkbox'],
.ws-work-expi-list li input[type='radio'] {
  display: none;
}

.ws-work-expi-list li input[type='checkbox'] + label,
input[type='radio'] + label {
  padding-left: 25px !important;
}

.ws-work-expi-list li input[type='checkbox'] + label:before,
.ws-work-expi-list li input[type='radio'] + label:before {
  margin-left: -25px;
}

.ws-work-expi-list li .ws-work-expi-left,
.ws-work-expi-list li .ws-work-expi-right {
  display: table-cell;
  vertical-align: top;
}

.ws-work-expi-list li .ws-work-expi-right {
  text-align: right;
  width: 120px;
}
.ws-work-expi-list li .ws-work-expi-right .form-control {
  height: 32px;
}

.ws-work-expi-list li .ws-work-expi-right.ws-work-expi-right-large {
  width: 320px;
}
.ws-work-expi-list li .ws-work-expi-right.ws-work-expi-right-large .select-box {
  display: inline-block;
}
.ws-work-expi-list
  li
  .ws-work-expi-right.ws-work-expi-right-large
  .select-box
  select {
  padding-right: 25px;
  outline: none;
}

.ws-work-expi-list
  li
  .ws-work-expi-right.ws-work-expi-right-large
  .form-inline {
  display: inline-block;
}

.ws-form-submit-btn {
  padding-top: 20px;
}
.ws-form-submit-btn .site-button {
  display: block;
  width: 100%;
  background-color: #232c30;
  padding: 15px 20px;
  font-weight: 600;
  text-transform: uppercase;
}

.ws-form-submit-btn .site-button span {
  font-size: 18px;
}

.ws-curve-area {
  position: relative;
}

.ws-technician-van {
  float: right;
  margin-right: 50px;
}

.ws-technician-pic {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-right: -5%;
  width: 40%;
}

.ws-technician-page-wrap {
  background-color: #f3f6f8;
  overflow: hidden;
  padding-bottom: 0px;
}

.ws-technician-page-wrap .container {
  position: relative;
  z-index: 1;
}

.ws-technician-page-curve {
  position: relative;
}

.ws-technician-page-curve-bg {
  background-color: #232c30;
  height: 400px;
  position: absolute;
  bottom: -50%;
  left: -10%;
  margin-bottom: -200px;
  width: 120%;
  -moz-transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#36ace1+0,1188bd+100 */
  background: #36ace1; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #36ace1 0%,
    #1188bd 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #36ace1 0%,
    #1188bd 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #36ace1 0%,
    #1188bd 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#36ace1', endColorstr='#1188bd',GradientType=1 ); /* IE6-9 */
}

@media only screen and (max-width: 1200px) {
  .ws-custom-accord .acod-head .acod-title a .indicator {
    font-size: 20px;
    top: 8px;
  }
  .ws-form-submit-btn .site-button {
    padding: 12px 20px;
  }
  .ws-form-submit-btn .site-button span {
    font-size: 15px;
  }
  .ws-custom-accord .wt-panel {
    margin-bottom: 15px;
  }
  .ws-custom-accord .acod-head {
    margin: 15px 300px 15px -22px;
  }
  .ws-custom-accord .acod-head .acod-title a {
    font-size: 18px;
    font-weight: 600;
    padding: 10px 10px 10px 50px;
  }
  .ws-custom-accord .acod-head .accord-num {
    font-size: 18px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    top: 4px;
    left: 4px;
  }
}

@media only screen and (max-width: 991px) {
  .ws-technician-pic {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .ws-custom-accord {
    margin-left: 20px;
  }
  .ws-custom-accord .acod-head {
    margin: 15px 15px 15px -22px;
  }

  .ws-custom-accord .form-inline .checkbox,
  .ws-custom-accord .form-inline .radio {
    display: inline-block;
  }

  .ws-work-expi-list li .ws-work-expi-left,
  .ws-work-expi-list li .ws-work-expi-right {
    display: block;
  }
  .ws-work-expi-list li .ws-work-expi-right.ws-work-expi-right-large {
    width: auto;
    text-align: left;
  }
}

@media only screen and (max-width: 480px) {
  .ws-work-expi-list
    li
    .ws-work-expi-right.ws-work-expi-right-large
    .form-inline {
    display: block;
  }
}
</style>
