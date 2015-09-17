var ngTest = angular.module('ngTest', []);

ngTest.controller('myCtrl', function($scope ) {

  var editorActive = 0;
  $scope.editorCursor = -1;
  $scope.listOfItems = [{"val":1, "string":"India"}, {"val":2, "string":"UK"}, {"val":3, "string":"US"}, {"val":4, "string":"Germany"}, {"val":5, "string":"France"}];

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
    // console.log(rowBackup);
  };

  $scope.calcelEditor = function(id){
    if ($scope.tableData[id].name == "" && $scope.tableData[id].email == "") {
      $scope.deleteRow(id);
      $scope.editorCursor =-1;
    } else {
      $scope.tableData[id] = rowBackup;
      $scope.editorCursor =-1;
    }
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
    if (editorActive != 1) {
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
      $scope.tableData.unshift(dummy);
      rowBackup = dummy;
      editorActive = 1;
      $scope.editorCursor = 0;
    };
  };

  $scope.showModal = false;

  $scope.toggleModal = function(id){
    $scope.modalData = $scope.tableData[id];
    console.log($scope.modalData);
    $scope.showModal = !$scope.showModal;
  };
});

// An awesome and simple modal directive  :) //
ngTest.directive('modal', function () {
  return {
    template: '<div class="modal fade">' +
        '<div class="modal-dialog">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
              '<h4 class="modal-title">{{ title }}</h4>' +
            '</div>' +
            '<div class="modal-body" ng-transclude></div>' +
            '<div class="modal-footer">'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
            '</div>'+
          '</div>' +
        '</div>' +
      '</div>',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.visible, function(value){
        if(value == true)
          $(element).modal('show');
        else
          $(element).modal('hide');
      });

      $(element).on('shown.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});
