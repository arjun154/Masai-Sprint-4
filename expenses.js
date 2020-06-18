function addExpenses(){
    var expense = []
    var expenseAmount = document.getElementById('expenseAmount').value
    var purpose = document.getElementById('expensePurpose').value
    
    var temp = localStorage.getItem('expense')
    if(temp == null){
        expense.push([expenseAmount,purpose])
        localStorage.setItem('expense',JSON.stringify(expense))
    }else{
        temp = JSON.parse(temp)
        expense.push(expenseAmount,purpose)
        temp.push(expense)
        localStorage.setItem('expense',JSON.stringify(temp))
    }
}

var sum = 0
function updateExpense(){
    expense = localStorage.getItem('expense')
    if(expense != null){
        expense = JSON.parse(expense)
        document.getElementById('card-body').style.display = 'none'
        var table = createTable()
        for(var i=0; i<expense.length; i++){
            var tbody = createTableBody(expense[i][0], expense[i][1])
            sum = sum +  Number(expense[i][0])
            console.log(sum)
            table.append(tbody)
            var card = document.getElementById('tabel-body')
            card.append(table)
            localStorage.setItem('sum',JSON.stringify(sum))
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
