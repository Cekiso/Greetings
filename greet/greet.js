function greet(existingNamesAlready) {



    var nameList = existingNamesAlready || [];




    function setLanguage(name, language) {
        if (language == "IsiXhosa" && name != "") {
            return "Molo " + name;

        } else if (language == "English" && name != "") {
            return "Hello " + name;
        } else if (language == "IsiZulu" && name != "") {
            return "Sawubona " + name;
        } else {
            return '';
        }
    }

    function setName(name) {

        if (!nameList.includes(name.toUpperCase()) && name != "") {
            nameList.push(name.toUpperCase());
        } else {
            return;
        }
    }


    //create a function for the counter: return the length of the list
    function counter() {
        return nameList.length;

    }


    //create a function that returns all the name in the list 
    function Names() {
        console.log(nameList);
        return nameList;

    }

    function errorHandling(lang, name) {

        //let message = [];
        if (lang == null && name == "") {

            return greetErrors.innerHTML = "please enter name and choose language";
        } else if (name == "") {

            return greetErrors.innerHTML = 'Name is required';
            //setTimeout(function(){ greetErrors.value = "Name is required" }, 2000);
        } else if (lang == null) {
            return greetErrors.innerHTML = "please select language";
        }
        if (!isNumeric.test(greetName.value)) {
            return greetErrors.innerHTML = "Letters are required";
        }
    }


    return {
        setName,
        counter,
        errorHandling,

        // storingCounter,
        // getName,
        setLanguage,
        //errorHandling,
        Names





    }

}