var app = angular.module("MyFirstApp",[])

app.controller("FirstController",function($scope,$http){
	$scope.posts = [];
	// url 
	$http.get("http://jsonplaceholder.typicode.com/posts")
	// objeto promise, para menejar peticiones asincronycas
	// .success -> Todo Ok | data parámegro que recibe del servidor
	.success(function(data){
		console.log(data);
		$scope.posts = data;
	})
	// .error -> Algo salió mal | err parámegro que recibe del servidor
	.error(function(err){

	});
});