document.querySelector("#signinform").addEventListener("submit", signin);

function signin(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var old_data = JSON.parse(localStorage.getItem("signupData"));
  for (var i = 0; i < old_data.length; i++) {
    if (email == old_data[i].email && password == old_data[i].password) {
      console.log("print");
      localStorage.setItem("currentUser", JSON.stringify(old_data[i]));
      alert("Sign In Successfull");
      window.Location.href = "./index.html";
      return;
    }
  }
  alert("Email or Password Does Not Match");
}
