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




    return {
        setName,
        counter,
        // storingCounter,
        // getName,
        setLanguage,
        //errorHandling,
        Names





    }

}