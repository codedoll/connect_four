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


Resources
---------
CSS
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


Resources
--------------------------------
**CSS**

 - Fade-in tutorial -http://codepen.io/bluehaus/pen/EfGyi
 - Animation loop - http://www.alessioatzeni.com/blog/css3-loading-animation-loop
 - **Javascript**
 - [Remove class jquery](http://stackoverflow.com/questions/14532327/odd-issue-with-jquery-removeclass-not-doing-anything) 
 - [Undefined values in jquery](http://stackoverflow.com/questions/19807953/why-are-some-values-in-my-array-undefined)
 - [Get all elements in jquery](http://stackoverflow.com/questions/9815677/get-all-div-or-any-element-in-a-page-with-jquery)
 - [Using wildcard](http://stackoverflow.com/questions/13363202/using-a-wildcard-at-end-of-string)
 - [Get all IDs in jquery](http://stackoverflow.com/questions/827294/how-to-get-all-of-the-ids-with-jquery)
 - [How to use !hasClass](http://stackoverflow.com/questions/4521660/how-do-i-use-hasclass-to-detect-if-a-class-is-not-the-class-i-want)
