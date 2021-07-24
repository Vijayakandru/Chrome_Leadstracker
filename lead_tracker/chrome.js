// let bo=document.getElementById("box")

// bo.addEventListener('click',openBox)

// function openBox(){
//     bo.innerHTML="Do you want to open the Box!?"
// }

let myLeads=[]
const inputEl=document.getElementById("input-el")
const btn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

btn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads()
})

function renderLeads(){
    let listItems=""
    for(let i=0;i<myLeads.length;i++)
    {        
       listItems +=`
       <li>
       <a target='_blank' href=${myLeads[i]}>  ${myLeads[i]} </a>
       </li>`
    }
    ulEl.innerHTML=listItems
   
}


const mailName="Vijaya"

const email=`Hey, ${mailName} How is it going?`
console.log(email)


const container=document.getElementById("container")

container.innerHTML="<button onclick='buy()'>Buy!</buton>"


function buy(){
    container.innerHTML+="<br>"+"<p>Thank you for Buying</p>"
}


// document.getElementById("para").innerHTML=myLeads


