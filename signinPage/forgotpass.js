document.getElementById("forotp").addEventListener("click",getotp);

function getotp(){
    var email=document.getElementById("email").value;
    var old_data = JSON.parse(localStorage.getItem("signupData"));
    for (var i = 0; i < old_data.length; i++) {
        if (email == old_data[i].email) {
            document.getElementById("enterotp").style.display="block";
        }  else{
            alert("Please Enter Registered Email");
            document.getElementById("email").value="";
        }      
}

}

document.getElementById("submite").addEventListener("click",setpassword);
function setpassword(){
    var otp=document.getElementById("otp1").value;
  if (otp == "1234") {
    document.getElementById("forotp").style.display="none";
    document.getElementById("forgoth1").innerText="Update New Password";
    document.getElementById("forgotp").innerText="You are just one step away for Sign-In";
    document.getElementById("forgoth2").innerText="Step 2";
    document.getElementById("forgotl1").innerText="Enter New Password";
    document.getElementById("forgotl2").innerText="Confirm New Password";
    document.getElementById("email").value="";
    document.getElementById("otp1").value="";
          }
          else {
            alert("Please Enter Valid Otp");
          }
        }
        

        
      

      