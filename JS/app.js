Swal.fire("Email: saylani@gmail.com <br> Password: 123");


function submitForm() {
        var userName = "saylani@gmail.com";
        var userPass = "123";
        var email = document.getElementById('name').value;
        var pass = document.getElementById('password').value;
    
        if (userName === email && userPass === pass) {
            location.assign ("Pages/main.html")
        } else {
         
            Swal.fire({
              icon: "error",
              title: "Incorrect",
              text: "Please correct email or password!",
            });
            
        }
}
    


