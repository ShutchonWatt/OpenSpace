alert("This alert box was called with the onload event");
document.getElementById("checkboxes1").disabled = true;
document.getElementById("checkboxes2").disabled = true;
document.getElementById("checkboxes3").disabled = true;
document.getElementById("checkboxes4").disabled = true;
document.getElementById("checkboxes5").disabled = true;
document.getElementById("checkboxes6").disabled = true;
document.getElementById("slider1").disabled = true;
document.getElementById("slider2").disabled = true;
document.getElementById("slider3").disabled = true;
document.getElementById("slider4").disabled = true;
document.getElementById("slider5").disabled = true;
document.getElementById("launchbtn").disabled = true;

function validate() {
  let password = document.getElementById("password").value;
  if (password == "TrustNo1") {
    alert("Login successfully");
    document.getElementById("checkboxes1").disabled = false;
    document.getElementById("checkboxes2").disabled = false;
    document.getElementById("checkboxes3").disabled = false;
    document.getElementById("checkboxes4").disabled = false;
    document.getElementById("checkboxes5").disabled = false;
    document.getElementById("checkboxes6").disabled = false;
    document.getElementById("slider1").disabled = false;
    document.getElementById("slider2").disabled = false;
    document.getElementById("slider3").disabled = false;
    document.getElementById("slider4").disabled = false;
    document.getElementById("slider5").disabled = false;
    document.getElementById("launchbtn").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("btn").disabled = true;
  }
}

function detect() {
  if (document.getElementById("checkboxes1").checked &&
      document.getElementById("checkboxes2").checked &&
      document.getElementById("checkboxes3").checked &&
      document.getElementById("checkboxes4").checked &&
      document.getElementById("checkboxes5").checked &&
      document.getElementById("checkboxes6").checked &&
      document.getElementById("slider1").value == 5 &&
      document.getElementById("slider2").value == 5 &&
      document.getElementById("slider3").value == 5 &&
      document.getElementById("slider4").value == 5 &&
      document.getElementById("slider5").value == 5) {
    document.getElementById("launchbtn").disabled = false;
  }
}

function launch() {
  alert("Press");
  if(document.getElementById("checkboxes1").checked &&
  document.getElementById("checkboxes2").checked &&
  document.getElementById("checkboxes3").checked &&
  document.getElementById("checkboxes4").checked &&
  document.getElementById("checkboxes5").checked &&
  document.getElementById("checkboxes6").checked &&
  document.getElementById("slider1").value == 5 &&
  document.getElementById("slider2").value == 5 &&
  document.getElementById("slider3").value == 5 &&
  document.getElementById("slider4").value == 5 &&
  document.getElementById("slider5").value == 5) {
    let rocket = document.getElementById("rocket");
    rocket.animate([
      { // current position of your rocket
        left: '250px',
        bottom: '250px'
      },
      { //  final position of your rocket
        left: '450px',
        bottom: '450px'
      }
    ], {
      // timing options
      duration: 2000,
      iterations: 1
    })
  }
}

