var ngTest = angular.module('ngTest', []);

ngTest.controller('myCtrl', function($scope ) {

  var editorActive = 0;
  $scope.editorCursor = -1;
  $scope.listOfItems = $scope.listOfYears = [{"val":1, "string":"India"}, {"val":2, "string":"UK"}, {"val":3, "string":"US"}, {"val":4, "string":"Germany"}, {"val":5, "string":"France"}];

  var data = [
    {
      id:1,
      name:"Yuri Elloit",
      email:"sem@auctorvelitAliquam.com",
      company:"Sapien LLP",
      country:{"val":3, "string":"US"},
      check:false,
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
      country:{"val":2, "string":"UK"},
      check:false,
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
      country:{"val":5, "string":"France"},
      check:true,
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
      country:{"val":1, "string":"India"},
      check:true,
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
      country:{"val":3, "string":"US"},
      check:false,
      info:{
        title:"a model title 5",
        content:"loren ipsum text for model 5"
        }
    }
  ];

  $scope.tableData = data;
  $scope.editRow = function(id){

    rowBackup = angular.copy($scope.tableData[id]);
    if (editorActive==0){
      $scope.editorCursor =id;
      editorActive = 1;
    } else{
      alert("Colse the active editor and try again.");
    }
    console.log(rowBackup);
  };

  $scope.calcelEditor = function(id){
    $scope.tableData[id] = rowBackup;
    $scope.editorCursor =-1;
    editorActive = 0;
  };
  $scope.deleteRow = function(id){
    $scope.tableData.splice(id, 1);
  };
  $scope.updateRow = function(id){
    $scope.editorCursor =-1;
    editorActive = 0;
  };
  $scope.addRow = function(){
    var rowMat = [];
    var dummy = {
      id:0,
      name:"",
      email:"",
      company:"",
      country:{"val":1, "string":"India"},
      check:true,
      info:{
        title:"a model title 5",
        content:"loren ipsum text for model 5"
        }
      };
      $scope.tableData.push(dummy);
      editorActive = 1;
      $scope.editorCursor = $scope.tableData.length-1;
  };
});
