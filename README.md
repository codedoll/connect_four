## **Connect4** ##
--------
Connect4 is a classic game, with many variations. This online version is a take on the tradition Connect4, with six rows and seven columns.

Wireframe for Connect4 project
------------------------------

![Wireframe for Connect4 project](https://github.com/codedoll/connect_four/blob/master/Connect4.jpg)


User Stories
------------
 - The user must be able to click on the bottom tiles to start the game
 - The user must be able to choose any unoccupied tile
 - The user must be notified if there are 4 connected tiles either horizontally, vertically or diagonally
 
 
Technologies used
--------------------------------
 - Javascript was used to primarily to make the tiles change states. 
 - CSS was used to animate the tiles and added shadows. The animation used was rotation. The rotation is very modest and almost not noticeable.
 - Jquery was used for DOM manipulation.
 
 
Approach taken
--------------------------------
The main concept was DRY. I tried to make the chunks of code reusable as possible.

Installation instructions
--------------------------------
There is no installation required. The game is browser based, and starts upon load.
The game is hosted on Github Pages.


Unsolved issues
--------------------------------
The vertical evaluation was stuck in the latest index, whereas the evaluation needed to start at index 0. I could not understand why the if else statement below (horizontal evaluation) works perfectly.
The diagonal evaluation was in the works until the bug on the vertical evaluation was discovered, therefore was abandoned before deployment.

