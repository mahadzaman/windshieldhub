<template>
    <div class="w-popup-optin" style="z-index: 1040;">
        <div class="w-optin-btn circle red-box" @click="optinBtn"></div>
        <div class="w-prompt" style="display: none;">
            <a href="javascript:void(0)" class="w-prompt-button" @click="closePrompt">
                <img src="https://windshieldhub.com/wp-content/plugins/chatbox/images/new/close-icon.png" />
            </a>
            <div class="w-prompt-bubble" @click="openPopup">
                <div class="w-avatar">
                    <img src="https://windshieldhub.com/wp-content/plugins/chatbox/images/profile.png" />
                </div>
                <div class="w-prompt-copy">
                    <div>Hi there, have a question?<br />Text us here!</div>
                </div>
            </div>
        </div>
        <div class="w-form-optin-box" id="form" style="display: none;">
            <section id="form-id">
                <div class="w-custom-heading">
                    <img
                        src="https://windshieldhub.com/wp-content/plugins/chatbox/images/new/chat.png"
                        alt=""
                        height="17"
                    />
                    We'll text you back!
                    <span class="w-chat-close" @click="closeChat">
                        <a href="javascript:void(0)" class="w-optin-btn-mobile red-box" @click="optinBtn"></a>
                    </span>
                </div>
                <form action="" id="checbox_form">
                    <div class="SendSmsPage__FormContainer">
                        <!--first-step-->
                        <div class="first-step" id="first_step" style="display: block">
                            <div class="w-send-msg">
                                <div>Enter your information below and our team will text you shortly.</div>
                            </div>
                            <div class="w-send-sms">
                                <div class="clearfix"></div>
                                <div class="w-TextInput">
                                    <input type="text" name="name" id="name" class="add_input_data" />
                                    <label for="Name">Name *</label>
                                    <div class="w-error name_err"></div>
                                    <div class="TextInput__Bar "></div>
                                </div>
                                <div class="w-TextInput">
                                    <input
                                        type="text"
                                        id="phone_no"
                                        name="phone_no"
                                        placeholder="(___)___-___"
                                        class="add_input_data"
                                        autocomplete="off"
                                    />
                                    <label for="Mobile Phone">Mobile Phone *</label>
                                    <div class="w-error phone_err"></div>
                                    <div class="TextInput__Bar"></div>
                                </div>
                                <div class="w-TextInput">
                                    <input type="text" name="zip_code" id="zip_code" class="add_input_data" />
                                    <label for="Name">Zip-Code</label>
                                    <div class=""></div>
                                    <div class="TextInput__Bar "></div>
                                </div>
                                <div class="w-TextInput">
                                    <textarea
                                        class="TextInput__Textarea add_input_data"
                                        id="Message"
                                        style="height: 50px;"
                                    ></textarea>
                                    <label for="Message">Message *</label>
                                    <div class="w-error msg_err"></div>
                                    <div class="TextInput__Bar "></div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="SendSmsPage__ButtonFader">
                                <div class="w-legal">
                                    <p
                                        >By submitting you agree to receive text messages at the number provided.
                                        Message/data rates apply.</p
                                    >
                                </div>
                                <div class="w-textright">
                                    <button
                                        type="submit"
                                        class="w-SendButton"
                                        id="sub_btn"
                                        disabled="disabled"
                                        style="opacity: 0.4;"
                                    >
                                        <div class="SendButton__Fader SendButton__Fader--visible">Text Me</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!--second-step-->
                        <div class="second-step" id="second_step" style="display:none;">
                            <div class="w-send-msg">
                                <div>Enter your information below and our team will text you shortly.</div>
                            </div>
                            <div class="SubmittedMessage">
                                <div class="w-submit-title from2">&nbsp;</div>
                                <div class="w-sub-head msg2">&nbsp;</div>
                            </div>
                            <div class="w-recieved-icon">
                                <img
                                    alt=""
                                    src="https://windshieldhub.com/wp-content/plugins/chatbox/images/chat-icon.png"
                                />
                                <p>Received</p>
                            </div>
                            <div class="w-ConfirmationMessage">
                                <div class="w-PhoneNumber">321 296-9284</div>
                                <div class="w-Message">
                                    <div class="w-confirm-title"
                                        >We got your message!
                                        <img
                                            src="https://windshieldhub.com/wp-content/plugins/chatbox/images/check.svg"
                                            alt=""
                                            width="16px"
                                    /></div>
                                    <div class="w-confirm-subtitle">
                                        <p>Our team will be texting you back from the number above.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatWidget",
    data: () => {
        return {};
    },
    mounted: () => {
        setInterval(function() {
            $("div.w-prompt").hide();
        }, 8000);
    },
    methods: {
        closeSPopup() {
            $("#form").hide();
        },
        openPopup() {
            //onclick .w-prompt-bubble
            $(".w-prompt").css("display", "none");
            $("#form").toggle();
            $(".w-prompt").css("display", "none");
            $(".w-optin-btn").toggleClass("red-box");
            this.resetPopup();
        },
        closePrompt() {
            //onclick .w-prompt-button
            $(".w-prompt").css("display", "none");
        },
        optinBtn() {
            //onclick .w-optin-btn
            $("#form").toggle();
            $(".w-prompt").css("display", "none");
            $(".w-optin-btn").toggleClass("red-box");
            this.resetPopup();
        },
        closeChat() {
            //onclick .w-chat-close
            $("#form").toggle();
            $(".w-prompt").css("display", "none");
            $(".w-optin-btn").toggleClass("red-box");
            this.resetPopup();
        },
        resetPopup() {
            $("#sub_btn").attr("disabled", true);
            $("#sub_btn").css("opacity", "0.4");
            $("#first_step").css("display", "block");
            $("#second_step").css("display", "none");
            $("#name").val("");
            $("#phone_no").val("");
            $("#zip_code").val("");
            $("#Message").val("");
        },
    },
};
</script>
