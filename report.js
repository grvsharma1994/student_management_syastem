//fetching data from localStorage;

let studentArr = JSON.parse(localStorage.getItem("studentData"))||[];

let removedStudents = JSON.parse(localStorage.getItem("trash"))||[];
displayData(studentArr);
// function for displaying lists of students on dashboard
function displayData(studentArr) {

    let batch1 = 0;
    let batch2 = 0;
    let batch3 = 0;
    let batch4 = 0;

    
    document.querySelector("tbody").innerHTML = "";
    studentArr.forEach(function(elem,index){
 
        let image = elem.image;
        let name = elem.name;
        let course = elem.course;
        let unit = elem.unit;
        let batch = elem.batch;

        if(batch==="Web-16"){
            batch1++;
        }
        else if(batch==="Web-17"){
            batch2++;
        }
        else if(batch==="Web-18"){
            batch3++;
        }
        else if(batch==="Web-19"){
            batch4++;
        }
       
        
        let tr1 = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");

        let img = document.createElement("img");
        img.setAttribute("src","https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png" );
        
        td1.append(img);
        td2.innerText = name;
        td3.innerText = course;
        td4.innerText = unit;
        td5.innerText = batch;
        td6.innerText = "Remove";
    
        td6.addEventListener("click",function(index){
             let item = studentArr.splice(index,1);
             removedStudents.push(item);
             localStorage.setItem("studentData",JSON.stringify(studentArr));
             localStorage.setItem("trash",JSON.stringify(removedStudents));
             displayData(studentArr);
        })

        tr1.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr1);
    })
    document.querySelector("#w16>span").innerText = batch1;
    document.querySelector("#w17>span").innerText = batch2;
    document.querySelector("#w18>span").innerText = batch3;
    document.querySelector("#w19>span").innerText = batch4;
   
} 