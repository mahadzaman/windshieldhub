<template>
    <div class="our_footer">
        <!-- ========== FOOTER ========== -->
        <footer class="footer bg-light step-footer-bot-space">
            <div class="container text-center text-md-left py-5">
                <div class="row">
                    <div class="col-md-6 mb-3 mb-md-0 pt-2">
                        &copy; Copyright. 2021. WindshieldHub.com. All Rights
                        Reserved.
                    </div>

                    <div
                        id="bottomcards"
                        class="col-md-6 text-center text-md-right"
                    >
                        <div
                            class="
                                d-flex
                                justify-content-center justify-content-md-end
                            "
                        >
                            <div class="mr-1 ml-md-3 mr-md-0">
                                <img src="~/assets/img/visa.jpg" alt="Visa" />
                            </div>
                            <div class="mr-1 ml-md-3 mr-md-0">
                                <img
                                    src="~/assets/img/maestro.jpg"
                                    alt="Maestro"
                                />
                            </div>
                            <div class="mr-1 ml-md-3 mr-md-0">
                                <img
                                    src="~/assets/img/a-express.jpg"
                                    alt="American Express"
                                />
                            </div>
                            <div class="mr-1 ml-md-3 mr-md-0">
                                <img
                                    src="~/assets/img/discover.jpg"
                                    alt="Discover"
                                />
                            </div>
                            <div class="ml-md-3">
                                <img src="~/assets/img/dollar.jpg" alt="Cash" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- ========== END FOOTER ========== -->

        <!-- Go to Top -->
        <a
            class="js-go-to go-to position-fixed"
            href="javascript:;"
            style="visibility: hidden"
            data-hs-go-to-options='{
            "offsetTop": 700,
            "position": {
                "init": {
                "right": 32
                },
                "show": {
                "bottom": 32
                },
                "hide": {
                "bottom": -32
                }
            }
            }'
        >
            <i class="fas fa-angle-up"></i>
        </a>
        <!-- End Go to Top -->

        <!-- Modal -->
        <div
            id="order-processed"
            class="modal fade py-5"
            tabindex="-1"
            role="dialog"
            aria-labelledby="order-processed-title"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-lg modal-dialog-centered"
                role="document"
            >
                <div class="modal-content">
                    <div class="row no-gutters">
                        <div
                            class="
                                col-md-5
                                bg-img-hero
                                rounded-left
                                d-none d-md-block
                            "
                            style="
                                background-image: url(../assets/img/modal-bg-2.jpg);
                            "
                        ></div>

                        <div class="col-md-7 text-center">
                            <div class="modal-body px-6 py-8">
                                <h2 class="h4-nlg mb-3">
                                    Thank You For Your Order
                                </h2>
                                <p class="opacity">
                                    We'll contact you shortly, if any
                                    additional<br />
                                    information is needed.
                                </p>

                                <h3
                                    class="
                                        h4-nlg
                                        h2
                                        text-primary
                                        mb-4
                                        pt-3
                                        ws-order-no
                                    "
                                >
                                    <span>Order</span><span>#38455</span>
                                </h3>
                                <p class="mb-5">
                                    You have requested service for<br />
                                    <strong
                                        >11/26/2020 From 03:00 PM - 06:00
                                        PM</strong
                                    >
                                </p>

                                <p class="mb-0">
                                    Our technician will call you<br />
                                    <strong>30 minutes</strong> prior to their
                                    arrival.
                                </p>
                            </div>

                            <div class="modal-footer d-block px-6 small">
                                Questions about your appointment send us a text
                                –
                                <strong>(321) 296-9284</strong><br />
                                Monday to Sunday From: 09:00 AM to 05:00 PM
                            </div>
                        </div>
                    </div>
                    <div
                        class="
                            position-absolute
                            top-0
                            right-0
                            mt-n7
                            text-white
                            cursor-pointer
                        "
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
                    </div>
                </div>
            </div>
        </div>
        <!-- End Modal -->

        <!-- Modal 24/7 -->
        <div id="modal74-7" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content popup-24-7-popup">
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                    <div class="popup-24-7-two">
                        <span class="popup-24-7-gra"
                            ><img
                                src="~/assets/img/24-7-hr.png"
                                width="218"
                                height="122"
                                alt=""
                        /></span>
                        <h4>Are You Stuck or in need of assistance?</h4>
                        <p>
                            Our Customer support team is here to assist you
                            6am-5pm PST everyday
                        </p>
                        <div class="ws-customer-sup">
                            <span>Call customer support at</span>
                            <strong>1-888-507-1535</strong>
                        </div>
                        <div class="ws-customer-or">OR</div>

                        <button
                            type="submit"
                            class="
                                js-scroll-top
                                btn-sp
                                btn-sp-primary
                                btn-sp-lg
                                btn-wide
                                btn-pill
                                ws-next-btn
                            "
                            data-toggle="modal"
                            data-target="#order-processed"
                        >
                            PRESS HERE TO CALL
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal 24/7 END-->
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        basePath: process.env.baseUrl,
    },
};
</script>
