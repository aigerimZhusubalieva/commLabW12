var container = document.querySelector(".container");
var video = document.querySelector(".back video")
var choices = document.querySelector(".choices");
var skipBtn = document.querySelector("#skip-btn");

container.addEventListener('click', function(){
    if(!container.classList.contains('anim')){
        container.classList.add('anim');
        video.play();
    }
});

video.addEventListener('timeupdate', function(){
    if(video.currentTime>5){
        choices.style.visibility = "visible";
        choice1 = true;
    }
});

skipBtn.addEventListener('click', function(){
    choices.style.visibility = "hidden";
    video.currentTime = 220;
});

video.addEventListener("ended", function(){
    container.classList.remove("anim");
});