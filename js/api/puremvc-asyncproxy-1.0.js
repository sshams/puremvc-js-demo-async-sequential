(function (scope){
	
	if (null == scope)
	    scope = window;
	
	// if the global puremvc namespace already exists, turn back now
	if (scope.puremvc && scope.puremvc.asyncproxy)
	{
		return;
	}
    
    function AsyncProxy(name, data) {
        puremvc.Proxy.call(this, name, data);
    }
    
    AsyncProxy.prototype = new puremvc.Proxy;
    AsyncProxy.prototype.constructor = AsyncProxy;
    
    AsyncProxy.prototype.asyncAction = function(resultFunction, faultFunction) {
        if(this.asyncInProgress) {
            throw new Error("AsyncProxy: Cannot have more than one async activity running per instance");
        }
        
        this.clientResultFunction = resultFunction;
        this.clientFaultFunction = faultFunction;
        this.asyncInProgress = true;
    }
    
    AsyncProxy.prototype.onResult = function(data) {
        this.asyncInProgress = false;
        this.clientResultFunction(data);
    }
    
    AsyncProxy.prototype.onFault = function(info) {
        this.asyncInProgress = false;
        this.clientFaultFunction(info);
    }
    
    AsyncProxy.prototype.clientResultFunction = null;
    AsyncProxy.prototype.clientFaultFunction = null;
    AsyncProxy.prototype.asyncInProgress = false;
    
    /* XHRProxy */
    
    function XHRProxy(name, data) {
        AsyncProxy.call(this, name, data);
    }
    
    XHRProxy.prototype = new AsyncProxy;
    XHRProxy.prototype.constructor = XHRProxy;
    
    XHRProxy.prototype.request = function(options) {
        var xhr = this.makeXMLHttp();
        
        var self = this;
        xhr.onreadystatechange = (function(xhr){
            return function() {
                if (xhr.readyState === 4) {  
                    xhr.status === 200 ? self.onResult(xhr) : self.onFault(xhr.statusText);  
                }
            }
        })(xhr);
        
        if(!options) options = {};
        xhr.open(options.method ? options.method : XHRProxy.GET, 
                 options.url ? options.url : window.location, 
                 options.async ? true : false, 
                 options.user ? options.user : null, 
                 options.password ? options.password : null);

        xhr.setRequestHeader("Accept", options["Accept"] ? options['Accept'] : XHRProxy.JSON);
        xhr.setRequestHeader("Content-type", options["Content-type"] ? options["Content-type"] : XHRProxy.URLENCODED);

        if(!options.cache) 
            options.data = options.data ? options.data + "&random=" + Math.random() : "?random=" + Math.random();
        
        xhr.send(options.data);
    }
    
    XHRProxy.prototype.makeXMLHttp = function() {
        var XMLHttpFactories = [
            function () {return new XMLHttpRequest()},
            function () {return new ActiveXObject("Msxml2.XMLHTTP")},
            function () {return new ActiveXObject("Msxml3.XMLHTTP")},
            function () {return new ActiveXObject("Microsoft.XMLHTTP")}
        ];
        
        var xmlhttp = false;
        for (var i=0;i<XMLHttpFactories.length;i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
		  } catch (e) {
			continue;
          }
		  break;
        }
        return xmlhttp;
    }
    
    XHRProxy.GET = "GET";
    XHRProxy.POST = "POST";
    XHRProxy.PUT = "PUT";
    XHRProxy.DELETE = "DELETE";
    
    XHRProxy.JSON = "application/json";
    XHRProxy.XML = "application/xml";
    
    XHRProxy.URLENCODED = "application/x-www-form-urlencoded";
    XHRProxy.MULTIPART = "multipart/form-data";
    
    XHRProxy.prototype.accept = XHRProxy.JSON;
    XHRProxy.prototype.contentType = XHRProxy.URLENCODED
    
    // define the puremvc global namespace and export the actors
 	scope.puremvc.asyncproxy = {};
    scope.puremvc.asyncproxy.AsyncProxy = AsyncProxy;
    scope.puremvc.asyncproxy.XHRProxy = XHRProxy;
 	
})(this); // the 'this' parameter will resolve to global scope in all environments