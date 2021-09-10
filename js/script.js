function sectionClick(){
    let target = event.target;
    console.log(target);

    while(target.nodeName  != "SECTION"){
        target = target.parentNode;
    }


    let listeDeroulante = target.querySelector(".visible") || target.querySelector(".invisible");

    if(listeDeroulante.className.indexOf("visible") > -1){
        listeDeroulante.className = "invisible";
    }
    else{
        listeDeroulante.className = "visible";
    }
    


}