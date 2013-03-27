(function($) {
	var jsonRPC = function(settings){
		settings = settings || {};
		self = this;
		
		self.isBatch = settings.isBatch || false;
		self.url = settings.url || '';
		
		return self;
	} 
	
	$.jsonRPC = jsonRPC;
})(jQuery)