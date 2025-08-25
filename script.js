//your JS code here. If required.
let tableBody=document.getElementById("output");
let loadingRow=document.getElementById("loading")

let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("1")
    },1000)
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2")
    },2000)
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("3")
    },3000)
})

Promise.all([promise1,promise2,promise3]).then((data)=>{
    loadingRow.style.display="none"

    let row1=tableBody.insertRow(0);
    let row1Cell1=row1.insertCell(0);
    let row1Cell2=row1.insertCell(1);
    row1Cell1.innerHTML="Promise 1";
    row1Cell2.innerHTML=data[0];
    
    let row2=tableBody.insertRow(1);
    let row2Cell1=row2.insertCell(0);
    let row2Cell2=row2.insertCell(1);
    row2Cell1.innerHTML="Promise 2";
    row2Cell2.innerHTML=data[1];

    let row3=tableBody.insertRow(2);
    let row3Cell1=row3.insertCell(0);
    let row3Cell2=row3.insertCell(1);
    row3Cell1.innerHTML="Promise 3";
    row3Cell2.innerHTML=data[2];

    let row4=tableBody.insertRow(3);
    let row4Cell1=row4.insertCell(0);
    let row4Cell2=row4.insertCell(1);
    row4Cell1.innerHTML="Total";
    row4Cell2.innerHTML=Number(data[0])+Number(data[1])+Number(data[2]);
    // console.log(typeof data[0])
    // console.log(typeof data[1])
    // console.log(typeof data[2])
});
