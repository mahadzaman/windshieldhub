<template>
    <div>
        <main id="content">
            <!-- Zero Section -->
            <section class="zero-section py-3 py-lg-5">
                <div class="container">
                    <h1 class="zero-section-title mb-0">
                        <span id="basicSelectStep2__title"
                            >Answer a few simple questions to get a quote
                        </span>
                    </h1>
                    <!-- <h1 class="zero-section-title mb-0 pt-3 pb-3">Answer a few simple questions to get a quote </h1> -->
                </div>
            </section>
            <!-- End Zero Section -->

            <!-- Wizard Section -->
            <section
                class="container space-top-1 space-bottom-2 space-bottom-lg-3"
            >
                <!-- Steps -->
                <div>
                    <!-- Step -->
                    <ul
                        id="basicStepFormProgress"
                        class="step step-xs step-inline mb-5 mb-md-10"
                    >
                        <li class="step-item active">
                            <div class="step-content-wrapper">
                                <span class="step-icon step-icon-soft-primary"
                                    >1</span
                                >
                                <div class="step-content">
                                    <span class="step-inline-title"
                                        >Vehicle Info</span
                                    >
                                </div>
                            </div>
                        </li>

                        <li class="step-item">
                            <div class="step-content-wrapper">
                                <span class="step-icon step-icon-soft-primary"
                                    >2</span
                                >
                                <div class="step-content">
                                    <span class="step-inline-title"
                                        >Glass Selected</span
                                    >
                                </div>
                            </div>
                        </li>

                        <li class="step-item">
                            <div class="step-content-wrapper">
                                <span class="step-icon step-icon-soft-primary"
                                    >3</span
                                >
                                <div class="step-content">
                                    <span class="step-inline-title"
                                        >Glass Features</span
                                    >
                                </div>
                            </div>
                        </li>

                        <li class="step-item">
                            <div class="step-content-wrapper">
                                <span class="step-icon step-icon-soft-primary"
                                    >4</span
                                >
                                <div class="step-content">
                                    <span class="step-inline-title"
                                        >Availability</span
                                    >
                                </div>
                            </div>
                        </li>

                        <li class="step-item">
                            <div class="step-content-wrapper">
                                <span class="step-icon step-icon-soft-primary"
                                    >5</span
                                >
                                <div class="step-content">
                                    <span class="step-inline-title"
                                        >Check out</span
                                    >
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- End Step -->

                    <!-- Step Mobile -->
                    <ul
                        id="basicStepFormProgressMobile"
                        class="ws-steps-progress-bar"
                    >
                        <li class="ws-steps-progress-row active">
                            <div class="ws-steps-progress-left">
                                <div class="ws-step-bar-wrap">
                                    <div
                                        class="ws-step-bar-inr"
                                        style="width: 0%"
                                    >
                                        <span class="ws-step-bar-num">0%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ws-steps-progress-right">
                                Vehicle Info
                            </div>
                        </li>
                        <li class="ws-steps-progress-row">
                            <div class="ws-steps-progress-left">
                                <div class="ws-step-bar-wrap">
                                    <div
                                        class="ws-step-bar-inr"
                                        style="width: 25%"
                                    >
                                        <span class="ws-step-bar-num">25%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ws-steps-progress-right">
                                Glass Selected
                            </div>
                        </li>
                        <li class="ws-steps-progress-row">
                            <div class="ws-steps-progress-left">
                                <div class="ws-step-bar-wrap">
                                    <div
                                        class="ws-step-bar-inr"
                                        style="width: 50%"
                                    >
                                        <span class="ws-step-bar-num">50%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ws-steps-progress-right">
                                Glass Features
                            </div>
                        </li>
                        <li class="ws-steps-progress-row">
                            <div class="ws-steps-progress-left">
                                <div class="ws-step-bar-wrap">
                                    <div
                                        class="ws-step-bar-inr"
                                        style="width: 75%"
                                    >
                                        <span class="ws-step-bar-num">75%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="ws-steps-progress-right">
                                Availability
                            </div>
                        </li>
                        <li class="ws-steps-progress-row">
                            <div class="ws-steps-progress-left">
                                <div class="ws-step-bar-wrap">
                                    <div
                                        class="ws-step-bar-inr"
                                        style="width: 100%"
                                    >
                                        <span class="ws-step-bar-num"
                                            >100%</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="ws-steps-progress-right">Check out</div>
                        </li>
                    </ul>
                    <!-- End Step Mobile-->

                    <div class="row">
                        <div class="col-md-7 mb-9 mb-md-0 wizard-form-left">
                            <!-- <div id="iframeStart"></div> -->
                            <IFrame />
                        </div>

                        <div class="col-md-5 wizard-form-right">
                            <div class="pl-lg-4 text-center">
                                <div class="mb-7">
                                    <h2>How Does It Work?</h2>
                                    <p>
                                        Get your auto glass replaced in just
                                        three easy steps!
                                    </p>
                                </div>

                                <div class="wizard-how-does-work">
                                    <!-- Icon Blocks -->
                                    <div
                                        class="
                                            w-lg-75
                                            mx-auto
                                            text-center
                                            px-lg-3
                                            mb-4 mb-lg-7
                                        "
                                    >
                                        <i
                                            class="
                                                icon icon-lg icon-soft-primary
                                                rounded-circle
                                                mb-3
                                                ws-red-bg
                                            "
                                        >
                                            <i class="img-icon-sm">
                                                <img
                                                    src="~/assets/img/s12.png"
                                                    alt="Describe Details About Your Car"
                                                    width="38"
                                                />
                                            </i>
                                        </i>
                                        <h5 class="font-weight-normal">
                                            Describe Details<br />
                                            About Your Car
                                        </h5>
                                    </div>
                                    <!-- End Icon Blocks -->

                                    <!-- Icon Blocks -->
                                    <div
                                        class="
                                            w-lg-75
                                            mx-auto
                                            text-center
                                            px-lg-3
                                            mb-4 mb-lg-7
                                        "
                                    >
                                        <i
                                            class="
                                                icon icon-lg icon-soft-primary
                                                rounded-circle
                                                mb-3
                                                ws-blue-bg
                                            "
                                        >
                                            <i class="img-icon-sm">
                                                <img
                                                    src="~/assets/img/s13.png"
                                                    alt="Get A Quote From Our Local Auto Glass Shop"
                                                    width="25"
                                                />
                                            </i>
                                        </i>
                                        <h5 class="font-weight-normal">
                                            Get A Quote From<br />
                                            Our Local Auto Glass Shop
                                        </h5>
                                    </div>
                                    <!-- End Icon Blocks -->

                                    <!-- Icon Blocks -->
                                    <div
                                        class="
                                            w-md-75
                                            mx-auto
                                            text-center
                                            px-md-3
                                        "
                                    >
                                        <i
                                            class="
                                                icon icon-lg icon-soft-primary
                                                rounded-circle
                                                mb-3
                                                ws-green-bg
                                            "
                                        >
                                            <i class="img-icon-sm">
                                                <img
                                                    src="~/assets/img/s14.png"
                                                    alt="Schedule Service Online At Any Time of The Day"
                                                    width="30"
                                                />
                                            </i>
                                        </i>
                                        <h5 class="font-weight-normal">
                                            Schedule Service Online<br />
                                            At Any Time of The Day
                                        </h5>
                                    </div>
                                    <!-- End Icon Blocks -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Steps -->
            </section>
            <!-- End Wizard Section -->
        </main>
    </div>
</template>
<script>
export default {
    name: 'SelectQuote',
    props: {
        basePath: process.env.baseUrl,
    },
    mounted() {
        //new pym.Parent('iframeStart', 'iframe.html', {});
    },
    created() {
        // console.log(this.$router.params.id ,'sdasdas');
    },
};
</script>
