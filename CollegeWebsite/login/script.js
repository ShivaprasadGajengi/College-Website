function register() {
  const id = document.getElementById("regID").value;
  const pass = document.getElementById("regPass").value;

  if (!id || !pass) {
    alert("Please fill both fields.");
    return;
  }

  // Save to localStorage
  localStorage.setItem(id, pass);
  alert("Registration successful!");
  window.location.href = "index.html";
}

function login() {
  const id = document.getElementById("loginID").value;
  const pass = document.getElementById("loginPass").value;

  const storedPass = localStorage.getItem(id);

  if (storedPass === pass) {
    alert("Login successful!");
    // redirect to dashboard or home
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid ID or Password.");
  }
}
document
  .getElementById("bonafideForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("studentName").value;
    const fathername = document.getElementById("fathername").value;
    const rollno = document.getElementById("rollno").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    // Set certificate content
    document.getElementById("certStudentName").textContent = name;
    document.getElementById("certfathername").textContent = fathername;
    document.getElementById("certrollno").textContent = rollno;
    document.getElementById("certCourse").textContent = course;
    document.getElementById("certYear").textContent = year;

    // Set current date
    document.getElementById("currentDate").textContent =
      new Date().toLocaleDateString();

    // Show certificate
    document.getElementById("certificateArea").classList.remove("hidden");
  });
