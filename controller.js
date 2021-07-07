var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'login.html'
    })
    .when('/dashboard',{
        templateUrl:'dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginController', function($scope,$location){
    $scope.submit = function(){
        var uname= $scope.username;
        var password= $scope.password

        if($scope.username != 'admin' && $scope.password != '1234'){
            $location.path('/dashboard')
        }
    }
})