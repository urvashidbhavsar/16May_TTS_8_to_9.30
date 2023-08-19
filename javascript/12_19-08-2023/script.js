// click event ===============================================
function checkFormValid() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let ar = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    let mno = document.getElementById("mobile").value;
    let mail = document.getElementById("mail").value;
    let ps = document.getElementById("pass").value;
    let cps = document.getElementById("repass").value;
    if (fn == "" || fn == null) {
        document.getElementById("msg1").innerText = "Enter Firstname";
        return false
    } else if (ln == "" || ln == false) {
        document.getElementById("msg2").innerText = "Enter Lastname";
        return false
    } else if (male == false && female == false) {
        document.getElementById("msg3").innerText = "Select Gender";
        return false
    } else if (ar == "" || ar == null) {
        document.getElementById("msg4").innerText = "Enter Address"
        return false;
    } else if (city == "-1") {
        document.getElementById("msg5").innerText = "Select City"
        return false;
    } else if (mno == "" || mno == null) {
        document.getElementById("msg6").innerText = "Enter no"
        return false
    } else if (mail == "" || mail == null) {
        document.getElementById("msg7").innerText = "Enter Email"
        return false
    } else if (ps == "" || ps == null) {
        document.getElementById("msg8").innerText = "Enter Password"
        return false
    } else if (cps == "" || cps == null) {
        document.getElementById("msg9").innerText = "Enter Re-password"
        return false
    }
}
// blur event  ==================================================
// parameterized function
// blnk (paramenter/argument) = check input type
// msg (paramenter/argument) = display error msg
function blnkCheck(blnk, msg) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(msg).innerText = "Invalid value!!!"
        return false
    }
}
function checkradio(check, msg) {
    if (check.checked == false) {
        document.getElementById(msg).innerText = "Select value!!"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}
function dropcheck(sel, msg) {
    if (sel.value == "-1") {
        document.getElementById(msg).innerText = "Select value!!"
        return false
    } else {
        document.getElementById(msg).innerText = ""
        return false
    }
}

// keyboard event ============================================== 

function nameValid(checkname, msg) {
    let regEx = /^[a-zA-Z]*$/;
    if (!(regEx.test(checkname.value)) || checkname.value.length < 2) {
        document.getElementById(msg).innerText = "Enter proper name"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
// address length check 
function checkAddress(addlength, msg) {
    if (addlength.value.length < 30) {
        document.getElementById(msg).innerText = "Enter proper address"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
// mobile no validation 
function checkNumValid(nocheck, msg) {
    let regEx = /^[0-9]+$/;
    let start = /^[6-9]/
    if (!(regEx.test(nocheck.value)) || nocheck.value.length < 10 || !(start.test(nocheck.value))) {
        document.getElementById(msg).innerText = "Enter Proper number"
        return false;
    } else {
        document.getElementById(msg).innerText = ""
        return false;
    }
}
// email validation 
function checkEmailValid(checkmail, msg) {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    if (regEx.test(checkmail.value)) {
        document.getElementById(msg).innerHTML = "";
        return false;
    } else {
        document.getElementById(msg).innerHTML = "Enter Proper Email";
        return false;
    }
}

// password expression validation 
function checkpassValid(checkpss, msg) {
    let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    if (regEx.test(checkpss.value)) {
        document.getElementById(msg).innerHTML = ""
        return false;
    } else {
        document.getElementById(msg).innerHTML = "Enter Proper password"
        return false;
    }
}

// compare password 
function comparePass(cpwd, pwd, msg) {
    if (cpwd.value != document.getElementById(pwd).value) {
        document.getElementById(msg).innerHTML = "password and confirm password does not match";
        return false
    } else {
        document.getElementById(msg).innerHTML = "";
        return false
    }
}
// show password
function showPass(showpass, icon) {
    let passwd = document.getElementById(showpass)
    let picon = document.getElementById(icon)
    if (passwd.type == "password") {
        passwd.type = "text";
        picon.classList.remove("fa-eye");
        picon.classList.add("fa-eye-slash")
    } else {
        passwd.type = "password"
        picon.classList.remove("fa-eye-slash");
        picon.classList.add("fa-eye")
    }
}