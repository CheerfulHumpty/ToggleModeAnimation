const button = document.querySelector(".button");
    let moon = document.querySelector(".moon");
    let m = document.querySelector(".m");
    let sun = document.querySelector(".sun");
    let sunpos = 500 + "px";
    let suntop = sun.style.top;
    button.append(moon)
    button.addEventListener("click" , function(){
        let info = document.querySelector(".info");
        info.classList.toggle("change")
        sun.classList.toggle("sungo");
        m.classList.toggle("get")
        button.classList.toggle("moveright");
        moon.classList.toggle("moonhide");
        let body = document.querySelector("body");
        let bar = document.querySelector(".bar");
        bar.classList.toggle("gowhite");
        body.classList.toggle("black");
    })
