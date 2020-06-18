function addDue(){
    var dues = []
    var amount = document.getElementById('duesAmount').value
    var purpose = document.getElementById('duesPurpose').value
    console.log(amount,purpose)
    var temp = localStorage.getItem('due')
    if(temp == null){
        dues.push([amount,purpose])
        localStorage.setItem('due',JSON.stringify(dues))
    }else{
        temp = JSON.parse(temp)
        dues.push(amount,purpose)
        temp.push(dues)
        localStorage.setItem('due',JSON.stringify(temp))
    }
}

var sum = 0
function updateDues(){
    var dues = localStorage.getItem('due')
    if(dues != null){
        dues = JSON.parse(dues)
        document.getElementById('card-body').style.display = 'none'
        var table = createTable()
        for(var i=0; i<dues.length; i++){
            var tbody = createTableBody(dues[i][0], dues[i][1])
            sum = sum +  Number(dues[i][0])
            console.log(sum)
            table.append(tbody)
            var card = document.getElementById('tabel-body')
            card.append(table)
            localStorage.setItem('tdue',JSON.stringify(sum))
        } 
    }else{
        document.getElementById('row').style.display ="none"
    }
}

function createTable(){
    var table = document.createElement('table')
    table.setAttribute('class','table')

    var thead = document.createElement('thead')
    thead.setAttribute('class','thead-dark')

    var tr = document.createElement('tr')
    var th2 = document.createElement('th')
    th2.setAttribute('scope','col')
    th2.textContent = "Amount"
    var th3 = document.createElement('th')
    th3.setAttribute('scope','col')
    th3.textContent = "Purpose"
    tr.append(th2,th3)
    thead.append(tr)
    
    table.append(thead)
    return table
}

function createTableBody(amount, purpose){
    var tbody = document.createElement('tbody')
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    td1.textContent = amount
    tr.append(td1)
    var td2 = document.createElement('td')
    td2.textContent = purpose
    tr.append(td2)
    tbody.append(tr)
    return tbody
}

