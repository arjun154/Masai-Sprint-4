function registerUser(){
    var user = []
    var name = document.getElementById('name1').value
    var email = document.getElementById('email1').value
    var password = document.getElementById('password1').value
    user.push(name, email, password)
    var temp = localStorage.getItem('allUsers')
    if(temp == null){
        var allUsers = []
        allUsers.push(user)
        localStorage.setItem('allUsers',JSON.stringify(allUsers))
    }else{
        temp = JSON.parse(temp)
        console.log(temp)
        temp.push(user)
        localStorage.setItem('allUsers',JSON.stringify(temp))
    }
    location = "dashboard.html"
}

function checkUserDetails(){
    var users = localStorage.getItem('allUsers')
    users = JSON.parse(users)
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    for(var i=0; i<users.length; i++){
        if(users[i][1] == email && users[i][2] == password){
            location = "dashboard.html"
        }else{
            alert("Email Or Password Is Wrong")
        }
    }
}