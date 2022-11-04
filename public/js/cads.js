console.log('%cWelcome to CADS', 'font-size: 2em;color: #5f4bb6')


// let userName = document.getElementById("name");
// let Email = document.getElementById("email");
// let password = document.getElementById("pwd");
// let confirmpassword = document.getElementById("conpwd");
// let form = document.querySelector("form");

// function validateInput() {
//     //check name is empty
//     if (userName.value.trim() === "") {
//         onError(userName, "User Name cannot be empty");
//     }
//     else {
//         onSuccess(userName);
//     }
//     if (email.value.trim() === "") {
//         onError(pwd, "Email cannot be empty")
//     } else {
//         if (isValidEmail(email.value.trim())) {
//             onError(email, "Email is not valid");
//         } else {
//             onSuccess(email);
//         }
//     }
// }
// //password
// if (pwd.value.trim() === "") {
//     onError(pwd, "password cannot be empty");
// }
// else {
//     onSuccess(pwd);
// }
// if (conpwd.value.trim() === "") {
//     onError(conpwd, "password cannot be empty");
// }
// else
//     if (pwd.value.trim()!==conpwd.value.trim()) {
//         onError(conpwd, "password & confirm password is not matching")
//     }
//     else
//         onSuccess(conpwd);


// document.querySelector("button")
// addEventListener("click", (event) => {
//     event.preventDefault();
//     validateInput();
// });

// function onSuccess(input) {
//     let parent = input.parentElement;
//     let messageEle = parent.querySelector("small");
//     messageEle.style.visibility = "hidden";
//     messageEle.innerText = ""
//     parent.classList.remove("error");
//     parent.classList.add("success");
// }

// function onError(input, message) {
//     let parent = input.parentElement;
//     let messageEle = parent.querySelector("small");
//     messageEle.style.visibility = "visible";
//     messageEle.innerText = ""
//     parent.addEve.classList.add("error");
//     parent.classList.remove("success");
// }
// function isValidEmail(email) {
//     return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
// }

