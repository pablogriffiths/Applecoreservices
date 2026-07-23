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
            alert("Sorry, something went wrong. Please try again.");
        });

    });
}