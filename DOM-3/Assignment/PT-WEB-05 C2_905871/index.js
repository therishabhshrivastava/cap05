let myForm = document.querySelector("form");
let docName = document.getElementById("name");
let docID = document.getElementById("docID");
let spec = document.getElementById("dept");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mobNumber = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

allData = [];

myForm.addEventListener("submit",function(e){
    e.preventDefault();

    data = {
        name : docName.value,
        id: docID.value,
        specialization: spec.value,
        exp: exp.value,
        email: email.value,
        number: mobNumber.value 
    }

    allData.push(data);

    tbody.innerHTML = "";

    allData.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let btn = document.createElement("button");

        td1.innerText = ele.name;
        td2.innerText = ele.id;
        td3.innerText = ele.specialization;
        td4.innerText = ele.exp;
        td5.innerText = ele.email;
        td6.innerText = ele.number;

        if(Number(ele.exp) > 5){
            td7.innerText = "Senior";
        }else if(Number(ele.exp) >=2 && Number(ele.exp) <=5){
            td7.innerText = "Junior";
        }else if(Number(ele.exp) <= 1) {
            td7.innerText = "Trainee";
        }

        btn.innerText = "Delete";

        btn.addEventListener("click",function(){
            tr.innerHTML = "";
        })
        btn.style.height = "50px"
        btn.style.backgroundColor = "red";
        btn.style.border = "none";
        btn.style.color = "black";
        btn.style.cursor = "pointer";
        btn.style.padding = "12px 20px";
        btn.style.fontSize = "15px";
        btn.style.fontWeight = "bold"

        tr.append(td1,td2,td3,td4,td5,td6,td7,btn);
        tbody.append(tr);

        

    })
})


