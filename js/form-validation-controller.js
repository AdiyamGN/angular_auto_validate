(function() {

	'use strict';

	angular
		.module('angularAutoValidate')


		/* The run function hocks in before the controller is instantiated and adds the functionality to customize 
		our own error mesage */

		.run(function(defaultErrorMessageResolver) {
			defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
				errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
				errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
				errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
			});
		})

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