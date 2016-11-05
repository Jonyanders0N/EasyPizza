angular.module('app.controllers', [])
  
.controller('homeCtrl', ['HomeService', '$scope',function (HomeService, $scope) {

		HomeService.obterHome().then(function(dados){
			$scope.listaDeHome = dados;
			console.log(dados[0]);
		})

}])
   
.controller('menuCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
   
.controller('bebidasCtrl', ['BebidaService', '$scope',function (BebidaService, $scope) {

		BebidaService.obterBebidas().then(function(dados){
			$scope.listaDeBebidas = dados;
		})

}])
   
.controller('diversosCtrl', ['DiversoService', '$scope',function (DiversoService, $scope) {

		DiversoService.obterDiversos().then(function(dados){
			$scope.listaDeDiversos = dados;
		})

}])
   
.controller('loginCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
   
.controller('saboresCtrl', ['ProdutoService','$scope',function ( ProdutoService, $scope) {

	ProdutoService.obterProdutos().then(function(dados){
		$scope.listaDeProdutos = dados;
	})
}])
   
.controller('carrinhoCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
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
   
.controller('finalizarPedidoCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
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
 