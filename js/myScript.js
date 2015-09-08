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

  var numOfCols = 8;
  var numOfRowPerView = 5;

  $scope.editorFlags = twoDArray(numOfCols, numOfRowPerView);
  var editorActive = 0;
  // console.log($scope.editorFlags[0][0].editor);

  var numOfEditableFields = 4;
  $scope.listOfItems = $scope.listOfYears = [{"val":1, "string":"India"}, {"val":2, "string":"UK"}, {"val":3, "string":"US"}, {"val":4, "string":"Germany"}, {"val":5, "disp":"France"}];

  $scope.editorField = [];
  var field =[]
  for (var i= 0; i<numOfRowPerView ; i +=1) {
    field.push({val: 0, string:""});
  }
  ;
  for (var i= 0; i<numOfEditableFields ; i +=1) {
    $scope.editorField.push(field);
  }
  console.log($scope.editorField);

  $scope.editorName = [];
  $scope.editorEmail = [];
  $scope.editorCompany = [];

  for (var i= 0; i<numOfRowPerView ; i +=1) {
    console.log($scope.editorField[i]);
    $scope.editorName.push("");
    $scope.editorEmail.push("");
    $scope.editorCompany.push("");
  }

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

  $scope.editRow = function(id){
    if (editorActive==0){

      for (var j= 0; j<numOfCols ; j +=1) {
        $scope.editorFlags[id][j].editor = "";
        $scope.editorFlags[id][j].value = "nonActive";
      };
      $scope.editorName[id] = $scope.tableData[id].name;
      $scope.editorEmail[id] =  $scope.tableData[id].email;
      $scope.editorCompany[id] =  $scope.tableData[id].company;
      editorActive = 1;
    } else{
      alert("Colse the active editor and try again.");
    }
  };

  $scope.calcelEditor = function(id){

    for (var j= 0; j<numOfCols ; j +=1) {
      $scope.editorFlags[id][j].editor = "nonActive";
      $scope.editorFlags[id][j].value = "";
    };
    editorActive = 0;
  };

  $scope.deleteRow = function(id){
    $scope.tableData.splice(id, 1);
    $scope.editorFlags.splice(id, 1);
    $scope.editorName.splice(id, 1);
    $scope.editorEmail.splice(id, 1);
    $scope.editorCompany.splice(id, 1);
  };
  $scope.addRow = function(){
    $scope.editorName.push("");
    $scope.editorEmail.push("");
    $scope.editorCompany.push("");
    var rowMat = [];
    for (var j= 0; j<numOfCols ; j +=1) {
      rowMat.push({value:"nonActive", editor:""});
    };
    $scope.editorFlags.push(rowMat);
    var dummy = {
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
      };
      $scope.tableData.push(dummy);
      editorActive = 1;

  };

  $scope.updateTable = function(id){
    // console.log("test");
    console.log($scope.editorName);
    console.log($scope.Name);
    $scope.tableData[id].name = $scope.editorName[id];
    $scope.tableData[id].email = $scope.editorEmail[id];
    $scope.tableData[id].company = $scope.editorCompany[id];
    $scope.calcelEditor(id);
  };

  $scope.ngTestFuntion = function(id){
    alert("from the test ng function");
    console.log(id);
  };

});

function twoDArray(col, row){
  var mat = [];
  var rowMat = [];
  for (var i= 0; i<row ; i +=1) {
    rowMat = [];
    for (var j= 0; j<col ; j +=1) {
      rowMat.push({value:"", editor:"nonActive"});
    };
    mat.push(rowMat);
  };
  return mat;
};



(function($){
	$(document).ready(function(){

    $('#tester').on('click', function() {

    });


	}); // for the on ready document function
})(jQuery);
