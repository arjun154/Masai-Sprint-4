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
    localStorage.setItem('loginUser',JSON.stringify(user))
    location = "dashboard.html"
}
function loggedIn(){ 
    var u = localStorage.getItem('loginUser')
    u = JSON.parse(u)
    var user = document.getElementById("user")
    user.textContent = u[0]
}

function checkUserDetails(){
    var user = []
    var users = localStorage.getItem('allUsers')
    users = JSON.parse(users)
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    for(var i=0; i<users.length; i++){
        if(users[i][1] == email && users[i][2] == password){
            user.push(users[i][0])
            localStorage.setItem('loginUser',JSON.stringify(user))
            location = "dashboard.html"
        }
    }
}

function dashboardData(){
    var expense = JSON.parse(localStorage.getItem('sum'))
    if(expense>0){
        document.getElementById('expense').textContent = expense
    }
    var dues = JSON.parse(localStorage.getItem('tdue'))
    if(dues>0){
        document.getElementById('due').textContent = dues
    }
}

function renderData(){
        setInterval( function(){
            document.getElementById('head').textContent = "Developed for This Generation"
        },1000)
        setInterval( function(){
            document.getElementById('head').textContent = "Developed for Future Ready Organizations"
        }, 2000)
}