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
   
   
.controller('finalizarPedidoCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
	//Código para mudar estado dos botões de opções de pagamento
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

.controller('carrinhoCtrl',['LoginService', '$scope', '$ionicPopup', '$timeout', '$rootScope',function(LoginService, $scope, $ionicPopup, $timeout, $rootScope) {  
      $scope.showPopup = function() {

        $scope.data = {}

        var myPopup = $ionicPopup.show({
          template: '<input placeholder="Email" type="text" ng-model="data.Email">   <br> <input placeholder="Senha" type="password" ng-model="data.confirmPassword" > ',
          title: 'Login',
          subTitle: 'Efetue login para finalizar o pedido',

          scope: $scope,
          buttons: [
            { text: 'Cancelar' },
            {
              text: '<b>Logar</b>',
              type: 'button-positive',
              onTap: function(e) {
              	console.log($scope.data.Email);
                if (!$scope.data.Email) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  return $scope.data;
                }
              }
            },
          ]
      });
        myPopup.then(function(res){
        	var login = {"Email": res.Email, "Senha": res.confirmPassword};
        	LoginService.obterDados(login)
        	.success(function(data){
        		$rootScope.login = true;
        		$rootScope.user = data;
        		console.log($rootScope.user);
        	})
        	.error(function(msg){
        		console.log("Não foi dessa vez");
        	})
        })

        };
}]);