
let myLeads= []

const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("input-btn")
const urEl = document.getElementById("ul-el")
const clear = document.getElementById("clear-btn")
const saveTab = document.getElementById("tab-btn")


clear.addEventListener("dblclick", function() {
        myLeads = []
        urEl.innerHTML = ""
        localStorage.clear()
        render(myLeads)
 
})



saveInput.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    render(myLeads)
    inputEl.value = "" 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    const storedNames = JSON.parse(localStorage.getItem("myLeads"))
    if (storedNames) {
        myLeads = storedNames
        render(myLeads)
    }
    
})




saveTab.addEventListener("click", function() {

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        render(myLeads)
         localStorage.setItem("myLeads", JSON.stringify(myLeads))
    }) 

})

function render(leads){
    let listItems = ""
        for (i = 0; i < leads.length; i++){
            listItems += `<li> 
                <a href= 
                    '${leads[i]}' + target='_blank' > ${leads[i]}`
    
        }
    urEl.innerHTML = listItems 
}


document.addEventListener("DOMContentLoaded", function() {
    let oldLeads = []
    oldLeads = JSON.parse(localStorage.getItem("myLeads"))
    let listItems2 = ""
        for (i = 0; i < oldLeads.length; i++){
            listItems2 += `<li> 
                <a href= 
                    '${oldLeads[i]}' + target='_blank' > ${oldLeads[i]}`
    
        }
    urEl.innerHTML = listItems2
})

