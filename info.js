function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confp").value;
    var educationalStatus = document.querySelector(`input[type="radio"][name=educationalStatus]:checked`).value;
    var emails = document.getElementById("emails").value;
    var age = document.getElementById("age").value;

    if (fname == "") 
    {
        document.getElementById("fName").innerHTML = "Required Field";
        return false;
    }   else 
        {
            document.getElementById("fName").innerHTML = "";
        }


    if (fname.charAt(0) != fname.charAt(0).toUpperCase()) 
    {
        document.getElementById("fName").innerHTML = "First letter must be Uppercase";
        return false;
    }   else
        {
            document.getElementById("fName").innerHTML = "";
        }

        if (!/^[a-zA-Z]*$/g.test(document.signup.fname.value)) {
         document.getElementById("fName").innerHTML = "Only alphabet allowed";
          return false;
      }

      
    if (lname == "") 
    {
        document.getElementById("lName").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("lName").innerHTML = "";
        }


    if (lname.charAt(0) != lname.charAt(0).toUpperCase()) 
    {
        document.getElementById("lName").innerHTML = "First letter must be Uppercase";
        return false;
    }   else
        {
            document.getElementById("lName").innerHTML = "";
        }

        if (!/^[a-zA-Z]*$/g.test(document.signup.lname.value)) {
          document.getElementById("lName").innerHTML = "Only alphabet allowed";
           return false;
       }


    if (user == "") 
    {
        document.getElementById("username").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("username").innerHTML = "";
        }


    if (user.length < 6) 
    {
        document.getElementById("username").innerHTML = " Username must have at least 6 characters";
        return false;
    }   else
        {
            document.getElementById("username").innerHTML = "";
        }

        
    if (!/^[A-Za-z][A-Za-z0-9]+$/.test(document.signup.user.value)) {
          document.getElementById("username").innerHTML = "Must start with an alphabet";
           return false;
       }



    if (pass == "") 
    {
        document.getElementById("passwords").innerHTML = "Required Field";
        return false;
    }   else
        {
            document.getElementById("passwords").innerHTML = "";
        }

    if (pass.length < 6) 
    {
        document.getElementById("passwords").innerHTML = "Password must be at least 6 characters long";
        return false;
    }   else
        {
          document.getElementById("passwords").innerHTML = "";
        }

    if (!/^[A-Za-z][A-Za-z0-9]+$/.test(document.signup.pass.value)) 
    {
      document.getElementById("passwords").innerHTML = "Password must start with an alphabet";
      return false;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/.test(document.signup.pass.value)) 
    {
      document.getElementById("passwords").innerHTML = "Password must have at least 1 digit and 1 uppercase";
      return false;
    }
          
        
    if (pass != confirmpass) 
    {
      document.getElementById("confirmpassword").innerHTML = "Password Mismatch";
      return false;
    } else
      {
      document.getElementById("confirmpassword").innerHTML = "";
      }


    if (confirmpass == "") 
    {
      document.getElementById("confirmpassword").innerHTML = "Re-enter Password";
      return false;
    } else
      {
      document.getElementById("confirmpassword").innerHTML = "";
      }


    if (educationalStatus == "") 
    {
        document.getElementById("edids").innerHTML = "Select an option";
        return false;
    }   else
        {
          document.getElementById("edids").innerHTML = "";
        }




        
    if ((age < 18) || (age > 60))
    {
        document.getElementById("ageids").innerHTML = "Age must be in between 18 to 60";
        return false;
    }   else
        {
          document.getElementById("ageids").innerHTML = "";
        }
    
    if (age == "") 
    {
        document.getElementById("ageids").innerHTML = "Required Field";
        return false;
    }   else
        {
          document.getElementById("ageids").innerHTML = "";
        }     

  }