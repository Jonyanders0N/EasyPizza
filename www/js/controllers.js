angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('bebidasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('diversosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('saboresCtrl', ['$scope', '$stateParams','ProdutoService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ProdutoService) {

	ProdutoService.obterProdutos().then(function(dados){
		$scope.listaDeProdutos = dados;
	})

}])
   
.controller('carrinhoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.qtd = 0;
	$scope.pizzas = [
		{nome: "Mussarela", descricao: "Pizza com 3 queijos", valor: "19.99"},
		{nome: "Calabresa", descricao: "Pizza com calabresa e queijo", valor: "24.99"},
		{nome: "Portuguesa", descricao: "Pizza recheada com legumes", valor: "25.99"}
	]
	$scope.total = 0;
	var valores = [];
	$scope.calculaTotal = function(){
		for(item in $scope.pizzas)valores.push(parseFloat(item.valor));
		for(item in valores)$scope.total = $scope.total + item;	
		return $scope.total;
	}
}])
   
.controller('finalizarPedidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.mostrarPaypal = false;
	$scope.mostrarCc = false;
	$scope.botaoPaypal = function(){
		$scope.mostrarPaypal = !$scope.mostrarPaypal;
		$scope.mostrarCc = false;
	}
	$scope.botaoCc = function(){
		$scope.mostrarCc = !$scope.mostrarCc;
		$scope.mostrarPaypal = false;
	}
}])
 