angular.module('app.controllers', [])
  
.controller('homeCtrl', ['HomeService', '$scope',function (HomeService, $scope) {

		HomeService.obterHome().then(function(dados){
			$scope.listaDeHome = dados;
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
   
.controller('saboresCtrl', ['ProdutoService','$scope', '$rootScope',function ( ProdutoService, $scope, $rootScope) {

	ProdutoService.obterProdutos().then(function(dados){
		$scope.listaDeProdutos = dados;
	})

}])
   
.controller('carrinhoCtrl', ['$scope', '$rootScope',function ($scope, $rootScope) {
	
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
 