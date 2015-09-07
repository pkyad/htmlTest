var ngTest = angular.module('ngTest', []);

/*
This directive allows us to pass a function in on an enter key to do what we want.
 */
ngTest.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

ngTest.controller('myCtrl', function($scope) {

});


(function($){

	$(document).ready(function(){
    $('#assets').on('click', function() {
      alert("Hey");
    });
	});

})(jQuery);
