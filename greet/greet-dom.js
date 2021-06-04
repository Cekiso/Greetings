var greetName = document.querySelector(".name");
var greetBttn = document.querySelector(".Bttn");
var greetCounter = document.querySelector(".counter");
var greetMessage = document.querySelector(".textDisplay");
var greetErrors = document.querySelector(".errors")
var greetClearBttn = document.querySelector(".clearBttn")


//declaring the variable to store existing names from the localstorage.
var existingNames;
var isNumeric = /^[A-Za-z]+$/;
// console.log(isNumeric.test('AmaTwo'))
//error messages 







//checking if the names are existing from the local storage
if (localStorage['name']) {
    //if names exist retrive them from the localstorage
    existingNames = JSON.parse(localStorage['name'])
}

//push them back into the factory function
var greetinstance = greet(existingNames);


greetCounter.innerHTML = greetinstance.counter();



function grettings() {

    var lang = document.querySelector("input[name='laguage']:checked");
    var name = greetName.value;

    var greetButton = document.querySelector("input[name='laguage']:checked");

    if (greetButton && isNumeric.test(greetName.value)) {
        //var nameEntered = greetName.value;
        greetinstance.setName(greetName.value);
        greetMessage.innerHTML = greetinstance.setLanguage(greetName.value, greetButton.value);
        greetCounter.innerHTML = greetinstance.counter();

        localStorage['name'] = JSON.stringify(greetinstance.Names(greetName.value, greetButton.value));
    } else {
        greetinstance.errorHandling(lang, name)
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