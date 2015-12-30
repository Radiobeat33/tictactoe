/**
 * Created by Radiobeat33 on 12/27/15.
 */
var app = angular.module('app',['ui.router']);
//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

app.controller('indexCtrl', function($scope, $timeout){

    ////////////////////////////////////
    ////// CURRENT BROWSER LOGIC ///////
    ////////////////////////////////////

    // Used to store current browser's image pathname
    $scope.browserImage = '/assets/hourglass.png';

    //Contains browser detecting functions and icons associated with them
    $scope.currentBrowserTable = {
        isOpera: {
            image: 'assets/opera.png',
            detection: function(){
                return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            }
        },
        isFirefox: {
            image: 'assets/firefox.png',
            detection: function(){
                return typeof InstallTrigger !== 'undefined';
            }
        },
        isSafari: {
            image: 'assets/safari.png',
            detection: function(){
                return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            }
        },
        isChrome: {
            image: 'assets/chrome.png',
            detection: function(){
                return !!window.chrome;
            }
        },
        isIE: {
            image: 'assets/internet_explorer.png',
            detection: function(){
                return false || !!document.documentMode;
            }
        }
    };

    //Determines which browser is currently being used when page loads, then populates $scope.browserImage based on browser detection results
    $scope.getCurrentBrowser = function(){
        for(value in $scope.currentBrowserTable){
            if($scope.currentBrowserTable[value]['detection']()){
                $scope.browserImage = $scope.currentBrowserTable[value]['image'];
            }
        }
    };
    $scope.getCurrentBrowser();

    ////////////////////////////////////
    ///////// TIC TAC TOE LOGIC ////////
    ////////////////////////////////////

    // I have set up the logic to reflect this board layout

    // 1 | 2 | 3 //
    //-----------//
    // 4 | 5 | 6 //
    //-----------//
    // 7 | 8 | 9 //

    var sqr1, sqr2, sqr3, sqr4, sqr5, sqr6, sqr7, sqr8, sqr9;
    var sqr1T = 0;
    var sqr2T = 0;
    var sqr3T = 0;
    var sqr4T = 0;
    var sqr5T = 0;
    var sqr6T = 0;
    var sqr7T = 0;
    var sqr8T = 0;
    var sqr9T = 0;
    var moveCount = 0;
    var turn = 0;
    var mode = 1;
    var gameOverLose = 0;
    var gameOverDraw = 0;
    var gameOverWin = 0;
    var player = "     ";
    var cpu = "     ";

    $scope.playerPic = '';
    $scope.cpuPic = '';

    $scope.sqr1 = "     ";
    $scope.sqr2 = "     ";
    $scope.sqr3 = "     ";
    $scope.sqr4 = "     ";
    $scope.sqr5 = "     ";
    $scope.sqr6 = "     ";
    $scope.sqr7 = "     ";
    $scope.sqr8 = "     ";
    $scope.sqr9 = "     ";

    $scope.midGame = false;

    $scope.startGame = function(choice){
        reset();
        if(choice === 'X'){
            player = 'X';
            cpu = 'O';
        } else {
            player = 'O';
            cpu = 'X';
        }
        $scope.midGame = true;
    };

    $scope.sqr1Click = function(){
        if ($scope.sqr1 == "     " && turn == 0 && mode == 1) {
            $scope.sqr1 = player;
            sqr1T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr1 == "     " && turn == 1 && mode == 2) {
            $scope.sqr1 = player;
            sqr1T = 1;
            turn = 0;
            vari();
            player1Check();
        } else if ($scope.sqr1 == "     " && turn == 0 && mode == 2) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 1;
            vari();
            player1Check();
        }
        drawCheck();
    };

    $scope.sqr2Click = function(){
        if ($scope.sqr2 == "     " && turn == 0 && mode == 1) {
            $scope.sqr2 = player;
            sqr2T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr2 == "     " && turn == 1 && mode == 2) {
            $scope.sqr2 = player;
            sqr2T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr2 == "     " && turn == 0 && mode == 2) {
            $scope.sqr2 = cpu;
            sqr2T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr3Click = function(){
        if ($scope.sqr3 == "     " && turn == 0 && mode == 1) {
            $scope.sqr3 = player;
            sqr3T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr3 == "     " && turn == 1 && mode == 2) {
            $scope.sqr3 = player;
            sqr3T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr3 == "     " && turn == 0 && mode == 2) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr4Click = function(){
        if ($scope.sqr4 == "     " && turn == 0 && mode == 1) {
            $scope.sqr4 = player;
            sqr4T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr4 == "     " && turn == 1 && mode == 2) {
            $scope.sqr4 = player;
            sqr4T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr4 == "     " && turn == 0 && mode == 2) {
            $scope.sqr4 = cpu;
            sqr4T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr5Click = function(){
        if ($scope.sqr5 == "     " && turn == 0 && mode == 1) {
            $scope.sqr5 = player;
            sqr5T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr5 == "     " && turn == 1 && mode == 2) {
            $scope.sqr5 = player;
            sqr5T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr5 == "     " && turn == 0 && mode == 2) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr6Click = function(){
        if ($scope.sqr6 == "     " && turn == 0 && mode == 1) {
            $scope.sqr6 = player;
            sqr6T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr6 == "     " && turn == 1 && mode == 2) {
            $scope.sqr6 = player;
            sqr6T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr6 == "     " && turn == 0 && mode == 2) {
            $scope.sqr6 = cpu;
            sqr6T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr7Click = function(){
        if ($scope.sqr7 == "     " && turn == 0 && mode == 1) {
            $scope.sqr7 = player;
            sqr7T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr7 == "     " && turn == 1 && mode == 2) {
            $scope.sqr7 = player;
            sqr7T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr7 == "     " && turn == 0 && mode == 2) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr8Click = function(){
        if ($scope.sqr8 == "     " && turn == 0 && mode == 1) {
            $scope.sqr8 = player;
            sqr8T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr8 == "     " && turn == 1 && mode == 2) {
            $scope.sqr8 = player;
            sqr8T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr8 == "     " && turn == 0 && mode == 2) {
            $scope.sqr8 = cpu;
            sqr8T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    $scope.sqr9Click = function(){
        if ($scope.sqr9 == "     " && turn == 0 && mode == 1) {
            $scope.sqr9 = player;
            sqr9T = 1;
            turn = 1;
            vari();
            check();
        } else if ($scope.sqr9 == "     " && turn == 1 && mode == 2) {
            $scope.sqr9 = player;
            sqr9T = 1;
            turn = 0;
            vari();
            player1Check()
        } else if ($scope.sqr9 == "     " && turn == 0 && mode == 2) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 1;
            vari();
            player1Check()
        }
        drawCheck()
    };

    function vari(){
        sqr1 = $scope.sqr1;
        sqr2 = $scope.sqr2;
        sqr3 = $scope.sqr3;
        sqr4 = $scope.sqr4;
        sqr5 = $scope.sqr5;
        sqr6 = $scope.sqr6;
        sqr7 = $scope.sqr7;
        sqr8 = $scope.sqr8;
        sqr9 = $scope.sqr9;
    }
    
    function check(){
        if(sqr1 == player && sqr2 == player && sqr3 == player){
            alert("You Win!");
            reset();
        } else if(sqr4 == player && sqr5 == player && sqr6 == player){
            alert("You Win!");
            reset();
        } else if(sqr7 == player && sqr8 == player && sqr9 == player){
            alert("You Win!");
            reset();
        } else if(sqr1 == player && sqr5 == player && sqr9 == player){
            alert("You Win!");
            reset();
        } else if(sqr1 == player && sqr4 == player && sqr7 == player){
            alert("You Win!");
            reset();
        } else if(sqr2 == player && sqr5 == player && sqr8 == player){
            alert("You Win!");
            reset();
        } else if(sqr3 == player && sqr6 == player && sqr9 == player){
            alert("You Win!");
            reset();
        } else if(sqr1 == player && sqr5 == player && sqr9 == player){
            alert("You Win!");
            reset();
        } else if(sqr3 == player && sqr5 == player && sqr7 == player){
            alert("You Win!");
            reset();
        } else {
            winCheck();
            check2();
            drawCheck();
        }
    }

    function check2() {
        vari();
        drawCheck();
        if (sqr1 == cpu && sqr2 == cpu && sqr3 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr4 == cpu && sqr5 == cpu && sqr6 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr7 == cpu && sqr8 == cpu && sqr9 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr1 == cpu && sqr4 == cpu && sqr7 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr2 == cpu && sqr5 == cpu && sqr8 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr3 == cpu && sqr6 == cpu && sqr9 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        } else if (sqr3 == cpu && sqr5 == cpu && sqr7 == cpu && gameOverLose == 0) {
            gameOverLose++;
            alert("You Lose!");
            reset();
        }
    }

    function player1Check() {
        if (sqr1 == player && sqr2 == player && sqr3 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr4 == player && sqr5 == player && sqr6 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr7 == player && sqr8 == player && sqr9 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr1 == player && sqr5 == player && sqr9 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr1 == player && sqr4 == player && sqr7 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr2 == player && sqr5 == player && sqr8 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr3 == player && sqr6 == player && sqr9 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr1 == player && sqr5 == player && sqr9 == player) {
            alert("Player 1 wins!");
            reset();
        } else if (sqr3 == player && sqr5 == player && sqr7 == player) {
            alert("Player 1 wins!");
            reset();
        } else {
            player2Check()
            drawCheck()
        }
    }

    function player2Check() {
        vari();
        drawCheck();
        if (sqr1 == cpu && sqr2 == cpu && sqr3 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr4 == cpu && sqr5 == cpu && sqr6 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr7 == cpu && sqr8 == cpu && sqr9 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr1 == cpu && sqr4 == cpu && sqr7 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr2 == cpu && sqr5 == cpu && sqr8 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr3 == cpu && sqr6 == cpu && sqr9 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9 == cpu) {
            alert("Player 2 wins!");
            reset();
        } else if (sqr3 == cpu && sqr5 == cpu && sqr7 == cpu) {
            alert("Player 2 wins!");
            reset();
        }
    }

    function drawCheck() {
        vari();
        moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T + gameOverDraw;
        if (moveCount == 9) {
            gameOverDraw++;
            alert("Draw");
            reset();
        }
    }

    function winCheck() {
        check2();
        if (sqr1 == cpu && sqr2 == cpu && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr2 == cpu && sqr3 == cpu && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr4 == cpu && sqr5 == cpu && sqr6T == 0 && turn == 1) {
            $scope.sqr6 = cpu;
            sqr6T = 1;
            turn = 0;
        } else if (sqr5 == cpu && sqr6 == cpu && sqr4T == 0 && turn == 1) {
            $scope.sqr4 = cpu;
            sqr4T = 1;
            turn = 0;
        } else if (sqr7 == cpu && sqr8 == cpu && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr8 == cpu && sqr9 == cpu && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr5 == cpu && sqr9 == cpu && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr3 == cpu && sqr5 == cpu && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr7 == cpu && sqr5 == cpu && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr3 == cpu && sqr2T == 0 && turn == 1) {
            $scope.sqr2 = cpu;
            sqr2T = 1;
            turn = 0;
        } else if (sqr4 == cpu && sqr6 == cpu && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr7 == cpu && sqr9 == cpu && sqr8T == 0 && turn == 1) {
            $scope.sqr8 = cpu;
            sqr8T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr7 == cpu && sqr4T == 0 && turn == 1) {
            $scope.sqr4 = cpu;
            sqr4T = 1;
            turn = 0;
        } else if (sqr2 == cpu && sqr8 == cpu && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == cpu && sqr9 == cpu && sqr6T == 0 && turn == 1) {
            $scope.sqr6 = cpu;
            sqr6T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr5 == cpu && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr4 == cpu && sqr7 == cpu && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr5 == cpu && sqr8 == cpu && sqr2T == 0 && turn == 1) {
            $scope.sqr2 = cpu;
            sqr2T = 1;
            turn = 0;
        } else if (sqr6 == cpu && sqr9 == cpu && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr4 == cpu && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr2 == cpu && sqr5 == cpu && sqr8T == 0 && turn == 1) {
            $scope.sqr8 = cpu;
            sqr8T = 1;
            turn = 0;
        } else if (sqr3 == cpu && sqr6 == cpu && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr1 == cpu && sqr9 == cpu && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == cpu && sqr7 == cpu && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else {
            computer();
        }
        check2();
    }

    function computer() {
        check2();
        if (sqr1 == player && sqr2 == player && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr2 == player && sqr3 == player && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr4 == player && sqr5 == player && sqr6T == 0 && turn == 1) {
            $scope.sqr6 = cpu;
            sqr6T = 1;
            turn = 0;
        } else if (sqr5 == player && sqr6 == player && sqr4T == 0 && turn == 1) {
            $scope.sqr4 = cpu;
            sqr4T = 1;
            turn = 0;
        } else if (sqr7 == player && sqr8 == player && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr8 == player && sqr9 == player && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr5 == player && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr5 == player && sqr9 == player && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr3 == player && sqr5 == player && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr7 == player && sqr5 == player && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr3 == player && sqr2T == 0 && turn == 1) {
            $scope.sqr2 = cpu;
            sqr2T = 1;
            turn = 0;
        } else if (sqr4 == player && sqr6 == player && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr7 == player && sqr9 == player && sqr8T == 0 && turn == 1) {
            $scope.sqr8 = cpu;
            sqr8T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr7 == player && sqr4T == 0 && turn == 1) {
            $scope.sqr4 = cpu;
            sqr4T = 1;
            turn = 0;
        } else if (sqr2 == player && sqr8 == player && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == player && sqr9 == player && sqr6T == 0 && turn == 1) {
            $scope.sqr6 = cpu;
            sqr6T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr5 == player && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr4 == player && sqr7 == player && sqr1T == 0 && turn == 1) {
            $scope.sqr1 = cpu;
            sqr1T = 1;
            turn = 0;
        } else if (sqr5 == player && sqr8 == player && sqr2T == 0 && turn == 1) {
            $scope.sqr2 = cpu;
            sqr2T = 1;
            turn = 0;
        } else if (sqr6 == player && sqr9 == player && sqr3T == 0 && turn == 1) {
            $scope.sqr3 = cpu;
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr4 == player && sqr7T == 0 && turn == 1) {
            $scope.sqr7 = cpu;
            sqr7T = 1;
            turn = 0;
        } else if (sqr2 == player && sqr5 == player && sqr8T == 0 && turn == 1) {
            $scope.sqr8 = cpu;
            sqr8T = 1;
            turn = 0;
        } else if (sqr3 == player && sqr6 == player && sqr9T == 0 && turn == 1) {
            $scope.sqr9 = cpu;
            sqr9T = 1;
            turn = 0;
        } else if (sqr1 == player && sqr9 == player && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == player && sqr7 == player && sqr5T == 0 && turn == 1) {
            $scope.sqr5 = cpu;
            sqr5T = 1;
            turn = 0;
        } else {
            AI();
        }
        check2()
    }

    function AI(){
        vari()
        if ($scope.sqr5 == "     " && turn == 1) {
            $scope.sqr5 = cpu;
            turn = 0;
            sqr5T = 1;
        } else if ($scope.sqr1 == "     " && turn == 1) {
            $scope.sqr1 = cpu;
            turn = 0;
            sqr1T = 1;
        } else if ($scope.sqr9 == "     " && turn == 1) {
            $scope.sqr9 = cpu;
            turn = 0;
            sqr9T = 1;
        } else if ($scope.sqr6 == "     " && turn == 1) {
            $scope.sqr6 = cpu;
            turn = 0;
            sqr6T = 1;
        } else if ($scope.sqr2 == "     " && turn == 1) {
            $scope.sqr2 = cpu;
            turn = 0;
            sqr2T = 1;
        } else if ($scope.sqr8 == "     " && turn == 1) {
            $scope.sqr8 = cpu;
            turn = 0;
            sqr8T = 1;
        } else if ($scope.sqr3 == "     " && turn == 1) {
            $scope.sqr3 = cpu;
            turn = 0;
            sqr3T = 1;
        } else if ($scope.sqr7 == "     " && turn == 1) {
            $scope.sqr7 = cpu;
            turn = 0;
            sqr7T = 1;
        } else if ($scope.sqr4 == "     " && turn == 1) {
            $scope.sqr4 = cpu;
            turn = 0;
            sqr4T = 1;
        }
        check2()
    }

    function reset() {
        $timeout(function(){
            $scope.sqr1 = "     ";
            $scope.sqr2 = "     ";
            $scope.sqr3 = "     ";
            $scope.sqr4 = "     ";
            $scope.sqr5 = "     ";
            $scope.sqr6 = "     ";
            $scope.sqr7 = "     ";
            $scope.sqr8 = "     ";
            $scope.sqr9 = "     ";
            $scope.sqr1pic = "";
            $scope.sqr2pic = "";
            $scope.sqr3pic = "";
            $scope.sqr4pic = "";
            $scope.sqr5pic = "";
            $scope.sqr6pic = "";
            $scope.sqr7pic = "";
            $scope.sqr8pic = "";
            $scope.sqr9pic = "";
            sqr1T = 0;
            sqr2T = 0;
            sqr3T = 0;
            sqr4T = 0;
            sqr5T = 0;
            sqr6T = 0;
            sqr7T = 0;
            sqr8T = 0;
            sqr9T = 0;
            gameOverLose = 0;
            gameOverDraw = 0;
            gameOverWin = 0;
            vari();
            turn = 0;
            moveCount = 0;
        }, 1000);
    }
});