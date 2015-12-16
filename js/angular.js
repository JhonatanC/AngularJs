var app = angular.module("MyFirstApp",[])
// los parámetros $scope, $http son inyecciones de dependencias
app.controller("FirstController",function($scope,$http){
    $scope.posts = [];
    $scope.newPost = {};
	// url
	$http.get("http://jsonplaceholder.typicode.com/posts")
        // objeto promise (success), para manejar peticiones asincronycas, .success 200 ok
	.success(function(data){
		console.log(data);
		$scope.posts = data;
	})
	// .error -> Algo salió mal | err parámegro que recibe del servidor
	.error(function(err){
        console.log(err);
	});

    $scope.addPost = function(){
        $http.post("http://jsonplaceholder.typicode.com/posts",{
            title : $scope.newPost.title,
            body : $scope.newPost.body,
            userId : 1
        })
            .success(function(data,status,headers,config){
                console.log(data);
                //$scope.posts.push($scope.newPost);
                $scope.posts.push(data);
                $scope.newPost = {};
            }).error(function(error,status,headers,config){
                console.log(error);
            });
    }


});