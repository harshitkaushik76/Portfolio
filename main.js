             // =============  Form button start     =================
document.querySelector("#submit").addEventListener("click" , startclick)
function startclick(){
    alert("Form has been submit")
}
            // =============  Form button End     ================
const dynamicText = document.getElementById("dynamic-text")
const textArray = ["Developer"]
const text = textArray[0]
let content = " "
let index = 0
function handlePrint(c,text){
    if(index == text.length){
        handleDelete(c,text)
        return 
    }
    c += text[index]
    dynamicText.textContent = c
    index++
    setTimeout(handlePrint,200,c,text)
}
handlePrint(content,text)

function handleDelete(c,text){
    if(index == -1){
        return
    }
    index--;
    c = c.substring(0,index -1)
    dynamicspan.textContent = c
    setTimeout(handleDelete,500,c,text)
}