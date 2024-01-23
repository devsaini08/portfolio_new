let a = document.querySelector("#logo-btn");
let b = document.querySelector("#logo-btn1");


let c = document.querySelector(".div-phone");

let header = document.querySelector(".navbar")


function fun1() {
    b.style.display = "block";
    a.style.display = "none";
    c.style.display = "block";
    header.style.height = "200px";

}

function fun2() {
    b.style.display = "none";
    a.style.display = "block"
    c.style.display = "none"
    header.style.height = "70px";
    // header.style.hight = "70px"
}