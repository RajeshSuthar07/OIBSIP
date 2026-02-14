function register(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!email || !password){
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({email, password}));
  alert("Registered successfully");
  window.location.href = "login.html";
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(!user || user.email !== email || user.password !== password){
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

