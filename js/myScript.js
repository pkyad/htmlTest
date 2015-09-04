var ngCal = angular.module('ngCal', []);

ngCal.controller('myCtrl', function($scope) {
  $scope.list = ['a', 'b'];
  // $scope.testVar = "Its ok";

  var calDate = new Date();
  var calMonth = calDate.getMonth()+1;
  var calYear = calDate.getFullYear();
  $scope.dates = getDays(calMonth, calYear);
  $scope.dateDisp = calDate;

  $scope.dropYear ={"val":calYear, "disp":""}; // year selected in the drop down menu
  $scope.dropMonth = {"val":calMonth, "disp":""}; // Month selected in the drop down menu

  $scope.listOfMonths = [{"val":1, "disp":"January"}, {"val":2, "disp":"February"}, {"val":3, "disp":"March"}, {"val":4, "disp":"April"}, {"val":5, "disp":"May"}, {"val":6, "disp":"June"}, {"val":7, "disp":"July"}, {"val":8, "disp":"August"}, {"val":9, "disp":"September"}, {"val":10, "disp":"October"}, {"val":11, "disp":"November"}, {"val":12, "disp":"December"}];
  $scope.listOfYears = [{"val":2015, "disp":"2015"}, {"val":2016, "disp":"2016"}, {"val":2017, "disp":"2017"}, {"val":2018, "disp":"2018"}, {"val":2019, "disp":"2019"}];
  $scope.listOfDays = [{"val":1, "disp":"Sunday"}, {"val":1, "disp":"Monday"}, {"val":1, "disp":"Tuesday"}, {"val":1, "disp":"Wednesday"}, {"val":1, "disp":"Thursday"}, {"val":1, "disp":"Friday"}, {"val":1, "disp":"Saturday"}];
  $scope.selectedItemChanged = function(){
    $scope.calculatedValue = 'You selected number ' + $scope.selectedItem;
    alert("changed");
  }
  $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp; // Find equivalent day name from the index
  // $scope.temp =numDays;
  // $scope.day = firstDay;
  // $scope.test = numDaysPrev;
  // $scope.temp = d;
  $scope.showDetails = function(val){
    $scope.calDate = calDate.setFullYear(calYear, calMonth-1, val-1);
    $scope.dateDisp = calDate;
    $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
  };

  $scope.editItem = function(){
    alert("edit clicked");
  };
  $scope.deleteItem = function(){
    alert("delete clicked");
  };

  $scope.gotoToday = function(){
    var today = new Date(); // current day
    calMonth = today.getMonth();
    calYear = today.getFullYear();
    calDate.setFullYear(calYear, calMonth, today.getDay()-1);
    $scope.dateDisp = calDate;
    $scope.dates = getDays(calMonth, calYear);
  };
  $scope.gotoNext = function(){
    calMonth +=1;
    calDate.setFullYear(calYear, calMonth-1, 1);
    $scope.dates = getDays(calMonth, calYear);
  };
  $scope.gotoPrev = function(){
    calMonth -=1;
    calDate.setFullYear(calYear, calMonth-1, 1);
    $scope.dates = getDays(calMonth, calYear);
  };
  $scope.gotoPerticular = function(){
    calMonth = $scope.dropMonth.val;
    calYear = $scope.dropYear.val;
    calDate.setFullYear(calYear, calMonth-1, 1);
    $scope.dateDisp = calDate;
    $scope.dates = getDays(calMonth, calYear);
  };
  $scope.range = function(min, max, step){
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  };
});

function daysInMonth(month,year) {
  return new Date(year, month, 0).getDate();
}

function getDays(month , year){
 // This function gives the dates of the month and the year in the array.
  var numDays = daysInMonth(month, year); // Number of days in the current month
  var numDaysPrev = daysInMonth(month-1, year); // Number of days in the current month
  var dTemp = new Date();
  dTemp.setFullYear(year, month-1, 1) // when using the current month this is giving the nexy month so subtracting 1
  var firstDay = dTemp.getDay(); // may be because the months and days starts from 0 instead of 1.

  var days = [];
  var tFlag = 0;
  var start = numDaysPrev + 1 - firstDay;
  var temp = start;
  var toAdd = temp;
  for (var i= 0; i<42 ; i +=1) {
    if (tFlag==0){
      toAdd = temp;
      temp +=1;
      if (temp>numDaysPrev){
        temp = 1;
        tFlag = 1;
      }
    }else if (tFlag ==1){
      toAdd = temp;
      temp +=1;
      if (temp > numDays){
        temp =1;
        tFlag = 2;
      }
    }else if (tFlag ==2){
      toAdd = temp;
      temp += 1;
    }
    days.push(toAdd);
  }
  return days;
};


(function($){
	$(document).ready(function(){

		$('#cssmenuAccordion li.active').addClass('open').children('ul').show();
		$('#cssmenuAccordion li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp(200);
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown(200);
				element.siblings('li').children('ul').slideUp(200);
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp(200);
			}
		});

	});
})(jQuery);
