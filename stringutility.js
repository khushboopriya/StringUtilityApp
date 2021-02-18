const lcase = document.querySelector("#tolowercase");
const ucase = document.querySelector("#touppercase");
const charcount = document.querySelector("#charactercount");
const reverse = document.querySelector("#reverse");
const wordcount = document.querySelector("#wordcount");
const input = document.querySelector("#input-text");
const clear = document.querySelector("#clear");

lcase.addEventListener('click',()=>{
    document.querySelector("#output-text").value = input.value.toLowerCase();
});
ucase.addEventListener('click',()=>{
    document.querySelector("#output-text").value = input.value.toUpperCase();
});
charcount.addEventListener('click',()=> {
    document.querySelector("#output-text").value = parseInt(input.value.length);
});
reverse.addEventListener('click',()=> {
    document.querySelector("#output-text").value = input.value.split("").reverse().join("");
});
wordcount.addEventListener('click',()=> {
    document.querySelector("#output-text").value = parseInt(input.value.split(" ").length);
});

clear.addEventListener('click',()=>{
    input.value = "";
    document.querySelector("#output-text").value = "";
});