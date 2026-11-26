emailjs.init({
    publicKey: "zGEOMgoYzl1KMQj0p"
});

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        emailjs.sendForm(
            "service_h8qropq",
            "template_2isie4w",
            form
        )
        .then(function () {
            alert("Thanks! Your enquiry has been sent.");
            form.reset();
        })
.catch(function (error) {
    console.error("EmailJS error:", error);

    const errorText = (error && error.text ? error.text : "").toLowerCase();

    if (errorText.includes("recaptcha") || errorText.includes("captcha")) {
        alert('Don\'t forget to let me know you\'re not a robot by ticking "I\'m not a robot", please');
    } else {
        alert("Sorry, something went wrong sending your enquiry. Please try again.");
    }
});

    });
}
