var ctrls= angular.module('ctrls',["dServices"]);
ctrls.controller('aboutUsCtrl',function($scope,aboutServices){
    $scope.emptList=aboutServices.aboutList;
});
ctrls.controller('newsCtrl',function($scope,newsListServices){
    $scope.newsList=newsListServices.newsList;
});
ctrls.controller('newsDetailCtrl',function($scope,newsListDetailsServices,$state,$stateParams){
    // $scope.newsDetailList=newsDetailsList[$stateParams.id];
    // alert($stateParams.newsTitle);
    var newDetails =newsListDetailsServices.newsDetailsList[$stateParams.id];
    newDetails.title=$stateParams.title;
    $scope.newsDetailList=newDetails;
})  

