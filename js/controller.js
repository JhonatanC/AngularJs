/*
 * Módulo
 * 1. Recibe el nombre del modelo
 * 2. En el array se importan otros módulos
 */
var app = angular.module("MyFirstApp",[])
/*
 * Controlador
 */
app.controller("FirstController",function($scope){
	$scope.nombre = null;
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "Jhonatan"
		},
		{
			comentario: "No es tan bueno",
			username: "Juksoto"
		}
	];

    $scope.agregarComentario = function(){
		// push agrega un nuevo elemento a un arreglo
		$scope.comentarios.push($scope.nuevoComentario);
		// reiniciar el nuevo comentario
		$scope.nuevoComentario = {};
	}
});
