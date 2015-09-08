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

ngTest.controller('myCtrl', function($scope ) {


  var data = [
    {
      id:1,
      name:"Yuri Elloit",
      email:"sem@auctorvelitAliquam.com",
      company:"Sapien LLP",
      country:"New Zealand",
      check:"true",
      info:{
        title:"a model title 1",
        content:"loren ipsum text for model 1"
        }
    },
    {
      id:2,
      name:"Rhiannon Spencer",
      email:"n.vitae@Nuncm.om",
      company:"Tellus Sem LLP",
      country:"Germany",
      check:"true",
      info:{
        title:"a model title 2",
        content:"loren ipsum text for model 2"
        }
    },
    {
      id:3,
      name:"Gisela Fox",
      email:"netus@doldolor.net",
      company:"Vivamus Corporation",
      country:"UK",
      check:"true",
      info:{
        title:"a model title 3",
        content:"loren ipsum text for model 3"
        }
    },
    {
      id:4,
      name:"Keelie Mathews",
      email:"Sed@Mauam.co.uk",
      company:"Erat Incorporated",
      country:"India",
      check:"false",
      info:{
        title:"a model title 4",
        content:"loren ipsum text for model 4"
        }
    },
    {
      id:5,
      name:"Wendy Valdez",
      email:"someone@malesu.com",
      company:"Non Associates",
      country:"USA",
      check:"true",
      info:{
        title:"a model title 5",
        content:"loren ipsum text for model 5"
        }
    }
  ];
  $scope.tableData = data;
  $scope.testText = "hello";
  testText = "hello from the var";

  $scope.ngTestFuntion = function(){
    alert("from the test ng function");
  };


});


(function($){
	$(document).ready(function(){

    $('#tester').on('click', function() {
      // $(this).parent().parent().html("<p>text</p>");
      var idOfTheRow = $(this).parent().parent().children()[0].firstChild.data;

      var htmlOfTheRowEditor = '<td>'+idOfTheRow+'</td>\
      <td><input type="text" class="form-control" placeholder="Name" style="width:100%;"></td>\
      <td><input type="text" class="form-control" placeholder="e-mail" style="width:100%; "></td>\
      <td><input type="text" class="form-control" placeholder="Company" style="width:100%; "></td>\
      <td>\
        <select class="form-control" name="">\
          <option value="value1"> Value 1</option>\
          <option value="value2"> Value 2 </option>\
          <option value="value3"> Value 3 </option>\
        </select>\
      </td>\
      <td>\
          <input  type="checkbox">\
      </td>\
      <!-- <td><i  class="glyphicon glyphicon-pencil"></i> &nbsp; &nbsp;<i class="glyphicon glyphicon-trash"></i></td> -->\
      <td  align="center">\
        <div class="btn-group" >\
          <button type="button" ng-click=ngTestFuntion() class="btn btn-success" name="button"><i  class="glyphicon glyphicon-ok" ></i></button>\
          <button type="button" class="btn btn-warning" name="button"><i class="glyphicon glyphicon-remove"></i></button>\
        </div>\
      </td>\
      <td align="center">\
        <button type="button" id = "tester2" class="btn btn-info btn-xs" name="button"><i class="glyphicon glyphicon-info-sign"></i></button>\
      </td>\
      ';
      $(this).parent().parent().html(htmlOfTheRowEditor);
      // console.log(idOfTheRow+"something");
      // alert(htmlOfTheRowEditor);
      testText = "text from a jquery on click function";
    }); // end of the tester function

    $('#tester2').on('click', function(){
      alert("came in the tester 2 function");
      console.log(testText);
    });


	}); // for the on ready document function
})(jQuery);
