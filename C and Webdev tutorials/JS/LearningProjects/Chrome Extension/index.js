let myleads= []
const ulEl = document.getElementById("list")
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")

/*inputbtn.addEventListener("click", function(){
})*/
//myleads = JSON.stringify(myleads)
//myleads = JSON.parse(myleads)

//localStorage.clear()
inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
   // myleads = JSON.parse(myleads)
    myleads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myleads",JSON.stringify(myleads))
    console.log(localStorage.getItem('myleads'))
}
})

function renderLeads(){
let listItems = ""
for(i=0; i< myleads.length; i++){
   // listItems += "<li><a href='"+ myleads[i] +"' target = '_blank'>"+myleads[i]+"</a></li>"
   listItems +=`
    <li>
        <a href='${myleads[i]}' target = '_blank'> ${myleads[i]}
        </a>
    </li>` 
   /*const li = document.createElement("li")
    li.textContent = myleads[i]
    ulEl.append(li)*/
}
ulEl.innerHTML = listItems}
//if possible, use const. If not, use let.
//localStorage.clear()
console.log(localStorage.getItem("myLeads"))k