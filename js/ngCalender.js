var ngCal = angular.module('ngCal', []);

/*
This directive allows us to pass a function in on an enter key to do what we want.
 */
ngCal.directive('ngEnter', function () {
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

ngCal.controller('myCtrl', function($scope) {
  $scope.listOfMonths = [{"val":0, "disp":"January"}, {"val":1, "disp":"February"}, {"val":2, "disp":"March"}, {"val":3, "disp":"April"}, {"val":4, "disp":"May"}, {"val":5, "disp":"June"}, {"val":6, "disp":"July"}, {"val":7, "disp":"August"}, {"val":8, "disp":"September"}, {"val":9, "disp":"October"}, {"val":10, "disp":"November"}, {"val":11, "disp":"December"}];
  $scope.listOfYears = [{"val":2015, "disp":"2015"}, {"val":2016, "disp":"2016"}, {"val":2017, "disp":"2017"}, {"val":2018, "disp":"2018"}, {"val":2019, "disp":"2019"}];
  $scope.listOfDays = [{"val":1, "disp":"Sunday"}, {"val":1, "disp":"Monday"}, {"val":1, "disp":"Tuesday"}, {"val":1, "disp":"Wednesday"}, {"val":1, "disp":"Thursday"}, {"val":1, "disp":"Friday"}, {"val":1, "disp":"Saturday"}];

  var time1 = new Date('9/6/2015 2:15:34');
  var time2 = new Date('9/6/2015 4:12:34');
  var time3 = new Date('9/10/2015 5:11:34');

  $scope.listOfToDo = [{"id":1, "flag":"", "title":"By milk"},{"id":2, "flag":"", "title":"Pay credit card bill"},{"id":3, "flag":"", "title":"Buy xyz"},{"id":4, "flag":"", "title":"Get a Quote"}];
  $scope.listOfMeetings = [{"id":1, "title": "Review", "venue": "302", "dayTime":time1.toLocaleTimeString().replace(/:\d+ /, ' '), "date":time1, "duration":1}];
  $scope.listOfReminders = [{"id":1,"title": "Assesment", "date":time1, "dayTime":time1.toLocaleTimeString().replace(/:\d+ /, ' ')}, {"id":2,"title": "Submission", "date":time2, "dayTime":time2.toLocaleTimeString().replace(/:\d+ /, ' ')}, {"id":3,"title": "Course","date":time3, "dayTime":time3.toLocaleTimeString().replace(/:\d+ /, ' ')}];
  var calDate = new Date(); // the current date value known to the calender, also the selected. For a random month its 1st day of that month.
  var calMonth = calDate.getMonth();
  var calYear = calDate.getFullYear();

  datesMap = getDays(calMonth, calYear);
  $scope.dates = datesMap.days;
  $scope.dateFlags = datesMap.flags;
  $scope.dateDisp = calDate;
  $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp; // Find equivalent day name from the index

  $scope.dropYear ={"val":calYear, "disp":""}; // year selected in the drop down menu
  $scope.dropMonth = {"val":calMonth, "disp":""}; // Month selected in the drop down menu

  var initialNumOfToDo = $scope.listOfToDo.length;
  var initialNumOfReminder = $scope.listOfReminders.length;
  var initialNumOfMeetings = $scope.listOfMeetings.length;
  var idForNewToDo = initialNumOfToDo + 1;
  var idForNewReminder = initialNumOfReminder +1;
  var idForNewMeeting = initialNumOfMeetings +1;

  $scope.updateMonthEvents = function(){

    rCounts = [];
    rClasses = [];
    mCounts = [];
    mClasses = [];
    // console.log($scope.dates);
    // console.log($scope.dateFlags);
    angular.forEach($scope.dates, function(item, key){

      tDate = new Date();

      tType = $scope.dateFlags[key];

      if (tType=="Prev"){
        tDate.setMonth(calMonth-1)
      }else if (tType=="Cur"){
        tDate.setMonth(calMonth)
      }else{
        tDate.setMonth(calMonth+1)
      };

      tDate.setDate(item);
      tDate.setFullYear(calYear);
      // console.log(tDate);
      // console.log(key);
      // console.log(item);
      // console.log(tType);
      // console.log(calMonth);
      temp = $scope.getDaysEvents(tDate);
      if (temp.numReminder==0){
        rClass = "noEvent";
      }else{
        rClass = "haveEvent";
      }
      if (temp.numMeeting==0){
        mClass = "noEvent";
      }else{
        mClass = "haveEvent";
      }

      rCounts.push(temp.numReminder);
      rClasses.push(rClass);
      mCounts.push(temp.numMeeting);
      mClasses.push(mClass);

    });
    $scope.monthEvents = {"remindCounts": rCounts, "remindClass":rClasses, "meetCounts":mCounts , "meetClass":mClasses};
  };


  $scope.getDaysEvents = function(whichDate){
    var numReminder = 0;
    var reminders = [];

    var numMeeting = 0;
    var meetings = [];

    angular.forEach($scope.listOfReminders, function(item, key){
      // console.log("new item");
      // console.log(item.date);
      // console.log(whichDate);
      // console.log(item.title);
      if(item.date.getDate()==whichDate.getDate() && item.date.getMonth()==whichDate.getMonth() && item.date.getFullYear()==whichDate.getFullYear()){
        numReminder +=1;
        // console.log("True =============================");
        reminders.push(item);
      };
    });
    angular.forEach($scope.listOfMeetings, function(item, key){
      if(item.date.getDate()==whichDate.getDate() && item.date.getMonth()==whichDate.getMonth() && item.date.getFullYear()==whichDate.getFullYear()){
        numMeeting +=1;
        meetings.push(item);
      };
    });
    return{"numMeeting":numMeeting, "meetings":meetings, "numReminder":numReminder, "reminders":reminders};
  }
  $scope.updateDaysEvents = function(){
    $scope.daysEvents = $scope.getDaysEvents(calDate);
  }

  $scope.updateDaysEvents();
  $scope.updateMonthEvents();

  $scope.showDetails = function(val){
    if (datesMap.flags[val]=="Cur"){
      $scope.calDate = calDate.setFullYear(calYear, calMonth, $scope.dates[val]);
      $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
      $scope.dateDisp = calDate;
    }else if(datesMap.flags[val]=="Prev"){
      var selectedDate = $scope.dates[val];
      $scope.gotoPrev();
      $scope.calDate = calDate.setFullYear(calYear, calMonth, selectedDate);
      $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
      $scope.dateDisp = calDate;
    }else if(datesMap.flags[val]=="Next"){
      var selectedDate = $scope.dates[val];
      $scope.gotoNext();
      $scope.calDate = calDate.setFullYear(calYear, calMonth, selectedDate);
      $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
      $scope.dateDisp = calDate;
    };
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
    // console.log($scope.monthEvents);
  };

  $scope.addNewToDo = function(){
    $scope.listOfToDo.push({"id": idForNewToDo, "title": $scope.newToDo});
    idForNewToDo +=1;
    $scope.newToDo = "";
  };
  $scope.addMeeting = function(){
    str = $scope.meetingEditor;
    var parts = str.split(" in ");
    var str1 = parts[0];
    var str2 = parts[1];
    var parts2 = str1.split(" at ");
    var title = parts2[0];
    var timeStr = parts2[1];
    dayTimeInd = timeStr.search(/pm/i);
    dayTime = "pm";
    if (dayTimeInd==-1){
      dayTimeInd = timeStr.search(/am/i);
      dayTime = "am";
    }
    var time = timeStr.split("pm", 1);
    // var n = time[0].length;
    if(time[0].search(":")==-1){
      timeHr = parseInt(time[0]);
      timeMin = 0;
    }else{
      timeCom = time[0].split(":");
      timeHr = parseInt(timeCom[0]);
      timeMin = parseInt(timeCom[1]);
    }
    tObj = new Date();

    tObj.setFullYear(calYear);
    tObj.setMonth(calMonth);
    tObj.setDate(calDate.getDate());

    if (dayTime=="pm"){
      timeHr +=12;
    }
    tObj.setHours(timeHr);
    tObj.setMinutes(timeMin);
    var parts3 = str2.split("for");
    venue = parts3[0];
    str3 = parts3[1];
    var temp = str3.split("h");
    duration = parseFloat(temp[0]);
    meetingObj = {"id":idForNewMeeting, "title":title,"venue":venue, "dayTime":tObj.toLocaleTimeString().replace(/:\d+ /, ' '), "date":tObj,  "duration":duration};
    $scope.listOfMeetings.push(meetingObj);
    $scope.meetingEditor="";
    idForNewMeeting +=1;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
    // alert(venue+ duration+ title+tObj);
  };
  $scope.addReminder = function(){

    str = $scope.reminderEditor;
    var parts = str.split(" by ");
    // var n = str.search(/by/i);
    var timeStr = parts[1];
    var title = parts[0];
    dayTimeInd = timeStr.search(/pm/i);
    dayTime = "pm";
    if (dayTimeInd==-1){
      dayTimeInd = timeStr.search(/am/i);
      dayTime = "am";
    }
    var time = timeStr.split("pm", 1);
    // var n = time[0].length;
    if(time[0].search(":")==-1){
      timeHr = parseInt(time[0]);
      timeMin = 0;
    }else{
      timeCom = time[0].split(":");
      timeHr = parseInt(timeCom[0]);
      timeMin = parseInt(timeCom[1]);
    }
    tObj = new Date();
    tObj.setFullYear(calYear);
    tObj.setMonth(calMonth);
    tObj.setDate(calDate.getDate());

    if (dayTime=="pm"){
      timeHr +=12;
    }
    tObj.setHours(timeHr);
    tObj.setMinutes(timeMin);
    reminderObj = {"id":idForNewReminder, "title":title, "date":tObj, "dayTime":tObj.toLocaleTimeString().replace(/:\d+ /, ' ')};
    $scope.listOfReminders.push(reminderObj);
    $scope.reminderEditor = "";
    idForNewReminder += 1;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
    // console.log($scope.listOfReminders);
    // alert(title+ ","+ dayTime+ ","+ dayTimeInd + "end");
  };

  $scope.todoUpdate = function(id){
    angular.forEach($scope.listOfToDo, function(item, key){
      if (item.id==id){
        if (item.flag=="todoDone"){
            $scope.listOfToDo[key].flag="";
        }else{
            $scope.listOfToDo[key].flag="todoDone";
        }
      };
    });
  };

  $scope.editItem = function(val, itemType){
    // alert(val + " , "  + itemType +"edit clicked");

    if (itemType==1){
      angular.forEach($scope.listOfReminders, function(item, key){
        if (item.id==val){
          $scope.listOfReminders.splice(key, 1);
          $scope.reminderEditor = item.title+" by "+item.dayTime;
        };
      });
    }else if (itemType==2){

      angular.forEach($scope.listOfMeetings, function(item, key){
        if (item.id==val){

          $scope.listOfMeetings.splice(key, 1);
          // alert($scope.listOfMeetings+"hfb");
          $scope.meetingEditor = item.title+" at "+item.dayTime+" in "+item.venue+" for "+item.duration+" hrs" ;
        };
      });
    };
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
  };
  $scope.deleteItem = function(val, itemType){
    // alert(val+ " , " + itemType + " delete clicked" );
    if (itemType==1){
      angular.forEach($scope.listOfReminders, function(item, key){
        if (item.id==val){
          $scope.listOfReminders.splice(key, 1);
        };
      });
    }else if (itemType==2){

      angular.forEach($scope.listOfMeetings, function(item, key){
        if (item.id==val){
          $scope.listOfMeetings.splice(key, 1);
        };
      });
    }else{
      // alert(val==$scope.listOfToDo[0].id);
      angular.forEach($scope.listOfToDo, function(item, key){
        if (item.id==val){
          $scope.listOfToDo.splice(key, 1);
        };
      });
    };
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
    // alert(val + " , "  + itemType +"edit" + $scope.listOfReminders );
  };

  $scope.gotoToday = function(){
    var today = new Date(); // current day
    calMonth = today.getMonth();
    calYear = today.getFullYear();
    calDate = today;
    $scope.dateDisp = calDate;
    $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
    datesMap = getDays(calMonth, calYear);
    $scope.dates = datesMap.days;
    $scope.dateFlags = datesMap.flags;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
  };
  $scope.gotoNext = function(){
    calMonth +=1;
    calDate.setFullYear(calYear, calMonth, 1);
    datesMap = getDays(calMonth, calYear);
    $scope.dates = datesMap.days;
    $scope.dateFlags = datesMap.flags;
    $scope.dateDisp = calDate;
    $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
  };
  $scope.gotoPrev = function(){
    calMonth -=1;
    calDate.setFullYear(calYear, calMonth, 1);
    datesMap = getDays(calMonth, calYear);
    $scope.dates = datesMap.days;
    $scope.dateFlags = datesMap.flags;
    $scope.dateDisp = calDate;
    $scope.dayDisp = $scope.listOfDays[calDate.getDay()].disp;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
  };
  $scope.gotoPerticular = function(){
    calMonth = $scope.dropMonth.val;
    calYear = $scope.dropYear.val;
    calDate.setFullYear(calYear, calMonth, 1);
    $scope.dateDisp = calDate;
    datesMap = getDays(calMonth, calYear);
    $scope.dates = datesMap.days;
    $scope.dateFlags = datesMap.flags;
    $scope.updateDaysEvents();
    $scope.updateMonthEvents();
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
  var numDays = daysInMonth(month+1, year); // Number of days in the current month
  var numDaysPrev = daysInMonth(month, year); // Number of days in the current month
  var dTemp = new Date();
  dTemp.setFullYear(year, month, 1)
  var firstDay = dTemp.getDay();

  var dayFlags = [];
  var days = [];
  var dayFlag = "";
  var tFlag = 0;
  var start = numDaysPrev + 1 - firstDay;
  var temp = start;
  var toAdd = temp;
  for (var i= 0; i<42 ; i +=1) {
    if (tFlag==0){
      dayFlag = "Prev";
      toAdd = temp;
      temp +=1;
      if (temp>numDaysPrev){
        temp = 1;
        tFlag = 1;
      }
    }else if (tFlag ==1){
      dayFlag="Cur";
      toAdd = temp;
      temp +=1;
      if (temp > numDays){
        temp =1;
        tFlag = 2;
      }
    }else if (tFlag ==2){
      dayFlag = "Next";
      toAdd = temp;
      temp += 1;
    }
    days.push(toAdd);
    dayFlags.push(dayFlag);
  }
  return {days: days, flags : dayFlags};
};

(function($){

	$(document).ready(function(){
		$('#ngCalAccordion li.active').addClass('open').children('ul').show();
		$('#ngCalAccordion li.has-sub>a').on('click', function(){
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
