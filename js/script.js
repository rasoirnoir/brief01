function sectionClick(){
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
    }
    else{
        listeDeroulante.className = "visible";
    }
    
    console.log("Liste déroulante : " + listeDeroulante + " classe : " + listeDeroulante.className);


}