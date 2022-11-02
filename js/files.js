let fullName = document.querySelector("#name");
let city = document.querySelector("#city");
let gender = document.querySelector("#gender");
let cell = document.querySelector("#cell");
let dob = document.querySelector("#dob");
let email = document.querySelector("#email");
let newdata = document.querySelector("#datagen");
let profileImage = document.querySelector("#profileImage");

newdata.addEventListener("click" , ()=>{
    const xhr = new XMLHttpRequest();
    const url = "https://randomuser.me/api/";
    xhr.open("GET" , url , true);
    xhr.onload = ()=>{
        let objectt = JSON.parse(xhr.responseText);
        console.log(objectt);
        let result = objectt.results;
        result.forEach(results=>{
            fullName.innerText = results.name.first + " " + results.name.last;
            city.innerText = results.location.city;
            cell.innerHTML = " <span>Cell No : </span> " + results.phone;
            gender.innerHTML = " <span>Gender : </span> " + results.gender;
            email.innerHTML = " <span>Email : </span> " + results.email;
            profileImage.src =  results.picture.medium;
        })
    }
    xhr.send();
});