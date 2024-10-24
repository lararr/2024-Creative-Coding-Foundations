const codesList = document.getElementsByTagName("code");
const spanList = document.getElementsByTagName("span");
const buttonQuizNext = document.getElementById("button-quiz-next");
const buttonHelper = document.getElementById("button-helper");
const sectionHelpers = document.getElementById("helpers");

buttonQuizNext.addEventListener('click', ()=> {
    const spanArray = Array.from(spanList);
    spanArray.forEach((element) => {
        element.classList.remove('selected');
    })
    const spanActive = spanList[Math.floor(Math.random()*spanList.length)];
    console.log(spanActive.className);
    spanActive.classList.add('selected');
})


buttonHelper.addEventListener('click', ()=> {
    sectionHelpers.classList.toggle("hidden");
})