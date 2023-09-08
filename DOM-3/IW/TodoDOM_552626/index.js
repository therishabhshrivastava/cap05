let myForm = document.querySelector("form");
let inpTak = document.getElementById("task");
let prioritySelect = document.getElementById("priority");
let tbody = document.querySelector("tbody");

let allTask = [];
myForm.addEventListener("submit",function(e){
    e.preventDefault();

    
    data = {
        input : inpTak.value,
        priority : prioritySelect.value
    }

    allTask.push(data);
    
    tbody.innerHTML = "";

    allTask.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
    
        td1.innerText = ele.input;
        td2.innerText = ele.priority;
    
        tr.append(td1,td2);
        tbody.append(tr);
    })
})

