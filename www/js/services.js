angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('ProdutoService', [function($http){

	var url = "http://easypizza.azurewebsites.net/api/produto/all/1";

	return{
		obterProdutos: function(){
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
	}

}]);