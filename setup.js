(function(){
	var controllerResolve = null;
	var waitForController = new Promise(function(resolve){
		controllerResolve = resolve;
		navigator.serviceWorker.addEventListener('controllerchange', controllerResolve);
	});
	navigator.serviceWorker&&navigator.serviceWorker.register('service.js')
		.then(function(){return navigator.serviceWorker.ready})
		.then(function(registration){
			registration.sync.register('sync').then(function(){
				controllerResolve(); // controllerchange event was not calling when super-reload(Ctrl+F5) at chrome 55.
			}).catch(console.error.bind(console));
			return navigator.serviceWorker.controller || waitForController
		})
		.then(function(){
			location.reload();
		})
		.catch(console.error.bind(console));
})();
