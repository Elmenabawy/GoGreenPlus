/*--------------Decleration--------------*/


/*--------------login--------------*/
const loginMailInput = document.getElementById("loginMailInput");
const loginPassInput = document.getElementById("loginPassInput");
let signInUserMailErr = document.getElementById("signInUserMailErr");
let signInUserPassErr = document.getElementById("signInUserPassErr");
let fromCheck = document.getElementById("FormChecker");
let signInBtn = document.getElementById("signInBtn");



/*--------------sign up--------------*/
const userNameInput = document.getElementById("userNameInput");
const userMailInput = document.getElementById("userMailInput");
const userPassInput = document.getElementById("userPassInput");
const userConfPassInput = document.getElementById("userRePassInput");
let signUpBtn = document.getElementById("signUpBtn");
let signUpUserNameErr = document.getElementById("signUpUserNameErr");
let signUpMailErr = document.getElementById("signUpMailErrMsg");
let ExistsignUpMailErr = document.getElementById("ExistsignUpMailErrMsg");
let signUpPassErr = document.getElementById("signUpPassErrMsg");
let confPswrdErr = document.getElementById("confPswrdErrMsg");
const userPhone = document.getElementById("userPhone");
const userNIdInput = document.getElementById("userNIdInput")
var userInfo;
const yearSelect = document.getElementById('year');
const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/*-------------- Main --------------*/


//to check if the local storage has users
if (localStorage.getItem("users") == null) {
    userInfo = [];
} else {
    userInfo = JSON.parse(localStorage.getItem("users"));
}

/*----------- Login section -----------*/

function login() {
    if (loginMailInput.value === "" || loginMailInput.value === null || loginPassInput.value === "" || loginPassInput.value === null) {
        loginMailInput.classList.remove("is-valid");
        loginMailInput.classList.add("is-invalid");
        signInUserMailErr.classList.replace("d-none", "d-block");
        loginPassInput.classList.remove("is-valid");
        loginPassInput.classList.add("is-invalid");
        signInUserPassErr.classList.replace("d-none", "d-block");
        return false; // Add this line to indicate login failure
    } 
    
    else {
        for (let i = 0; i < userInfo.length; i++) {
            if (userInfo[i].email.toLowerCase() === loginMailInput.value.toLowerCase() && userInfo[i].password === loginPassInput.value ) {
                // Remove unnecessary class manipulations
                loginMailInput.classList.remove("is-invalid");
                loginMailInput.classList.add("is-valid");
                loginPassInput.classList.remove("is-invalid");
                loginPassInput.classList.add("is-valid");
                window.open('../home.html');
                return true;
            }
            else{
                console.log("Dosn`t Exist");
            }
        }

        // If the loop completes without finding a matching user
        loginMailInput.classList.remove("is-valid");
        loginMailInput.classList.add("is-invalid");
        loginPassInput.classList.remove("is-valid");
        loginPassInput.classList.add("is-invalid");
        return false;
    }
}


/*----------- Registration section -----------*/


function signUp() {
    if (!isExist() && userInputsValidation()) {
        var user = {
            name: userNameInput.value,
            email: userMailInput.value,
            password: userPassInput.value,
            userPhone: userPhone.value,
            // userBirthDate: userBirthDate.value,
            // userNID : userNID.value,
        };
        userInfo.push(user);
        localStorage.setItem("users", JSON.stringify(userInfo));
        console.log(userInfo);
        window.open("../index.html");
    }
    else {
        window.alert("Please check your inputs again");
    }
}



function isExist() {
    for (let i = 0; i < userInfo.length; i++) {
        if (
            userInfo[i].email.toLowerCase() === userMailInput.value.toLowerCase()
        ) {
            userMailInput.classList.remove("is-valid");
            userMailInput.classList.add("is-invalid");
            ExistsignUpMailErr.classList.replace("d-none", "d-block");
            return true;
        }
    }

    userMailInput.classList.remove("is-invalid");
    userMailInput.classList.add("is-valid");
    ExistsignUpMailErr.classList.replace("d-block", "d-none");
    return false;
}
// -------------------Birth Date ---------------



// (function populateMonths() {
//     for (let i = 0; i < months.length; i++) {
//         const option = document.createElement('option');
//         option.textContent = months[i];
//         monthSelect.appendChild(option);
//     }
//     monthSelect.value = "January";
// })();

// let previousDay;

// function populateDays(month) {
//     // Delete all of the children of the day dropdown if they do exist
//     while (daySelect.firstChild) {
//         daySelect.removeChild(daySelect.firstChild);
//     }

//     // Holds the number of days in the month
//     let dayNum;

//     // Get the current year
//     let year = yearSelect.value;

//     if (month === 'January' || month === 'March' ||
//         month === 'May' || month === 'July' || month === 'August'
//         || month === 'October' || month === 'December') {
//         dayNum = 31;
//     } else if (month === 'April' || month === 'June'
//         || month === 'September' || month === 'November') {
//         dayNum = 30;
//     } else {
//         // Check for a leap year
//         if (new Date(year, 1, 29).getMonth() === 1) {
//             dayNum = 29;
//         } else {
//             dayNum = 28;
//         }
//     }

//     // Insert the correct days into the day <select>
//     for (let i = 1; i <= dayNum; i++) {
//         const option = document.createElement("option");
//         option.textContent = i;
//         daySelect.appendChild(option);
//     }

//     // Set the daySelect value to the previous day, if available
//     if (previousDay) {
//         daySelect.value = previousDay;
//     }
// }

// function populateYears() {
//     // Get the current year as a number
//     let year = new Date().getFullYear();

//     // Make the previous 100 years be an option
//     for (let i = 0; i < 101; i++) {
//         const option = document.createElement("option");
//         option.textContent = year - i;
//         yearSelect.appendChild(option);
//     }
// }

// populateDays(monthSelect.value);
// populateYears();

// yearSelect.onchange = function () {
//     populateDays(monthSelect.value);
// };

// monthSelect.onchange = function () {
//     populateDays(monthSelect.value);
// };

// daySelect.onchange = function () {
//     previousDay = daySelect.value;
// };





//----------------------------validation---------------------------- 
function usernameValidation(){
    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;

    //validation true at least 3 chars and no symbols
    if (regex.test(userNameInput.value) == true && userNameInput.value !=""){
        userNameInput.classList.add("is-valid");
        userNameInput.classList.remove("is-invalid");
        signUpUserNameErr.classList.replace("d-block", "d-none");
        return true;
    }
    else{
        userNameInput.classList.add("is-invalid");
        userNameInput.classList.remove("is-valid");
        signUpUserNameErr.classList.replace("d-none", "d-block");
        return false;
    }
}

function userEmailAlert(){
    //email validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(userMailInput.value) == true && userMailInput.value != ""){
        userMailInput.classList.add("is-valid");
        userMailInput.classList.remove("is-invalid");
        userMailInput.classList.replace("d-block", "d-none")
        return true;
    }
    else {
        userMailInput.classList.add("is-invalid");
        userMailInput.classList.remove("is-valid");
        userMailInput.classList.replace("d-none", "d-block")
        return false;
    }
}
//-----------Phone Number------------
function PhoneNumberValidation(phoneNumber) {
    // Regex for an Egyptian phone number with country code (e.g., +20) and 11 digits
    const regex = /^01\d{9}$/;

    // Test the input against the regex
    if (regex.test(phoneNumber)) {
        return true;  // Valid phone number
    } else {
        return false; // Invalid phone number
    }
}


//----------- Birthdate Validation------------
// function isAbove18(daySelect, monthSelect, yearSelect) {
//     // Assuming date components are provided as strings
//     const day = parseInt(daySelect, 10);
//     const month = parseInt(monthSelect, 10);
//     const year = parseInt(yearSelect, 10);

//     // Calculate the current date
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
//     const currentDay = currentDate.getDate();

//     // Calculate the minimum birthdate for 18 years old
//     const minBirthYear = currentYear - 18;
//     const minBirthMonth = currentMonth;
//     const minBirthDay = currentDay;

//     // Construct a regex pattern for validation
//     const regexPattern = new RegExp(
//         `^${minBirthYear}${minBirthMonth < 10 ? '0' : ''}${minBirthMonth}${minBirthDay < 10 ? '0' : ''}${minBirthDay}$`
//     );

//     // Validate against the regex pattern
//     return regexPattern.test(`${year}${month < 10 ? '0' : ''}${month}${day < 10 ? '0' : ''}${day}`);
// }

//----------------------National Id image--------------------
var uploadedImage = '';

userNIdInput.addEventListener('change', () => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        document.querySelector('#imageTest').style.backgroundImage = `url(${uploadedImage})`;
    });

    reader.readAsDataURL(userNIdInput.files[0]);
    console.log(reader.readAsDataURL(userNIdInput.files[0]))
});

//-----------------Password-----------------
function userPasswordValidation() {
    //password at least has one digit,one upper or lowercase letter between 8 and 40char length
    let regex = /^.{5,15}$/;
    if (regex.test(userPassInput.value) == true && userPassInput.value != "") {
        userPassInput.classList.add("is-valid");
        userPassInput.classList.remove("is-invalid");
        userPassInput.classList.replace("d-block", "d-none")
        return true;
    }
    else {
        userPassInput.classList.add("is-invalid");
        userPassInput.classList.remove("is-valid");
        userPassInput.classList.replace("d-none", "d-block")
        return false;
    }
}

function samePasswordCheck(){
    if (userConfPassInput.value == userPassInput.value && userConfPassInput.value != ""){
        userConfPassInput.classList.add("is-valid");
        userConfPassInput.classList.remove("is-invalid");
        confPswrdErr.classList.replace("d-block","d-none");
        return true;
    }
    else{
        userConfPassInput.classList.add("is-invalid");
        userConfPassInput.classList.remove("is-valid");
        confPswrdErr.classList.replace("d-none","d-block");
        return false;
    }
}
// ------------------ Validate form inputs----------------
function userInputsValidation(){

    usernameValidation();
    userEmailAlert();
    userPasswordValidation();
    samePasswordCheck();
    PhoneNumberValidation();

    if (usernameValidation() == true && userEmailAlert() == true && userPasswordValidation() == true && userPasswordValidation() == true && samePasswordCheck() == true && PhoneNumberValidation () == true ){
        return true;
    }
    else{
        return false;
    }
}
