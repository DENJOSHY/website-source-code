document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // UI Feedback
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    // 1. Gather all form data
    const formData = new FormData(form);
    
    // 2. Special handling for Checkboxes (like in contact.html)
    const object = {};
    formData.forEach((value, key) => {
      if (object[key]) {
        if (!Array.isArray(object[key])) {
          object[key] = [object[key]];
        }
        object[key].push(value);
      } else {
        object[key] = value;
      }
    });

    const json = JSON.stringify(object);

    // 3. The Web3Forms Handshake
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let res = await response.json();
        if (response.status == 200) {
          showToast("Message sent successfully!", "success");
          form.reset();
        } else {
          console.log(res);
          showToast("Error: " + res.message, "error");
        }
      })
      .catch((error) => {
        console.log(error);
        showToast("Network error. Please try again.", "error");
      })
      .finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      });
  });

  // Helper function for the "Toast" notification
  function showToast(message, type) {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 4000);
  }
});