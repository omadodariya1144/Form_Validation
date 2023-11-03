function adderror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error
}
function clearerror() {
    errors = document.getElementsByClassName('error');
    for (item of errors) {
        item.innerHTML = "";
    }
}
function validateform() {
    let returnval = true;
    clearerror();

    let finalname = ""
    let name = document.forms["form"]["formname"].value;
    if (name == "") {
        adderror("name", "*Fill the name");
    }
    else {
        let regex = /^[A-Za-z]+$/;
        if (regex.test(name) === false) {
            adderror("name", "*Enter a valid name");
        } else {
            adderror("name", "");
            finalname = name
        }
    }
    returnval = false

    let finalsurname = ""
    let surname = document.forms["form"]["formsurname"].value;
    if (surname == "") {
        adderror("surname", "*Fill the sirname");
    }
    else {
        let regex = /^[A-Za-z]+$/;
        if (regex.test(surname) === false) {
            adderror("surname", "*Enter a valid surname");
        } else {
            adderror("surname", "");
            finalsurname = surname
        }
    }
    returnval = false

    let finalemail = ""
    let email = document.forms["form"]["formemail"].value;
    if (email == "") {
        adderror("email", "*Fill the email");
    }
    else {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email) === false) {
            adderror("email", "*Enter a valid e-mail");
        } else {
            adderror("email", "");
            finalemail = email
        }
    }
    returnval = false

    let finaldob = ""
    let dob = document.forms["form"]["formdob"].value;
    if (dob == "") {
        adderror("dob", "*Fill the birth date");
    } else {
        finaldob = dob
    }
    returnval = false


    let finalmobile = ""
    let mobile = document.forms["form"]["formmobile"].value;
    if (mobile == "") {
        adderror("mobile", "*Fill the mobile number");
    }
    else {
        let regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            adderror("mobile", "*Enter a valid number");
        } else {
            adderror("mobile", "");
            finalmobile = mobile
        }
    }
    returnval = false

    let finalpassword = ""
    let password = document.forms["form"]["formpassword"].value;
    if (password == "") {
        adderror("password", "*Fill the password");
    }
    else {
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        if (regex.test(password) === false) {
            adderror("password", "*Enter a valid password");
        } else {
            adderror("password", "");
            finalpassword = password
        }
    }
    returnval = false

    let finalconfirmpassword = ""
    let confirmpassword = document.forms["form"]["formconfirmpassword"].value;
    if (confirmpassword == "") {
        adderror("confirmpassword", "*Fill the confirmpassword");
    }
    else {
        if (confirmpassword !== password) {
            adderror("confirmpassword", "*Enter a valid confirmpassword");
        } else {
            adderror("confirmpassword", "");
            finalconfirmpassword = confirmpassword

        }
    }
    returnval = false

    // let gender = document.forms["form"]["formselect"].value;
    // for (let i = 0; i < gender.length; i++) {
    //     if (gender[i].checked) {
    //         break;
    //     } else {
    //         if (i == gender.length) {
    //             adderror("gender", "*Please select your gender");
    //         } else {
    //             adderror("confirmpassword", "");
    //         }
    //     }
    //     returnval = false;
    // }
    let finalgender = ""
    let gender = document.forms["form"]["formselect"].value;
    if (gender == "") {
        adderror("gender", "*Fill the gender");
    }
    else {
        finalgender = gender
    }

    returnval = false

    let finaleducation = ""
    let education = document.forms["form"]["formbox"].value;
    if (education == "") {
        adderror("education", "*Fill the education");
    }
    else {
        finaleducation = education;
    }
    console.log(finaleducation,"finaleducation")

    returnval = false
  
// let j=document.getElementById("bca");
// if(j.checked){
//     const va=j.value;
//     console.log(va)
// }

    let items = {
        name: finalname,
        surname: finalsurname,
        email: finalemail,
        dob: finaldob,
        mobile: finalmobile,
        password: finalpassword,
        confirmpassword: finalconfirmpassword,
        // gender: finalgender,
        // educations: finaleducation
    };
    if (finalname && finalsurname && finalemail && finaldob && finalmobile && finalpassword && finalconfirmpassword && finalgender!== true)
        // console.log(items)
    localStorage.getItem(items);

    return returnval
}       