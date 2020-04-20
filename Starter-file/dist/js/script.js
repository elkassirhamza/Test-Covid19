let btn_1 = document.querySelector("#btn_1");
let preamble = document.querySelector("#preambule");
let quest = document.querySelector("#question_1");
let goldpoint = document.querySelector(".active");

btn_1.addEventListener("click", function () {
    preamble.style.display = "none";
    quest.style.display = "block";
    goldpoint.style.animation = "mymove .5s forwards";


});
let btn_2 = document.querySelector("#Q2");
let quest_2 = document.querySelector("#question_2");



back = document.querySelector("#retur");

btn_2.addEventListener("click", function () {
    quest.style.display = "none";
    quest_2.style.display = "block";

    back.addEventListener("click", function () {
        quest.style.display = "block";
        quest_2.style.display = "none";
    })
})