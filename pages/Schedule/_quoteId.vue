<template>
    <div>
        <!-- Zero Section -->
        <section class="zero-section py-3 py-lg-5">
            <div class="container">
                <h1 class="zero-section-title mb-0">
                    <span id="basicSelectStep2__title"
                        >Answer a few simple questions to get a quote
                    </span>
                </h1>
            </div>
        </section>
        <!-- End Zero Section -->

        <!-- Wizard Section -->
        <section class="container space-top-1 space-bottom-2 space-bottom-md-3">
            <!-- Steps -->
            <div
                class="js-step-form"
                data-hs-step-form-options='{
                        "progressSelector": "#basicStepFormProgress",
                        "stepsSelector": "#basicStepFormContent"
                        }'
            >
                <!-- Step -->
                <ul
                    id="basicStepFormProgress"
                    class="
                        js-step-progress
                        step step-xs step-inline
                        mb-5 mb-md-10
                    "
                >
                    <li class="step-item is-valid">
                        <a
                            class="step-content-wrapper"
                            :href="'/select/' + $route.params.quoteId"
                        >
                            <span class="step-icon step-icon-soft-primary"
                                >1</span
                            >
                            <div class="step-content">
                                <span class="step-inline-title"
                                    >Vehicle Info</span
                                >
                            </div>
                        </a>
                    </li>

                    <li id="glassselectedhead" class="step-item active">
                        <div
                            class="step-content-wrapper"
                            data-hs-step-form-prev-step='{
                                "targetSelector": "#basicSelectStep2"
                                }'
                        >
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

                    <li
                        id="glassfeature22"
                        class="step-item"
                        style="display: none"
                    >
                        <div
                            class="step-content-wrapper"
                            data-hs-step-form-prev-step='{
                                "targetSelector": "#basicSelectStep22"
                                }'
                        >
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

                    <li
                        v-if="selectedGlasses.Has_question === 1"
                        id="glassfeature3"
                        class="step-item"
                    >
                        <div
                            class="step-content-wrapper"
                            data-hs-step-form-prev-step='{
                                "targetSelector": "#basicSelectStep3"
                                }'
                        >
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

                    <li id="availabilityhead" class="step-item">
                        <div
                            class="step-content-wrapper"
                            data-hs-step-form-prev-step='{
                                "targetSelector": "#basicSelectStep4"
                                }'
                        >
                            <span class="step-icon step-icon-soft-primary">
                                {{
                                    selectedGlasses.Has_question === 1
                                        ? '4'
                                        : '3'
                                }}</span
                            >
                            <div class="step-content">
                                <span class="step-inline-title"
                                    >Availability</span
                                >
                            </div>
                        </div>
                    </li>

                    <li id="checkouthead" class="step-item">
                        <div
                            class="step-content-wrapper"
                            data-hs-step-form-prev-step='{
                                "targetSelector": "#basicSelectStep5"
                                }'
                        >
                            <span class="step-icon step-icon-soft-primary">{{
                                selectedGlasses.Has_question === 1 ? '5' : '4'
                            }}</span>
                            <div class="step-content">
                                <span class="step-inline-title">Check out</span>
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
                    <li class="ws-steps-progress-row">
                        <div class="ws-steps-progress-left">
                            <div class="ws-step-bar-wrap">
                                <div class="ws-step-bar-inr" style="width: 0%">
                                    <span class="ws-step-bar-num">0%</span>
                                </div>
                            </div>
                        </div>
                        <div class="ws-steps-progress-right">Vehicle Info</div>
                    </li>
                    <li id="mobilestep1" class="ws-steps-progress-row active">
                        <div class="ws-steps-progress-left">
                            <div class="ws-step-bar-wrap">
                                <div class="ws-step-bar-inr" style="width: 25%">
                                    <span class="ws-step-bar-num">25%</span>
                                </div>
                            </div>
                        </div>
                        <div class="ws-steps-progress-right">
                            Glass Selected
                        </div>
                    </li>
                    <li id="mobilestep2" class="ws-steps-progress-row">
                        <div class="ws-steps-progress-left">
                            <div class="ws-step-bar-wrap">
                                <div class="ws-step-bar-inr" style="width: 50%">
                                    <span class="ws-step-bar-num">50%</span>
                                </div>
                            </div>
                        </div>
                        <div class="ws-steps-progress-right">
                            Glass Features
                        </div>
                    </li>
                    <li id="mobilestep3" class="ws-steps-progress-row">
                        <div class="ws-steps-progress-left">
                            <div class="ws-step-bar-wrap">
                                <div class="ws-step-bar-inr" style="width: 75%">
                                    <span class="ws-step-bar-num">75%</span>
                                </div>
                            </div>
                        </div>
                        <div class="ws-steps-progress-right">Availability</div>
                    </li>
                    <li id="mobilestep4" class="ws-steps-progress-row">
                        <div class="ws-steps-progress-left">
                            <div class="ws-step-bar-wrap">
                                <div
                                    class="ws-step-bar-inr"
                                    style="width: 100%"
                                >
                                    <span class="ws-step-bar-num">100%</span>
                                </div>
                            </div>
                        </div>
                        <div class="ws-steps-progress-right">Check out</div>
                    </li>
                </ul>
                <!-- End Step Mobile-->

                <form id="myForm" method="post" name="myForm">
                    <!-- Content Step Form -->
                    <div id="basicStepFormContent">
                        <div id="basicSelectStep1" style="display: none">
                            1 step

                            <div class="d-flex justify-content-end">
                                <button
                                    type="button"
                                    class="
                                        js-scroll-top
                                        btn-sp
                                        btn-sp-primary
                                        btn-sp-lg
                                        btn-wide
                                        btn-pill
                                    "
                                    data-hs-step-form-next-options='{
                                            "targetSelector": "#basicSelectStep2"
                                        }'
                                >
                                    Next
                                </button>
                            </div>
                        </div>

                        <div id="basicSelectStep2" class="active">
                            <div class="row">
                                <div
                                    class="
                                        col-md-7
                                        mb-9 mb-md-0
                                        basicSelectWLeft
                                    "
                                >
                                    <div
                                        class="
                                            card
                                            shadow-lg
                                            mb-5
                                            mx-n3 mx-md-0
                                            ws-what-needFix
                                        "
                                    >
                                        <div
                                            class="
                                                card-header
                                                bg-light
                                                p-3
                                                px-lg-6
                                                border-0
                                            "
                                        >
                                            <h4 class="h6-nlg mb-0">
                                                What do you need fixed?
                                            </h4>
                                        </div>

                                        <div class="card-body p-3 p-lg-6">
                                            <div class="ws-service-listing">
                                                <div
                                                    v-for="(
                                                        glass, index
                                                    ) in allGlasses"
                                                    :key="index"
                                                    class="
                                                        ws-servi-col
                                                        border-bottom
                                                        pb-1
                                                        mb-2
                                                        pb-md-2
                                                        mb-md-3
                                                    "
                                                >
                                                    <label
                                                        class="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                            cursor-pointer
                                                        "
                                                        :for="glass.Value"
                                                    >
                                                        <div
                                                            class="
                                                                form-group
                                                                form-group-nlg-sm
                                                                mb-0
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    custom-control
                                                                    custom-radio
                                                                "
                                                            >
                                                                <input
                                                                    :id="
                                                                        glass.Value
                                                                    "
                                                                    v-model="
                                                                        selectedGlasses
                                                                    "
                                                                    type="radio"
                                                                    :value="
                                                                        glass
                                                                    "
                                                                    :rel="
                                                                        glass.Type
                                                                    "
                                                                    class="
                                                                        custom-control-input
                                                                    "
                                                                    @change="
                                                                        glassCheckBoxUpdate(
                                                                            $event,
                                                                            glass
                                                                        )
                                                                    "
                                                                />
                                                                <div
                                                                    class="
                                                                        custom-control-label
                                                                        pl-2
                                                                    "
                                                                >
                                                                    {{
                                                                        glass.Text
                                                                    }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img
                                                            :src="
                                                                imgBaseURL +
                                                                glass.Image
                                                            "
                                                            class="need-fix-img"
                                                            :alt="glass.Type"
                                                        />
                                                    </label>
                                                </div>

                                                <pulse-loader
                                                    v-if="loaderFlag"
                                                ></pulse-loader>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="
                                            buttons-mobile
                                            d-flex
                                            justify-content-end
                                            pt-md-3
                                        "
                                    >
                                        <a
                                            class="
                                                btn-sp
                                                btn-sp-light
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                mr-3
                                                ws-back-btn
                                            "
                                            :href="
                                                '/select/' +
                                                $route.params.quoteId
                                            "
                                            ><i class="fa fa-angle-left"></i>
                                            <span>Back</span></a
                                        >
                                        <button
                                            id="continue-step-old"
                                            :disabled="loaderFlag"
                                            type="button"
                                            class="
                                                js-scroll-top
                                                btn-sp
                                                btn-sp-primary
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                ws-next-btn ws-next-step-btn
                                            "
                                            data-hs-step-form-next-options='{
                                                "targetSelector": "#basicSelectStep3"
                                            }'
                                            @click="continuestep()"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <div class="col-md-5 basicSelectWRight">
                                    <div class="pl-lg-4 text-center">
                                        <div class="mb-4 mb-lg-7">
                                            <h2 class="h4-nlg">Our features</h2>
                                        </div>

                                        <div class="wizard-our-features">
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-green2-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="~/assets/img/s7.png"
                                                            alt="We’re Affordable"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    We’re Affordable
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-blue-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s8.png"
                                                            alt="Certified Technicians"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    Certified Technicians
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-yellow-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="~/assets/img/s10.png"
                                                            alt="Schedule a Replacement 24/7"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    Schedule a Replacement 24/7
                                                </h5>
                                            </div>
                                            <!-- End Icon Blocks -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="basicSelectStep22" style="display: none">
                            <div class="row">
                                <div
                                    class="
                                        col-md-7
                                        mb-9 mb-md-0
                                        basicSelectWLeft
                                    "
                                >
                                    <h3 class="side-window-tile">
                                        What's wrong with your side window?
                                    </h3>

                                    <ul class="side-window-list">
                                        <li @click="doorWindowRadio('broken')">
                                            <div class="side-window-pic">
                                                <img
                                                    src="~/assets/img/side_door/pic1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="side-window-name">
                                                The Glass is Broken
                                            </div>
                                        </li>
                                        <li
                                            @click="
                                                doorWindowRadio('slide_issue')
                                            "
                                        >
                                            <div class="side-window-pic">
                                                <img
                                                    src="~/assets/img/side_door/pic6.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="side-window-name">
                                                It's Stuck or Move Slowly
                                            </div>
                                            <!-- <input type="radio" v-model="door_sub_type" value="Slide Issue" > -->
                                        </li>
                                    </ul>

                                    <div class="ws-service-extra">
                                        <div
                                            class="
                                                ws-serExtra-col
                                                border-bottom
                                                pb-1
                                                mb-2
                                                pb-md-2
                                                mb-md-3
                                                active
                                            "
                                        >
                                            <label
                                                class="
                                                    d-flex
                                                    justify-content-between
                                                    align-items-center
                                                    cursor-pointer
                                                "
                                                for="need2fix-break"
                                            >
                                                <div
                                                    class="
                                                        form-group
                                                        form-group-nlg-sm
                                                        mb-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            custom-control
                                                            custom-checkbox
                                                        "
                                                    >
                                                        <input
                                                            id="need2fix-break"
                                                            type="checkbox"
                                                            class="
                                                                custom-control-input
                                                            "
                                                            @change="
                                                                saveDoorSubDetails(
                                                                    $event,
                                                                    'break_in'
                                                                )
                                                            "
                                                        />
                                                        <div
                                                            class="
                                                                custom-control-label
                                                                pl-2
                                                            "
                                                        >
                                                            Break-Ins
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <i
                                                class="tip-info fa fa-question"
                                                data-toggle="tooltip"
                                                title=""
                                                data-original-title="Vandalism and break-ins often leave cars with damaged paint jobs, interiors, and windows Motor or Regulators. When you leave your vehicle unattended, choose a safe parking space to make your vehicle a more difficult target."
                                            ></i>
                                        </div>
                                        <div
                                            class="
                                                ws-serExtra-col
                                                border-bottom
                                                pb-1
                                                mb-2
                                                pb-md-2
                                                mb-md-3
                                            "
                                        >
                                            <label
                                                class="
                                                    d-flex
                                                    justify-content-between
                                                    align-items-center
                                                    cursor-pointer
                                                "
                                                for="need2fix-accidents"
                                            >
                                                <div
                                                    class="
                                                        form-group
                                                        form-group-nlg-sm
                                                        mb-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            custom-control
                                                            custom-checkbox
                                                        "
                                                    >
                                                        <input
                                                            id="need2fix-accidents"
                                                            type="checkbox"
                                                            class="
                                                                custom-control-input
                                                            "
                                                            @change="
                                                                saveDoorSubDetails(
                                                                    $event,
                                                                    'accident'
                                                                )
                                                            "
                                                        />
                                                        <div
                                                            class="
                                                                custom-control-label
                                                                pl-2
                                                            "
                                                        >
                                                            Accidents
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <i
                                                class="tip-info fa fa-question"
                                                data-toggle="tooltip"
                                                title=""
                                                data-original-title="Accidents are some of the most common causes of broken car windows. Even at a low speed, the impact can bend the window frame enough or exert enough pressure on the window to crack or shatter the glass."
                                            ></i>
                                        </div>
                                        <div
                                            class="
                                                ws-serExtra-col
                                                border-bottom
                                                pb-1
                                                mb-2
                                                pb-md-2
                                                mb-md-3
                                            "
                                        >
                                            <label
                                                class="
                                                    d-flex
                                                    justify-content-between
                                                    align-items-center
                                                    cursor-pointer
                                                "
                                                for="need2fix-debris-impact"
                                            >
                                                <div
                                                    class="
                                                        form-group
                                                        form-group-nlg-sm
                                                        mb-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            custom-control
                                                            custom-checkbox
                                                        "
                                                    >
                                                        <input
                                                            id="need2fix-debris-impact"
                                                            type="checkbox"
                                                            class="
                                                                custom-control-input
                                                            "
                                                            @change="
                                                                saveDoorSubDetails(
                                                                    $event,
                                                                    'debris_impact'
                                                                )
                                                            "
                                                        />
                                                        <div
                                                            class="
                                                                custom-control-label
                                                                pl-2
                                                            "
                                                        >
                                                            Debris Impact
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <i
                                                class="tip-info fa fa-question"
                                                data-toggle="tooltip"
                                                title=""
                                                data-original-title="Like your windshield, your side windows can be threatened by debris kicked up on the road, hurled at your vehicle by high winds, or dropped from trees or overhead structures. Rock chips caused by gravel and other small, hardened debris are the most common culprit of nicks and chips in auto glass."
                                            ></i>
                                        </div>
                                        <div
                                            class="
                                                ws-serExtra-col
                                                border-bottom
                                                pb-1
                                                mb-2
                                                pb-md-2
                                                mb-md-3
                                            "
                                        >
                                            <label
                                                class="
                                                    d-flex
                                                    justify-content-between
                                                    align-items-center
                                                    cursor-pointer
                                                "
                                                for="need2fix-others"
                                            >
                                                <div
                                                    class="
                                                        form-group
                                                        form-group-nlg-sm
                                                        mb-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            custom-control
                                                            custom-checkbox
                                                        "
                                                    >
                                                        <input
                                                            id="need2fix-others"
                                                            type="checkbox"
                                                            class="
                                                                custom-control-input
                                                            "
                                                            @change="
                                                                saveDoorSubDetails(
                                                                    $event,
                                                                    'others'
                                                                )
                                                            "
                                                        />
                                                        <div
                                                            class="
                                                                custom-control-label
                                                                pl-2
                                                            "
                                                        >
                                                            Others
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <div class="ws-extra-other">
                                                <input
                                                    v-model="door_other_text"
                                                    type="text"
                                                    class="
                                                        form-control
                                                        form-control-nlg-sm
                                                        form-control-mobile
                                                    "
                                                    placeholder="Type Here"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="side-window-reason">
                                        <div class="side-window-reason-pic">
                                            <form id="image-form" method="post">
                                                <input
                                                    type="file"
                                                    name="img[]"
                                                    class="file"
                                                    accept="image/*"
                                                />
                                                <input
                                                    id="file"
                                                    type="text"
                                                    class="form-control"
                                                    disabled
                                                    placeholder="Upload File"
                                                />
                                                <button
                                                    type="button"
                                                    class="
                                                        browse
                                                        btn btn-primary
                                                        ws-browse-btn
                                                    "
                                                ></button>
                                            </form>
                                            <div class="ws-privew-image">
                                                <img
                                                    id="preview"
                                                    src="~/assets/img/camra.png"
                                                    class="img-thumbnail"
                                                />
                                            </div>
                                        </div>
                                        <div class="side-window-reason-text">
                                            <h5>Not sure of your damage?</h5>
                                            <strong
                                                >Send us a photo to
                                                review</strong
                                            >
                                        </div>
                                    </div>

                                    <div
                                        class="
                                            buttons-mobile
                                            d-flex
                                            justify-content-end
                                            pt-md-3
                                        "
                                    >
                                        <a
                                            class="
                                                btn-sp
                                                btn-sp-light
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                mr-3
                                                ws-back-btn
                                            "
                                            href="/select"
                                            ><i class="fa fa-angle-left"></i>
                                            <span>Back</span></a
                                        >
                                        <button
                                            id="continue-step3-old"
                                            type="button"
                                            class="
                                                js-scroll-top
                                                btn-sp
                                                btn-sp-primary
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                ws-next-btn ws-next-step-btn
                                            "
                                            data-hs-step-form-next-options='{
                                                "targetSelector": "#basicSelectStep3"
                                            }'
                                            @click="continuestep3()"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <div class="col-md-5 basicSelectWRight">
                                    <div class="pl-lg-4 text-center">
                                        <div class="mb-4 mb-lg-7">
                                            <h2 class="h4-nlg">Our features</h2>
                                        </div>

                                        <div class="wizard-our-features">
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-green2-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="~/assets/img/s7.png"
                                                            alt="We’re Affordable"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    We’re Affordable
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-blue-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="https://windshieldhub.com/wp-content/themes/windshieldNewDesign/assets/images/icon/s8.png"
                                                            alt="Certified Technicians"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    Certified Technicians
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
                                                        icon
                                                        icon-lg
                                                        icon-soft-primary
                                                        rounded-circle
                                                        mb-2 mb-lg-3
                                                        ws-yellow-bg
                                                    "
                                                >
                                                    <i class="img-icon-sm">
                                                        <img
                                                            src="~/assets/img/s10.png"
                                                            alt="Schedule a Replacement 24/7"
                                                        />
                                                    </i>
                                                </i>
                                                <h5 class="font-weight-normal">
                                                    Schedule a Replacement 24/7
                                                </h5>
                                            </div>
                                            <!-- End Icon Blocks -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="basicSelectStep3" style="display: none">
                            <div class="row">
                                <div
                                    class="
                                        col-md-7
                                        mb-9 mb-md-0
                                        basicSelect3Wleft
                                    "
                                >
                                    <div
                                        v-for="(question, name) in allQuestions"
                                        :key="name"
                                    >
                                        <div
                                            class="
                                                card
                                                shadow-lg
                                                mb-5
                                                mx-n3 mx-md-0
                                            "
                                        >
                                            <div
                                                class="
                                                    card-header
                                                    bg-light
                                                    p-3
                                                    px-lg-6
                                                    border-0
                                                "
                                            >
                                                <h4 class="h6-nlg mb-0">
                                                    Which one of options best
                                                    describes the
                                                    {{ name }} Glass feature of
                                                    your car?
                                                </h4>
                                            </div>

                                            <div
                                                class="
                                                    card-body
                                                    p-3 p-lg-6
                                                    basicSelect3Wright
                                                "
                                            >
                                                <div
                                                    v-for="(
                                                        question, index
                                                    ) in question.all_Questions"
                                                    :key="index"
                                                    class="
                                                        border-bottom
                                                        pb-1
                                                        mb-2
                                                        pb-md-2
                                                        mb-md-3
                                                    "
                                                >
                                                    <label
                                                        class="
                                                            d-flex
                                                            justify-content-between
                                                            align-items-center
                                                            cursor-pointer
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                form-group
                                                                form-group-nlg-sm
                                                                mb-0
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    custom-control
                                                                    custom-radio
                                                                "
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    :value="
                                                                        question.id
                                                                    "
                                                                    class="
                                                                        custom-control-input
                                                                    "
                                                                    :name="name"
                                                                    :checked="
                                                                        index ===
                                                                        0
                                                                            ? true
                                                                            : false
                                                                    "
                                                                    @change="
                                                                        saveAnswer(
                                                                            question.id,
                                                                            name
                                                                        )
                                                                    "
                                                                />

                                                                <div
                                                                    class="
                                                                        custom-control-label
                                                                        pl-2
                                                                    "
                                                                >
                                                                    <p
                                                                        v-html="
                                                                            applyModal(
                                                                                question.question,
                                                                                name
                                                                            )
                                                                        "
                                                                    ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <pulse-loader
                                        v-if="loaderFlag"
                                    ></pulse-loader>
                                    <div
                                        class="
                                            buttons-mobile
                                            d-flex
                                            justify-content-end
                                            pt-md-3
                                        "
                                    >
                                        <a
                                            href="#"
                                            class="
                                                btn-sp
                                                btn-sp-light
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                mr-3
                                                ws-back-btn
                                            "
                                            @click.prevent="backtobutton(2)"
                                            ><i class="fa fa-angle-left"></i>
                                            <span>Back</span></a
                                        >

                                        <button
                                            id="continue-step2-old"
                                            :disabled="loaderFlag"
                                            type="button"
                                            class="
                                                js-scroll-top
                                                btn-sp
                                                btn-sp-primary
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                ws-next-btn ws-next-step-btn
                                            "
                                            @click="continuestep2()"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>

                                <div class="col-md-5 text-center">
                                    <div class="pl-lg-4 wizard-pay-box">
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
                                                    icon
                                                    icon-lg
                                                    icon-soft-primary
                                                    rounded-circle
                                                    mb-2 mb-lg-3
                                                    ws-purple-bg
                                                "
                                            >
                                                <i class="img-icon-sm">
                                                    <img
                                                        src="~/assets/img/s18.png"
                                                        alt="Pay for service once completed"
                                                    />
                                                </i>
                                            </i>
                                            <h5 class="font-weight-normal">
                                                Pay for service once completed
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
                                                    icon
                                                    icon-lg
                                                    icon-soft-primary
                                                    rounded-circle
                                                    mb-2 mb-lg-3
                                                    ws-orange-bg
                                                "
                                            >
                                                <i class="img-icon-sm">
                                                    <img
                                                        src="~/assets/img/s19.png"
                                                        alt="We come to you at no extra cost"
                                                    />
                                                </i>
                                            </i>
                                            <h5 class="font-weight-normal">
                                                We come to you at no extra cost
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
                                                    icon
                                                    icon-lg
                                                    icon-soft-primary
                                                    rounded-circle
                                                    mb-2 mb-md-3
                                                "
                                            >
                                                <i class="img-icon-sm">
                                                    <img
                                                        src="https://windshieldhub.com/order/new_design/images/icon/s20.png"
                                                        alt="National lifetime warranty"
                                                    />
                                                </i>
                                            </i>
                                            <h5 class="font-weight-normal">
                                                National lifetime warranty
                                            </h5>
                                        </div>
                                        <!-- End Icon Blocks -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="basicSelectStep4" style="display: none">
                            <div class="row">
                                <div
                                    class="
                                        col-md-5
                                        mb-5 mb-md-0
                                        order-md-2
                                        wizard-totalbox-wraper
                                    "
                                >
                                    <div class="row ws-car-info">
                                        <div class="col-6">
                                            <img
                                                src="~/assets/img/car-white.png"
                                                alt=""
                                                width="60"
                                                height="30"
                                            />
                                            {{ appointmentData.year }},
                                            {{ appointmentData.make }}
                                            {{ appointmentData.model }},
                                            {{ appointmentData.style }}
                                        </div>
                                        <div class="col-6">
                                            <img
                                                src="~/assets/img/marker-white.png"
                                                alt=""
                                                width="25"
                                                height="30"
                                            />
                                            {{
                                                appointmentData.local_city_name
                                            }}
                                            {{ appointmentData.zip }}
                                        </div>
                                    </div>
                                    <div class="pl-lg-4">
                                        <div
                                            class="
                                                text-md-right
                                                mx-n3 mx-md-0
                                                mb-3
                                            "
                                        ></div>

                                        <div
                                            class="
                                                rounded
                                                overflow-hidden
                                                shadow-sm
                                                mb-5
                                                mx-n3 mx-md-0
                                                wizard-total-wrap
                                            "
                                        >
                                            <div
                                                class="
                                                    bg-primary
                                                    rounded
                                                    text-white
                                                    p-3 p-lg-4
                                                    wizard-total-price-box
                                                "
                                            >
                                                <!-- Card -->
                                                <div
                                                    class="
                                                        position-relative
                                                        summry-top-info
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            card-btn
                                                            text-white
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                row
                                                                mb-lg-3
                                                                wizard-total-price-table
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    col-lg-6
                                                                    position-relative
                                                                    mb-0
                                                                "
                                                            >
                                                                <span
                                                                    class="
                                                                        d-block
                                                                        mb-1
                                                                        ws-yoTo-price
                                                                    "
                                                                    >Your
                                                                    subtotal:</span
                                                                >

                                                                <!-- <h2 class="font-size-4 text-white mb-0">$<clip-loader v-if="loaderPriceFlag"></clip-loader><span v-if="loaderPriceFlag===false">{{appointmentData.estimate}}</span></h2> -->
                                                                <h2
                                                                    class="
                                                                        font-size-4
                                                                        text-white
                                                                        mb-0
                                                                    "
                                                                >
                                                                    ${{
                                                                        appointmentData.estimate
                                                                    }}
                                                                </h2>
                                                            </div>

                                                            <!-- <div class="col-lg-6 small text-lh-xs">
                                                    <dl id="priceDetails-4" class="row no-gutters mb-0 d-lg-flex pt-3 pt-lg-0">
                                                        <dt class="col-8 font-weight-normal opacity-lg mb-1 mb-lg-2">Competitor Price</dt>
                                                        <dd class="col-4 pl-2 text-right mb-1 mb-lg-2">$0</dd>

                                                        <dt class="col-8 font-weight-normal opacity-lg mb-1 mb-lg-2">Dealer Price</dt>
                                                        <dd class="col-4 pl-2 text-right mb-1 mb-lg-2">$0</dd>

                                                        <dt class="col-8 font-weight-bold opacity-lg mb-1 mb-lg-2">You save</dt>
                                                        <dd class="col-4 pl-2 font-weight-bold text-right mb-1 mb-lg-2">0%</dd>
                                                    </dl>
                                                </div> -->
                                                        </div>

                                                        <div
                                                            class="
                                                                small
                                                                pt-2
                                                                d-block
                                                                opacity
                                                                text-lh-sm
                                                            "
                                                        >
                                                            Includes mobile
                                                            service,
                                                            installation&nbsp;lifetime&nbsp;warranty.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="summry-accord">
                                                    <div
                                                        class="
                                                            summry-accord-title
                                                        "
                                                    >
                                                        Show Detailed Pricing
                                                    </div>
                                                    <div class="summry-arrow">
                                                        <i
                                                            class="
                                                                fa fa-angle-down
                                                            "
                                                        ></i>
                                                    </div>
                                                </div>

                                                <!-- End Card -->
                                            </div>

                                            <div class="summry-accord-body">
                                                <div
                                                    class="
                                                        js-delete-items-block
                                                        card-line-wrap
                                                        ws-detailed-pricing
                                                    "
                                                >
                                                    <!-- <div v-for="(glass,index) in appointmentGlasses" :key="index" class="js-delete-item-parent row mb-1 mb-md-2 card-line-content">
                                                        <div class="col-8 font-weight-normal">
                                                            <div class="d-none d-lg-inline-block text-center mr-2" style="width: 28px;">
                                                                <img :src="'/assets/img/icon/windshield.png'" alt="Windshield" height="18">
                                                            </div>
                                                            {{glass.glass_type}}
                                                        </div>
                                                        <div class="col-4 text-right">${{ glassTotal(glass) }}<a v-if="this.appointmentGlasses.length>1" class="text-muted opacity-sm opacity-1-hover text-danger-hover" href="javascript:void(0)" @click="removeGlass(index,glass)" ><i class="far fa-trash-alt"></i></a></div>
                                                    </div> -->

                                                    <div
                                                        class="
                                                            js-delete-item-parent
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-8
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon/windshield.png"
                                                                    alt="Windshield"
                                                                    height="18"
                                                                />
                                                            </div>
                                                            {{
                                                                appointmentData.glass_type
                                                            }}
                                                        </div>
                                                        <div
                                                            class="
                                                                col-4
                                                                text-right
                                                            "
                                                        >
                                                            ${{
                                                                appointmentData.estimate
                                                            }}
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-7
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon-tax.png"
                                                                    alt="Tax"
                                                                    height="20"
                                                                />
                                                            </div>
                                                            Tax
                                                        </div>
                                                        <div
                                                            class="
                                                                col-5
                                                                text-right
                                                            "
                                                        >
                                                            <!-- ${{appointmentData.tax}} -->
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="
                                                        js-delete-items-block
                                                        card-line-wrap
                                                        ws-schedule-rep
                                                        ws-schedule-desktop
                                                    "
                                                >
                                                    <h3
                                                        class="
                                                            h5-nlg
                                                            mb-2
                                                            card-line-title
                                                        "
                                                    >
                                                        Schedule your replacment
                                                    </h3>
                                                    <p
                                                        class="
                                                            ws-schedule-tagline
                                                        "
                                                    >
                                                        Where would you like
                                                        service?
                                                    </p>
                                                    <div
                                                        class="ws-store-option"
                                                    >
                                                        <div
                                                            class="
                                                                ws-store-col
                                                                border-bottom
                                                                pb-1
                                                                mb-2
                                                                pb-md-2
                                                                mb-md-3
                                                                ws-our-mobile-btn
                                                                active
                                                            "
                                                        >
                                                            Our mobile shop
                                                            comes to you*
                                                        </div>

                                                        <!-- 
                                                        <div class="ws-store-col border-bottom pb-1 mb-2 pb-md-2 mb-md-3 ws-you-come-btn"> You come to our store</div>
                                                        <div class="ws-store-adress-wrap">
                                                            <h6>Your Safeilte location:</h6>
                                                            <ul class="ws-store-adress">
                                                                <li>Safelite AutoGlass<br>
                                                                3122 Shader Road<br>
                                                                Orlando, FL 32808<br>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="
                                                    p-3 p-lg-4
                                                    ws-summary-mobile
                                                "
                                            >
                                                <div class="card-line-wrap">
                                                    <h3 class="h5-nlg mb-2">
                                                        Summary
                                                    </h3>
                                                    <p
                                                        class="
                                                            mb-1 mb-md-2
                                                            ws-summary-address
                                                        "
                                                    >
                                                        <img
                                                            src="~/assets/img/car.png"
                                                            width="60"
                                                            height="30"
                                                            alt=""
                                                        />
                                                        {{
                                                            appointmentData.year
                                                        }},
                                                        {{
                                                            appointmentData.make
                                                        }}
                                                        {{
                                                            appointmentData.model
                                                        }},
                                                        {{
                                                            appointmentData.style
                                                        }}
                                                    </p>
                                                    <p
                                                        class="
                                                            mb-1 mb-md-2
                                                            ws-summary-cell
                                                        "
                                                    >
                                                        <span
                                                            class="text-primary"
                                                            ><img
                                                                src="~/assets/img/marker.png"
                                                                width="25"
                                                                height="30"
                                                                alt=""
                                                            />
                                                            {{
                                                                appointmentData.local_city_name
                                                            }}
                                                            {{
                                                                appointmentData.zip
                                                            }}</span
                                                        >
                                                        <span
                                                            class="text-danger"
                                                            ><span
                                                                class="
                                                                    text-primary
                                                                "
                                                            ></span
                                                        ></span>
                                                        <!-- <span class="text-danger"><span class="text-primary">Quote </span><img src="/assets/img/quate.png" width="30" height="30" alt=""> {{appointmentData.appointment_id}}</span> -->
                                                    </p>
                                                </div>

                                                <hr class="my-3 my-md-4" />

                                                <div
                                                    class="
                                                        d-none d-sm-block
                                                        card-line-wrap
                                                        ws-choosen-date-time
                                                    "
                                                >
                                                    <h3 class="h5-nlg mb-2">
                                                        Choosen date & time
                                                    </h3>
                                                    <!-- Monday January 18, 2021  -->
                                                    <p class="mb-1 mb-md-2">
                                                        {{
                                                            dateFormat(
                                                                schedule_date,
                                                                'dddd, MMMM DD, YYYY'
                                                            )
                                                        }}
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        {{ schedule_time }}
                                                    </p>

                                                    <hr class="my-3 my-md-4" />
                                                </div>

                                                <div
                                                    class="
                                                        d-none d-sm-block
                                                        card-line-wrap
                                                        ws-includes-services-list
                                                    "
                                                >
                                                    <h3 class="h5-nlg mb-2">
                                                        Includes
                                                    </h3>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Mobile Service
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Glass Clean Up
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Glass Disposal
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Lifetime Warranty
                                                    </p>

                                                    <hr class="my-3 my-md-4" />
                                                </div>

                                                <div
                                                    class="
                                                        js-delete-items-block
                                                        card-line-wrap
                                                        ws-detailed-pricing
                                                    "
                                                >
                                                    <span class="card-line-btn"
                                                        ><i
                                                            class="
                                                                fa fa-angle-down
                                                            "
                                                        ></i
                                                    ></span>
                                                    <h3
                                                        class="
                                                            h5-nlg
                                                            mb-2
                                                            card-line-title
                                                        "
                                                    >
                                                        Detailed Pricing
                                                    </h3>

                                                    <div
                                                        class="
                                                            js-delete-item-parent
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-8
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon/windshield.png"
                                                                    alt="Windshield"
                                                                    height="18"
                                                                />
                                                            </div>
                                                            {{
                                                                appointmentData.glass_type
                                                            }}
                                                        </div>
                                                        <div
                                                            class="
                                                                col-4
                                                                text-right
                                                            "
                                                        >
                                                            ${{
                                                                appointmentData.estimate
                                                            }}
                                                        </div>
                                                    </div>
                                                    <!--                                                 
                                                <div v-for="(glass,index) in appointmentGlasses" :key="index" class="js-delete-item-parent row mb-1 mb-md-2 card-line-content">
                                                    <div class="col-8 font-weight-normal">
                                                        <div class="d-none d-lg-inline-block text-center mr-2" style="width: 28px;">
                                                            <img :src="'/assets/img/icon/windshield.png'" alt="Windshield" height="18">
                                                        </div>
                                                        {{glass.glass_type}}
                                                    </div>
                                                    <div class="col-4 text-right">${{ glassTotal(glass) }}<a v-if="this.appointmentGlasses.length>1" class="text-muted opacity-sm opacity-1-hover text-danger-hover" href="javascript:void(0)" @click="removeGlass(index,glass)" ><i class="far fa-trash-alt"></i></a></div>
                                                </div> -->

                                                    <div
                                                        class="
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-7
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon-tax.png"
                                                                    alt="Tax"
                                                                    height="20"
                                                                />
                                                            </div>
                                                            Tax
                                                        </div>
                                                        <div
                                                            class="
                                                                col-5
                                                                text-right
                                                            "
                                                        >
                                                            <!-- ${{appointmentData.tax}} -->
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-7
                                                                font-weight-bold
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon-total-2.png"
                                                                    alt="Total"
                                                                    height="20"
                                                                />
                                                            </div>
                                                            Subtotal
                                                        </div>
                                                        <!-- {{ appointmentTotal(appointmentData)}} -->
                                                        <div
                                                            class="
                                                                col-5
                                                                text-right
                                                                font-weight-bold
                                                            "
                                                        >
                                                            ${{
                                                                appointmentData.estimate
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="
                                                d-none d-md-block
                                                font-size-1
                                                px-3 px-md-4
                                            "
                                        >
                                            <h3 class="h5-nlg mb-2">
                                                Secure Booking
                                            </h3>
                                            <div class="mb-3">
                                                <img
                                                    class="mr-2"
                                                    src="https://windshieldhub.com/order/new_design/images/verified.png"
                                                    alt="BBB"
                                                    height="30"
                                                />
                                                <img
                                                    src="https://windshieldhub.com/order/new_design/images/mcafee.png"
                                                    alt="Norton"
                                                    height="30"
                                                />
                                            </div>
                                            Our booking process certified by
                                            industry leaders.
                                        </div>

                                        <div class="d-none d-md-block">
                                            <hr class="my-3 my-md-4" />

                                            <ul
                                                class="
                                                    list-unstyled
                                                    px-3 px-md-4
                                                    font-size-1
                                                "
                                            >
                                                <li class="mb-1 mb-md-2">
                                                    <a
                                                        class="link-muted"
                                                        href="javascript:void(0)"
                                                        >How WindshieldHub works
                                                        →</a
                                                    >
                                                </li>
                                                <!-- <li class="mb-1 mb-md-2"><a class="link-muted" href="#">Our 12-month, 12.000 miles warrenty →</a></li>
                                        <li class="mb-1 mb-md-2"><a class="link-muted" href="#">Frequently Asled Questions →</a></li>
                                        <li class="mb-1 mb-md-2"><a class="link-muted" href="#">How Affirm financing works →</a></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-7 order-md-1">
                                    <div
                                        class="
                                            js-delete-items-block
                                            card-line-wrap
                                            ws-schedule-rep ws-schedule-desktop
                                        "
                                    >
                                        <h3 class="h5-nlg mb-2 card-line-title">
                                            Schedule your replacment
                                        </h3>
                                        <p class="ws-schedule-tagline">
                                            Where would you like service?
                                        </p>
                                        <div class="ws-store-option">
                                            <div
                                                class="
                                                    ws-store-col
                                                    border-bottom
                                                    pb-1
                                                    mb-2
                                                    pb-md-2
                                                    mb-md-3
                                                    ws-our-mobile-btn
                                                    active
                                                "
                                            >
                                                Our mobile shop comes to you*
                                            </div>

                                            <!-- <div class="ws-store-col border-bottom pb-1 mb-2 pb-md-2 mb-md-3 ws-you-come-btn"> You come to our store</div>
                                            <div class="ws-store-adress-wrap">
                                                <h6>Your Safeilte location:</h6>
                                                <ul class="ws-store-adress">
                                                    <li>Safelite AutoGlass </li>
                                                </ul>
                                            </div> -->
                                        </div>
                                    </div>

                                    <div
                                        class="
                                            js-delete-items-block
                                            card-line-wrap
                                            ws-schedule-rep
                                            ws-bookAvailability-wrap
                                        "
                                    >
                                        <div
                                            v-if="
                                                all_tech_ids === '0' &&
                                                appointmentData['estimate'] >= 0
                                            "
                                        >
                                            <div>
                                                <p style="color: red">
                                                    <strong
                                                        >Sorry, we’re not quite
                                                        there yet</strong
                                                    ><br /><span
                                                        style="
                                                            font-weight: normal;
                                                        "
                                                        >Unfortunately, we're
                                                        not serving your zip
                                                        code that you requested
                                                        at the moment. As we're
                                                        steadily expanding, we
                                                        hope to be serving your
                                                        area soon.</span
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            v-if="
                                                all_tech_ids !== '' &&
                                                all_tech_ids !== '0' &&
                                                appointmentData['estimate'] <
                                                    1 &&
                                                appointmentData[
                                                    'claim_insurance'
                                                ] === '0'
                                            "
                                        >
                                            <div>
                                                <p style="color: red">
                                                    <strong
                                                        >Whoops! - Glass Not
                                                        Available</strong
                                                    ><br /><span
                                                        style="
                                                            font-weight: normal;
                                                        "
                                                        >We're sorry, your glass
                                                        is currently not
                                                        available. But one of
                                                        our representatives will
                                                        check for availability
                                                        and contact you
                                                        shortly.</span
                                                    >
                                                </p>
                                            </div>
                                        </div>

                                        <!-- <div class="avarage-time-line">Your service will take approximately <span><i class="fa fa-clock"></i> 30 - 45 minutes</span></div> -->

                                        <h3 class="h5-nlg mb-2 card-line-title">
                                            Booking Availability
                                        </h3>
                                        <div class="ws-today-row">
                                            <input
                                                id="initSlider"
                                                type="button"
                                                style="display: none"
                                            />
                                            <div
                                                class="slick-nav text-right"
                                            ></div>
                                            <div
                                                class="
                                                    owl-carousel
                                                    today-tomorrow-time-owl
                                                    timeslotevent
                                                    slicko
                                                "
                                            >
                                                <!--Today Slot -->
                                                <!-- <div class="item">
                                                    <h6 class="h-nlg mb-2 card-line-title">{{currentDate(0)}} </h6>
                                                    <ul class="ws-time-slot-list slots0">
                                                    </ul>
                                                </div> -->
                                                <div
                                                    v-for="index in 6"
                                                    :key="index"
                                                    class="item"
                                                >
                                                    <h6
                                                        class="
                                                            h-nlg
                                                            mb-2
                                                            card-line-title
                                                        "
                                                    >
                                                        {{
                                                            currentDate(
                                                                index - 1
                                                            )
                                                        }}
                                                    </h6>
                                                    <ul
                                                        :class="
                                                            'ws-time-slot-list slots' +
                                                            (index - 1)
                                                        "
                                                    ></ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- for timebeing hiding full appointment link -->
                                        <button
                                            id="see-all-apointment"
                                            type="button"
                                            class="
                                                btn-sp
                                                btn-sp-lg
                                                btn-wide
                                                btn-pill
                                                ws-see-all-apointment
                                            "
                                        >
                                            See All Apointment Time
                                        </button>
                                    </div>

                                    <div
                                        class="
                                            js-delete-items-block
                                            card-line-wrap
                                            ws-schedule-rep
                                            ws-bookAvailabilityFull-wrap
                                        "
                                    >
                                        <div class="ws-calender-month">
                                            <div
                                                class="
                                                    owl-carousel
                                                    calender-month-title
                                                    slicko1
                                                "
                                            >
                                                <div
                                                    v-for="index in 5"
                                                    :key="index"
                                                    class="item"
                                                >
                                                    {{
                                                        getAnyDate(
                                                            index - 1,
                                                            'month',
                                                            'MMMM YYYY'
                                                        )
                                                    }}
                                                </div>
                                            </div>
                                            <div class="slick-nav1"></div>
                                        </div>

                                        <div class="ws-calender-date">
                                            <div class="slick-nav2"></div>
                                            <div
                                                class="
                                                    owl-carousel
                                                    calender-date-select
                                                    slicko2
                                                    all_month_days
                                                "
                                            >
                                                <div class="item">
                                                    <div
                                                        class="calender-date-bx"
                                                    >
                                                        <div class="ws-date-no">
                                                            -
                                                        </div>
                                                        <div
                                                            class="ws-day-name"
                                                        >
                                                            -
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="ws-select-time-row">
                                            <h3
                                                class="
                                                    h5-nlg
                                                    mb-2
                                                    card-line-title
                                                "
                                            >
                                                Select Time of Your Appointment
                                            </h3>
                                            <ul
                                                class="
                                                    ws-time-slot-list
                                                    ws-time-slot-full
                                                    selected_month_day_slots
                                                "
                                            >
                                                please select a day

                                                <!-- <li class="ws-time-slot select-time-item-null"><strong>12:00 PM - 03:00 PM</strong><em><span class="js-slot-value">2</span> available</em></li>
                                                <li class="ws-time-slot"><strong>3:00 PM - 6:00 PM</strong><em><span class="js-slot-value">1</span> available</em></li>
                                                <li class="ws-time-slot"><strong>4:00 PM - 5:00 PM</strong><em><span class="js-slot-value">3</span> available</em></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                    <input
                                        v-model="schedule_date"
                                        type="hidden"
                                    />
                                    <input
                                        v-model="schedule_time"
                                        type="hidden"
                                    />
                                    <input
                                        v-model="schedule_slot"
                                        type="hidden"
                                    />
                                    <div class="buttons-mobile pt-md-3 mb-9">
                                        <div
                                            class="
                                                d-flex d-md-none
                                                justify-content-between
                                                mb-3
                                            "
                                        >
                                            <div>
                                                {{
                                                    dateFormat(
                                                        schedule_date,
                                                        'LL'
                                                    )
                                                }}
                                            </div>
                                            <div>{{ schedule_time }}</div>
                                        </div>

                                        <div class="d-flex justify-content-end">
                                            <a
                                                class="
                                                    btn-sp
                                                    btn-sp-light
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    mr-3
                                                    ws-back-btn
                                                "
                                                @click="backtobutton(3)"
                                                ><i
                                                    class="fa fa-angle-left"
                                                ></i>
                                                <span>Back</span></a
                                            >
                                            <button
                                                id="continue-tofive-old"
                                                :disabled="loaderFlag"
                                                type="button"
                                                class="
                                                    js-scroll-top
                                                    btn-sp
                                                    btn-sp-primary
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    ws-next-btn ws-next-step-btn
                                                "
                                                data-hs-step-form-next-options='{
                                                    "targetSelector": "#basicSelectStep5"
                                                    }'
                                                @click="continuetofive()"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div
                                            class="
                                                col-lg-8
                                                mb-3 mb-lg-0
                                                wizard-form-info
                                                wizard-form-info-bg
                                                p-b30
                                            "
                                        >
                                            <div class="pr-lg-5">
                                                <div class="pt-2 mb-3">
                                                    <a href="javascript:void(0)"
                                                        ><img
                                                            class="mr-4"
                                                            src="~/assets/img/google-review.png"
                                                            alt="Google Review"
                                                            height="35"
                                                    /></a>
                                                    <a href="javascript:void(0)">
                                                        <img
                                                            src="~/assets/img/facebook-review.png"
                                                            alt="Facebook Review"
                                                            height="35"
                                                    /></a>
                                                </div>
                                                <blockquote
                                                    class="
                                                        h3
                                                        h5-nlg
                                                        font-weight-normal
                                                        mb-5
                                                    "
                                                >
                                                    I'm absolutely floored by
                                                    the level of care and
                                                    attention to detail the team
                                                    at WindshieldHub have put
                                                    into their work and for one
                                                    can guarantee that I will be
                                                    a return customer.
                                                </blockquote>
                                                <div
                                                    class="
                                                        media
                                                        wirard-media-post
                                                        clearfix
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            avatar
                                                            avatar-sm
                                                            avatar-circle
                                                            mr-3
                                                        "
                                                    >
                                                        <img
                                                            class="avatar-img"
                                                            src="~/assets/img/100x100/img19.jpg"
                                                            alt="Image Description"
                                                        />
                                                    </div>
                                                    <div
                                                        class="
                                                            media-body
                                                            text-lh-sm
                                                        "
                                                    >
                                                        <h5 class="mb-0">
                                                            Charlotte Moore
                                                        </h5>
                                                        <small
                                                            class="text-muted"
                                                            >Happy
                                                            Customer</small
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="
                                                col-lg-4
                                                column-divider-lg
                                                wizard-form-info-bg
                                                m-b0
                                            "
                                        >
                                            <hr class="d-lg-none" />

                                            <div class="pl-lg-5">
                                                <span class="h1 text-primary"
                                                    >200,000+</span
                                                >
                                                <p class="font-size-1">
                                                    car owners trust
                                                    WindshieldHub with their car
                                                    repair and maintenance
                                                </p>
                                                <!-- <a class="font-size-1 text-nowrap" href="#">Read the reviews <i class="fas fa-angle-right fa-sm ml-1"></i></a> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="basicSelectStep5" style="display: none">
                            <div class="row">
                                <div
                                    class="
                                        col-md-5
                                        mb-5 mb-md-0
                                        order-md-2
                                        basicSelectStep5-sidebar
                                    "
                                >
                                    <div class="row ws-car-info">
                                        <div class="col-6">
                                            <img
                                                src="~/assets/img/car-white.png"
                                                alt=""
                                                width="60"
                                                height="30"
                                            />{{ appointmentData.year }},
                                            {{ appointmentData.make }}
                                            {{ appointmentData.model }},
                                            {{ appointmentData.style }}
                                        </div>
                                        <div class="col-6">
                                            <img
                                                src="~/assets/img/marker-white.png"
                                                alt=""
                                                width="25"
                                                height="30"
                                            />{{
                                                appointmentData.local_city_name
                                            }}
                                            {{ appointmentData.zip }}
                                        </div>
                                    </div>

                                    <div class="pl-lg-4">
                                        <div
                                            class="
                                                text-md-right
                                                mx-n3 mx-md-0
                                                mb-3
                                                clearfix
                                                ws-quate-num
                                            "
                                        >
                                            <!-- <span class="popup-check-btn" data-toggle="modal" data-target="#myModal">!</span> -->
                                            <div class="wizard-quote-row">
                                                <code
                                                    class="
                                                        d-block
                                                        d-md-inline-block
                                                        py-1
                                                        px-3
                                                        bg-black
                                                        text-white
                                                        rounded
                                                        wizard-quote-box
                                                    "
                                                    ><strong
                                                        >Quote&nbsp;#:</strong
                                                    ><strong
                                                        class="font-size-2"
                                                        >{{
                                                            appointmentData.quote_id
                                                        }}</strong
                                                    ></code
                                                >
                                            </div>
                                        </div>

                                        <div
                                            class="
                                                rounded
                                                overflow-hidden
                                                shadow-sm
                                                mb-5
                                                mx-n3 mx-md-0
                                                wizard-total-body
                                            "
                                        >
                                            <div
                                                class="
                                                    rounded
                                                    overflow-hidden
                                                    shadow-sm
                                                    mb-5
                                                    mx-n3 mx-md-0
                                                    wizard-total-wrap
                                                "
                                            >
                                                <div
                                                    class="
                                                        bg-primary
                                                        rounded
                                                        text-white
                                                        p-3 p-lg-4
                                                        wizard-total-price-box
                                                    "
                                                >
                                                    <!-- Card -->
                                                    <div
                                                        class="
                                                            position-relative
                                                            summry-top-info
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                card-btn
                                                                text-white
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    row
                                                                    mb-lg-3
                                                                    wizard-total-price-table
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        col-lg-6
                                                                        position-relative
                                                                        mb-0
                                                                    "
                                                                >
                                                                    <span
                                                                        class="
                                                                            d-block
                                                                            mb-1
                                                                            ws-yoTo-price
                                                                        "
                                                                        >Your
                                                                        total
                                                                        price:</span
                                                                    >
                                                                    <h2
                                                                        class="
                                                                            font-size-4
                                                                            text-white
                                                                            mb-0
                                                                        "
                                                                    >
                                                                        ${{
                                                                            appointmentTotal(
                                                                                appointmentData
                                                                            )
                                                                        }}
                                                                    </h2>
                                                                </div>

                                                                <!-- <div class="col-lg-6 small text-lh-xs">
                                                        <dl id="priceDetails-4" class="row no-gutters mb-0 d-lg-flex pt-3 pt-lg-0">
                                                            <dt class="col-8 font-weight-normal opacity-lg mb-1 mb-lg-2">Competitor Price</dt>
                                                            <dd class="col-4 pl-2 text-right mb-1 mb-lg-2">$9999</dd>
                            
                                                            <dt class="col-8 font-weight-normal opacity-lg mb-1 mb-lg-2">Dealer Price</dt>
                                                            <dd class="col-4 pl-2 text-right mb-1 mb-lg-2">$350</dd>
                            
                                                            <dt class="col-8 font-weight-bold opacity-lg mb-1 mb-lg-2">You save</dt>
                                                            <dd class="col-4 pl-2 font-weight-bold text-right mb-1 mb-lg-2">33%</dd>
                                                        </dl>
                                                    </div> -->
                                                            </div>

                                                            <div
                                                                class="
                                                                    small
                                                                    pt-2
                                                                    d-block
                                                                    opacity
                                                                    text-lh-sm
                                                                "
                                                            >
                                                                Includes mobile
                                                                service,
                                                                installation
                                                                &nbsp;lifetime&nbsp;warranty.
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="summry-accord">
                                                        <div
                                                            class="
                                                                summry-accord-title
                                                            "
                                                        >
                                                            Show Quote Detail
                                                        </div>
                                                        <div
                                                            class="summry-arrow"
                                                        >
                                                            <i
                                                                class="
                                                                    fa
                                                                    fa-angle-down
                                                                "
                                                            ></i>
                                                        </div>
                                                    </div>

                                                    <!-- End Card -->
                                                </div>

                                                <div class="summry-accord-body">
                                                    <!-- mobile view -->
                                                    <ul
                                                        class="
                                                            ws-quote-destails
                                                        "
                                                    >
                                                        <li>
                                                            <span
                                                                >Your Car</span
                                                            >
                                                            <strong
                                                                >{{
                                                                    appointmentData.year
                                                                }},
                                                                {{
                                                                    appointmentData.make
                                                                }}
                                                                {{
                                                                    appointmentData.model
                                                                }},
                                                                {{
                                                                    appointmentData.style
                                                                }}</strong
                                                            >
                                                        </li>
                                                        <li>
                                                            <span>Time</span>
                                                            <strong
                                                                >{{
                                                                    dateFormat(
                                                                        schedule_date,
                                                                        'dddd, MMM DD'
                                                                    )
                                                                }}
                                                                at
                                                                {{
                                                                    schedule_time
                                                                }}</strong
                                                            >
                                                        </li>
                                                        <li>
                                                            <span
                                                                >Services</span
                                                            >
                                                            <strong
                                                                >Change
                                                                {{
                                                                    appointmentData.glass_type
                                                                }}</strong
                                                            >
                                                        </li>
                                                        <!-- <li>
                                                        <span>Services</span>
                                                        <strong>Change Door Glass Front</strong>
                                                    </li> -->
                                                        <li>
                                                            <div
                                                                class="
                                                                    ws-quote-total
                                                                "
                                                            >
                                                                Total Price
                                                            </div>
                                                            <div
                                                                class="
                                                                    ws-quote-amout
                                                                "
                                                            >
                                                                <b
                                                                    >${{
                                                                        appointmentTotal(
                                                                            appointmentData
                                                                        )
                                                                    }}</b
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="p-3 p-lg-4 mob-none">
                                                <div class="card-line-wrap">
                                                    <span class="card-line-btn"
                                                        ><i
                                                            class="
                                                                fa fa-angle-down
                                                            "
                                                        ></i
                                                    ></span>
                                                    <h3
                                                        class="
                                                            h5-nlg
                                                            mb-2
                                                            card-line-title
                                                        "
                                                    >
                                                        Summary
                                                    </h3>
                                                    <p
                                                        class="
                                                            mb-1 mb-md-2
                                                            ws-summary-address
                                                        "
                                                    >
                                                        <img
                                                            src="~/assets/img/car.png"
                                                            width="60"
                                                            height="30"
                                                            alt=""
                                                        />
                                                        {{
                                                            appointmentData.year
                                                        }},
                                                        {{
                                                            appointmentData.make
                                                        }}
                                                        {{
                                                            appointmentData.model
                                                        }},
                                                        {{
                                                            appointmentData.style
                                                        }}
                                                    </p>
                                                    <p
                                                        class="
                                                            mb-1 mb-md-2
                                                            ws-summary-cell
                                                        "
                                                    >
                                                        <span
                                                            class="text-primary"
                                                            ><img
                                                                src="~/assets/img/marker.png"
                                                                width="25"
                                                                height="30"
                                                                alt=""
                                                            />
                                                            {{
                                                                appointmentData.local_city_name
                                                            }}
                                                            {{
                                                                appointmentData.zip
                                                            }}</span
                                                        >
                                                        <span
                                                            class="text-danger"
                                                            ><span
                                                                class="
                                                                    text-primary
                                                                "
                                                            ></span
                                                        ></span>
                                                    </p>
                                                    <!-- <p class="mb-1 mb-md-2 card-line-content">{{appointmentData.local_city_name}} {{appointmentData.zip}}</p>
                                            <p class="mb-1 mb-md-2 card-line-content">{{appointmentData.year}}, {{appointmentData.make}} {{appointmentData.model}}, {{appointmentData.style}}</p> -->
                                                </div>

                                                <hr
                                                    class="
                                                        my-3 my-md-4
                                                        mob-none
                                                    "
                                                />

                                                <div
                                                    class="
                                                        d-none d-sm-block
                                                        mob-none
                                                    "
                                                >
                                                    <h3 class="h5-nlg mb-2">
                                                        Choosen date &amp; time
                                                    </h3>
                                                    <p class="mb-1 mb-md-2">
                                                        {{
                                                            dateFormat(
                                                                schedule_date,
                                                                'dddd, MMMM DD, YYYY'
                                                            )
                                                        }}
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        {{ schedule_time }}
                                                    </p>

                                                    <hr
                                                        class="
                                                            my-3 my-md-4
                                                            mob-none
                                                        "
                                                    />
                                                </div>

                                                <div
                                                    class="
                                                        d-none d-md-block
                                                        mob-none
                                                    "
                                                >
                                                    <h3 class="h5-nlg mb-2">
                                                        Includes
                                                    </h3>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Mobile Service
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Glass Clean Up
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Glass Disposal
                                                    </p>
                                                    <p class="mb-1 mb-md-2">
                                                        <span
                                                            class="
                                                                badge
                                                                badge-success
                                                                mr-1
                                                            "
                                                            >Free</span
                                                        >
                                                        Lifetime Warranty
                                                    </p>

                                                    <hr class="my-3 my-md-4" />
                                                </div>

                                                <div
                                                    class="
                                                        card-line-wrap
                                                        mob-none
                                                    "
                                                >
                                                    <span class="card-line-btn"
                                                        ><i
                                                            class="
                                                                fa fa-angle-down
                                                            "
                                                        ></i
                                                    ></span>

                                                    <h3
                                                        class="
                                                            h5-nlg
                                                            mb-2
                                                            card-line-title
                                                        "
                                                    >
                                                        Detailed Pricing
                                                    </h3>

                                                    <div
                                                        class="
                                                            js-delete-item-parent
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-8
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon/windshield.png"
                                                                    alt="Windshield"
                                                                    height="18"
                                                                />
                                                            </div>
                                                            {{
                                                                appointmentData.glass_type
                                                            }}
                                                        </div>
                                                        <div
                                                            class="
                                                                col-4
                                                                text-right
                                                            "
                                                        >
                                                            ${{
                                                                appointmentData.estimate
                                                            }}
                                                        </div>
                                                    </div>
                                                    <!-- <div v-for="(glass,index) in appointmentGlasses" :key="index" class="js-delete-item-parent row mb-1 mb-md-2 card-line-content">
                                                <div class="col-8 font-weight-normal">
                                                    <div class="d-none d-lg-inline-block text-center mr-2" style="width: 28px;">
                                                        <img :src="'/assets/img/icon/windshield.png'" alt="Windshield" height="18">
                                                    </div>
                                                    {{glass.glass_type}}
                                                </div>
                                                <div class="col-4 text-right">${{ glassTotal(glass) }}<a v-if="this.appointmentGlasses.length>1" class="text-muted opacity-sm opacity-1-hover text-danger-hover" href="javascript:void(0)" @click="removeGlass(index,glass)" ><i class="far fa-trash-alt"></i></a></div>
                                            </div> -->

                                                    <div
                                                        class="
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-7
                                                                font-weight-normal
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon-tax.png"
                                                                    alt="Tax"
                                                                    height="20"
                                                                />
                                                            </div>
                                                            Tax
                                                        </div>
                                                        <div
                                                            class="
                                                                col-5
                                                                text-right
                                                            "
                                                        >
                                                            ${{
                                                                appointmentData.tax
                                                            }}
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="
                                                            row
                                                            mb-1 mb-md-2
                                                            card-line-content
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                col-7
                                                                font-weight-bold
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    d-none
                                                                    d-lg-inline-block
                                                                    text-center
                                                                    mr-2
                                                                "
                                                                style="
                                                                    width: 28px;
                                                                "
                                                            >
                                                                <img
                                                                    src="~/assets/img/icon-total-2.png"
                                                                    alt="Total"
                                                                    height="20"
                                                                />
                                                            </div>
                                                            Total
                                                        </div>
                                                        <div
                                                            class="
                                                                col-5
                                                                text-right
                                                                font-weight-bold
                                                            "
                                                        >
                                                            ${{
                                                                appointmentTotal(
                                                                    appointmentData
                                                                )
                                                            }}
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr class="my-3 my-md-4" />

                                                <h3 class="h5-nlg mb-2">
                                                    Promo Code
                                                </h3>

                                                <div class="input-group">
                                                    <input
                                                        v-model="promo_code"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Promo code"
                                                    />
                                                    <div
                                                        class="
                                                            input-group-append
                                                        "
                                                    >
                                                        <button
                                                            class="
                                                                btn btn-primary
                                                                font-weight-normal
                                                            "
                                                            type="button"
                                                            @click="
                                                                applyPromoCode()
                                                            "
                                                        >
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="
                                                font-size-1
                                                px-3 px-md-4
                                                ws-secBook-wrap
                                            "
                                        >
                                            <h3 class="h5-nlg mb-2">
                                                Secure Booking
                                            </h3>
                                            <div class="mb-3">
                                                <img
                                                    class="mr-2"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAA6CAMAAAB7yGD2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURYGsuEiHm2ibq1ORpZ29xnqltDh/lVmTpP+zoTuCmwZjgP///wVifwBbegFefRRuikKIng9ohWGZqjyDm+nw8iJyjIazwtvn67bQ2PP3+FSRpfv8/dDg5HSmtjF7k63J0pO4xZi+ycXY3qTDzoCtu2ufr802WYAAAAAKdFJOU2ixkuwhTNhoATsb7UeNAAAHEElEQVRo3s2ai3abOBCGndTJpugCAoQQ4irg/V9x/5Gw42yMk/Ss00xPyViDq6/SaC6Qw0uU4+9/Pi+H+8nTcQM6hOvTw69lrD4tRXo/0c+PxxPY8WFtHfuC5CK5l3CeqOenCHZ8mNnXJJf/L0uU1xH9FMAehp353X3B+Ds5m/ojwH53O9MP9b3A+J6c73gA2IO5PrvR7X3A+A053aKPh+Ov6zvmGjF+O9j5lvRw2NvJSvBkcX9rK9U/h9/V1bm94gmXmbn3qbyKFcGWa1PbIswt9XD/cHFNdsEGefoPrfZHga3n2C6L9ieBNa9TSzX8pBW7mJor/3PA5supZfNzwEr9ZsnMPthFuJabGpVzBHgfqq5GsDcRg8CuB9jhMqzI+saKaR3vSXSvcT0robpSkidboaUUXRMMJGr7QKPvrbfB2KzkZ8BkbsuecIraOuubRGab4kuIGVNel0HWjq7toqWsyqort1EffzZLtKbyNpgzrM3Ehs+TdheM42CMAm5o8R3HrD4rLXMWMbBOgmLtCp+hAdOLiU0LqRjvWkZGm4/R2mp+E2xZcd/C5RbK3B4YTM6VmqeG+V71w5qWmwKeLtWdc71nHe1TUrEh1TnsAJsTnQ5sSjW+mJOVj5u1vrliPunJ3+twBDivd0+lmNmIiUXObA+X52INCv6oFhW40JYVnlVFUfSiYrPgonGsH4M2o1CQOFdLsMaxhrmQDHfA4DUypXq7pEArut0Ay7W1OmetrFgbQSvm48ED2JTnNc53jIIG9yDRcSxpQxCJJLDTgW8JLFpDQ7ED1kk685QlXSNlYXfBxMLKrnIs65hJ6MhjoI0BQUW/LHPZMuO9n0UEwxr+BwzWdopgkqz7K2b78J+W8A7mpdrPlecAN2TM5UJKrTKqMKXQKXysnizmTmhPpZRhKwXIrX4L1gQrjQmsqg3evwMWTwaypMdCTPvVhcxZiTZzcravcVaarmyxceWCs99q4lnIK7CnTZ7nPbY7Xwc6xNMbsJGsgPUrWSu57/zR/+KZG/Ib9RhiRYVFkJ5Nmye1eusUvDZUonjWnlZ8jBWpG+nEDAAbgMhVuYWB8WS9FS5OmZInZjD7YDwdJ1pcmU0LV+vgh1XBubo6KMtUSNlPU99NQZqGrkuBE5tP+BdwbRDol2jNztZb4cJ1m537m6U1FzEGSwGvljJ+5AJTQ6G/uAh8CCLjT7ndf7qKd9abAXYOqeFd9v7W6uJ6rjQZJcCV/Tgw5hYl+/IHgtHB9R81vJxCEJxr8xdOvkYuRquNURFcla4ySvBEssQv/iFYXX3UictsnKZxXJVoRjpnxbgkCU7n3Cictl6PIx3aqEGmSqm19lOjuF7qeiz+EMx9+BhKbt/1fGK1IJc8xeORI6IXsd6Elm1f1NFabbGtkV8B88U7qffBTNNQrhxDyEQ6751bi8pkGxgKD6QkaHZFeG9QJK3ZaHpkjKwZfMq/ArbGsHIS+tTsg3mUNiUrzmAFc9hZFXIggdlMBrBSUaiilAor6pWy4LjrS1tZzxB9Kl41fbqxYrb1JTLfGYw2qRyasIHA8eFpFjTXQhqKi7DKnirZqZBf97HuNPX6kY+hgkWGPIGZRM8UY8YNDPVm3ca1C/vaD2V4kpR5oNmv+Vh0tG0zxfABGLK2ntmM+hD1Jz4icOgGpUa/bWAo5kgr+r5PESbIWqZC9muLmop/FczOMbfO9gMwr5RCxYLSOleAmflcpSJzJzAdyt+gUWWv5iWFx9qszpNQU/I/CRfsM+HCoenC3lAfZSwWCuekbC14w1aisuNzAAu9kFmitUaNY1rHlk9upesaSL7AQ4egrfB60wR1tNfAVmBZdINK6gFYPpMqh/fYWqOtbIrSpJynQYvSB+ug1QKsclSfdH7XxxIk9WzZihHynSiZvZKSFDwMVTQVOVL3fWjEORpx9H2pVgomKlFIixLb9NBE9b2W/PNg3TCMGs1YhfMzzBmag5araRi65PIYvCbxi2eUl48u4iuO5PSk4vIdQ7Ri5AbWFbAhRNgGYBRU0YmULU9prbSY/151QStW16iWB4AVdT1kCGNYsbmuu+SyBPp+sC0DUdcVNERtj/Yawkf2V8EK6rNk4yqhoWWJblueoL1q6OFCaYz9W1sZngukwo8xcTeia6ltZ2wSvfFz3dpvAzs2b8Gcq5WsAUaPcQqxwseMc3YR2ptuMeZbwOiVzctzebGVGilNoZCphKLchlyJtAFNc5EbU41leecXqa8vuV4eq9cOPC5jhgabU1RW/YRCJsRnvZa2LU18E3z/rXx+Obwcn889hwlCi1JGlWqT10FrSvctzs/TJ3rD+9S0f/XV8xWux/iy/ul5sj8HjCf68fTrDceHXxXC+6clu+gJ/l9Bdk+fD6+/d/FyPFRZ8XnJ7iVF9/gUif4F4OrMFu/54vQAAAAASUVORK5CYII="
                                                    alt="BBB"
                                                    height="30"
                                                />

                                                <img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABACAMAAADLTa7fAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGtUExURQAAAHRbI/zCD0VFRXNzc0o7Ivf394uJh3Nzc1VVVUFCQ/S4Dq+EFPu+DlVVVd+sDq+FC2BgYElIRtmlDFRUVPC3EDk5OceXEktLS7uOD5mZmax/Du+3ENKgDt6pDlRUVE1NTdHR0uHh4XFxcsvLy+qyD1JSUoCAgL+TDPnJVfXSErS0tsXFxM+gHl5bVouLi5OBT6qRSuO3Q6qqqpycnNPAh+np6QAAAOjYrN+tIYWFhZ6Udv////+8DwAAAP///lpaWvX19ZSUlKSkpP7+/fLy8gYGBf+6BP+7Cuvr6/j4+MDAwO/v7/z8/Pr6+ujo6P/ADp6enrS0tJubm+Li4hQUFCkpKSMiIpeXlx4dGcfHx2VlZd7e3v/FDw0NC87Ozqysq25ubq+vr0BAQJGRkf+/GdHR0aioqEhISNra2lVVVYCAgKKiorq6unV1df/9+NbW1oyMjP/DJjY2Nv/67v69EC4uLl1dXf/xzv/IO//SXE9OTf/13v/chP/imP/NTv/lpf/Xb//svv/psq6HC4JiCV5GCG5UCEo5B5FvD9mjC8ufJd/RkqSWa+3hxaOLwmgAAAA8dFJOUwAQ+DtoBv0IWe5n6hrx9qhB/FaO19MnZoVVOSn+fMHIq4ZdsCXHtpOaX/xngjZorfqBS1bC/6PtxO7E1gzHni4AAAskSURBVGjezZqHe9pIGofBXnAcE5c4tuOW3m6T7Xu7e/fIBLAkkChCNIPoxXQw2Abca7L9/uf7ZlSQKEmei5PzlycYNCPNq99XZjSg0/2PtjC3oLt29uLL1euG9PLhd6vT1w3qJ+NLveE6AS09fPXw1atrptRDo9H4aOxaxdSTR7+c/fLTE93C1OL1gXpkPImvjo3pxkxjn3lkvemr7/8B9v1XJr1GpSe6R8QvL757ufS5tTAtzk7NTdzCNjF3b3Zh2aCo9BCgHupfwd/PaYbp2bmJkZHWmmStkZFbc1MLX99E9lz4983HwmP4/+NN0b7+4mPsxujovKqwLL38YWlJ/0M/0tQEAmopUGst+DBy61/fzoyPz8xEsz+H0u2f253J8SuyO8/ujsoRYvrmxhfffP1jT6wui0gDrLXy139Slna7WLG0D+vN6tWYP1dJd8bH79+dF8d/Pnrj8eNvNFCGhbkhSCLWP4s0HaXCdIWijNarMcoVSKYqM5N3RCyAev74+RN1xs3e8g5n8sbfRBJm806ubK4QV2ikh2WSNsC6CcG1pH+ytLSkUso01SuTw6Fi+vPN298jZjOdoK8WCpmHauQs4w/mdYAzpnae6d6ImsduX2ttbrbW7HaRLP428duXb81gwXJKvkkrRVFu+R37MVhuypmevD/aWy2nRlREju2D47OLi72Ly5OD/TXg8sbfmn9/8yuC2gkYpStZO8ViMYzeUdFitjlcCJb1vF+tWKV8R0tlUPnOvnZ6drS7tbVFkvCye3R5vmn/E4CQ58z0HylSvg61QdN0KAbvmDakwNDxmtms7QOCiwn3UK2OdGXav9zdet3t/Hprd+/8DwSEjP7zYKsLhY6gCGNCZvNQKBKSNv0hPqSAar7LND3hlWVqHR9t9XnceQijR36NwP8V74kWKlJ6DxTq9kFQBJUrP1OmWv29uKzT5tnWgN4WKAZmFOi/rbQc20caKHNdBeVJVpt+pxXp03Aix5YEoQAnlwUnA59Ywd/kBRRg7qSTg9b1ZrWkGoerT95VHkxk5zm2LwYwxdbbaPDfoSi8AXr7+esuFAwYSSpQectGMBGMFGswqiXSIZh0KBIJwrmJSARytnYYgeYNiwDnZiMVYzMEH0PrKk/nZ8alsNLPeWWdBjGx5SAOKDrx28oK7rXXhSpjHAnKGRIjj47whLtoDgqdhFkxnihEpOYNH0GFzBszYivcVDcHC+Vnhh6hTgb5bl2K8eDGH3GcovYDUoGq2KAhSWGoABJ0IxtCfQWiCNWDpstNWxo+Z3PNRhJqrzmURT4PldgQustDS1BKFdlc9cnbmoiy48SirFombke61c7fKy1J0CMFqs7BywzTRlAVGCfdCMSaKIhYgKLpJmO11uDctNXq6YAXK6VAow43WUdQwSrDVOFDUVV3SV/5AZJq+pbsPOQWJxQVTg1VkYRKpHf37RL9SReKbMLVfQAeZYGs4yIJkgK6YKOI7oNCVzTj7AuAUHUKml1RkCoGnbNQhRk4uqOWgUlPoqialYU6R16p03Qim1EKJFGKSM5LNYgzaTK0n24pUEQA7rmI3BdLmGkfPqcBTqlBFRE/1kQoJ21OiNFTo81BJ4KCNHT1QpF8GRJQ/zSuEopYR5EYrMv9yLRUNEMwy8lSSf4ToZBUNKgZbdBmWhA9DiNlDpFcKigfiB3AzXnAqw2DIhqd+3rdslQ47adYHsqCfRV1iV2SQRGqnkQz77Hsv8suFMHhgmGOckGUYshAFBrV22BMBSUoQlZRbgyFsqYn53WLLU2gEIFDTIXDgXBHpSgP49XAntz3WAVFhkUoEqKojRwUgDch9KKBohAGOtCAAMyiIjIYimyWb+peSEWqJVUfsoTvnE6jnBAkoRJO3La77ZDyVAVFMPiEKJECJ4Yq680s/K2QCpQTJRjHUTm46E5zvdKGz1V2KBSRKj/Q3fNKxXxXRq1hkkTFTZCyUDNi1r4+Ff1n3ydVUKJUUYJFvRNBNHdnuS5ULIho2rwLhT40QycLZR0O5Szf0ckhta9kHJvDVSDBK0JtyBPUuV11B1REmmmxVDMQXWmpgpcbpDsLV8BQ7rroXiJmEatLIhrAN4Shgn1QecukTg6TU9VsXRZRklLqmW0y8LEayhg9LPqxtoXiYTGH6rEv2t5ol6sMlKNK8dAiFjyusrOxsZODFVPBAs0zGShmLJxbhzilZg6Lae2iNdYp6+Q1y4E6LcX5f0eqUVkXMQiKZBhGvEkW3uHEYF2BUoDBg7jgmHQvFFcqcRTuJzeT0OySruHqmf87lkFKEe6cWWVSJvdBDVnTDTxIvrO5D2qi1RtT6DZ3VFCHXXnP3w/10YZiqi/7sBVohSlR6x7WZN8nMpR9L+LaOiWFQXaQUNo6Bb6Qn1NINzKJ1GOUDyqeI7vNYle3dHTAzaE61VvRJasOiKieik4wtVQhI8BcTwo+sIwTUbDJDByEsPY4a3A7bM0JrwxqrzVYnKG4LxQZaw3eCIEeLlzRe+Y+ZQnRlqCyFNEb59Lc5yr4fbVUChLQnQlnEBSJIMKFWsoG0w27zgMvy68DSsxW9fkK4RpIyIWrEpSL532Zql/QPhTiua9nlaAAV5RlbNd7+w71KiGfS7KsFeU9QHFGoxEJkbf5XCyVd8lQRgwVyDmNRiYVhmUCZ/NBV+Rhyl8wGrmMraSBalhglaBaT2kapYXUBtM91LOeSuaSUo4DlKSnBw9MeMg+KOjpzJUwlBy3/hTMZIFwRiMVXk/ppkfWBkklLRDqZJ9Qcvhxfl4I4CwAqBIXQJpRPC8/1fdAkR5XyoaUCme4QICSoQhrlR+w8tQ/9arX6IolQz2PGseONc0anWysh/2Zkug+nvdncMQUPIOgwtWMr+B34h5+6NtQoNhCWF3SYY2O910WlG0ETQJ6khVLutaV9mLToV43I4FcDZ/fX8JQyVIpBoeZIVC2grNgE5CsXDhVKjVcKii/SyPU7d7nvkvt/gzj6jLt7Tv63exhG2EfiaBcYs2x8oozPFr3sTGbD/WAmJLKlAhF8VXVhFy1PDD0PSFfDquzRzJTVygPIqb4AqkKdNKHkwntVpEpJAETTnnEQPdkcA5oAp1EOayaMZLKE7J6L2H77PVApot9ZVtG3kuAilliGAFdEwc6GAwfC683mFIKlSwh52SYWg49TODsa+RqpBjoYAwuCVxA4PnuEx1Tt9w19O+6ODbPj/qRtk62la1Gh4xNCjyEbDgFl3encjxYFb1N8mH4l0eZ6AtX+bAPaRhDUOx6mENQkBS8H1xJ+VF6pGLdDa+mpbvrojOsqrZg9896lgDkxUG3VZWiLJcXhAY8X8K6Po8NVQMPlxSSARyLVAPacYhRSeS5QBKorWJXSFq2kc83YlaFyWqzqPendHq5gmKxTk/2lJHJo7OD7e5mqP30SLOzK03Ibg82+aiHVDYW3dIxUn4lxa5uHJQeT7cMunKdO6OaLzZNU3H1nvn26fHJ5cXF5dnxwf6mqsG+f/T6E61YSpVepl4qBLaJTHvMvr/3iZhYX9pyf7TvC2DTlNe79m4Dpk+zuPPkmzOTd+cHfCltmr0VfxeSw3Fw9EmYGKEZtdy/rR/8zePiXHy4WN7tk13yis3DUjGnvx613Bkok1gZlmcnhmB5W399a7tya1bq6Whn/NnNef27vqadngKsHi6vNw5IHcsnsPHx+w/ujr7vFw4G01erTye8ANbCBkDxlbnZxduy3bhSGx2d13/Qjy70punVqafKd8hTq4vLeoNiY1dqhg//FYhBrzctT08vLk5PL5tM1+nnI6Iw/5+x/ws1SEzqGnqdkgAAAABJRU5ErkJggg==="
                                                    alt="Norton"
                                                    height="30"
                                                />
                                            </div>
                                            Our booking process certified by
                                            industry leaders.
                                        </div>

                                        <div class="d-none d-md-block">
                                            <hr class="my-3 my-md-4" />

                                            <ul
                                                class="
                                                    list-unstyled
                                                    px-3 px-md-4
                                                    font-size-1
                                                "
                                            >
                                                <li class="mb-1 mb-md-2">
                                                    <a
                                                        class="link-muted"
                                                        href="#"
                                                        >How WindshieldHub works
                                                        →</a
                                                    >
                                                </li>
                                                <li class="mb-1 mb-md-2">
                                                    <a
                                                        class="link-muted"
                                                        href="#"
                                                        >Our 12-month, 12.000
                                                        miles warrenty →</a
                                                    >
                                                </li>
                                                <li class="mb-1 mb-md-2">
                                                    <a
                                                        class="link-muted"
                                                        href="#"
                                                        >Frequently Asled
                                                        Questions →</a
                                                    >
                                                </li>
                                                <li class="mb-1 mb-md-2">
                                                    <a
                                                        class="link-muted"
                                                        href="#"
                                                        >How Affirm financing
                                                        works →</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                        col-md-7
                                        order-md-1
                                        basicSelectStep5-content
                                    "
                                >
                                    <div class="ws-promo-code">
                                        <form class="flex-column-reverse">
                                            <h3 class="h5-nlg mb-2">
                                                <span class="ws-promo-btn"
                                                    >Promo Code
                                                    <i
                                                        class="fa fa-angle-down"
                                                    ></i
                                                ></span>
                                            </h3>
                                            <div class="ws-promo-form">
                                                <div class="input-group">
                                                    <input
                                                        v-model="promo_code"
                                                        type="text"
                                                        class="form-control"
                                                        placeholder="Promo code"
                                                    />
                                                    <div
                                                        class="
                                                            input-group-append
                                                        "
                                                    >
                                                        <button
                                                            class="
                                                                btn btn-primary
                                                                font-weight-normal
                                                            "
                                                            type="button"
                                                            @click="
                                                                applyPromoCode()
                                                            "
                                                        >
                                                            Apply
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div id="book-appointment-contact">
                                        <div class="mb-7">
                                            <h3 class="h5-nlg mb-3">
                                                Your Contact Information
                                            </h3>
                                            <p>
                                                Please provide the Contact info.
                                            </p>

                                            <div class="row">
                                                <div class="col-12">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                            relative
                                                        "
                                                    >
                                                        <input
                                                            v-model="full_name"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Full Name*"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="
                                                    form-group form-group-nlg-sm
                                                "
                                            >
                                                <input
                                                    v-model="company_name"
                                                    type="text"
                                                    class="
                                                        form-control
                                                        form-control-nlg-sm
                                                        form-control-mobile
                                                    "
                                                    placeholder="Company Name"
                                                />
                                            </div>

                                            <div class="row">
                                                <div class="col-12">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                            relative
                                                        "
                                                    >
                                                        <input
                                                            v-model="email"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Email*"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-6 pl-md-3">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="phone"
                                                            v-maska="
                                                                '(###)###-####'
                                                            "
                                                            type="tel"
                                                            class="
                                                                js-masked-input
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Phone Number*"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-6 pl-0 pl-md-3">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="
                                                                alternate_phone
                                                            "
                                                            v-maska="
                                                                '(###)###-####'
                                                            "
                                                            type="tel"
                                                            class="
                                                                js-masked-input
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Alternate Phone Number"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="book-appointment-address">
                                        <div class="mb-7">
                                            <h3 class="h5-nlg mb-3">
                                                Your Address Information
                                            </h3>
                                            <p>
                                                Please provide the address where
                                                you would like to have your
                                                vehicle serviced.
                                            </p>

                                            <div class="row">
                                                <div class="col-12">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                            relative
                                                        "
                                                    >
                                                        <input
                                                            ref="address"
                                                            v-model="address"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Address*"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-6 col-md-6">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="apt_no"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Apt/Suite#"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div
                                                    class="
                                                        col-6 col-md-6
                                                        pl-md-3
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="city"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="City*"
                                                        />
                                                    </div>
                                                </div>

                                                <div
                                                    class="
                                                        col-3 col-md-3
                                                        pl-0 pl-md-3
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="state"
                                                            type="text"
                                                            class="
                                                                js-state
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="State*"
                                                        />
                                                    </div>
                                                </div>

                                                <div
                                                    class="
                                                        col-3 col-md-3
                                                        pl-0 pl-md-3
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="zip"
                                                            type="text"
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="Zip Code*"
                                                            required
                                                            minlength="5"
                                                            maxlength="5"
                                                            @change="
                                                                zipCodeChanged()
                                                            "
                                                            @keypress="
                                                                isNumeric(
                                                                    $event
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12">
                                                    <div
                                                        class="
                                                            form-group
                                                            form-group-nlg-sm
                                                        "
                                                    >
                                                        <input
                                                            v-model="vin_no"
                                                            type="text"
                                                            style="
                                                                text-transform: uppercase;
                                                            "
                                                            class="
                                                                form-control
                                                                form-control-nlg-sm
                                                                form-control-mobile
                                                            "
                                                            placeholder="VIN # if Available"
                                                            minlength="17"
                                                            maxlength="17"
                                                            @keypress="
                                                                isNumericAlpha(
                                                                    $event
                                                                )
                                                            "
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="
                                                    form-group form-group-nlg-sm
                                                "
                                            >
                                                <textarea
                                                    v-model="comments"
                                                    class="
                                                        form-control
                                                        form-control-nlg-sm
                                                        form-control-mobile
                                                    "
                                                    placeholder="Comments or Instructions"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="book-appointment-payment">
                                        <div class="mb-0 mb-md-7">
                                            <h3 class="h5-nlg mb-3">
                                                Payment Info
                                            </h3>
                                            <p>
                                                This is a secure 2048-bit EV-SSL
                                                encrypted payment –
                                                <span class="text-success"
                                                    >Strongest Available</span
                                                >.
                                            </p>

                                            <div
                                                id="accordionPaymentInformation"
                                            >
                                                <div
                                                    class="
                                                        card
                                                        mb-3
                                                        mx-n3 mx-md-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            ws-accordion-wrap
                                                        "
                                                    >
                                                        <label
                                                            id="headingPaymentCash"
                                                            class="
                                                                card-header
                                                                cursor-pointer
                                                            "
                                                            for="payment-cash"
                                                            data-toggle="collapse"
                                                            data-target="#collapsePaymentCash"
                                                            aria-expanded="false"
                                                            aria-controls="collapsePaymentCash"
                                                        >
                                                            <div
                                                                class="
                                                                    form-group
                                                                    form-group-nlg-sm
                                                                    mb-0
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        custom-control
                                                                        custom-radio
                                                                    "
                                                                >
                                                                    <input
                                                                        id="payment-cash"
                                                                        v-model="
                                                                            payment_type
                                                                        "
                                                                        type="radio"
                                                                        class="
                                                                            custom-control-input
                                                                        "
                                                                        value="later"
                                                                        name="payment-way"
                                                                    />
                                                                    <div
                                                                        class="
                                                                            custom-control-label
                                                                            pl-2
                                                                        "
                                                                    >
                                                                        Cash
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="ml-auto"
                                                            >
                                                                <img
                                                                    src="~/assets/img/dollar.png"
                                                                    alt="Cash"
                                                                    width="31"
                                                                />
                                                            </div>
                                                        </label>
                                                        <div
                                                            id="collapsePaymentCash"
                                                            class="collapse"
                                                            aria-labelledby="headingPaymentCash"
                                                            data-parent="#accordionPaymentInformation"
                                                        >
                                                            <div
                                                                class="
                                                                    card-body
                                                                "
                                                            >
                                                                <p>
                                                                    Please
                                                                    provide the
                                                                    exact amount
                                                                    in cash to
                                                                    our
                                                                    technician(s)
                                                                    once your
                                                                    installation
                                                                    is
                                                                    completed.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="
                                                        card
                                                        mb-3
                                                        mx-n3 mx-md-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            ws-accordion-wrap
                                                        "
                                                    >
                                                        <label
                                                            id="headingPaymentInsurance"
                                                            class="
                                                                card-header
                                                                cursor-pointer
                                                            "
                                                            for="payment-insurance"
                                                            data-toggle="collapse"
                                                            data-target="#collapsePaymentInsurance"
                                                            :aria-expanded="
                                                                addExpandPaymentType(
                                                                    'insurance'
                                                                )
                                                            "
                                                            aria-controls="collapsePaymentInsurance"
                                                        >
                                                            <div
                                                                class="
                                                                    form-group
                                                                    form-group-nlg-sm
                                                                    mb-0
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        custom-control
                                                                        custom-radio
                                                                    "
                                                                >
                                                                    <input
                                                                        id="payment-insurance"
                                                                        v-model="
                                                                            payment_type
                                                                        "
                                                                        type="radio"
                                                                        class="
                                                                            custom-control-input
                                                                        "
                                                                        value="insurance"
                                                                        name="payment-way"
                                                                    />
                                                                    <div
                                                                        class="
                                                                            custom-control-label
                                                                            pl-2
                                                                        "
                                                                    >
                                                                        Insurance
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="ml-auto"
                                                            >
                                                                <img
                                                                    src="~/assets/img/insurance.png"
                                                                    alt="Insurance"
                                                                    width="31"
                                                                />
                                                            </div>
                                                        </label>
                                                        <div
                                                            id="collapsePaymentInsurance"
                                                            class="collapse"
                                                            :class="
                                                                addClassPaymentType(
                                                                    'insurance'
                                                                )
                                                            "
                                                            aria-labelledby="headingPaymentInsurance"
                                                            data-parent="#accordionPaymentInformation"
                                                        >
                                                            <div
                                                                class="
                                                                    card-body
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        form-group
                                                                        form-group-nlg-sm
                                                                    "
                                                                >
                                                                    <input
                                                                        v-model="
                                                                            ord_insurance_name
                                                                        "
                                                                        type="text"
                                                                        class="
                                                                            form-control
                                                                            form-control-nlg-sm
                                                                        "
                                                                        placeholder="Name of your insurance*"
                                                                    />
                                                                </div>

                                                                <div
                                                                    class="row"
                                                                >
                                                                    <div
                                                                        class="
                                                                            col-6
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="
                                                                                form-group
                                                                                form-group-nlg-sm
                                                                            "
                                                                        >
                                                                            <input
                                                                                v-model="
                                                                                    claim_no
                                                                                "
                                                                                type="text"
                                                                                class="
                                                                                    form-control
                                                                                    form-control-nlg-sm
                                                                                "
                                                                                placeholder="Claim#"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="
                                                                            col-6
                                                                            pl-0
                                                                            pl-md-3
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="
                                                                                form-group
                                                                                form-group-nlg-sm
                                                                            "
                                                                        >
                                                                            <flat-pickr
                                                                                v-model="
                                                                                    date_of_loss
                                                                                "
                                                                                :config="
                                                                                    dol_config
                                                                                "
                                                                                class="
                                                                                    form-control
                                                                                    form-control-nlg-sm
                                                                                    flatpickr-custom
                                                                                "
                                                                                placeholder="Date of loss of incident"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        form-group
                                                                        form-group-nlg-sm
                                                                    "
                                                                >
                                                                    <input
                                                                        v-model="
                                                                            order_deductible
                                                                        "
                                                                        type="number"
                                                                        min="0"
                                                                        max="9999"
                                                                        class="
                                                                            form-control
                                                                            form-control-nlg-sm
                                                                        "
                                                                        placeholder="What's your deductible ($)*"
                                                                        @keypress="
                                                                            isValidDeductible(
                                                                                $event
                                                                            )
                                                                        "
                                                                    />
                                                                </div>

                                                                <div
                                                                    class="
                                                                        form-group
                                                                        form-group-nlg-sm
                                                                    "
                                                                >
                                                                    <input
                                                                        v-model="
                                                                            vin_no
                                                                        "
                                                                        type="text"
                                                                        style="
                                                                            text-transform: uppercase;
                                                                        "
                                                                        class="
                                                                            form-control
                                                                            form-control-nlg-sm
                                                                        "
                                                                        placeholder="VIN#*"
                                                                        minlength="17"
                                                                        maxlength="17"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="
                                                        card
                                                        mb-3
                                                        mx-n3 mx-md-0
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            ws-accordion-wrap
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                card-header
                                                                cursor-pointer
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    form-group
                                                                    form-group-nlg-sm
                                                                    mb-0
                                                                "
                                                            >
                                                                <label
                                                                    id="headingPaymentLater"
                                                                    class="
                                                                        cursor-pointer
                                                                    "
                                                                    for="payment-card-later"
                                                                    data-toggle="collapse"
                                                                    data-target="#collapsePaymentLater"
                                                                    :aria-expanded="
                                                                        addExpandPaymentType(
                                                                            'insurance'
                                                                        )
                                                                    "
                                                                    aria-controls="collapsePaymentLater"
                                                                >
                                                                    <div
                                                                        class="
                                                                            custom-control
                                                                            custom-radio
                                                                        "
                                                                    >
                                                                        <input
                                                                            id="payment-card-later"
                                                                            v-model="
                                                                                payment_type
                                                                            "
                                                                            type="radio"
                                                                            class="
                                                                                custom-control-input
                                                                            "
                                                                            name="payment-way"
                                                                            value="paid_after"
                                                                        />
                                                                        <div
                                                                            class="
                                                                                custom-control-label
                                                                                pl-2
                                                                            "
                                                                        >
                                                                            Save
                                                                            Card
                                                                            <br
                                                                                class="
                                                                                    d-md-none
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                                <span
                                                                    class="
                                                                        card-toopltip-circle
                                                                    "
                                                                >
                                                                    (<a
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        title="Tooltip on top"
                                                                        href="javascript:;"
                                                                    >
                                                                        Pay
                                                                        After
                                                                        Installation
                                                                        <small
                                                                            class="
                                                                                text-primary
                                                                                cursor-pointer
                                                                            "
                                                                            ><i
                                                                                class="
                                                                                    fa
                                                                                    fa-question-circle
                                                                                "
                                                                            ></i
                                                                        ></small> </a
                                                                    >)
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="
                                                                    ml-auto
                                                                    text-right
                                                                    ws-payment-card
                                                                "
                                                            >
                                                                <img
                                                                    class="
                                                                        ml-md-3
                                                                        mr-md-0
                                                                    "
                                                                    src="~/assets/img/visa.jpg"
                                                                    alt="Visa"
                                                                    width="31"
                                                                />
                                                                <img
                                                                    class="
                                                                        mr-1
                                                                        ml-md-3
                                                                        mr-md-0
                                                                        d-none
                                                                        d-md-inline-block
                                                                    "
                                                                    src="~/assets/img/maestro.jpg"
                                                                    alt="Maestro"
                                                                    width="31"
                                                                />
                                                                <img
                                                                    class="
                                                                        mr-1
                                                                        ml-md-3
                                                                        mr-md-0
                                                                        d-none
                                                                        d-md-inline-block
                                                                    "
                                                                    src="~/assets/img/a-express.jpg"
                                                                    alt="American Express"
                                                                    width="31"
                                                                />
                                                                <img
                                                                    class="
                                                                        ml-md-3
                                                                        d-none
                                                                        d-md-inline-block
                                                                    "
                                                                    src="~/assets/img/discover.jpg"
                                                                    alt="Discover"
                                                                    width="31"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            id="collapsePaymentLater"
                                                            class="collapse"
                                                            :class="
                                                                addClassPaymentType(
                                                                    'paid_after'
                                                                )
                                                            "
                                                            aria-labelledby="headingPaymentLater"
                                                            data-parent="#accordionPaymentInformation"
                                                        >
                                                            <div
                                                                class="
                                                                    card-body
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        js-billing-radio
                                                                        form-group
                                                                        form-group-nlg-sm
                                                                    "
                                                                    data-target="#billing-address-later"
                                                                    data-answer="#payment-card-later-billing-address-yes"
                                                                >
                                                                    <p>
                                                                        My
                                                                        service
                                                                        address
                                                                        is the
                                                                        same as
                                                                        my
                                                                        billing
                                                                        address:
                                                                    </p>
                                                                    <div
                                                                        class="
                                                                            custom-control
                                                                            custom-radio
                                                                            custom-control-inline
                                                                            ws-address-show
                                                                        "
                                                                    >
                                                                        <input
                                                                            id="payment-card-later-billing-address-yes"
                                                                            v-model="
                                                                                addr_same
                                                                            "
                                                                            type="radio"
                                                                            value="yes"
                                                                            name="payment-card-later-billing-address"
                                                                            class="
                                                                                custom-control-input
                                                                                form-control-mobile
                                                                            "
                                                                        />
                                                                        <label
                                                                            class="
                                                                                custom-control-label
                                                                            "
                                                                            for="payment-card-later-billing-address-yes"
                                                                            >Yes</label
                                                                        >
                                                                    </div>
                                                                    <div
                                                                        class="
                                                                            custom-control
                                                                            custom-radio
                                                                            custom-control-inline
                                                                            ws-address-hide
                                                                        "
                                                                    >
                                                                        <input
                                                                            id="payment-card-later-billing-address-no"
                                                                            v-model="
                                                                                addr_same
                                                                            "
                                                                            type="radio"
                                                                            value="no"
                                                                            name="payment-card-later-billing-address"
                                                                            class="
                                                                                custom-control-input
                                                                                form-control-mobile
                                                                            "
                                                                            checked
                                                                        />
                                                                        <label
                                                                            class="
                                                                                custom-control-label
                                                                            "
                                                                            for="payment-card-later-billing-address-no"
                                                                            >No</label
                                                                        >
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        form-group
                                                                        form-group-nlg-sm
                                                                    "
                                                                >
                                                                    <input
                                                                        v-model="
                                                                            card_holder_name
                                                                        "
                                                                        type="text"
                                                                        class="
                                                                            form-control
                                                                            form-control-nlg-sm
                                                                            form-control-mobile
                                                                        "
                                                                        placeholder="Card holder name*"
                                                                        aria-label="Jack Wayley"
                                                                        required
                                                                    />
                                                                </div>

                                                                <div
                                                                    id="billing-address-later"
                                                                >
                                                                    <div
                                                                        class="
                                                                            form-group
                                                                            form-group-nlg-sm
                                                                        "
                                                                    >
                                                                        <input
                                                                            ref="billing_address"
                                                                            v-model="
                                                                                billing_address
                                                                            "
                                                                            type="text"
                                                                            class="
                                                                                form-control
                                                                                form-control-nlg-sm
                                                                                form-control-mobile
                                                                            "
                                                                            placeholder="Billing Address*"
                                                                            required
                                                                            data-msg="Billing Address is required."
                                                                        />
                                                                    </div>

                                                                    <div
                                                                        class="
                                                                            row
                                                                        "
                                                                    >
                                                                        <div
                                                                            class="
                                                                                col-6
                                                                            "
                                                                        >
                                                                            <div
                                                                                class="
                                                                                    form-group
                                                                                    form-group-nlg-sm
                                                                                "
                                                                            >
                                                                                <input
                                                                                    v-model="
                                                                                        billing_city
                                                                                    "
                                                                                    type="text"
                                                                                    class="
                                                                                        form-control
                                                                                        form-control-nlg-sm
                                                                                        form-control-mobile
                                                                                    "
                                                                                    placeholder="Billing City*"
                                                                                    data-msg="Billing City is required."
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div
                                                                            class="
                                                                                col-3
                                                                                pl-0
                                                                                pl-md-3
                                                                            "
                                                                        >
                                                                            <div
                                                                                class="
                                                                                    form-group
                                                                                    form-group-nlg-sm
                                                                                "
                                                                            >
                                                                                <input
                                                                                    v-model="
                                                                                        billing_state
                                                                                    "
                                                                                    type="text"
                                                                                    class="
                                                                                        js-state
                                                                                        form-control
                                                                                        form-control-nlg-sm
                                                                                        form-control-mobile
                                                                                    "
                                                                                    placeholder="Billing State"
                                                                                    data-msg="Billing State is required."
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                        <div
                                                                            class="
                                                                                col-3
                                                                                pl-0
                                                                                pl-md-3
                                                                            "
                                                                        >
                                                                            <div
                                                                                class="
                                                                                    form-group
                                                                                    form-group-nlg-sm
                                                                                "
                                                                            >
                                                                                <input
                                                                                    v-model="
                                                                                        billing_zip
                                                                                    "
                                                                                    type="text"
                                                                                    class="
                                                                                        form-control
                                                                                        form-control-nlg-sm
                                                                                        form-control-mobile
                                                                                    "
                                                                                    placeholder="Billing Zip*"
                                                                                    minlength="5"
                                                                                    maxlength="5"
                                                                                    data-msg="Billing Zip is required."
                                                                                    @keypress="
                                                                                        isNumeric(
                                                                                            $event
                                                                                        )
                                                                                    "
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        d-flex
                                                                        border
                                                                        rounded
                                                                    "
                                                                >
                                                                    <div
                                                                        id="card"
                                                                        style="
                                                                            width: 100%;
                                                                        "
                                                                        class="
                                                                            form-control
                                                                            form-control-nlg-sm
                                                                            form-control-mobile
                                                                        "
                                                                    ></div>
                                                                </div>
                                                                <div
                                                                    id="card-errors"
                                                                    style="
                                                                        color: red;
                                                                    "
                                                                    role="alert"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="buttons-mobile">
                                        <div id="book-appointment-bottom">
                                            <div
                                                class="
                                                    d-flex
                                                    justify-content-between
                                                    align-items-center
                                                    ws-secure-booking
                                                "
                                            >
                                                <div class="ws-secure-left">
                                                    <h3 class="h5-nlg mb-0">
                                                        Secure Booking
                                                    </h3>
                                                </div>
                                                <div class="ws-secure-right">
                                                    <img
                                                        class="mr-2"
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAA6CAMAAAB7yGD2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURYGsuEiHm2ibq1ORpZ29xnqltDh/lVmTpP+zoTuCmwZjgP///wVifwBbegFefRRuikKIng9ohWGZqjyDm+nw8iJyjIazwtvn67bQ2PP3+FSRpfv8/dDg5HSmtjF7k63J0pO4xZi+ycXY3qTDzoCtu2ufr802WYAAAAAKdFJOU2ixkuwhTNhoATsb7UeNAAAHEElEQVRo3s2ai3abOBCGndTJpugCAoQQ4irg/V9x/5Gw42yMk/Ss00xPyViDq6/SaC6Qw0uU4+9/Pi+H+8nTcQM6hOvTw69lrD4tRXo/0c+PxxPY8WFtHfuC5CK5l3CeqOenCHZ8mNnXJJf/L0uU1xH9FMAehp353X3B+Ds5m/ojwH53O9MP9b3A+J6c73gA2IO5PrvR7X3A+A053aKPh+Ov6zvmGjF+O9j5lvRw2NvJSvBkcX9rK9U/h9/V1bm94gmXmbn3qbyKFcGWa1PbIswt9XD/cHFNdsEGefoPrfZHga3n2C6L9ieBNa9TSzX8pBW7mJor/3PA5supZfNzwEr9ZsnMPthFuJabGpVzBHgfqq5GsDcRg8CuB9jhMqzI+saKaR3vSXSvcT0robpSkidboaUUXRMMJGr7QKPvrbfB2KzkZ8BkbsuecIraOuubRGab4kuIGVNel0HWjq7toqWsyqort1EffzZLtKbyNpgzrM3Ehs+TdheM42CMAm5o8R3HrD4rLXMWMbBOgmLtCp+hAdOLiU0LqRjvWkZGm4/R2mp+E2xZcd/C5RbK3B4YTM6VmqeG+V71w5qWmwKeLtWdc71nHe1TUrEh1TnsAJsTnQ5sSjW+mJOVj5u1vrliPunJ3+twBDivd0+lmNmIiUXObA+X52INCv6oFhW40JYVnlVFUfSiYrPgonGsH4M2o1CQOFdLsMaxhrmQDHfA4DUypXq7pEArut0Ay7W1OmetrFgbQSvm48ED2JTnNc53jIIG9yDRcSxpQxCJJLDTgW8JLFpDQ7ED1kk685QlXSNlYXfBxMLKrnIs65hJ6MhjoI0BQUW/LHPZMuO9n0UEwxr+BwzWdopgkqz7K2b78J+W8A7mpdrPlecAN2TM5UJKrTKqMKXQKXysnizmTmhPpZRhKwXIrX4L1gQrjQmsqg3evwMWTwaypMdCTPvVhcxZiTZzcravcVaarmyxceWCs99q4lnIK7CnTZ7nPbY7Xwc6xNMbsJGsgPUrWSu57/zR/+KZG/Ib9RhiRYVFkJ5Nmye1eusUvDZUonjWnlZ8jBWpG+nEDAAbgMhVuYWB8WS9FS5OmZInZjD7YDwdJ1pcmU0LV+vgh1XBubo6KMtUSNlPU99NQZqGrkuBE5tP+BdwbRDol2jNztZb4cJ1m537m6U1FzEGSwGvljJ+5AJTQ6G/uAh8CCLjT7ndf7qKd9abAXYOqeFd9v7W6uJ6rjQZJcCV/Tgw5hYl+/IHgtHB9R81vJxCEJxr8xdOvkYuRquNURFcla4ySvBEssQv/iFYXX3UictsnKZxXJVoRjpnxbgkCU7n3Cictl6PIx3aqEGmSqm19lOjuF7qeiz+EMx9+BhKbt/1fGK1IJc8xeORI6IXsd6Elm1f1NFabbGtkV8B88U7qffBTNNQrhxDyEQ6751bi8pkGxgKD6QkaHZFeG9QJK3ZaHpkjKwZfMq/ArbGsHIS+tTsg3mUNiUrzmAFc9hZFXIggdlMBrBSUaiilAor6pWy4LjrS1tZzxB9Kl41fbqxYrb1JTLfGYw2qRyasIHA8eFpFjTXQhqKi7DKnirZqZBf97HuNPX6kY+hgkWGPIGZRM8UY8YNDPVm3ca1C/vaD2V4kpR5oNmv+Vh0tG0zxfABGLK2ntmM+hD1Jz4icOgGpUa/bWAo5kgr+r5PESbIWqZC9muLmop/FczOMbfO9gMwr5RCxYLSOleAmflcpSJzJzAdyt+gUWWv5iWFx9qszpNQU/I/CRfsM+HCoenC3lAfZSwWCuekbC14w1aisuNzAAu9kFmitUaNY1rHlk9upesaSL7AQ4egrfB60wR1tNfAVmBZdINK6gFYPpMqh/fYWqOtbIrSpJynQYvSB+ug1QKsclSfdH7XxxIk9WzZihHynSiZvZKSFDwMVTQVOVL3fWjEORpx9H2pVgomKlFIixLb9NBE9b2W/PNg3TCMGs1YhfMzzBmag5araRi65PIYvCbxi2eUl48u4iuO5PSk4vIdQ7Ri5AbWFbAhRNgGYBRU0YmULU9prbSY/151QStW16iWB4AVdT1kCGNYsbmuu+SyBPp+sC0DUdcVNERtj/Yawkf2V8EK6rNk4yqhoWWJblueoL1q6OFCaYz9W1sZngukwo8xcTeia6ltZ2wSvfFz3dpvAzs2b8Gcq5WsAUaPcQqxwseMc3YR2ptuMeZbwOiVzctzebGVGilNoZCphKLchlyJtAFNc5EbU41leecXqa8vuV4eq9cOPC5jhgabU1RW/YRCJsRnvZa2LU18E3z/rXx+Obwcn889hwlCi1JGlWqT10FrSvctzs/TJ3rD+9S0f/XV8xWux/iy/ul5sj8HjCf68fTrDceHXxXC+6clu+gJ/l9Bdk+fD6+/d/FyPFRZ8XnJ7iVF9/gUif4F4OrMFu/54vQAAAAASUVORK5CYII="
                                                        alt="BBB"
                                                        height="30"
                                                    />
                                                    <img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAABACAMAAADLTa7fAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGtUExURQAAAHRbI/zCD0VFRXNzc0o7Ivf394uJh3Nzc1VVVUFCQ/S4Dq+EFPu+DlVVVd+sDq+FC2BgYElIRtmlDFRUVPC3EDk5OceXEktLS7uOD5mZmax/Du+3ENKgDt6pDlRUVE1NTdHR0uHh4XFxcsvLy+qyD1JSUoCAgL+TDPnJVfXSErS0tsXFxM+gHl5bVouLi5OBT6qRSuO3Q6qqqpycnNPAh+np6QAAAOjYrN+tIYWFhZ6Udv////+8DwAAAP///lpaWvX19ZSUlKSkpP7+/fLy8gYGBf+6BP+7Cuvr6/j4+MDAwO/v7/z8/Pr6+ujo6P/ADp6enrS0tJubm+Li4hQUFCkpKSMiIpeXlx4dGcfHx2VlZd7e3v/FDw0NC87Ozqysq25ubq+vr0BAQJGRkf+/GdHR0aioqEhISNra2lVVVYCAgKKiorq6unV1df/9+NbW1oyMjP/DJjY2Nv/67v69EC4uLl1dXf/xzv/IO//SXE9OTf/13v/chP/imP/NTv/lpf/Xb//svv/psq6HC4JiCV5GCG5UCEo5B5FvD9mjC8ufJd/RkqSWa+3hxaOLwmgAAAA8dFJOUwAQ+DtoBv0IWe5n6hrx9qhB/FaO19MnZoVVOSn+fMHIq4ZdsCXHtpOaX/xngjZorfqBS1bC/6PtxO7E1gzHni4AAAskSURBVGjezZqHe9pIGofBXnAcE5c4tuOW3m6T7Xu7e/fIBLAkkChCNIPoxXQw2Abca7L9/uf7ZlSQKEmei5PzlycYNCPNq99XZjSg0/2PtjC3oLt29uLL1euG9PLhd6vT1w3qJ+NLveE6AS09fPXw1atrptRDo9H4aOxaxdSTR7+c/fLTE93C1OL1gXpkPImvjo3pxkxjn3lkvemr7/8B9v1XJr1GpSe6R8QvL757ufS5tTAtzk7NTdzCNjF3b3Zh2aCo9BCgHupfwd/PaYbp2bmJkZHWmmStkZFbc1MLX99E9lz4983HwmP4/+NN0b7+4mPsxujovKqwLL38YWlJ/0M/0tQEAmopUGst+DBy61/fzoyPz8xEsz+H0u2f253J8SuyO8/ujsoRYvrmxhfffP1jT6wui0gDrLXy139Slna7WLG0D+vN6tWYP1dJd8bH79+dF8d/Pnrj8eNvNFCGhbkhSCLWP4s0HaXCdIWijNarMcoVSKYqM5N3RCyAev74+RN1xs3e8g5n8sbfRBJm806ubK4QV2ikh2WSNsC6CcG1pH+ytLSkUso01SuTw6Fi+vPN298jZjOdoK8WCpmHauQs4w/mdYAzpnae6d6ImsduX2ttbrbW7HaRLP428duXb81gwXJKvkkrRVFu+R37MVhuypmevD/aWy2nRlREju2D47OLi72Ly5OD/TXg8sbfmn9/8yuC2gkYpStZO8ViMYzeUdFitjlcCJb1vF+tWKV8R0tlUPnOvnZ6drS7tbVFkvCye3R5vmn/E4CQ58z0HylSvg61QdN0KAbvmDakwNDxmtms7QOCiwn3UK2OdGXav9zdet3t/Hprd+/8DwSEjP7zYKsLhY6gCGNCZvNQKBKSNv0hPqSAar7LND3hlWVqHR9t9XnceQijR36NwP8V74kWKlJ6DxTq9kFQBJUrP1OmWv29uKzT5tnWgN4WKAZmFOi/rbQc20caKHNdBeVJVpt+pxXp03Aix5YEoQAnlwUnA59Ywd/kBRRg7qSTg9b1ZrWkGoerT95VHkxk5zm2LwYwxdbbaPDfoSi8AXr7+esuFAwYSSpQectGMBGMFGswqiXSIZh0KBIJwrmJSARytnYYgeYNiwDnZiMVYzMEH0PrKk/nZ8alsNLPeWWdBjGx5SAOKDrx28oK7rXXhSpjHAnKGRIjj47whLtoDgqdhFkxnihEpOYNH0GFzBszYivcVDcHC+Vnhh6hTgb5bl2K8eDGH3GcovYDUoGq2KAhSWGoABJ0IxtCfQWiCNWDpstNWxo+Z3PNRhJqrzmURT4PldgQustDS1BKFdlc9cnbmoiy48SirFombke61c7fKy1J0CMFqs7BywzTRlAVGCfdCMSaKIhYgKLpJmO11uDctNXq6YAXK6VAow43WUdQwSrDVOFDUVV3SV/5AZJq+pbsPOQWJxQVTg1VkYRKpHf37RL9SReKbMLVfQAeZYGs4yIJkgK6YKOI7oNCVzTj7AuAUHUKml1RkCoGnbNQhRk4uqOWgUlPoqialYU6R16p03Qim1EKJFGKSM5LNYgzaTK0n24pUEQA7rmI3BdLmGkfPqcBTqlBFRE/1kQoJ21OiNFTo81BJ4KCNHT1QpF8GRJQ/zSuEopYR5EYrMv9yLRUNEMwy8lSSf4ToZBUNKgZbdBmWhA9DiNlDpFcKigfiB3AzXnAqw2DIhqd+3rdslQ47adYHsqCfRV1iV2SQRGqnkQz77Hsv8suFMHhgmGOckGUYshAFBrV22BMBSUoQlZRbgyFsqYn53WLLU2gEIFDTIXDgXBHpSgP49XAntz3WAVFhkUoEqKojRwUgDch9KKBohAGOtCAAMyiIjIYimyWb+peSEWqJVUfsoTvnE6jnBAkoRJO3La77ZDyVAVFMPiEKJECJ4Yq680s/K2QCpQTJRjHUTm46E5zvdKGz1V2KBSRKj/Q3fNKxXxXRq1hkkTFTZCyUDNi1r4+Ff1n3ydVUKJUUYJFvRNBNHdnuS5ULIho2rwLhT40QycLZR0O5Szf0ckhta9kHJvDVSDBK0JtyBPUuV11B1REmmmxVDMQXWmpgpcbpDsLV8BQ7rroXiJmEatLIhrAN4Shgn1QecukTg6TU9VsXRZRklLqmW0y8LEayhg9LPqxtoXiYTGH6rEv2t5ol6sMlKNK8dAiFjyusrOxsZODFVPBAs0zGShmLJxbhzilZg6Lae2iNdYp6+Q1y4E6LcX5f0eqUVkXMQiKZBhGvEkW3uHEYF2BUoDBg7jgmHQvFFcqcRTuJzeT0OySruHqmf87lkFKEe6cWWVSJvdBDVnTDTxIvrO5D2qi1RtT6DZ3VFCHXXnP3w/10YZiqi/7sBVohSlR6x7WZN8nMpR9L+LaOiWFQXaQUNo6Bb6Qn1NINzKJ1GOUDyqeI7vNYle3dHTAzaE61VvRJasOiKieik4wtVQhI8BcTwo+sIwTUbDJDByEsPY4a3A7bM0JrwxqrzVYnKG4LxQZaw3eCIEeLlzRe+Y+ZQnRlqCyFNEb59Lc5yr4fbVUChLQnQlnEBSJIMKFWsoG0w27zgMvy68DSsxW9fkK4RpIyIWrEpSL532Zql/QPhTiua9nlaAAV5RlbNd7+w71KiGfS7KsFeU9QHFGoxEJkbf5XCyVd8lQRgwVyDmNRiYVhmUCZ/NBV+Rhyl8wGrmMraSBalhglaBaT2kapYXUBtM91LOeSuaSUo4DlKSnBw9MeMg+KOjpzJUwlBy3/hTMZIFwRiMVXk/ppkfWBkklLRDqZJ9Qcvhxfl4I4CwAqBIXQJpRPC8/1fdAkR5XyoaUCme4QICSoQhrlR+w8tQ/9arX6IolQz2PGseONc0anWysh/2Zkug+nvdncMQUPIOgwtWMr+B34h5+6NtQoNhCWF3SYY2O910WlG0ETQJ6khVLutaV9mLToV43I4FcDZ/fX8JQyVIpBoeZIVC2grNgE5CsXDhVKjVcKii/SyPU7d7nvkvt/gzj6jLt7Tv63exhG2EfiaBcYs2x8oozPFr3sTGbD/WAmJLKlAhF8VXVhFy1PDD0PSFfDquzRzJTVygPIqb4AqkKdNKHkwntVpEpJAETTnnEQPdkcA5oAp1EOayaMZLKE7J6L2H77PVApot9ZVtG3kuAilliGAFdEwc6GAwfC683mFIKlSwh52SYWg49TODsa+RqpBjoYAwuCVxA4PnuEx1Tt9w19O+6ODbPj/qRtk62la1Gh4xNCjyEbDgFl3encjxYFb1N8mH4l0eZ6AtX+bAPaRhDUOx6mENQkBS8H1xJ+VF6pGLdDa+mpbvrojOsqrZg9896lgDkxUG3VZWiLJcXhAY8X8K6Po8NVQMPlxSSARyLVAPacYhRSeS5QBKorWJXSFq2kc83YlaFyWqzqPendHq5gmKxTk/2lJHJo7OD7e5mqP30SLOzK03Ibg82+aiHVDYW3dIxUn4lxa5uHJQeT7cMunKdO6OaLzZNU3H1nvn26fHJ5cXF5dnxwf6mqsG+f/T6E61YSpVepl4qBLaJTHvMvr/3iZhYX9pyf7TvC2DTlNe79m4Dpk+zuPPkmzOTd+cHfCltmr0VfxeSw3Fw9EmYGKEZtdy/rR/8zePiXHy4WN7tk13yis3DUjGnvx613Bkok1gZlmcnhmB5W399a7tya1bq6Whn/NnNef27vqadngKsHi6vNw5IHcsnsPHx+w/ujr7vFw4G01erTye8ANbCBkDxlbnZxduy3bhSGx2d13/Qjy70punVqafKd8hTq4vLeoNiY1dqhg//FYhBrzctT08vLk5PL5tM1+nnI6Iw/5+x/ws1SEzqGnqdkgAAAABJRU5ErkJggg==="
                                                        alt="Norton"
                                                        height="30"
                                                    />
                                                </div>
                                            </div>
                                            <div class="ws-secure-text">
                                                Our booking process certified by
                                                industry leaders.
                                            </div>

                                            <div
                                                class="
                                                    d-flex d-sm-none
                                                    justify-content-between
                                                    mb-2
                                                "
                                            >
                                                <div>
                                                    {{
                                                        dateFormat(
                                                            schedule_date,
                                                            'LL'
                                                        )
                                                    }}
                                                </div>
                                                <div>
                                                    {{ schedule_time }}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-end">
                                            <a
                                                class="
                                                    btn-sp
                                                    btn-sp-light
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    mr-3
                                                    ws-back-btn
                                                    ws-addressback-btn
                                                "
                                                @click="backtobutton(4)"
                                                ><i
                                                    class="fa fa-angle-left"
                                                ></i>
                                                <span>Back</span></a
                                            >

                                            <a
                                                class="
                                                    btn-sp
                                                    btn-sp-light
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    mr-3
                                                    ws-back-btn
                                                    ws-paymentback-btn
                                                "
                                                style="display: none"
                                                href="javascript:;"
                                                ><i
                                                    class="fa fa-angle-left"
                                                ></i>
                                                <span>Back</span></a
                                            >

                                            <a
                                                class="
                                                    btn-sp
                                                    btn-sp-light
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    mr-3
                                                    ws-back-btn
                                                    ws-addressback-btn-desktop
                                                "
                                                style="display: none"
                                                href="javascript:;"
                                                ><i
                                                    class="fa fa-angle-left"
                                                ></i>
                                                <span>Back</span></a
                                            >

                                            <a
                                                class="
                                                    btn-sp
                                                    btn-sp-light
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    mr-3
                                                    ws-back-btn
                                                    ws-contactback-btn
                                                "
                                                style="display: none"
                                                href="javascript:;"
                                                ><i
                                                    class="fa fa-angle-left"
                                                ></i>
                                                <span>Back</span></a
                                            >
                                            <button
                                                type="button"
                                                class="
                                                    js-scroll-top
                                                    btn-sp
                                                    btn-sp-primary
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    ws-next-step-btn
                                                    ws-next-step-last
                                                    nexttoadress
                                                "
                                                @click="nexttoaddressmobile()"
                                            >
                                                <i class="fa fa-lock"></i>
                                                <span
                                                    class="
                                                        d-none d-lg-inline-block
                                                    "
                                                    >Continue</span
                                                >
                                            </button>

                                            <button
                                                type="button"
                                                class="
                                                    js-scroll-top
                                                    btn-sp
                                                    btn-sp-primary
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    ws-next-step-btn
                                                    ws-next-step-last
                                                    nexttopayment
                                                "
                                                style="display: none"
                                                @click="nexttopaymentdesktop(1)"
                                            >
                                                <i class="fa fa-lock"></i>
                                                <span
                                                    class="
                                                        d-none d-lg-inline-block
                                                    "
                                                    >Continue</span
                                                >
                                            </button>

                                            <button
                                                type="button"
                                                class="
                                                    js-scroll-top
                                                    btn-sp
                                                    btn-sp-primary
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    ws-next-step-btn
                                                    ws-next-step-last
                                                    nexttopaymentdesktop
                                                "
                                                @click="nexttopaymentdesktop(0)"
                                            >
                                                <i class="fa fa-lock"></i>
                                                Continue
                                                <span
                                                    class="
                                                        d-none d-lg-inline-block
                                                    "
                                                    >Continue</span
                                                >
                                            </button>

                                            <button
                                                type="button"
                                                class="
                                                    js-scroll-top
                                                    btn-sp
                                                    btn-sp-primary
                                                    btn-sp-lg
                                                    btn-wide
                                                    btn-pill
                                                    ws-next-step-btn
                                                    ws-next-step-last
                                                    nexttopopup
                                                "
                                                style="display: none"
                                                @click="nexttopopup()"
                                            >
                                                <i class="fa fa-lock"></i> Book
                                                For
                                                {{
                                                    dateFormat(
                                                        schedule_date,
                                                        'LL'
                                                    )
                                                }}
                                                <span
                                                    class="
                                                        d-none d-lg-inline-block
                                                    "
                                                    >BOOK APPOINTMENT</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Content Step Form -->
                    <!-- <input type="button"  @click="send()"  value="test"> -->
                </form>
            </div>
            <!-- End Steps -->
        </section>
        <!-- End Wizard Section -->

        <div
            id="helpModal"
            class="modal fade py-5"
            tabindex="-1"
            role="dialog"
            aria-labelledby="helpModalTitle"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-lg modal-dialog-centered"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 id="helpModalTitle" class="h5-nlg modal-title"></h3>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <svg
                                aria-hidden="true"
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="cateInfo"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="addrChangeModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content address-msg-popup">
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                    <div class="address-msg">
                        <span class="address-msg-icon"
                            ><i class="address-msg-sign">!</i></span
                        >
                        <p id="addr_change_text"></p>
                        <button
                            v-if="allowUpdateAddr === '1'"
                            type="button"
                            class="
                                js-scroll-top
                                btn-sp
                                btn-sp-primary
                                btn-sp-lg
                                btn-wide
                                btn-pill
                                ws-next-btn
                            "
                            @click="updateAppAddress()"
                        >
                            Update Address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';

// import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

// import PulseLoader from '~/node_modules/vue-spinner/src/PulseLoader';
import PulseLoader from '~/node_modules/vue-spinner/src/PulseLoader'
// import ClipLoader from 'vue-spinner/src/ClipLoader'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
if (process.client) require('slick-carousel/slick/slick');

// import axios from '../axios/axios.js'

export default {
    name: 'ScheduleQuote',
    components: {
        PulseLoader
    },
    layout: 'order',
    data() {
        return {
            // publishableKey : 'pk_test_y0NPfnLgs38TeOTYKYj036bH',
            loaderFlag: false,
            loaderPriceFlag: false,
            doorGlassesCount: 0,
            allGlasses: [],
            selectedGlasses: [],
            all_tech_ids: '',

            imgBaseURL: 'https://windshieldhub.com/order/uploads/quote/thumbs/',
            allQuestions: [],
            allCategories: [],
            door_sub_details: {},
            door_other_text: '',
            damageTypeChecks: [],
            othersText: '',
            answerQuestion: {},
            appointmentData: {},
            appointmentGlasses: [],
            schedule_date: '',
            schedule_time: '',
            schedule_slot: '',
            promo_code: '',
            company_name: '',
            full_name: '',
            email: '',
            phone: '',
            alternate_phone: '',
            allowUpdateAddr: '0',
            address: '',
            apt_no: '',
            city: '',
            state: '',
            zip: '',
            comments: '',

            payment_type: 'paid_after',
            stripeToken: '',

            addr_same: 'no',
            card_holder_name: '',
            billing_address: '',
            billing_city: '',
            billing_state: '',
            billing_zip: '',

            ord_insurance_name: '',
            claim_no: '',
            date_of_loss: '',
            dol_config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: 'Y-m-d',
                altInput: true,
                dateFormat: 'Y-m-d',
            },
            order_deductible: '',
            vin_no: '',
        };
    },
    computed: {},
    created() {
        // var appointment_id = this.$route.params.quoteId;
        if (this.$route.params.quoteId === '') {
            localStorage.setItem('ls_app_id', '');
            router.push('/select');
        }

        this.getGlasses();
    },
    mounted() {
        const self = this;

        /* for (let ref in this.$refs) {
            const autocomplete = new google.maps.places.Autocomplete(
                this.$refs[ref]
            );
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                //console.log(ref);
                if (!place.geometry) {
                    return;
                }
                if (ref === 'address') {
                    this.addressFieldChange(place);
                } else if (ref === 'billing_address') {
                    this.billingAddressFieldChange(place);
                }
            });
        } */

        // card.mount('#card')

        // $('[data-toggle="tooltip"]').tooltip();
        // $('[data-toggle="popover"]').popover();

        $('.card-line-btn').click(function (ev) {
            $(this)
                .next($('.card-line-wrap'))
                .slideToggle('fast', function () {
                    $(this).parent().toggleClass('card-line-active');
                });
            ev.stopPropagation();
        });

        $('#continue-step').on('click', function () {
            if ($('#need2fix-door-glass').prop('checked')) {
                $(this).attr(
                    'data-hs-step-form-next-options',
                    '{"targetSelector": "#basicSelectStep22"}'
                );
                $('#glassselectedhead').addClass('is-valid');

                $('#basicSelectStep2').hide().prop('required', false);
                $('#basicSelectStep22').show();
            } else {
                $(this).attr(
                    'data-hs-step-form-next-options',
                    '{"targetSelector": "#basicSelectStep3"}'
                );
                $('#glassselectedhead').addClass('is-valid');
                // dealing with mobile view
                $('.ws-steps-progress-row').removeClass('active');
                $('#mobilestep2').addClass('active');

                $('#basicSelectStep2').hide().prop('required', false);
                $('#basicSelectStep3').show();

                $('#glassselectedhead').removeClass('active');
                $('#glassfeature3').addClass('active');
                // var v = $(this).attr('data-hs-step-form-next-options');
                // console.log(v);
            }
        });

        $('.nexttoadress-old').on('click', function () {
            $(
                '#book-appointment-address, .nexttopayment, .ws-paymentback-btn'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-payment, #book-appointment-bottom, .nexttoadress, .nexttopopup, .ws-addressback-btn, .ws-contactback-btn'
            ).hide();
        });

        $('.nexttopayment-old').on('click', function () {
            $(
                '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-contactback-btn'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-address, .nexttoadress, .nexttopayment, .ws-addressback-btn, .ws-paymentback-btn'
            ).hide();
        });

        $('.ws-contactback-btn').on('click', function () {
            $(
                '#book-appointment-address, .nexttopayment, .ws-paymentback-btn'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-payment, #book-appointment-bottom, .nexttoadress, .nexttopopup, .ws-addressback-btn, .ws-contactback-btn'
            ).hide();
        });

        $('.ws-paymentback-btn').on('click', function () {
            $(
                '#book-appointment-contact, .nexttoadress, .ws-addressback-btn'
            ).show();
            $(
                '#book-appointment-address, #book-appointment-payment, #book-appointment-bottom, .nexttopayment, .nexttopopup, .ws-paymentback-btn, .ws-contactback-btn'
            ).hide();
        });

        $('.nexttopaymentdesktop-old').on('click', function () {
            $(
                '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-addressback-btn-desktop'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-address, .nexttopaymentdesktop, .ws-addressback-btn'
            ).hide();
        });

        $('.ws-addressback-btn-desktop').on('click', function () {
            $(
                '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-addressback-btn-desktop'
            ).hide();
            $(
                '#book-appointment-contact, #book-appointment-address, .nexttopaymentdesktop, .ws-addressback-btn'
            ).show();
        });

        $('#continue-step2').on('click', function () {
            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep3').addClass('active');

            $('#basicSelectStep3').hide();
            $('#basicSelectStep4').show();

            $('#glassfeature3').addClass('is-valid');
            $('#glassfeature3').removeClass('active');
            $('#availabilityhead').addClass('active');
        });

        $('#continue-step3').on('click', function () {
            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep2').addClass('active');

            $('#basicSelectStep22').hide();
            $('#basicSelectStep3').show();

            $('#glassselectedhead').removeClass('active');
            $('#glassfeature3').addClass('active');
        });

        $('#continue-tofive').on('click', function () {
            $('#bottomcards').hide();
            $(this).attr(
                'data-hs-step-form-next-options',
                '{"targetSelector": "#basicSelectStep5"}'
            );

            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep4').addClass('active');

            $('#basicSelectStep4').hide();
            $('#basicSelectStep5').show();

            $('#availabilityhead').addClass('is-valid');
            $('#availabilityhead').removeClass('active');
            $('#checkouthead').addClass('active');
        });

        $('.ws-service-listing > .ws-servi-col').on('click', function () {
            // $( ".ws-service-listing > .ws-servi-col" ).removeClass( 'active' );

            // $( ".ws-service-listing  .ws-servi-col .custom-control-input" ).prop( "checked",false );
            if (
                $(this).find('.custom-control-input').prop('checked') === true
            ) {
                // $( this ).find(".custom-control-input").prop( "checked",false );
                $(this).addClass('active');
            } else {
                // $( this ).find(".custom-control-input").prop( "checked",true );
                $(this).removeClass('active');
            }

            const havechild = $(this).data('child');
            if (havechild === 'yes') {
                if (
                    $(this).find('.custom-control-input').prop('checked') ===
                    true
                ) {
                    $('.ws-service-row').slideDown('slow');
                    $('#backglasspic').hide('slow');
                } else {
                    $('.ws-service-row').slideUp('slow');
                    $('#backglasspic').show('slow');
                }
            }
        });

        $('.ws-service-row .ws-service-col').on('click', function () {
            $(this).parent().find('.ws-service-col').removeClass('active');
            $(this).addClass('active');
        });

        $("input[name='payment-card-later-billing-address']").on(
            'click',
            function () {
                if ($(this).val() === 'yes') {
                    $('#billing-address-later').slideDown('');
                } else {
                    $('#billing-address-later').slideUp('');
                }
            }
        );

        $('.timeslotevent .ws-time-slot')
            .not('.select-time-item-null')
            .on('click', function () {
                $('#continue-tofive').click();
                $('.ws-steps-progress-row').removeClass('active');
                $('#mobilestep4').addClass('active');
            });

        $('.ws-back-btn-old').on('click', function () {
            $('#bottomcards').show();
        });

        $('.js-scroll-top').on('click', function () {
            $('html, body').animate(
                {
                    scrollTop: $('#basicStepFormContent').offset().top - 150,
                },
                500
            );
        });

        // Billing address
        $('.js-billing-radio').each(function () {
            const $this = $(this);
            const billingTarget = $this.data('target');
            // answer = $this.data('answer');

            $this.find('input').on('click', function () {
                $(billingTarget).slideToggle(150);
            });
        });

        $('[data-hs-step-form-prev-step]').on('click', function () {
            const $this = $(this);
            const data = $this.data('hs-step-form-prev-step').targetSelector;

            if ($this.parent('.step-item').hasClass('is-valid')) {
                $('.step-item').removeClass('active');
                $this.parent('.step-item').addClass('active');

                $('#basicStepFormContent > *').removeClass('active').hide();
                $(data).fadeIn(400).addClass('active');
            }
        });
        $('[data-hs-step-form-prev-options]').on('click', function () {
            const $this = $(this);
            const data = $this.data('hs-step-form-prev-options').targetSelector;

            $('h1 span').hide();
            $(data + '__title').show();
        });
        $('[data-hs-step-form-next-options]').on('click', function () {
            const $this = $(this);
            const data = $this.data('hs-step-form-next-options').targetSelector;

            $('h1 span').hide();
            $(data + '__title').show();
        });

        $('.js-select-time .select-time-item').on('click', function () {
            $('.js-select-time .select-time-item').removeClass('active');
            $(this).addClass('active');
            $('.js-select-date-input').val(
                $('.select-date-tab')
                    .children('.active')
                    .children('small')
                    .text()
            );
            $('.js-select-time-input').val($(this).children('strong').text());
        });

        // var d = new Date();
        // document.getElementById("nav-1th-day-tab-date").innerHTML = moment(d).format('DD MMMM');
        // document.getElementById("nav-2th-day-tab-date").innerHTML = moment(d).add(1, 'days').format('DD MMMM');

        // $('#order-processed').on('hidden.bs.modal', function() {
        //     window.top.location.href = 'example.html';
        // });

        $('.js-slot-value').each(function () {
            if ($(this).text() === '0') {
                $(this)
                    .parents('.select-time-item')
                    .addClass('select-time-item-null');
                $(this)
                    .parents('.select-time-item')
                    .attr('disabled', 'disabled');
            }
        });

        const $window = $(window);
        function checkWidth() {
            if ($window.width() < 991) {
                $('.js-state')
                    .attr('placeholder', 'State*')
                    .attr('maxlength', '2');
            }

            if ($window.width() >= 991) {
                $('.js-state')
                    .attr('placeholder', 'State*')
                    .attr('maxlength', '50');
            }
        }
        checkWidth();
        $(window).resize(checkWidth);

        $('.side-window-list li').on('click', function () {
            $(this).parent().find('li.active').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on('click', '.browse', function () {
            const file = $(this).parents().find('.file');
            file.trigger('click');
        });
        $('input[type="file"]').change(function (e) {
            const fileName = e.target.files[0].name;
            $('#file').val(fileName);

            const reader = new FileReader();
            reader.onload = function (e) {
                // get loaded data and render thumbnail.
                document.getElementById('preview').src = e.target.result;
            };
            // read the image file as a data URL.
            reader.readAsDataURL(this.files[0]);
        });

        // Upgreate Account function custom==================================================== //
        $('.ws-service-extra > .ws-serExtra-col').on('click', function () {
            $(this)
                .parent()
                .find('.ws-serExtra-col.active')
                .removeClass('active');
            $(this).addClass('active');
        });

        $('.side-window-list > li:first-child').on('click', function () {
            $(this).parent('.side-window-list').addClass('next-show');
        });
        $('.side-window-list > li:last-child').on('click', function () {
            $(this).parent('.side-window-list').removeClass('next-show');
        });

        // Upgreate Account function custom==================================================== //
        $('.ws-store-option > .ws-store-col').on('click', function () {
            $(this).parent().find('.ws-store-col.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.ws-store-option .ws-you-come-btn').on('click', function () {
            $('.ws-store-adress-wrap').slideDown('');
        });
        $('.ws-store-option > .ws-our-mobile-btn').on('click', function () {
            $('.ws-store-adress-wrap').slideUp('');
        });

        // $(".calender-date-select .owl-stage > .owl-item").on('click', function() {
        //     $(this).parent().find('.owl-item.active').removeClass('active-date');
        //     $(this).addClass('active-date');
        // });
        $('body').on('click', '.slick-slide', function () {
            if ($('.slick-slide').parents('.slicko2').length === 1) {
                $(this)
                    .parent()
                    .find('.slick-slide')
                    .removeClass('active-date');
                $(this).addClass('active-date');
                const theDate = $(this).attr('rel');
                if (typeof theDate !== 'undefined' && theDate !== '') {
                    self.get_month_day_slots(theDate);
                }
            }
        });

        $('.ws-bookAvailability-wrap').animate(
            {
                bottom: '0',
            },
            3000
        );

        $('#see-all-apointment').click(function () {
            $('#see-all-apointment').parent().slideUp(1000);
            $('.ws-bookAvailabilityFull-wrap').fadeIn(1000);

            $('html,body').animate(
                {
                    scrollTop: $('.ws-bookAvailabilityFull-wrap').offset().top,
                },
                'slow'
            );

            setTimeout(function () {
                if ($('.ws-bookAvailabilityFull-wrap').is(':visible')) {
                    $('.slicko1').slick({
                        infinite: false,
                        autoplay: false,
                        nextArrow:
                            '<button type="button"><i class="fa fa-chevron-right"></i></button>',
                        prevArrow:
                            '<button type="button"><i class="fa fa-chevron-left"></i></button>',
                        slidesToShow: 1,
                        appendArrows: $('.slick-nav1'),
                    });
                    $('.slicko1').on(
                        'swipe',
                        function (event, slick, direction) {
                            // console.log("slicko1 - swipe : "+direction)
                        }
                    );
                    $('.slicko1').on(
                        'afterChange',
                        function (event, slick, currentSlide, nextSlide) {
                            // console.log("slicko1 - afterChange : "+currentSlide)
                            $('.ws-time-slot-list li.active').removeClass(
                                'active'
                            );
                            self.schedule_date = self.currentDate(
                                '0',
                                'MM/DD/YYYY'
                            );
                            self.schedule_time = '';
                            self.schedule_slot = '';
                            self.getMonthDays(currentSlide);
                        }
                    );
                    $('.slicko2').slick({
                        infinite: false,
                        autoplay: false,
                        nextArrow:
                            '<button type="button"><i class="fa fa-chevron-right"></i></button>',
                        prevArrow:
                            '<button type="button"><i class="fa fa-chevron-left"></i></button>',
                        slidesToShow: 5,
                        swipeToSlide: true,
                        appendArrows: $('.slick-nav2'),
                    });
                    self.getMonthDays(0);
                    self.schedule_time = '';
                    self.schedule_slot = '';
                }
            }, 200);
        });

        // Upgreate Account function custom==================================================== //
        // $(".ws-time-slot-list > .ws-time-slot").on('click', function() {
        $('body').on(
            'click touchstart',
            '.ws-time-slot-list > .ws-time-slot',
            function () {
                $(this)
                    .parent()
                    .find('.ws-time-slot.active')
                    .removeClass('active');
                $(this).addClass('active');
                const slot_time = $(this).attr('rel');
                const slot_id = $(this).attr('id');

                if ($(this).hasClass('select-time-item-null')) {
                    // alert("no");
                    self.schedule_time = '';
                    self.schedule_slot = '';
                } else {
                    self.schedule_time = slot_time;
                    self.schedule_slot = slot_id;
                    if (
                        self.schedule_date !== '' ||
                        self.schedule_date !== null
                    ) {
                        if ($('ul.selected_month_day_slots').is(':visible')) {
                            // console.log("full clannder shwoing");
                        } else {
                            self.continuetofive();
                        }
                    } else {
                        alert('Please select date correctly!!!');
                    }
                }

                // $(".timeslotevent .ws-time-slot").not(".select-time-item-null").on('click', function() {
                //     $("#continue-tofive").click();
                //     $('.ws-steps-progress-row').removeClass('active');
                //     $('#mobilestep4').addClass('active');
                // });
            }
        );

        // Upgreate Account function custom==================================================== //
        $('.summry-arrow').click(function (ev) {
            $('.wizard-total-price-box')
                .next($('.summry-accord-body'))
                .slideToggle(500, function () {
                    $(this).parent().toggleClass('summry-active');
                });
            ev.stopPropagation();
        });

        // Upgreate Account function custom==================================================== //
        $('.ws-promo-btn').click(function (ev) {
            $('.ws-promo-code h3')
                .next($('.ws-promo-form'))
                .slideToggle(500, function () {
                    $(this).parent().toggleClass('promo-active');
                });
            ev.stopPropagation();
        });
        // Upgreate Account function custom==================================================== //
        $('.buttons-mobile .btn-sp').click(function () {
            $('.summry-accord-body').slideUp(100);
        });

        $('body').on('click', '#initSlider', function () {
            $('.slicko').slick({
                infinite: false,
                autoplay: false,
                nextArrow:
                    '<button type="button" class="next_day_slots"><i class="fa fa-chevron-right"></i></button>',
                prevArrow:
                    '<button type="button" class="prev_day_slots"><i class="fa fa-chevron-left"></i></button>',
                appendArrows: $('.slick-nav'),
                slidesToShow: 1,
            });
            $('.slicko').on('swipe', function (event, slick, direction) {
                // console.log(direction);
                // left
            });
            $('.slicko').on(
                'afterChange',
                function (event, slick, currentSlide, nextSlide) {
                    // console.log(self)
                    self.get_day_slots(currentSlide);
                }
            );
        });
    },
    updated() {
        // console.log(this.allCategories);
        if (!$.isEmptyObject(this.allCategories)) {
            let categories = this.allCategories;
            $('body').on('click', '[href="#helpModal"]', function () {
                let categoryId = $(this).attr('id');
                let getCategory;
                for (let item of Object.values(categories)) {
                    item.all_categories.forEach((category) => {
                        if (category.id === categoryId) getCategory = category;
                    });
                }
                $('#helpModalTitle').html(getCategory.category_heading);
                $('#cateInfo').html(getCategory.category_help);
            });
        }

        //not related to popup model
        //this.door_sub_details['other_text'] = this.door_other_text;
    },
    methods: {
        getGlasses () {
            this.schedule_date = this.currentDate('0', 'MM/DD/YYYY');
            // console.log("in ScheduleQuote created");
            let FormData = require('form-data');
            let formData = new FormData();
            // console.log(this.$route.params.quoteId);
            formData.append('appointment_id', this.$route.params.quoteId);
            this.$axios
                .post('/getGlasses', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        if (resp.order_no > 0) {
                            router.push('/select');
                        }
                        this.allGlasses = resp.allGlasses;
                        localStorage.setItem('ls_app_id', resp.app_id);
                        // console.log(response.data.data);
                    }
                })
                .catch((error) => {
                    console.log('in getGlasses error : ' + error);
                });
        },
        isNumeric(e) {
            const keyCode = e.which ? e.which : e.keyCode;
            if (!(keyCode >= 48 && keyCode <= 57)) {
                e.preventDefault();
            }
        },
        isNumericAlpha(event) {
            // var key = event.which ?event.which : event.keyCode;
            const key = String.fromCharCode(
                !event.charCode ? event.which : event.charCode
            );
            /*eslint prefer-regex-literals: "off"*/
            const regex = new RegExp('^[a-zA-Z0-9]+$');

            if (!regex.test(key)) {
                event.preventDefault();
                return;
            }
        },
        isValidDeductible(e) {
            const key = e.keyCode;
            if (
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105) ||
                key === 8 ||
                key === 229
            ) {
                if (this.deductible.length === 4 && key !== 8) {
                    e.preventDefault();
                }
                return true;
            }
            e.preventDefault();
        },
        addClassPaymentType(parm) {
            let val = '';
            if (this.payment_type === parm) {
                val = 'show';
            }
            return val;
        },
        addExpandPaymentType(parm) {
            let r = false;
            if (this.payment_type === parm) {
                r = true;
            }
            return r;
        },
        appointmentTotal(appointment) {
            const val =
                parseFloat(appointment.estimate) + parseFloat(appointment.tax);
            return parseFloat(val).toFixed(2);
        },
        glassTotal(glass) {
            const val =
                parseFloat(glass.glass_price) +
                parseFloat(glass.glass_fee) +
                parseFloat(glass.glass_molding) +
                parseFloat(glass.glass_adas) +
                parseFloat(glass.city_price);
            return val;
        },
        removeGlass(index, glass) {
            // console.log(this.appointmentGlasses.length);
            if (this.appointmentGlasses.length > 1) {
                this.appointmentGlasses.splice(index);
                // send the call to server to remove from DB as well
                let FormData = require('form-data');
                const formData = new FormData();
                formData.append('appointment_id', this.$route.params.quoteId);

                const selectGlass = {
                    glass_id: glass.glass_id,
                    glass_type: glass.glass_type,
                    glass_estimate_price: glass.glass_estimate_price,
                };
                formData.append('glass_data_arr', JSON.stringify(selectGlass));
                axios
                    .post('/deleteGlass', formData)
                    .then((response) => {
                        if (response.data.http_status === '200') {
                            const resp = response.data.data;
                            this.appointmentData = resp.appointment_data;
                            this.appointmentGlasses =
                                resp.appointment_glasses_data;
                            // console.log(resp);
                        }
                    })
                    .catch((error) => {
                        window.console.log('in deleteGlass error : ' + error);
                    });
            }
        },
        dateFormat(date, format) {
            // var new_date = moment(date).format(format); //FRI, MAR 19
            // return new_date;
            return moment(String(date)).format(format);
        },
        currentDate(parm = 0, dateformat = 'll') {
            // var currentDate = new Date();
            // var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            // var date = moment().add(1, 'days').format('D,MMM YY'); //FRI, MAR 19
            const date = moment().add(parm, 'days').format(dateformat); // FRI, MAR 19
            return date;
        },
        getAnyDate(number, period, dateformat = 'll') {
            // var currentDate = new Date();
            // var date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            // var date = moment().add(1, 'days').format('D,MMM YY'); //FRI, MAR 19
            const date = moment().add(number, period).format(dateformat); //FRI, MAR 19
            return date;
        },
        glassCheckBoxUpdate(event, glass) {
            /***
             * in case of multi glasses enable this
            let checked = event.target.checked;
            if(glass.Text.includes("Door Glass"))
            {
                if(checked)
                {
                    this.doorGlassesCount = this.doorGlassesCount+1;
                }
                else{
                    this.doorGlassesCount = this.doorGlassesCount-1;
                }
            }
            ****/
            // console.log(this.selectedGlasses);
        },
        continuestep() {
            // from step2 to step2-5 or step3
            // here we need to send save glass call
            // if(this.selectedGlasses.length>0)
            console.log(Object.keys(this.selectedGlasses).length);
            if (Object.keys(this.selectedGlasses).length > 0) {
                if (this.doorGlassesCount >= 1) {
                    $(this).attr(
                        'data-hs-step-form-next-options',
                        '{"targetSelector": "#basicSelectStep22"}'
                    );
                    $('#glassselectedhead').addClass('is-valid');

                    $('#basicSelectStep2').hide().prop('required', false);
                    $('#basicSelectStep22').show();
                } else {
                    // console.log(this.selectedGlasses.Has_question);
                    if (this.selectedGlasses.Has_question === 1) {
                        // console.log("here1");
                        // send save glass info
                        this.saveGlassesCall('0');
                    } else {
                        // no need to show question page (step3) send to step4
                        this.allQuestions = [];
                        this.allCategories = [];
                        this.saveGlassesCall('1');
                    }
                }
            } else {
                // bootbox.alert("Please select at least 1 glass");
                this.$toast.show('Please select at least one glass.', {
                    type: 'error',
                });
            }
        },
        saveAnswer(value, glassType) {
            this.answerQuestion[glassType] = value;
            // console.log(this.answerQuestion);
        },
        continuestep3() {
            window.console.log('in continuestep3 ');
            // from step-2.5 to step-3
            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep2').addClass('active');

            $('#basicSelectStep22').hide();
            $('#basicSelectStep3').show();

            $('#glassselectedhead').removeClass('active');
            $('#glassfeature3').addClass('active');
            this.getGlassQuestions();
        },
        saveGlassesCall(parm = '0') {
            let FormData = require('form-data');
            const formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('fetch_slots', parm);
            const rows = [];
            /*
            in case of multi glasses use this
            this.selectedGlasses.forEach(element => {
                let selectGlass = {
                    "id": element.Value,
                    "type": element.Type,
                    "sub_type": ""
                }
                rows.push(selectGlass);
            });
            */
            const selectGlass = {
                id: this.selectedGlasses.Value,
                type: this.selectedGlasses.Type,
                sub_type: '',
            };
            rows.push(selectGlass);
            formData.append('glass_ids_arr', JSON.stringify(rows));
            this.all_tech_ids = '';
            this.loaderFlag = true;
            this.loaderPriceFlag = true;
            this.$axios
                .post('/saveGlassForQuote', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        this.loaderFlag = false;
                        this.loaderPriceFlag = false;
                        let resp = response.data.data;
                        this.appointmentData = resp.appointment_data;

                        if (parm === '1') {
                            this.all_tech_ids = resp.all_tech_ids;
                            $('ul.slots0').html(resp.slots_info_html);
                            this.schedule_date = this.currentDate(
                                '0',
                                'MM/DD/YYYY'
                            );
                            this.email = resp.appointment_data.email;
                            this.phone = resp.appointment_data.phone;
                            if (this.appointmentData['claim_insurance'] === 1) {
                                this.order_deductible =
                                    this.appointmentData['deductible'];
                                this.payment_type = 'insurance';
                            }
                            // just send user to step4 after saving glass info
                            $(this).attr(
                                'data-hs-step-form-next-options',
                                '{"targetSelector": "#basicSelectStep4"}'
                            );
                            $('#glassselectedhead').addClass('is-valid');
                            // sdealing with mobile view
                            $('.ws-steps-progress-row').removeClass('active');
                            $('#mobilestep2').addClass('active');
                            $('#mobilestep3').addClass('active');

                            $('#basicSelectStep2')
                                .hide()
                                .prop('required', false);
                            $('#basicSelectStep3')
                                .hide()
                                .prop('required', false);
                            $('#basicSelectStep4').show();

                            $('#glassselectedhead').removeClass('active');
                            $('#glassfeature3').removeClass('active');
                            $('#glassfeature3').addClass('is-valid');
                            $('#availabilityhead').addClass('active');

                            setTimeout(() => {
                                $('#initSlider').click();
                            }, 10);
                        } else {
                            // in case of questions
                            // this.getGlassQuestions();
                            if (this.appointmentData['claim_insurance'] === 1) {
                                this.order_deductible =
                                    this.appointmentData['deductible'];
                                this.payment_type = 'insurance';
                            }
                            this.allQuestions = resp.all_Questions;
                            this.allCategories = resp.all_categories;

                            for (let [key, value] of Object.entries(
                                this.allQuestions
                            )) {
                                let name = `${key}`;
                                let val = `${value.all_Questions[0].id}`;
                                let obj = this.answerQuestion;
                                obj[name] = val;
                            }
                            $(this).attr(
                                'data-hs-step-form-next-options',
                                '{"targetSelector": "#basicSelectStep3"}'
                            );
                            $('#glassselectedhead').addClass('is-valid');
                            //dealing with mobile view
                            $('.ws-steps-progress-row').removeClass('active');
                            $('#mobilestep2').addClass('active');

                            $('#basicSelectStep2')
                                .hide()
                                .prop('required', false);
                            $('#basicSelectStep3').show();

                            $('#glassselectedhead').removeClass('active');
                            $('#glassfeature3').addClass('active');
                        }
                        // console.log(" ss "+resp);
                        // return resp;
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    this.loaderPriceFlag = false;
                    window.console.log('in saveGlassForQuote error : ' + error);
                });
        },
        getGlassQuestions() {
            let FormData = require('form-data');
            const formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            let rows = [];
            //use this for multiple glasses case make sure selectedGlasses is array now
            /*
            this.selectedGlasses.forEach(element => {
                let selectGlass = {
                    "id": element.Value,
                    "type": element.Type,
                    "sub_type": ""
                }
                rows.push(selectGlass);
            });
            */
            let selectGlass = {
                id: this.selectedGlasses.Value,
                type: this.selectedGlasses.Type,
                sub_type: '',
            };
            rows.push(selectGlass);
            formData.append('glass_ids_arr', JSON.stringify(rows));
            this.loaderFlag = true;
            this.$axios
                .post('/getQuoteQuestionsForMultipleGlasses', formData)
                .then((response) => {
                    this.loaderFlag = false;
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        this.allQuestions = resp.all_Questions;
                        this.allCategories = resp.all_categories;

                        for (let [key, value] of Object.entries(
                            this.allQuestions
                        )) {
                            let name = `${key}`;
                            let val = `${value.all_Questions[0].id}`;
                            let obj = this.answerQuestion;
                            obj[name] = val;
                            // this.answerQuestion[name] = val;
                        }
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    console.log(
                        'in getQuoteQuestionsForMultipleGlasses in getGlassQuestions error : ' +
                            error
                    );
                });
        },
        answerGlassesCall(parm = 0) {
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('fetch_slots', parm);
            formData.append(
                'glass_ans_arr',
                JSON.stringify(this.answerQuestion)
            );
            this.all_tech_ids = '';
            this.loaderFlag = true;
            this.$axios
                .post('/answerGlassForQuote', formData)
                .then((response) => {
                    this.loaderFlag = false;
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        this.appointmentData = resp.appointment_data;
                        this.all_tech_ids = resp.all_tech_ids;
                        $('ul.slots0').html(resp.slots_info_html);
                        this.schedule_date = this.currentDate(
                            '0',
                            'MM/DD/YYYY'
                        );
                        this.schedule_time = '';
                        this.schedule_slot = '';
                        this.email = resp.appointment_data.email;
                        this.phone = resp.appointment_data.phone;
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    console.log('in answerGlassForQuote error : ' + error);
                });
        },
        continuestep2() {
            // from step3 to step4
            // send save answer glasses call

            this.answerGlassesCall(1);

            // just send user to step4 after saving glass info
            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep3').addClass('active');

            $('#basicSelectStep3').hide();
            $('#basicSelectStep4').show();

            // $('#initSlider').click();//to make slider work
            setTimeout(() => {
                $('#initSlider').click();
            }, 10);

            $('#glassfeature3').addClass('is-valid');
            $('#glassfeature3').removeClass('active');
            $('#availabilityhead').addClass('active');
        },
        continuetofive() {
            if (this.schedule_date === '' || this.schedule_time === '') {
                // bootbox.alert('Please select date & time first.')
                this.$toast.show('Please select date & time first.', {
                    type: 'error',
                });
                return;
            }
            $('#bottomcards').hide();
            $(this).attr(
                'data-hs-step-form-next-options',
                '{"targetSelector": "#basicSelectStep5"}'
            );

            $('.ws-steps-progress-row').removeClass('active');
            $('#mobilestep4').addClass('active');

            $('#basicSelectStep4').hide();
            $('#basicSelectStep5').show();

            $('#availabilityhead').addClass('is-valid');
            $('#availabilityhead').removeClass('active');
            $('#checkouthead').addClass('active');
            if (this.zip !== '' && this.zip.length === 5) {
                this.updateTaxInfo();
            }
        },
        zipCodeChanged() {
            if (this.zip !== '' && this.zip.length === 5) {
                this.updateTaxInfo();
            }
        },
        updateTaxInfo() {
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('zip_code', this.zip);
            this.loaderFlag = true;
            this.$axios
                .post('/updateTaxInfo', formData)
                .then((response) => {
                    this.loaderFlag = false;
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        this.appointmentData = resp.appointment_data;
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    console.log('in updateTaxInfo   error : ' + error);
                });
        },
        get_day_slots(currentSlide) {
            var the_date = this.currentDate(currentSlide, 'MM/DD/YYYY');
            this.schedule_date = the_date;
            this.schedule_time = '';
            this.schedule_slot = '';
            // console.log(this.schedule_date);
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('date', the_date);
            this.loaderFlag = true;
            this.$axios
                .post('/showSlots', formData)
                .then((response) => {
                    this.loaderFlag = false;
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        var target_ul = 'slots' + currentSlide;

                        $('ul.' + target_ul).html(resp.slots_info.html);
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    console.log('in getQuote error : ' + error);
                });
        },
        get_month_day_slots(theDate) {
            this.schedule_date = theDate;
            this.schedule_time = '';
            this.schedule_slot = '';
            // console.log(this.schedule_date);
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('date', theDate);
            this.loaderFlag = true;
            this.$axios
                .post('/showSlots', formData)
                .then((response) => {
                    this.loaderFlag = false;
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        $('ul.selected_month_day_slots').html(
                            resp.slots_info.html
                        );
                    }
                })
                .catch((error) => {
                    this.loaderFlag = false;
                    console.log(
                        'in get_month_day_slots:showSlots  error : ' + error
                    );
                });
        },
        getMonthDays(currentSlide) {
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('month_counter', currentSlide);
            this.$axios
                .post('/getMonthDays', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        // $("div.all_month_days").html(resp.all_days_html);
                        $('.slicko2').slick('slickRemove', null, null, true);
                        $('.slicko2').slick('slickAdd', resp.all_days_html);
                        setTimeout(function () {
                            $('.slick-slide[data-slick-index="0"]').click();
                        }, 50);
                        // $('.slick-slide[data-slick-index="0"]').click();
                        // $('.slicko2').slick('slickGoTo',0);
                        // $( '.slicko2' ).slickGoTo( parseInt(0) );

                        // var target_ul = 'slots'+currentSlide;
                        // $("ul."+target_ul).html(resp.slots_info.html);
                    }
                })
                .catch((error) => {
                    console.log('in getMonthDays error : ' + error);
                });
        },
        applyPromoCode() {
            if (this.promo_code === '') {
                // bootbox.alert('Please add promo code.')
                this.$toast.show('Please add promo code.', {
                    type: 'error',
                });
                return;
            }
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('promo_code', this.promo_code);

            axios
                .post('/applyPromoCode', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        // bootbox.alert("Promo code applied successfully!");
                        this.$toast.show('Promo code applied successfully!', {
                            type: 'success',
                        });
                        var resp = response.data.data;
                        this.appointmentData['estimate'] = resp.new_price;
                        this.appointmentData['tax'] = resp.new_tax;
                        // console.log(resp);
                    } else {
                        // bootbox.alert(response.data.error);
                        this.$toast.show(response.data.error, {
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log('in getQuote error : ' + error);
                });
        },
        nexttoaddressmobile() {
            if (this.full_name === '' || this.email === '') {
                this.$toast.show('Please fill all required fields.', {
                    type: 'error',
                });
                return;
            }
            if (this.email !== '') {
                var is_valid = this.validateEmail(this.email);
                if (!is_valid) {
                    this.$toast.show('Please add a valid email address.', {
                        type: 'error',
                    });
                    return;
                }
            }
            $(
                '#book-appointment-address, .nexttopayment, .ws-paymentback-btn'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-payment, #book-appointment-bottom, .nexttoadress, .nexttopopup, .ws-addressback-btn, .ws-contactback-btn'
            ).hide();
        },
        nexttopaymentmobile() {
            if (this.address === '' || this.zip === '' || this.state === '') {
                this.$toast.show('Please fill all required fields.', {
                    type: 'error',
                });
                return;
            }
            if (this.vin_no !== '') {
                if (this.vin_no.length === 17) {
                    var str = this.vin_no.toUpperCase();
                    if (
                        str.includes('I') ||
                        str.includes('O') ||
                        str.includes('Q')
                    ) {
                        this.$toast.show(
                            'The VIN must be 17 characters. You entered ' +
                                this.vin_no.length +
                                ' characters.<br> Do not contain letters I, O, or Q',
                            {
                                type: 'error',
                            }
                        );
                        return;
                    }
                } else {
                    this.$toast.show(
                        'The VIN must be 17 characters. You entered ' +
                            this.vin_no.length +
                            ' characters.<br> Do not contain letters I, O, or Q',
                        {
                            type: 'error',
                        }
                    );
                    return;
                }
            }
            $(
                '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-contactback-btn'
            ).show();
            $(
                '#book-appointment-contact, #book-appointment-address, .nexttoadress, .nexttopayment, .ws-addressback-btn, .ws-paymentback-btn'
            ).hide();
        },
        nexttopaymentdesktop(is_mobile) {
            if (
                this.full_name === '' ||
                this.email === '' ||
                this.address === '' ||
                this.state === '' ||
                this.zip === ''
            ) {
                this.$toast.show('Please fill all required fields.', {
                    type: 'error',
                });
                return;
            }
            if (this.email !== '') {
                var is_valid = this.validateEmail(this.email);
                if (!is_valid) {
                    this.$toast.show('Please add a valid email address.', {
                        type: 'error',
                    });
                    return;
                }
            }
            if (this.vin_no !== '') {
                if (this.vin_no.length === 17) {
                    var str = this.vin_no.toUpperCase();
                    if (
                        str.includes('I') ||
                        str.includes('O') ||
                        str.includes('Q')
                    ) {
                        this.$toast.show(
                            'The VIN must be 17 characters. You entered ' +
                                this.vin_no.length +
                                ' characters.<br> Do not contain letters I, O, or Q',
                            {
                                type: 'error',
                            }
                        );
                        return;
                    }
                } else {
                    this.$toast.show(
                        'The VIN must be 17 characters. You entered ' +
                            this.vin_no.length +
                            ' characters.<br> Do not contain letters I, O, or Q',
                        {
                            type: 'error',
                        }
                    );
                    return;
                }
                // this.validateVinNo();
            }
            if (this.appointmentData['zip'] !== this.zip) {
                // addrChangeModal // verifyBillingZipcode
                // send server api call to check is it valid or not
                let FormData = require('form-data');
                let formData = new FormData();
                formData.append('appointment_id', this.$route.params.quoteId);
                formData.append('app_zip', this.appointmentData['zip']);
                formData.append('billing_zip', this.zip);

                axios
                    .post('/verifyBillingZipcode', formData)
                    .then((response) => {
                        if (response.data.http_status === '200') {
                            var resp = response.data.data;
                            if (
                                resp.zip_status === '0' ||
                                resp.zip_status === '2'
                            ) {
                                this.allowUpdateAddr =
                                    resp.zip_status === '0' ? '0' : '1';
                                $('#addr_change_text').html(resp.text_msg);
                                $('#addrChangeModal').modal('show');
                                return;
                            } else if (resp.zip_status === '1') {
                                this.allowUpdateAddr = '0';
                                if (is_mobile === 1) {
                                    $(
                                        '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-contactback-btn'
                                    ).show();
                                    $(
                                        '#book-appointment-contact, #book-appointment-address, .nexttoadress, .nexttopayment, .ws-addressback-btn, .ws-paymentback-btn'
                                    ).hide();
                                } else {
                                    $(
                                        '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-addressback-btn-desktop'
                                    ).show();
                                    $(
                                        '#book-appointment-contact, #book-appointment-address, .nexttopaymentdesktop, .ws-addressback-btn'
                                    ).hide();
                                }
                            }
                        } else {
                            this.allowUpdateAddr = '0';
                            this.$toast.show(
                                'Please add the billing adddress correctly',
                                {
                                    type: 'error',
                                }
                            );
                            return;
                        }
                    })
                    .catch((error) => {
                        console.log('in verifyBillingZipcode error : ' + error);
                    });
                // $('#addrChangeModal').modal('show');
                // return
            } else {
                if (is_mobile === 1) {
                    $(
                        '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-contactback-btn'
                    ).show();
                    $(
                        '#book-appointment-contact, #book-appointment-address, .nexttoadress, .nexttopayment, .ws-addressback-btn, .ws-paymentback-btn'
                    ).hide();
                } else {
                    $(
                        '#book-appointment-payment, #book-appointment-bottom, .nexttopopup, .ws-addressback-btn-desktop'
                    ).show();
                    $(
                        '#book-appointment-contact, #book-appointment-address, .nexttopaymentdesktop, .ws-addressback-btn'
                    ).hide();
                }
            }
        },
        validateVinNo() {
            if (this.vin_no !== '') {
                if (this.vin_no.length === 17) {
                    var str = this.vin_no.toUpperCase();
                    if (
                        str.includes('I') ||
                        str.includes('O') ||
                        str.includes('Q')
                    ) {
                        this.$toast.show(
                            'The VIN must be 17 characters. You entered ' +
                                this.vin_no.length +
                                ' characters.<br> Do not contain letters I, O, or Q',
                            {
                                type: 'error',
                            }
                        );
                        return;
                    }
                } else {
                    this.$toast.show(
                        'The VIN must be 17 characters. You entered ' +
                            this.vin_no.length +
                            ' characters.<br> Do not contain letters I, O, or Q',
                        {
                            type: 'error',
                        }
                    );
                    return;
                }
            }
        },
        nexttopopup() {
            //console.log(this.vin_no);
            //$('#order-processed').modal('show');
            if (this.payment_type === 'paid_after') {
                if (
                    this.card_holder_name === '' ||
                    (this.addr_same === 'no' &&
                        (this.billing_address === '' ||
                            this.billing_city === '' ||
                            this.billing_state === '' ||
                            this.billing_zip === ''))
                ) {
                    this.$toast.show('Please fill all required fields.', {
                        type: 'error',
                    });
                    return;
                }
                //make stripe payment
                var zip = this.billing_zip !== '' ? this.billing_zip : this.zip;
                var extraData = {
                    name: this.card_holder_name,
                    address_line1: this.address,
                    address_city: this.city,
                    address_zip: zip,
                    address_state: this.state,
                    address_country: '',
                };
                var $form = $('#myForm');
                stripe.createToken(card, extraData).then((result) => {
                    if (result.error) {
                        //console.log(result.error);
                        var errorElement =
                            document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                        $form.find('.nexttopopup').prop('disabled', false);
                        return;
                    } else {
                        // Send the token to your server
                        this.stripeToken = result.token.id;
                        this.processBilling();
                    }
                });
            } else {
                if (this.payment_type === 'insurance') {
                    if (
                        this.ord_insurance_name === '' ||
                        this.order_deductible === '' ||
                        this.vin_no === ''
                    ) {
                        this.$toast.show('Please fill all required fields.', {
                            type: 'error',
                        });
                        return;
                    }
                    if (this.vin_no !== '') {
                        if (this.vin_no.length === 17) {
                            var str = this.vin_no.toUpperCase();
                            if (
                                str.includes('I') ||
                                str.includes('O') ||
                                str.includes('Q')
                            ) {
                                this.$toast.show(
                                    'The VIN must be 17 characters. You entered ' +
                                        this.vin_no.length +
                                        ' characters.<br> Do not contain letters I, O, or Q',
                                    {
                                        type: 'error',
                                    }
                                );
                                return;
                            }
                        } else {
                            this.$toast.show(
                                'The VIN must be 17 characters. You entered ' +
                                    this.vin_no.length +
                                    ' characters.<br> Do not contain letters I, O, or Q',
                                {
                                    type: 'error',
                                }
                            );
                            return;
                        }
                    }
                }
                this.processBilling();
            }
        },
        processBilling() {
            let FormData = require('form-data');
            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('schedule_date', this.schedule_date);
            formData.append('schedule_time', this.schedule_time);
            formData.append('schedule_slot', this.schedule_slot);

            formData.append('promo_code', this.promo_code);
            formData.append('company_name', this.company_name);
            formData.append('full_name', this.full_name);

            formData.append('email', this.email);
            formData.append('phone', this.phone);
            formData.append('alternate_phone', this.alternate_phone);

            formData.append('address', this.address);
            formData.append('apt_no', this.apt_no);
            formData.append('city', this.city);
            formData.append('state', this.state);
            formData.append('zip', this.zip);
            formData.append('comments', this.comments);
            formData.append('same_addr', this.addr_same);
            formData.append('payment_type', this.payment_type);

            if (this.stripeToken !== '') {
                formData.append('stripeToken', this.stripeToken);
            }

            formData.append('card_holder_name', this.card_holder_name);
            formData.append('billing_address', this.billing_address);
            formData.append('billing_city', this.billing_city);
            formData.append('billing_state', this.billing_state);
            formData.append('billing_zip', this.billing_zip);

            formData.append('ord_insurance_name', this.ord_insurance_name);
            formData.append('claim_no', this.claim_no);
            formData.append('date_of_loss', this.date_of_loss);
            formData.append('order_deductible', this.order_deductible);
            formData.append('vin_no', this.vin_no);

            axios
                .post('/processBilling', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        localStorage.setItem(
                            'ls_schedule_date',
                            resp.appointment_data['schedule_date']
                        );
                        localStorage.setItem(
                            'ls_schedule_time',
                            resp.appointment_data['schedule_time']
                        );
                        localStorage.setItem(
                            'ls_order_no',
                            resp.billing_data['billing_id']
                        );
                        localStorage.setItem(
                            'ls_order_no_app_id',
                            resp.appointment_id
                        );
                        router.push('/thankyou/' + resp.appointment_id);
                    } else {
                        this.$toast.show(response.data.error, {
                            type: 'error',
                        });
                        return;
                    }
                })
                .catch((error) => {
                    window.console.log('in updateQuote error : ' + error);
                });
        },
        updateAppAddress() {
            //send update app call
            //dismiss modal
            //send user to step 4 to select slots again

            $('#addrChangeModal').modal('hide');
            /*eslint no-var: "off"*/
            /*eslint no-undef: "off"*/
            /*eslint no-lonely-if: "off"*/
            /* eslint no-useless-return: "off" */

            let FormData = require('form-data');

            let formData = new FormData();
            formData.append('appointment_id', this.$route.params.quoteId);
            formData.append('zip', this.zip);
            formData.append('fetch_slots', '1');
            formData.append('update_tax', '1');
            formData.append('schedule_date', this.schedule_date);
            axios
                .post('/updateZipcode', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        var resp = response.data.data;
                        this.appointmentData['zip'] = this.zip;
                        //$("ul.slots0").html(resp.slots_info_html);
                        $('ul.ws-time-slot-list').html(resp.slots_info_html);

                        this.appointmentData['local_city_name'] =
                            resp.appointment_data['local_city_name'];
                        if (resp.appointment_data['tax']) {
                            this.appointmentData['tax'] =
                                resp.appointment_data['tax'];
                        }

                        //this.schedule_date = this.currentDate('0','MM/DD/YYYY');
                        this.schedule_time = '';
                        this.schedule_slot = '';

                        $(this).attr(
                            'data-hs-step-form-next-options',
                            '{"targetSelector": "#basicSelectStep4"}'
                        );
                        $('.ws-steps-progress-row').removeClass('active');
                        $('#mobilestep4').addClass('active');

                        $('#basicSelectStep5').hide();
                        $('#basicSelectStep4').show();

                        $('#checkouthead').removeClass('active');
                        $('#availabilityhead').addClass('active');
                        setTimeout(() => {
                            $('#initSlider').click();
                        }, 25);
                    }
                })
                .catch((error) => {
                    window.console.log('in updateQuote error : ' + error);
                });
        },
        doorWindowRadio(e) {
            //console.log(e);
            this.door_sub_details['category'] = e;
            // if(e==='slide_issue')
            // {
            //     this.door_sub_details['break_in']=0;
            //     this.door_sub_details['accident']=0;
            //     this.door_sub_details['debris_impact']=0;
            //     this.door_sub_details['others']=0;
            //     this.door_sub_details['other_text']="";
            //     this.door_other_text = "";
            // }
            window.console.log(this.door_sub_details);
        },
        saveDoorSubDetails(event, key) {
            //console.log(e);
            //this.door_sub_details[key]=val;
            let checked = event.target.checked;
            if (checked) {
                this.door_sub_details[key] = 1;
            } else {
                this.door_sub_details[key] = 0;
                //this.door_sub_details.splice(key);
            }
            window.console.log(this.door_sub_details);
        },
        applyModal(text, name) {
            let itemHeading;
            if (this.allCategories[name]) {
                this.allCategories[name].all_categories.forEach((category) => {
                    itemHeading = category.category_heading;
                    itemHeading =
                        '<a href="#helpModal" data-toggle="modal"' +
                        'id="' +
                        category.id +
                        '">' +
                        itemHeading +
                        '<small class="text-primary cursor-pointer">' +
                        '<i class="fa fa-question-circle"></i></small>' +
                        '</a>';
                    text = text.replaceAll(
                        category.category_heading,
                        itemHeading
                    );
                });
            }

            // console.log(this.allCategories);
            return text;
        },
        uploadImage(event) {
            let FormData = require('form-data');
            let data = new FormData();
            data.append('name', 'my-picture');
            data.append('file', event.target.files[0]);
        },
        backtobutton(target_page) {
            //console.log(target_page);
            document.documentElement.scrollTop = 0;
            $('ul#basicStepFormProgress li').each(function (i, li) {
                var target = $(li);
                target.removeClass('active');
            });
            if (target_page === '2') {
                //$('.ws-steps-progress-row').removeClass('active');
                //$('#mobilestep2').addClass('active');

                //$('#glassfeature3').removeClass('active');
                //$('#glassselectedhead').addClass('active');
                $('#basicSelectStep3').hide();
                $('#basicSelectStep2').show();
                $('#glassselectedhead').addClass('active');
            } else if (target_page === '3') {
                //$('.ws-steps-progress-row').removeClass('active');
                //$('#mobilestep3').addClass('active');

                //$('#availabilityhead').removeClass('active');
                //$('#glassfeature3').addClass('active');

                if (this.selectedGlasses.Has_question === 1) {
                    $('#basicSelectStep4').hide();
                    $('#basicSelectStep3').show();
                    $('#glassfeature3').addClass('active');
                } else {
                    $('#basicSelectStep4').hide();
                    $('#basicSelectStep2').show();
                    $('#glassselectedhead').addClass('active');
                }
            } else if (target_page === '4') {
                $('#availabilityhead').addClass('active');

                $('#basicSelectStep5').hide();
                $('#basicSelectStep4').show();
                setTimeout(() => {
                    $('#initSlider').click();
                }, 10);
            }
        },
        addressFieldChange(place) {
            //console.log(place);
            var country_long_name = '';
            var country_short_name = '';

            this.city = '';
            this.state = '';
            this.zip = '';
            for (var i = 0; i < place.address_components.length; i++) {
                var address_component = place.address_components[i];
                var ty = address_component.types;

                for (var k = 0; k < ty.length; k++) {
                    if (ty[k] === 'locality' || ty[k] === 'neighborhood') {
                        this.city = address_component.long_name;
                        //$city.val(address_component.long_name);
                    } else if (
                        ty[k] === 'postal_town' ||
                        ty[k] === 'administrative_area_level_1'
                    ) {
                        this.state = address_component.short_name;
                        //$state.val(address_component.short_name);
                    } else if (ty[k] === 'postal_code') {
                        this.zip = address_component.short_name;
                        //$zipcode.val(address_component.short_name);
                    } else if (ty[k] === 'country') {
                        country_long_name = address_component.long_name;
                        country_short_name = address_component.short_name;
                    }
                }
            }
            var address = this.address;
            var city = this.city;
            var state = this.state;
            var new_address = address.replace(city, '');
            new_address = new_address.replace(state, '');

            new_address = new_address.replace(country_long_name, '');
            new_address = new_address.replace(country_short_name, '');
            new_address = $.trim(new_address);

            new_address = new_address.replace(/,/g, '');
            new_address = new_address.replace(/America/g, '');

            /*eslint prefer-regex-literals: "off"*/
            var re = new RegExp('.*(A)$');
            if (new_address.match(re)) {
                new_address = new_address.slice(0, -1);
            }
            new_address = new_address.replace(/ +/g, ' ');
            this.address = new_address;
            //update tax against new address
        },
        billingAddressFieldChange(place) {
            var country_long_name = '';
            var country_short_name = '';

            this.billing_city = '';
            this.billing_state = '';
            this.billing_zip = '';

            for (var i = 0; i < place.address_components.length; i++) {
                var address_component = place.address_components[i];
                var ty = address_component.types;

                for (var k = 0; k < ty.length; k++) {
                    if (ty[k] === 'locality' || ty[k] === 'neighborhood') {
                        this.billing_city = address_component.long_name;
                    } else if (
                        ty[k] === 'postal_town' ||
                        ty[k] === 'administrative_area_level_1'
                    ) {
                        this.billing_state = address_component.short_name;
                    } else if (ty[k] === 'postal_code') {
                        this.billing_zip = address_component.short_name;
                    } else if (ty[k] === 'country') {
                        country_long_name = address_component.long_name;
                        country_short_name = address_component.short_name;
                    }
                }
            }
            var address = this.billing_address;
            var city = this.billing_city;
            var state = this.billing_state;
            var new_address = address.replace(city, '');
            new_address = new_address.replace(state, '');

            new_address = new_address.replace(country_long_name, '');
            new_address = new_address.replace(country_short_name, '');
            new_address = $.trim(new_address);

            new_address = new_address.replace(/,/g, '');
            new_address = new_address.replace(/America/g, '');

            /*eslint prefer-regex-literals: "off"*/
            var re = new RegExp('.*(A)$');
            if (new_address.match(re)) {
                new_address = new_address.slice(0, -1);
            }
            new_address = new_address.replace(/ +/g, ' ');
            this.billing_address = new_address;
        },
        validateEmail(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
    },
};
</script>
<style>
.slicko2 .slick-list {
    padding-bottom: 6px;
}
.slicko1 {
    display: flex;
    align-items: center;
}

.ws-calender-month {
    position: relative;
}

.slick-nav1,
.slick-nav2 {
    position: absolute;
    display: flex;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.slick-nav1 {
    gap: 150px;
}

.slick-nav2 {
    justify-content: space-between;
    width: calc(100% + 38px);
}

button.slick-arrow {
    border: none;
    background: none;
}

button.slick-arrow:hover {
    background: none;
    color: inherit;
}

button.slick-disabled {
    opacity: 0.5;
}

.slick-arrow {
    height: auto;
    width: auto;
}

.ws-today-row {
    position: relative;
}

.slick-nav {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    z-index: 1;
}

.ws-calender-date {
    position: relative;
    padding: 0 19px;
}

.slicko2 {
    margin-right: -19px;
    margin-left: -19px;
}

.slicko2 .item {
    padding: 0 1px;
}

.ws-calender-date .calender-date-bx {
    margin-bottom: 0;
}
</style>
