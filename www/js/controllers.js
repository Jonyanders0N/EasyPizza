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

.controller('carrinhoCtrl',function(LoginService, $scope, $ionicPopup, $timeout, $rootScope) {

  	$scope.finalizarPedido = function() {

        $scope.data = {}
        var myPopup = $ionicPopup.show({
          template: ' <input type="text" ng-model="data.user" placeholder="Digite o Login"> <br> <input type="password" ng-model="data.password" placeholder="Digite a Senha"> ',
          title: 'Faça o Login!',
          subTitle: 'É preciso estar logado!',

          scope: $scope,
          buttons: [
            { text: 'Cancelar' },
            {
              text: '<b>Logar</b>',
              type: 'button-positive',
              onTap: function(e) {
                if (!$scope.data.user) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                  $scope.usuario = {
                  	"Email": data.user,
                  	"Senha": data.password
                  }             
                } else {
                  return $scope.data;
                }
              }
            },
          ]
        });
        myPopup.then(function() {
        LoginService.obterDados($scope.usuario).success(function(){
        	$rootScope.login === true;
        	console.log("teste");
    	})
          if($rootScope.login === true)
          { 
          	console.log("Login Efetuado");
          }
          else
          {
            console.log('Login ou Senha incorreto');
          }

        });

      };
});