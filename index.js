function home () {
    window.open ("index.html", "_self")
}
function clients () {
    window.open ("Clients.html", "_self")
}
function developers () {
    window.open ("Developers.html", "_self")
}


function doIt() {
    if(
        document.getElementById("Name").value == "" ||
        document.getElementById("Email").value == "" ||
        document.getElementById("Country").value == "" ||
        document.getElementById("Phone_Number").value == "" ||
        document.getElementById("Details").value == "" ||
        document.getElementById("Period").value == "" ||
        document.getElementById("Currency").value == "" ||
        document.getElementById("Amount").value == ""
    ) {window.alert("Please fill out all the fields, thank you.")}
    
    else {
    const scriptURL = 'https://sheetdb.io/api/v1/b77big29o67yk'
    const form = document.getElementById("contactform")
    form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => window.open ("Thanks.html", "_self"))
    .catch(error => console.error('Error!', error.message))})}
}

function doItAgain() {
    if(
        document.getElementById("Name").value == "" ||
        document.getElementById("Email").value == "" ||
        document.getElementById("Country").value == "" ||
        document.getElementById("Phone_Number").value == "" ||
        document.getElementById("Details").value == "" ||
        document.getElementById("Languages").value == "" ||
        document.getElementById("Currency").value == "" ||
        document.getElementById("Amount").value == ""
    ) {window.alert("Please fill out all the fields, thank you.")}
    
    else {
    const scriptURL = 'https://sheetdb.io/api/v1/vjsb3ivjovw9o'
    const form = document.getElementById("developerform")
    form.addEventListener("submit", e => {
      e.preventDefault()
      fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => window.open ("Thanks.html", "_self"))
      .catch(error => console.error('Error!', error.message))})}
}


/*mQuery.addListener(lowerScreen)
function lowerScreen(e) {
    console.log("The media query is working just fine")
}*/

/*const button1 = document.querySelectorAll("button")
const button2 = document.getElementsByClassName("button2")
const button3 = document.getElementsByClassName("button3")
const mQuery = window.matchMedia ("max-width: 670px")
if (mQuery) {
    console.log(button1.values("").next())}*/







/*
document.addEventListener("DOMContentLoaded", responsive)
function responsive() {
    let query = window.matchMedia ("min-width: 1318px")
    if (query.matches) {
        //Page is wider than 1317px
    }
    else {
        //Page is narrower than 1318px
        appearance()
    }

}

function appearance () {
    let details = document.getElementsByClassName("container1")
    console.log(details)
       
}*/

/*const links = document.querySelector("#Thanks")
console.log(links.childNodes)*/
/*const Create = document.getElementsByName("button1")
console.log(Create.innerHTML.replace)*/
