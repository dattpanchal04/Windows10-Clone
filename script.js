let btn = document.getElementsByClassName("startbtn")[0];
let startMenu = document.getElementsByClassName("startMenu")[0];
let rightBar = document.getElementsByClassName("rightBar")[0];
let rightMenu = document.getElementsByClassName("rightMenu")[0];

btn.addEventListener("click", ()=>{

    if(startMenu.style.bottom == "36px"){
        startMenu.style.bottom = "-700px";
    }
    else{
        startMenu.style.bottom = "36px";
    }

})

rightBar.addEventListener("click", ()=>{

    if(rightMenu.style.bottom == "40px"){
        rightMenu.style.bottom = "-700px";
    }
    else{
        rightMenu.style.bottom = "40px";
    }

})

