<template>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="row no-gutters">
            <div class="col-md-5 bg-img-hero rounded-left d-none d-md-block" style="background-image: url(../assets/img/modal-bg-2.jpg);"></div>

            <div class="col-md-7 text-center">
                <div class="modal-body px-6 py-8">
                <h2 class="h4-nlg mb-3">Thank You For Your Order</h2>
                <p class="opacity">We'll contact you shortly, if any additional<br> information is needed.</p>

                <h3 class="h4-nlg h2 text-primary mb-4 pt-3 ws-order-no"><span>Order</span><span>#{{order_no}}</span></h3>
                <p class="mb-5">You have requested service for<br> <strong>{{schedule_date}} From {{schedule_time}}</strong></p>

                <p class="mb-0">Our technician will call you<br> <strong>30 minutes</strong> prior to their arrival.</p>
                </div>

                <div class="modal-footer d-block px-6 small">
                Questions about your appointment send us a text – <strong>(321) 296-9284</strong><br>
                Monday to Sunday From: 09:00 AM to 05:00 PM
                </div>
            </div>
            </div>
            <div class="position-absolute top-0 right-0 mt-n7 text-white cursor-pointer" data-dismiss="modal" aria-label="Close">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
            </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Thankyou',
    props: {
         
    },
    data() {
        return {
            order_no : "",
            schedule_date : "",
            schedule_time : "",
        }
    },
    components: {
         
    },
    mounted()
    {
      
    },
    created(){
        // console.log(this.$router.params.id );
         this.order_no = localStorage.getItem('ls_order_no');
         this.schedule_date = localStorage.getItem('ls_schedule_date');
         this.schedule_time = localStorage.getItem('ls_schedule_time');
    }
}
</script>