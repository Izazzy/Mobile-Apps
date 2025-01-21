function goToPage2() {
    const mobileNumber = document.getElementById("mobile-number").value;
    if (mobileNumber === "60173527250") {
      localStorage.setItem("mobileNumber", mobileNumber);
      window.location.href = "page2.html";
    } else {
      alert("Invalid mobile number. Please try again.");
    }
  }
  
  function goToPage3() {
    const name = document.getElementById("name").value;
    const day = document.getElementById("birthday-day").value;
    const month = document.getElementById("birthday-month").value;
    const year = document.getElementById("birthday-year").value;
    const email = document.getElementById("email").value;
  
    if (name && day && month && year && email) {
      localStorage.setItem("name", name);
      localStorage.setItem("birthday", `${day}-${month}-${year}`);
      localStorage.setItem("email", email);
      window.location.href = "page3.html";
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function loadUserDetails() {
    const mobileNumber = localStorage.getItem("mobileNumber");
    const name = localStorage.getItem("name");
    const birthday = localStorage.getItem("birthday");
    const email = localStorage.getItem("email");
  
    const details = `
      <p>Mobile Number: ${mobileNumber}</p>
      <p>Name: ${name}</p>
      <p>Birthday: ${birthday}</p>
      <p>Email: ${email}</p>
    `;
  
    document.getElementById("user-details").innerHTML = details;
  }

  function validateMobileNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
  }
  
  if (window.location.pathname.endsWith("page3.html")) {
    loadUserDetails();
  }
  