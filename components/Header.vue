<template>
    <div class="our_header">
        <header class="header py-3">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="header-logo">
                        <a href="//dev.windshieldhub.com"
                            ><img
                                class="img-fluid"
                                src="~/assets/img/logo.svg"
                                alt="Logo"
                        /></a>
                    </div>

                    <div class="call-24">
                        <div class="call-24-icon">
                            <img
                                class="img-fluid"
                                src="~/assets/img/24x7.png"
                                alt="24x7"
                            />
                        </div>
                        <div class="call-24-content">
                            <em>Give us a call anytime</em>
                            <strong>1-800-711-1669</strong>
                        </div>
                    </div>

                    <div class="call-24 phone-24-7">
                        <div
                            v-if="$route.params.quoteid !== ''"
                            class="quote-no"
                        >
                            <strong
                                >Quote <span>#{{ app_id }}</span></strong
                            >
                        </div>
                        <div
                            class="call-24-icon"
                            data-toggle="modal"
                            data-target="#modal74-7"
                        >
                            <span
                                ><img
                                    class="img-fluid"
                                    src="~/assets/img/24x7-img.png"
                                    alt="24x7"
                            /></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'Header',
    //   components: true,
    props: {},
    data() {
        return {
            app_id: '',
            // basePath: process.env.baseUrl,
        };
    },
    created() {
        // this.app_id = localStorage.getItem('ls_app_id')
    },
    mounted() {
        // this.app_id = JSON.parse(localStorage.getItem('appointment_id'));
    },
};
</script>
