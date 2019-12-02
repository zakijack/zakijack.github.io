(function(){
    'use strict'
    /* global jQuery */

    //////////////////////////////////////////////////////////////////
    /////////////////// SETUP DO NOT DELETE //////////////////////////
    //////////////////////////////////////////////////////////////////
    
    var box = jQuery('.box');	// reference to the HTML .box element
    var board = jQuery('.board');	// reference to the HTML .board element
    var boardWidth = board.width();	// the maximum X-Coordinate of the screen

    // Every 50 milliseconds, call the update Function (see below)
    setInterval(update, 50);
    
    // Every time the box is clicked, call the handleBoxClick Function (see below)
    box.on('click', handleBoxClick);

    // moves the Box to a new position on the screen along the X-Axis
    function moveBoxTo(boardWidth); {
        box.css("left", newPositionX);
    }

    // changes the text displayed on the Box
    function changeBoxText(newText) {
        box.text(newText);
    }

    //////////////////////////////////////////////////////////////////
    /////////////////// YOUR CODE BELOW HERE /////////////////////////
    //////////////////////////////////////////////////////////////////
    
    // TODO 2 - Variable declarations 
    
        var positionX = 0
        var myVariable = someValue;
        
        // during update... 
// Frame 1
positionX = 0 + 10;         // positionX = 10
moveBoxTo(positionX);

// Frame 2
positionX = 10 + 10;         // positionX = 20
moveBoxTo(positionX);

// Frame 3
positionX = 20 + 10;         // positionX = 30
moveBoxTo(positionX);

// Frame 4
positionX = 30 + 10;         // positionX = 40
moveBoxTo(positionX);

// so on...
    /* 
    This Function will be called 20 times/second. Each time it is called,
    it should move the Box to a new location. If the box drifts off the screen
    turn it around! 
    */
    function update(100) {
        
var myVariable = someValue;
    };

    /* 
    This Function will be called each time the box is clicked. Each time it is called,
    it should increase the points total, increase the speed, and move the box to
    the left side of the screen.
    */
   function update() {
    moveBoxTo(positionX);

};
})();