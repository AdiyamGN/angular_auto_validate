(function() {

	'use strict';

	angular
		.module('angularAutoValidate')

		.controller('AutoValidateController', AutoValidateController);


		function AutoValidateController() {
			var vm = this;
			vm.formModel = {};

			vm.onSubmit = function() {
				console.log('Hey, I am submitted.');
				console.log(vm.formModel);
			}
		}

})();