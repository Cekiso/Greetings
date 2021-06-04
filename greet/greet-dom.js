var greetName = document.querySelector(".name");
var greetBttn = document.querySelector(".Bttn");
var greetCounter = document.querySelector(".counter");
var greetMessage = document.querySelector(".textDisplay");
var greetErrors = document.querySelector(".errors")
var greetClearBttn = document.querySelector(".clearBttn")


//declaring the variable to store existing names from the localstorage.
var existingNames;

//error messages 

function errorHandling() {
    var lang = document.querySelector("input[name='laguage']:checked");
    var name = greetName.value;
    //let message = [];
    if (lang == null && name == "") {

        return greetErrors.innerHTML = "please enter name and choose language";
    } else if (name == "") {

        return greetErrors.innerHTML = 'Name is required';
        //setTimeout(function(){ greetErrors.value = "Name is required" }, 2000);
    } else if (lang == null) {
        return greetErrors.innerHTML = "please select language";
    }
    // else {
    //     return ""}
}


//checking if the names are existing from the local storage
if (localStorage['name']) {
    //if names exist retrive them from the localstorage
    existingNames = JSON.parse(localStorage['name'])
}

//push them back into the factory function
var greetinstance = greet(existingNames);


greetCounter.innerHTML = greetinstance.counter();



function grettings() {
    var greetButton = document.querySelector("input[name='laguage']:checked");
    errorHandling()
    if (greetButton) {
        //var nameEntered = greetName.value;
        greetinstance.setName(greetName.value);
        greetMessage.innerHTML = greetinstance.setLanguage(greetName.value, greetButton.value);
        greetCounter.innerHTML = greetinstance.counter();

        localStorage['name'] = JSON.stringify(greetinstance.Names(greetName.value, greetButton.value));
    }
    greetName.value = "";
    setTimeout(function() {
        greetErrors.innerHTML = '';
    }, 3000);


}

function clearBttn() {
    localStorage.clear();
    greetCounter.innerHTML = "";
    location.reload();


}

function radiobttn() {
    var radio = document.querySelector('input[type=radio][name=laguage]:checked');
    radio.checked = false;
}

greetBttn.addEventListener("click", grettings);
greetBttn.addEventListener("click", radiobttn);
greetClearBttn.addEventListener("click", clearBttn);