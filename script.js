let tableBody=document.getElementById("output");
let loadingRow=document.getElementById("loading")

function calculateTime(name,delay){
	let startTime=Date.now();
	return new Promise(resolve=>{
		setTimeout(()=>{
			let endTime=Date.now();
			let totalTime=Math.round((endTime-startTime)/1000)
			resolve({name,totalTime})
		},delay)
	})
}

let promise1=calculateTime("Promise 1",1000);
let promise2=calculateTime("Promise 2",2000);
let promise3=calculateTime("Promise 3",1000);

Promise.all([promise1,promise2,promise3]).then((data)=>{
	loadingRow.remove()
	data.forEach(currentData=>{
		let row=tableBody.insertRow();
		row.insertCell(0).innerHTML=currentData.name;
		row.insertCell(1).innerHTML=currentData.totalTime
	})
	let sum=0;
	data.forEach(currentData=>{
		sum=sum+currentData.totalTime;
	})
	let totalRow=tableBody.insertRow();
	totalRow.insertCell(0).innerHTML="Total";
	totalRow.insertCell(1).innerHTML=sum;
})
