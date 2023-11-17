<template>
    <!-- <router-link to="/select/222">test</router-link>  -->
    <form class="p-2" method="post" @submit.prevent="onSubmit">
        <div class="form-group zipcode-row">
            <input
                id="zip_code"
                v-model="zip_code"
                class="form-control zipcode"
                type="tel"
                minlength="5"
                maxlength="5"
                name="zip_code"
                placeholder="Zip Code*"
                @keypress="isNumeric($event)"
            />
            <span class="process-msg" style="display: none"></span>
            <div class="error-msg" style="display: none"></div>
            <div class="success-msg" style="display: none"></div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <select
                        v-model="select_year"
                        class="form-control"
                        @change="getAllMakes()"
                    >
                        <option value="">Year</option>
                        <option
                            v-for="(year, index) in allYears"
                            :key="index"
                            :value="year.Value"
                        >
                            {{ year.Text }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-6">
                <div class="form-group">
                    <select
                        v-model="select_make"
                        class="form-control"
                        @change="getAllModels()"
                    >
                        <option value="">Make</option>
                        <option
                            v-for="(make, index) in allMakes"
                            :key="index"
                            :value="make.Value"
                        >
                            {{ make.Text }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <select
                        v-model="select_model"
                        class="form-control"
                        @change="getAllStyles()"
                    >
                        <option value="">Model</option>
                        <option
                            v-for="(model, index) in allModels"
                            :key="index"
                            :value="model.Value"
                        >
                            {{ model.Text }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="col-6">
                <div class="form-group">
                    <select v-model="select_style" class="form-control">
                        <option value="">Style</option>
                        <option
                            v-for="(style, index) in allStyles"
                            :key="index"
                            :value="style.Value"
                        >
                            {{ style.Text }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="bg-light rounded p-4 px-lg-7 mb-5 get-quote-text-wizard">
            <div class="d-flex align-items-center">
                Get Quote via&nbsp;Text

                <input
                    v-model="phone_number"
                    v-maska="'(###)###-####'"
                    type="tel"
                    class="js-masked-input form-control"
                    placeholder="Phone No*"
                />
            </div>
        </div>

        <div class="form-group">
            <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="E-mail (optional)"
            />
        </div>

        <div class="row">
            <div class="col-6 mb-3 mb-sm-0 pt-2">
                <div class="js-use-insurance form-group mb-0">
                    <div class="custom-control custom-checkbox">
                        <input
                            id="claim_insurance"
                            v-model="claim_insurance"
                            type="checkbox"
                            class="custom-control-input"
                        />
                        <label
                            class="custom-control-label"
                            for="claim_insurance"
                            >I want to use my insurance</label
                        >
                    </div>
                </div>

                <div
                    class="js-insurance-deductible form-group pt-3 mb-0"
                    style="opacity: 0"
                >
                    <div class="input-group input-group-merge">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> $ </span>
                        </div>
                        <input
                            v-model="deductible"
                            type="number"
                            min="0"
                            max="9999"
                            class="form-control"
                            placeholder="Deductible"
                            @keypress="isValidDeductible($event)"
                        />
                    </div>
                </div>
            </div>

            <div class="col-6 text-right">
                <button
                    type="submit"
                    class="btn-sp btn-sp-primary btn-sp-lg btn-wide btn-pill"
                >
                    Next
                </button>
            </div>
        </div>
    </form>
</template>
<script>
// import axios from 'axios';

export default {
    name: 'IFrame',
    data() {
        return {
            zip_code: '',
            select_year: '',
            allYears: [],
            select_make: '',
            allMakes: [],
            select_model: '',
            allModels: [],
            select_style: '',
            allStyles: [],
            phone_number: '',
            email: '',
            claim_insurance: false,
            deductible: '',
        };
    },
    created() {
        this.getAllYears();
        // if(this.$route.params.quoteId!=="")
        // {
        //    this.getQuoteData();
        // }
    },
    mounted() {
        //console.log("in iFrame.vue mounted");
        $('.js-use-insurance input').on('click', function () {
            if ($('.js-use-insurance input:checked').length > 0) {
                $('.js-insurance-deductible').css('opacity', '1');
            } else {
                $('.js-insurance-deductible').css('opacity', '0');
            }
        });
    },
    methods: {
        isNumeric(e) {
            const keyCode = e.which ? e.which : e.keyCode;
            if (!(keyCode >= 48 && keyCode <= 57)) {
                e.preventDefault();
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
        getQuoteData() {
            let FormData = require('form-data');
            if (this.$route.params.quoteId !== '') {
                const formData = new FormData();
                formData.append('appointment_id', this.$route.params.quoteId);
                formData.append('fetch_slots', 0);
                this.$axios
                    .post('/getQuote', formData)
                    .then((response) => {
                        if (response.data.http_status === '200') {
                            const resp = response.data.data;
                            this.zip_code = resp.appointment_data['zip'];
                            this.email = resp.appointment_data['email'];
                        }
                    })
                    .catch((error) => {
                        console.log('in error' + error);
                    });
            }
        },
        getAllYears() {
            let FormData = require('form-data');
            let formData = new FormData();
            let appId = 'id';

            // console.log(this.$route.params.quoteId)
            if (this.$route.params.quoteId !== undefined) {
                appId = this.$route.params.quoteId;
            }
            formData.append('appointment_id', appId);
            this.$axios
                .post('/getYears', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        const resp = response.data.data;
                        if (resp.order_no > 0) {
                            this.allYears = resp.allYears;
                            this.$router.push('/select');
                        } else {
                            this.allYears = resp.allYears;
                            if (this.$route.params.quoteId !== '') {
                                this.getQuoteData();
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.log('in error : ' + error);
                });
        },
        getAllMakes() {
            //var year = event.target.value;
            //var year = this.select_year;
            this.select_make = '';
            this.select_model = '';
            this.select_style = '';
            this.allMakes = [];
            this.allModels = [];
            this.allStyles = [];

            // let FormData = require('form-data');

            let formData = new FormData();
            formData.append('year_id', this.select_year);
            this.$axios
                .post('/getMakes', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        this.allMakes = response.data.data;
                    }
                })
                .catch((error) => {
                    console.log('in error' + error);
                });
        },
        getAllModels() {
            this.select_model = '';
            this.select_style = '';
            this.allModels = [];
            this.allStyles = [];
            // let FormData = require('form-data');
            let formData = new FormData();
            formData.append('year_id', this.select_year);
            formData.append('make_id', this.select_make);
            this.$axios
                .post('/getModels', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        this.allModels = response.data.data;
                        //router.push("/schedule")
                    }
                })
                .catch((error) => {
                    console.log('in error' + error);
                });
        },
        getAllStyles() {
            this.select_style = '';
            this.allStyles = [];
            // let FormData = require('form-data');
            let formData = new FormData();
            formData.append('year_id', this.select_year);
            formData.append('make_id', this.select_make);
            formData.append('model_id', this.select_model);
            this.$axios
                .post('/getStyles', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        this.allStyles = response.data.data;
                    }
                })
                .catch((error) => {
                    console.log('in error' + error);
                });
        },
        validateEmail(email) {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        onSubmit() {
            if (
                this.zip_code === '' ||
                this.phone_number === '' ||
                this.select_year === '' ||
                this.select_make === '' ||
                this.select_model === '' ||
                this.select_style === ''
            ) {
                //alert('Please fill out every field.')
                this.$toast.show('Please fill out all required field.', {
                    type: 'error',
                });
                return;
            }
            // let FormData = require('form-data');
            let formData = new FormData();
            formData.append('zip_code', this.zip_code);
            formData.append('year_id', this.select_year);
            formData.append('make_id', this.select_make);
            formData.append('model_id', this.select_model);
            formData.append('style_id', this.select_style);
            formData.append('phone_no', this.phone_number);
            if (this.email !== '') {
                const is_valid = this.validateEmail(this.email);
                if (!is_valid) {
                    this.$toast.show('Please add a valid email address.', {
                        type: 'error',
                    });
                    return;
                }
                //alert(is_valid);
            }
            formData.append('email', this.email);
            const insurance = this.claim_insurance ? 1 : 0;
            formData.append('claim_insurance', insurance);
            formData.append('deductible', this.deductible);
            if (this.$route.params.quoteId !== undefined) {
                formData.append('quote_id', this.$route.params.quoteId);
            }
            this.$axios
                .post('/addQuote', formData)
                .then((response) => {
                    if (response.data.http_status === '200') {
                        const resp = response.data.data;
                        //console.log(resp);
                        this.$router.push({
                            name: 'Schedule',
                            path: '/schedule/' + resp.appointment_id,
                            params: resp.appointment_id ,
                        })
                        console.log(this.$route);
                        // this.$router.push('/schedule/' + resp.appointment_id);
                        // console.log(resp);
                    } else if (response.data.http_status === '500') {
                        const resp = response.data.error;
                        this.$toast.show(resp, {
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log('in error' + error);
                });
        },
    },
};
</script>
<style scoped>
.color-circle {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border: 2px solid #d8d8d8;
    border-radius: 50%;
}
</style>
