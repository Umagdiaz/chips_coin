var black_arrow_left = document.getElementById("left-black-arrow");
var black_arrow_right = document.getElementById("right-black-arrow");
var plans_container = document.getElementsByClassName("plans-container--slider");
var plans_card = document.getElementsByClassName("plans-container--card");
var size = plans_card[1].clientWidth;

plans_container.scrollLeft = size;

black_arrow_left.addEventListener("click", function(){
    black_arrow_right.style.display = "inline-block";
   
    plans_container.scrollLeft -= size;
    if(plans_container.scrollLeft <= size*2){
        black_arrow_left.style.display = "none";
    }
});

black_arrow_right.addEventListener("click", function(){
    black_arrow_left.style.display = "inline-block";
    plans_container.scrollLeft += size;
    if(plans_container.scrollLeft >= size){
        black_arrow_right.style.display = "none";
    }
});