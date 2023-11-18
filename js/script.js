var stat = false
var activate_burger = true

function trigger_burger(){
    // console.log("BURGER");
    // console.log(stat);
    if (activate_burger) {
        if (stat == false) {
            stat = true
            console.log(stat);
            document.getElementById("burger_nav").classList.remove("active__anim")
            document.getElementById("burger_nav").classList.replace("display_none","display_visible")
            document.getElementById("burger_nav").classList.replace("anim__slide__right","anim__slide__left")
            setTimeout(() => document.getElementById("burger_nav").classList.add("active__anim"), 500);
            activate_burger = false
            setTimeout(() => activate_burger = true, 500);
        }
        else if (stat == true) {
            stat = false
            console.log(stat);
            document.getElementById("burger_nav").classList.remove("active__anim")
            document.getElementById("burger_nav").classList.replace("anim__slide__left","anim__slide__right")
            console.log("asd");
            setTimeout(() => document.getElementById("burger_nav").classList.add("active__anim"), 500);
            setTimeout(() => document.getElementById("burger_nav").classList.replace("display_visible","display_none"), 500);
            activate_burger = false
            setTimeout(() => activate_burger = true, 500);
            
        }
    }
}