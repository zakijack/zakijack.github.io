(function(){
   
    //////////////////////////////////////////////////////////////////
    /////////////////// SETUP DO NOT DELETE //////////////////////////
    //////////////////////////////////////////////////////////////////
    
    var box = jQuery('.box');
    var board = jQuery('.board');	
    var boardWidth = board.width();	
    
    setInterval(update, 50);
    
    
    box.on('click', handleBoxClick);
    
    


    
    function moveBoxTo(newPositionX) {
        box.css("left", newPositionX);
    }

    
    function changeBoxText(newText) {
        box.text(newText);
    }

    //////////////////////////////////////////////////////////////////
    /////////////////// YOUR CODE BELOW HERE /////////////////////////
    //////////////////////////////////////////////////////////////////
    
   
    
        var positionX = 0;
        var points = 0;
        var speed = 10;
        // during update... 

    
   function update() {
    positionX = positionX + speed;
    moveBoxTo(positionX);
if(positionX > boardWidth){
    speed = -speed;
}
else if(positionX < 0){
    speed = speed * -1;
}
};
function handleBoxClick() {
    positionX = 0;
    points = points + 1;
    changeBoxText(points);
    speed = speed + 3;

   

  
};
})();