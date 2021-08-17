document.getElementById("submit-login").addEventListener("click", function () {
  // get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   get user password
  const passwordFiled = document.getElementById("user-password");
  const userPassword = passwordFiled.value;

  if (userEmail == "123@gmail.com" && userPassword == "123") {
    window.location.href = "banking.html";
    console.log(alert("Login successfully"));
  } else {
    console.log(alert("invalid user!"));
  }
});
