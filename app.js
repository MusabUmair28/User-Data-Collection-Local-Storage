let storeData = localStorage.getItem("userData")
let userDataArr = storeData ? JSON.parse(storeData) : [];   


let userData = {
    fullName: prompt("Please enter your full name:"),
    userAge: prompt("Please enter your age:"),
    city: prompt("Please enter your city:"),
    profession: prompt("Please enter your profession:   Student/Employee"),
    userEmail: prompt("Please enter your email address:"),
    phoneNo: prompt("Please enter your phone number:")
}
console.log("User Information" , userData   );

userDataArr.push(userData);
localStorage.setItem("userData", JSON.stringify(userDataArr));

let div = document.getElementById("userData")
div.innerHTML = "";



userDataArr.forEach(function(user, index) {

    div.innerHTML += `
        <div class="card">
            <h2>User ${index + 1}</h2>

            <p><strong>Full Name:</strong> ${user.fullName}</p>
            <p><strong>Age:</strong> ${user.userAge}</p>
            <p><strong>City:</strong> ${user.city}</p>
            <p><strong>Profession:</strong> ${user.profession}</p>
            <p><strong>Email:</strong> ${user.userEmail}</p>
            <p><strong>Phone:</strong> ${user.phoneNo}</p>
        </div>
    `;

});


