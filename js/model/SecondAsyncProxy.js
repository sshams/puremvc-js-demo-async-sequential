puremvc.define(
{
    name: "model.SecondAsyncProxy",
    parent: puremvc.asyncproxy.AsyncProxy,
    
    constructor: function(name) {
        puremvc.asyncproxy.AsyncProxy.call(this, name, []);   
    }
},
{   
    asyncAction: function(resultFunction, faultFunction) {
        puremvc.asyncproxy.AsyncProxy.prototype.asyncAction.call(this, resultFunction, faultFunction);
        
        var self = this;
        setTimeout(function(){self.onResult("RESULT SECOND ASYNC PROXY")}, 5000);
    },
    
    onResult: function(data) {
        puremvc.asyncproxy.AsyncProxy.prototype.onResult.call(this, data);
    },
    
    onFault: function(info) {
        puremvc.asyncproxy.AsyncProxy.prototype.onFault.call(this, info);
    }
},
{
    NAME: "SecondAsyncProxy"
}
);