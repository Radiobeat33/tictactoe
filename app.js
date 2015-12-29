/**
 * Created by Radiobeat33 on 12/27/15.
 */
var app = angular.module('app',['ui.router']);
//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});

app.controller('indexCtrl', function($scope){

    // Used to store current browser's image
    $scope.browserImage = '';

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
    for(value in $scope.currentBrowserTable){
        if($scope.currentBrowserTable[value]['detection']()){
            $scope.browserImage = $scope.currentBrowserTable[value]['image'];
            return;
        }
    }

});

app.directive('headerView', function() {


    var controller = function(){
        var vm = this;

        //Contains browser detecting functions and icons associated with them

    };

    return {
        restrict: 'EA',
        templateUrl: 'templates/header.html',
        controller: controller,
        controllerAs: 'vm',
        bindToController: true
    }
});

app.directive('bodyView', function() {

    var controller = function(){
        var vm = this;
        vm.alertTest = function(){
            console.log('body test complete');
        };
        vm.alertTest();
    };

    return {
        restrict: 'EA',
        templateUrl: 'templates/body.html',
        controller: controller,
        controllerAs: 'vm',
        bindToController: true
    }
});

app.directive('footerView', function() {

    var controller = function(){
        var vm = this;
        vm.alertTest = function(){
            console.log('footer test complete');
        };
        vm.alertTest();
    };

    return {
        restrict: 'EA',
        templateUrl: 'templates/footer.html',
        controller: controller,
        controllerAs: 'vm',
        bindToController: true
    }
});