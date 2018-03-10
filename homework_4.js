// $(document).ready(function(){

// Declaring Global variables needed for the game

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function() {


 //clear the crystals
 $(".crystals").empty(); 
 
 var images = [
     'assets/images/amethystcrystal.jpg',
     'assets/images/crystals.jpg',
     'assets/images/QuartzCrystal.jpg',
     'assets/images/rainbow.jpg'];

//Creating the random numbers
random_result = Math.floor(Math.random() * 101 ) + 19;
$("#results").html('Random Results: ' + random_result);
    // console.log(random_result);

// building the for loop to 
for(var i = 0; i < 4; i++){
 // Getting the 4 random numbers   
    var random = Math.floor(Math.random () * 11 ) + 1;
    // console.log(random);


//Create a variable to assign a div 
    var crystal = $("<div>");

 //Giving crystal a class attr   
    crystal.attr({"class": 'crystal',"data-random": random});

   crystal.css({
    "background-image":"url('" + images[i] + "')",
     "background-size":"cover"
   }); 
 
 //append crystal to the bottom of page 
 $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: ", + previous);
}



resetAndStart();


//Event Delegation
$(document).on('click', ".crystal", function(){
    //Converting the string to number using parseInt
    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total Score: "  + previous);
    console.log(previous);

    if(previous > random_result){
        lost--;
        $("#lost").html("You lost: "  + lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){
        win++;

        $("#win").html("You win: "  + win);


        previous = 0;

        resetAndStart();

    }

    



});






























// });