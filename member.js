console.log('a')


function validate(){

    const form = document.forms['regisform'];
    const fullname = form['fullname'].value;
    const email = form['email'].value;
    const gender = form['gender'].value;
    const city = form['city'].value;
    const street = form['street'].value;
    const pc = form['pc'].value;
    const password = form['password'].value;
    const check = form['news'].checked;
    

    let message = ''
    if(!fullname || !email || !gender || !city || !street || !pc || !password){
        message = "All field must not be empty"
    }else if (fullname.length < 4){
        message = "Name must be at least 4 characters"
    }else if (city == "NULL"){
        message = "Please select your city"
    }else if (street.length < 6){
        message = "Street must be at least 6 characters"
    }else if (pc < 10000 ){
        message = "Postal code must be at least 5 characters"
    }else if (password.length < 8){
        message = "Password must be at least 8 characters"
    }

    if(message){
        document.getElementById('errorMsg').innerHTML = message;
        return false;
    }else {
        
        if (!check){
            let conf = confirm("Are you sure you dont want to get any notification?")
            if (!conf){
                let text = alert("Please tick the Get Tanaka daily letter")
                return false;
            }
        }

        let conf = confirm("Are you sure you have filled the form correctly?")

        if (!conf){
            return false;
        }
    }
}