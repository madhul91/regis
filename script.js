// // Initialize EmailJS
// (function(){
//   emailjs.init("G7UAVUIQMXb0ogmef"); // Replace with your EmailJS public key
// })();

// document.getElementById("register-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;

//   // Send email using EmailJS
//   emailjs.send("service_j4gl1ln", "template_95ne33m", {
//     user_name: name,
//     user_email: email
//   })
//   .then(function(response) {
//     alert("✅ Registration successful! Email sent to admin.");
//     console.log("SUCCESS!", response.status, response.text);
//   }, function(error) {
//     alert("❌ Failed to send email. Please try again later.");
//     console.error("FAILED...", error);
//   });
// });
// ✅ Initialize EmailJS with your Public Key
(function() {
  emailjs.init("G7UAVUIQMXb0ogmef"); // ⚠️ Replace with your actual PUBLIC KEY
})();

// ✅ Wait until page fully loads
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm"); // 👈 matches your HTML id

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Prepare email parameters
      const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Send the email
      emailjs.send("service_j4gl1ln", "template_95ne33m", params)
        .then(function(response) {
          alert("✅ Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          form.reset();
        })
        .catch(function(error) {
          console.error("❌ FAILED...", error);
          alert("❌ Message failed to send. Check console for details.");
        });
    });
  } else {
    console.error("Form element not found!");
  }
});
