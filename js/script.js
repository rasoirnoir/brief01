function sectionclick(){
    let target = event.target;

    while(target.nodeName  != "SECTION"){
        target = target.parentNode;
    }

    console.log(target.querySelector(".visible"));
    console.log(target.querySelector(".invisible"));

    let listeDeroulante = target.querySelector(".visible") || target.querySelector(".invisible");

    console.log("visible : " + listeDeroulante.className.indexOf("visible"));
    console.log("invisible : " + listeDeroulante.className.indexOf("invisible"));

    if(listeDeroulante.className.indexOf("visible") == 0){
        listeDeroulante.className = "invisible";
        target.querySelector(".info-cliquez").innerHTML = "(cliquez pour dérouler)";
    }
    else{
        listeDeroulante.className = "visible";
        target.querySelector(".info-cliquez").innerHTML = "(cliquez pour réduire)";
    }
    
    console.log("Liste déroulante : " + listeDeroulante + " classe : " + listeDeroulante.className);



}